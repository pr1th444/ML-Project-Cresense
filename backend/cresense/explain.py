"""SHAP explainability — box 7 of the architecture diagram.

SHAP answers the question a fraud analyst actually has: not "is this
fraud?" but "which features made it look like fraud, and by how much?"

How it works, in one paragraph for the project report: SHAP assigns each
feature a value representing its contribution to this particular
prediction, derived from cooperative game theory. The contributions sum
to the difference between this prediction and the model's average
prediction over the background data. Positive values push toward fraud,
negative toward legitimate. TreeExplainer computes them exactly for
tree ensembles, in polynomial rather than exponential time.

We explain the XGBoost component of the ensemble. It carries most of the
ensemble weight and is a pure tree model, so the values are exact rather
than approximated. The contributions are in log-odds, which is why they
do not sum to the probability — the standard SHAP convention.
"""

from __future__ import annotations

import json

import numpy as np
import pandas as pd
import shap

from . import config as cfg
from .features import FEATURE_LABELS

# How many test transactions get a stored per-row explanation.
EXPLAIN_ROWS = 400
BACKGROUND_ROWS = 200


def pretty(feature: str):
    """Model feature name -> (display label, feature family)."""
    if feature in FEATURE_LABELS:
        return FEATURE_LABELS[feature]
    # One-hot columns arrive as "category_grocery_pos" / "state_TX".
    for prefix, (label, family) in (
        ("category_", ("Merchant Category", "Merchant")),
        ("state_", ("State", "Geo-location")),
    ):
        if feature.startswith(prefix):
            value = feature[len(prefix):].replace("_", " ").strip()
            return f"{label}: {value}", family
    return feature.replace("_", " ").title(), "Other"


def collapse_one_hot(values: pd.Series) -> dict:
    """Sum the one-hot columns of a categorical back into one entry.

    A model sees `state_TX`, `state_CA` and forty-eight others. An
    analyst wants one line that says "State". Summing the group's SHAP
    values is the correct way to collapse them — contributions are
    additive by construction.
    """
    collapsed = {}
    for feature, value in values.items():
        if feature.startswith("category_"):
            key = "category"
        elif feature.startswith("state_"):
            key = "state"
        else:
            key = feature
        collapsed[key] = collapsed.get(key, 0.0) + float(value)
    return collapsed


def compute_and_save(system, scored: pd.DataFrame):
    """Compute global importance and per-transaction contributions."""
    design = system.design_matrix(scored)
    # design_matrix resets the index when it concatenates; restore the
    # caller's index so rows can be matched back to their transactions.
    design.index = scored.index

    explainer = shap.TreeExplainer(system.xgb)

    # Explain the highest-risk rows plus a random slice, so the stored
    # set covers both the cases an analyst opens and ordinary traffic.
    top = scored.nlargest(min(EXPLAIN_ROWS // 2, len(scored)), "probability").index
    rest = scored.drop(index=top).sample(
        min(EXPLAIN_ROWS // 2, max(len(scored) - len(top), 0)),
        random_state=cfg.RANDOM_SEED).index
    chosen = list(top) + list(rest)

    subset = design.loc[chosen]
    print(f"       explaining {len(subset)} transactions "
          f"({design.shape[1]} features)")

    shap_values = explainer.shap_values(subset)
    base_value = float(np.atleast_1d(explainer.expected_value)[0])

    shap_frame = pd.DataFrame(shap_values, columns=design.columns,
                              index=subset.index)

    # ---- global importance: mean absolute contribution ----
    mean_abs = shap_frame.abs().mean()
    collapsed_global = collapse_one_hot(mean_abs)
    ranked = sorted(collapsed_global.items(), key=lambda kv: kv[1], reverse=True)

    global_importance = []
    for feature, value in ranked[:12]:
        label, family = pretty(feature)
        global_importance.append({
            "feature": feature,
            "label": label,
            "family": family,
            "importance": round(float(value), 4),
        })

    print("       top global drivers: " + ", ".join(
        g["label"] for g in global_importance[:4]))

    # ---- per-transaction contributions ----
    per_transaction = {}
    for index in subset.index:
        collapsed = collapse_one_hot(shap_frame.loc[index])
        ordered = sorted(collapsed.items(),
                         key=lambda kv: abs(kv[1]), reverse=True)[:8]
        contributions = []
        for feature, value in ordered:
            label, family = pretty(feature)
            contributions.append({
                "key": feature,
                "label": label,
                "family": family,
                "value": round(float(value), 4),
                "direction": "fraud" if value >= 0 else "legitimate",
            })
        per_transaction[str(scored.loc[index, "trans_num"])] = contributions

    payload = {
        "baseValue": round(base_value, 4),
        "globalImportance": global_importance,
        "perTransaction": per_transaction,
        "explained": len(subset),
        "note": ("SHAP values are in log-odds and sum to the difference "
                 "between this prediction and the model's base value."),
    }

    out = cfg.ARTIFACT_DIR / "shap.json"
    out.write_text(json.dumps(payload))
    print(f"       saved {out.relative_to(cfg.PROJECT_DIR)}")
    return payload


def explain_one(system, prepared_row: pd.DataFrame, limit: int = 8):
    """Live SHAP for a single transaction, used by the API."""
    design = system.design_matrix(prepared_row)
    explainer = shap.TreeExplainer(system.xgb)
    values = explainer.shap_values(design)[0]

    collapsed = collapse_one_hot(pd.Series(values, index=design.columns))
    ordered = sorted(collapsed.items(), key=lambda kv: abs(kv[1]), reverse=True)

    out = []
    for feature, value in ordered[:limit]:
        label, family = pretty(feature)
        out.append({
            "key": feature,
            "label": label,
            "family": family,
            "value": round(float(value), 4),
            "direction": "fraud" if value >= 0 else "legitimate",
        })
    return out
