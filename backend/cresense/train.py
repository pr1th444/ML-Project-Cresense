"""Train the CreSense fraud detection system.

    python -m cresense.train path/to/fraudTrain.csv [path/to/fraudTest.csv]

Runs the full architecture: preprocessing, feature engineering, the four
models, ensemble weight fitting, threshold optimisation, evaluation on a
held-out test split, and SHAP. Saves everything to backend/artifacts/.

Evaluation discipline, because the report depends on it:
  - the split is chronological, never shuffled
  - ensemble weights and the decision threshold are fitted on VALIDATION
  - the TEST split is scored exactly once, at the end
  - the headline metric is PR-AUC, not accuracy
"""

from __future__ import annotations

import argparse
import json
import time
from datetime import datetime, timezone

import joblib
import numpy as np
import pandas as pd
from catboost import CatBoostClassifier
from sklearn.metrics import (
    accuracy_score,
    average_precision_score,
    confusion_matrix,
    f1_score,
    precision_score,
    recall_score,
    roc_auc_score,
)
from xgboost import XGBClassifier

from . import config as cfg
from . import features as F
from .models import FraudSystem, Autoencoder, build_random_forest


def evaluate(name, y_true, probabilities, threshold):
    """Score one model at a given threshold."""
    predicted = (probabilities >= threshold).astype(int)
    tn, fp, fn, tp = confusion_matrix(y_true, predicted, labels=[0, 1]).ravel()

    return {
        "name": name,
        "accuracy": round(accuracy_score(y_true, predicted) * 100, 3),
        "precision": round(precision_score(y_true, predicted, zero_division=0) * 100, 3),
        "recall": round(recall_score(y_true, predicted, zero_division=0) * 100, 3),
        "f1": round(f1_score(y_true, predicted, zero_division=0) * 100, 3),
        "rocAuc": round(roc_auc_score(y_true, probabilities) * 100, 3),
        "prAuc": round(average_precision_score(y_true, probabilities) * 100, 3),
        "threshold": round(float(threshold), 4),
        "confusion": {
            "truePositive": int(tp), "falsePositive": int(fp),
            "falseNegative": int(fn), "trueNegative": int(tn),
        },
        "falsePositiveRate": round(fp / max(tn + fp, 1) * 100, 4),
    }


def best_threshold(y_true, probabilities) -> float:
    """F1-maximising cutoff, used so each baseline is judged fairly."""
    from sklearn.metrics import precision_recall_curve

    precision, recall, cuts = precision_recall_curve(y_true, probabilities)
    precision, recall = precision[:-1], recall[:-1]
    denom = precision + recall
    f1 = np.where(denom > 0, 2 * precision * recall / np.maximum(denom, 1e-12), 0)
    return float(cuts[int(np.argmax(f1))]) if len(cuts) else 0.5


