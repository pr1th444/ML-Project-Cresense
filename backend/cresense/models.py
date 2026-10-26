"""The four models and the hybrid ensemble from the architecture diagram.

    Dataset -> Preprocessing -> { Autoencoder, XGBoost, CatBoost }
            -> Hybrid Ensemble -> SHAP -> Threshold Optimisation
            -> Fraud Score >= Threshold? -> Result

Random Forest is trained alongside as the baseline the research proposal
compares against; it is not part of the ensemble.
"""

from __future__ import annotations

import numpy as np
import pandas as pd
from sklearn.ensemble import RandomForestClassifier
from sklearn.neural_network import MLPRegressor
from sklearn.preprocessing import StandardScaler

from . import config as cfg
from .features import ALL_FEATURES, CATEGORICAL_FEATURES, NUMERIC_FEATURES


# ------------------------------------------------------------------ utils
def one_hot(df: pd.DataFrame, columns, reference=None):
    """Expand categoricals to dummy columns, aligned to a reference set.

    Alignment matters: if the test split contains a state the training
    split never saw, the column layout must still match what the model
    was fitted on, or predict() fails.
    """
    encoded = pd.get_dummies(df[list(columns)].astype(str), dummy_na=False)
    if reference is not None:
        encoded = encoded.reindex(columns=reference, fill_value=0)
    return encoded.astype(float)


# ------------------------------------------------------------ autoencoder
class Autoencoder:
    """Unsupervised anomaly detector — box 6.1 of the architecture.

    It is trained ONLY on legitimate transactions, to reconstruct its own
    input. Having never been shown fraud, it reconstructs fraudulent
    patterns badly, and that reconstruction error becomes an anomaly
    score. This is what lets the system react to fraud patterns that do
    not resemble anything in the labelled training data — the weakness of
    a purely supervised model.

    Implemented as a bottleneck MLP regressor (24 -> 8 -> 24) rather than
    a deep-learning framework, so the project has no TensorFlow or
    PyTorch dependency to install.
    """

    def __init__(self):
        self.scaler = StandardScaler()
        self.net = MLPRegressor(**cfg.AUTOENCODER_PARAMS)
        self.error_median = 0.0
        self.error_scale = 1.0

    def fit(self, X_numeric: np.ndarray, y: np.ndarray):
        legit = X_numeric[y == 0]
        if len(legit) > cfg.AUTOENCODER_TRAIN_CAP:
            rng = np.random.default_rng(cfg.RANDOM_SEED)
            legit = legit[rng.choice(len(legit), cfg.AUTOENCODER_TRAIN_CAP,
                                     replace=False)]

        scaled = self.scaler.fit_transform(legit)
        self.net.fit(scaled, scaled)

        # Calibrate so the score is comparable with a probability.
        errors = self._raw_error(X_numeric)
        self.error_median = float(np.median(errors))
        spread = float(np.percentile(errors, 99) - self.error_median)
        self.error_scale = spread if spread > 1e-9 else 1.0
        return self

    def _raw_error(self, X_numeric: np.ndarray) -> np.ndarray:
        scaled = self.scaler.transform(X_numeric)
        rebuilt = self.net.predict(scaled)
        return np.mean((scaled - rebuilt) ** 2, axis=1)

    def anomaly_score(self, X_numeric: np.ndarray) -> np.ndarray:
        """Reconstruction error squashed to 0-1 by a logistic curve."""
        z = (self._raw_error(X_numeric) - self.error_median) / self.error_scale
        return 1.0 / (1.0 + np.exp(-np.clip(z, -30, 30)))