def main():
    parser = argparse.ArgumentParser(description="Train the CreSense fraud system")
    parser.add_argument("csv", nargs="+", help="Sparkov CSV file(s)")
    parser.add_argument("--sample", type=int, default=0,
                        help="Use only the most recent N rows (for a fast trial run)")
    parser.add_argument("--no-export", action="store_true",
                        help="Skip writing results into the frontend")
    args = parser.parse_args()

    started = time.time()
    print("\nCreSense — training the fraud detection system")
    print("=" * 58)

    # ---------------------------------------------------- 1. preprocessing
    print("\n[1/7] Preprocessing and feature engineering")
    train, val, test, maps = F.build(args.csv)

    if args.sample:
        keep = args.sample
        train = train.tail(int(keep * cfg.TRAIN_FRACTION))
        val = val.tail(int(keep * cfg.VALIDATION_FRACTION))
        test = test.tail(int(keep * 0.15))
        print(f"      sampling enabled — {len(train):,} train rows")

    for label, part in (("train", train), ("validation", val), ("test", test)):
        rate = part["label"].mean() * 100
        print(f"      {label:11s} {len(part):>9,} rows   {int(part['label'].sum()):>6,} fraud  ({rate:.3f}%)")

    system = FraudSystem()
    system.encoding_maps = maps

    X_train = system.design_matrix(train, fit=True)
    X_val = system.design_matrix(val)
    X_test = system.design_matrix(test)
    y_train = train["label"].to_numpy()
    y_val = val["label"].to_numpy()
    y_test = test["label"].to_numpy()

    print(f"      {X_train.shape[1]} features after encoding")

    # Class imbalance: tell the boosters how much to weight the rare class
    # rather than resampling, which on 1.3M rows is slow and distorts the
    # calibration of the probabilities we need for risk scoring.
    pos = max(int(y_train.sum()), 1)
    scale_pos_weight = (len(y_train) - pos) / pos
    print(f"      class imbalance 1:{scale_pos_weight:.0f} -> scale_pos_weight")

    # ---------------------------------------------------- 2. autoencoder
    print("\n[2/7] Autoencoder (unsupervised, legitimate transactions only)")
    autoencoder = Autoencoder().fit(system.numeric_matrix(train), y_train)
    system.autoencoder = autoencoder
    ae_val = autoencoder.anomaly_score(system.numeric_matrix(val))
    ae_test = autoencoder.anomaly_score(system.numeric_matrix(test))
    print(f"      validation PR-AUC on anomaly score alone: "
          f"{average_precision_score(y_val, ae_val) * 100:.2f}%")

    # ---------------------------------------------------- 3. XGBoost
    print("\n[3/7] XGBoost")
    xgb = XGBClassifier(**cfg.XGB_PARAMS, scale_pos_weight=scale_pos_weight)
    xgb.fit(X_train, y_train, eval_set=[(X_val, y_val)], verbose=False)
    system.xgb = xgb
    xgb_val = xgb.predict_proba(X_val)[:, 1]
    xgb_test = xgb.predict_proba(X_test)[:, 1]

    # ---------------------------------------------------- 4. CatBoost
    print("[4/7] CatBoost")
    cat = CatBoostClassifier(**cfg.CATBOOST_PARAMS,
                             scale_pos_weight=scale_pos_weight)
    cat.fit(X_train, y_train, eval_set=(X_val, y_val))
    system.cat = cat
    cat_val = cat.predict_proba(X_val)[:, 1]
    cat_test = cat.predict_proba(X_test)[:, 1]

    # ---------------------------------------------------- 5. Random Forest
    print("[5/7] Random Forest (baseline for comparison)")
    rf = build_random_forest()
    rf.fit(X_train, y_train)
    system.rf = rf
    rf_val = rf.predict_proba(X_val)[:, 1]
    rf_test = rf.predict_proba(X_test)[:, 1]

    # ------------------------------------------- 6. fusion and threshold
    print("\n[6/7] Hybrid ensemble fusion and threshold optimisation")
    weights, val_pr = system.ensemble.fit_weights(xgb_val, cat_val, ae_val, y_val)
    print(f"      weights  XGBoost {weights['xgb']}  CatBoost {weights['cat']}  "
          f"Autoencoder {weights['ae']}")
    print(f"      validation PR-AUC {val_pr * 100:.2f}%")

    ens_val = system.ensemble.combine(xgb_val, cat_val, ae_val)
    threshold, val_f1 = system.ensemble.fit_threshold(ens_val, y_val)
    print(f"      threshold {threshold:.4f}  (validation F1 {val_f1 * 100:.2f}%)")

    # ---------------------------------------------------- 7. test scoring
    print("\n[7/7] Evaluating on the held-out test split")
    ens_test = system.ensemble.combine(xgb_test, cat_test, ae_test)

    results = [
        evaluate("Random Forest", y_test, rf_test, best_threshold(y_val, rf_val)),
        evaluate("XGBoost", y_test, xgb_test, best_threshold(y_val, xgb_val)),
        evaluate("CatBoost", y_test, cat_test, best_threshold(y_val, cat_val)),
        evaluate("Hybrid Ensemble", y_test, ens_test, threshold),
    ]
    results[0]["type"] = "Supervised ensemble"
    results[1]["type"] = "Gradient boosting"
    results[2]["type"] = "Gradient boosting"
    results[3]["type"] = "Autoencoder + XGBoost + CatBoost"
    for row, role in zip(results, ["Baseline", "Candidate", "Candidate",
                                   "Proposed architecture"]):
        row["role"] = role

    print()
    header = f"      {'Model':<18}{'Prec':>8}{'Recall':>8}{'F1':>8}{'PR-AUC':>9}{'ROC-AUC':>9}"
    print(header)
    print("      " + "-" * (len(header) - 6))
    for row in results:
        print(f"      {row['name']:<18}{row['precision']:>8.2f}{row['recall']:>8.2f}"
              f"{row['f1']:>8.2f}{row['prAuc']:>9.2f}{row['rocAuc']:>9.2f}")

    # The selected model is whichever actually scored best on PR-AUC.
    # Not a decision made in advance — a result read off the table.
    selected = max(results, key=lambda r: r["prAuc"])
    print(f"\n      Selected model: {selected['name']} (highest test PR-AUC)")

    system.metrics = {
        "models": results,
        "selected": selected["name"],
        "ensembleWeights": weights,
        "threshold": round(float(threshold), 4),
        "validationPrAuc": round(val_pr * 100, 3),
    }
    system.trained_at = datetime.now(timezone.utc).isoformat()
    system.dataset_meta = {
        "rows": int(len(train) + len(val) + len(test)),
        "trainRows": int(len(train)),
        "validationRows": int(len(val)),
        "testRows": int(len(test)),
        "fraudRows": int(train["label"].sum() + val["label"].sum() + y_test.sum()),
        "features": int(X_train.shape[1]),
        "firstDate": str(train["timestamp"].min().date()),
        "lastDate": str(test["timestamp"].max().date()),
    }

    # ---------------------------------------------------- save artifacts
    bundle = cfg.ARTIFACT_DIR / "fraud_system.joblib"
    joblib.dump(system, bundle, compress=3)
    (cfg.ARTIFACT_DIR / "metrics.json").write_text(
        json.dumps(system.metrics, indent=2))
    print(f"\n      saved {bundle.relative_to(cfg.PROJECT_DIR)}")

    # Keep the scored test split for SHAP and the export step.
    scored = test.copy()
    scored["probability"] = ens_test
    scored["xgb_probability"] = xgb_test
    scored["cat_probability"] = cat_test
    scored["anomaly_score"] = ae_test
    scored["risk_score"] = system.risk_score(ens_test)
    scored["predicted"] = (ens_test >= threshold).astype(int)
    scored.to_pickle(cfg.ARTIFACT_DIR / "scored_test.pkl")

    minutes = (time.time() - started) / 60
    print(f"      training completed in {minutes:.1f} minutes")

    # ---------------------------------------------------- SHAP + export
    if not args.no_export:
        from .explain import compute_and_save
        from .export import export_all

        print("\n[SHAP] Computing feature contributions")
        shap_payload = compute_and_save(system, scored)

        print("\n[Export] Writing results into the frontend")
        export_all(system, scored, shap_payload)

    print("\nDone.\n")


if __name__ == "__main__":
    main()