# --------------------------------------------------------------- ensemble
class HybridEnsemble:
    """Box 6.3 — the fusion and decision engine.

    Combines the two supervised probabilities with the unsupervised
    anomaly score as a weighted average. The weights are chosen on the
    VALIDATION split by maximising average precision, never on test.

    Average precision (area under the precision-recall curve) is the
    right objective here. On data that is 99.5% legitimate, ROC-AUC
    looks impressive for almost any model, while PR-AUC stays sensitive
    to what actually matters: the quality of the positive predictions.
    """

    def __init__(self):
        self.weights = {"xgb": 0.45, "cat": 0.45, "ae": 0.10}
        self.threshold = 0.5

    def combine(self, xgb_p, cat_p, ae_p, weights=None) -> np.ndarray:
        w = weights or self.weights
        total = w["xgb"] + w["cat"] + w["ae"]
        return (w["xgb"] * xgb_p + w["cat"] * cat_p + w["ae"] * ae_p) / total

    def fit_weights(self, xgb_p, cat_p, ae_p, y_true):
        """Grid search over weight combinations on the validation split."""
        from sklearn.metrics import average_precision_score

        best_score, best = -1.0, self.weights
        grid = np.arange(0.0, 1.01, 0.05)
        for w_xgb in grid:
            for w_cat in np.arange(0.0, 1.01 - w_xgb + 1e-9, 0.05):
                w_ae = 1.0 - w_xgb - w_cat
                if w_ae < -1e-9:
                    continue
                candidate = {"xgb": w_xgb, "cat": w_cat, "ae": max(w_ae, 0.0)}
                blended = self.combine(xgb_p, cat_p, ae_p, candidate)
                score = average_precision_score(y_true, blended)
                if score > best_score:
                    best_score, best = score, candidate

        self.weights = {k: round(float(v), 3) for k, v in best.items()}
        return self.weights, float(best_score)

    def fit_threshold(self, probabilities, y_true):
        """Threshold optimisation — box 6.3's 'Maximise F1 / Reduce FPR'.

        The default 0.5 cutoff is close to meaningless on imbalanced
        data. Sweeping the threshold and picking the F1 maximum is what
        balances catching fraud against flooding analysts with false
        positives.
        """
        from sklearn.metrics import precision_recall_curve

        precision, recall, cuts = precision_recall_curve(y_true, probabilities)
        # precision_recall_curve returns one more point than thresholds.
        precision, recall = precision[:-1], recall[:-1]
        denom = precision + recall
        f1 = np.where(denom > 0, 2 * precision * recall / np.maximum(denom, 1e-12), 0.0)

        if len(cuts) == 0:
            return self.threshold, 0.0
        best = int(np.argmax(f1))
        self.threshold = float(cuts[best])
        return self.threshold, float(f1[best])


# ----------------------------------------------------------------- bundle
class FraudSystem:
    """Everything needed to score a transaction, saved and loaded as one."""

    def __init__(self):
        self.xgb = None
        self.cat = None
        self.rf = None
        self.autoencoder = None
        self.ensemble = HybridEnsemble()
        self.dummy_columns = None
        self.numeric_features = list(NUMERIC_FEATURES)
        self.all_features = list(ALL_FEATURES)
        self.encoding_maps = None
        self.metrics = {}
        self.trained_at = None
        self.dataset_meta = {}

    # -- feature prep shared by training and inference --
    def design_matrix(self, df: pd.DataFrame, fit: bool = False) -> pd.DataFrame:
        numeric = df[self.numeric_features].astype(float).fillna(0.0)
        if fit:
            encoded = one_hot(df, CATEGORICAL_FEATURES)
            self.dummy_columns = list(encoded.columns)
        else:
            encoded = one_hot(df, CATEGORICAL_FEATURES, self.dummy_columns)
        return pd.concat([numeric.reset_index(drop=True),
                          encoded.reset_index(drop=True)], axis=1)

    def numeric_matrix(self, df: pd.DataFrame) -> np.ndarray:
        return df[self.numeric_features].astype(float).fillna(0.0).to_numpy()

    def raw_scores(self, df: pd.DataFrame):
        """Per-model scores for a prepared feature frame."""
        X = self.design_matrix(df)
        xgb_p = self.xgb.predict_proba(X)[:, 1]
        cat_p = self.cat.predict_proba(X)[:, 1]
        ae_p = self.autoencoder.anomaly_score(self.numeric_matrix(df))
        return xgb_p, cat_p, ae_p

    def predict_proba(self, df: pd.DataFrame) -> np.ndarray:
        xgb_p, cat_p, ae_p = self.raw_scores(df)
        return self.ensemble.combine(xgb_p, cat_p, ae_p)

    def risk_score(self, probabilities) -> np.ndarray:
        """Map probability to the proposal's 0-100 risk scale.

        The threshold is anchored at 70 — the boundary between the
        Medium and High bands — so "High Risk" and "predicted fraud"
        mean the same thing instead of disagreeing on screen.
        """
        p = np.asarray(probabilities, dtype=float)
        t = max(min(self.ensemble.threshold, 0.999), 1e-6)
        below = 70.0 * (p / t)
        above = 70.0 + 30.0 * ((p - t) / max(1.0 - t, 1e-6))
        return np.clip(np.where(p < t, below, above), 0, 100).round().astype(int)


def build_random_forest():
    return RandomForestClassifier(**cfg.RANDOM_FOREST_PARAMS)
