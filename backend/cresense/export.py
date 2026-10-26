"""Write trained results into the frontend's data layer.

This is the seam the whole project is built around. The React components
never change: they read the same field names whatever produces them.
This module replaces the contents of src/data/*.js with values computed
by the trained system.

Everything written here is a measured result — model metrics from the
held-out test split, SHAP values from the trained XGBoost model,
predictions from the hybrid ensemble.
"""

from __future__ import annotations

import json
from collections import Counter
from datetime import datetime

import numpy as np
import pandas as pd

from . import config as cfg

CURRENCY = "$"


def header(title: str, note: str) -> str:
    return (
        "/* ============================================================\n"
        f"   {title}\n"
        "   ------------------------------------------------------------\n"
        "   GENERATED FILE — do not edit by hand.\n"
        "   Written by backend/cresense/export.py from the trained model.\n"
        "\n"
        f"   {note}\n"
        "   ============================================================ */\n\n"
    )


def dump(obj) -> str:
    return json.dumps(obj, indent=2, ensure_ascii=False, default=str)


def write(filename: str, body: str):
    path = cfg.FRONTEND_DATA_DIR / filename
    path.write_text(body, encoding="utf-8")
    print(f"       wrote src/data/{filename}")


def pretty_category(code: str) -> str:
    label = str(code)
    for suffix, replacement in (("_pos", " (in person)"), ("_net", " (online)")):
        if label.endswith(suffix):
            label = label[: -len(suffix)] + replacement
            break
    return label.replace("_", " ").strip().capitalize()


def band_of(score: int) -> str:
    for _, label, low, high in cfg.RISK_BANDS:
        if low <= score <= high:
            return label
    return cfg.RISK_BANDS[0][1]


# ------------------------------------------------------------------ main
def export_all(system, scored: pd.DataFrame, shap_payload: dict):
    meta = system.dataset_meta
    metrics = system.metrics
    selected = next(m for m in metrics["models"] if m["name"] == metrics["selected"])

    total = int(len(scored))
    actual_fraud = int(scored["label"].sum())
    flagged = int(scored["predicted"].sum())
    fraud_amount = float(scored.loc[scored["label"] == 1, "amount"].sum())
    caught_amount = float(
        scored.loc[(scored["label"] == 1) & (scored["predicted"] == 1), "amount"].sum())

    data_meta = {
        "rows": total,
        "datasetRows": meta["rows"],
        "trainRows": meta["trainRows"],
        "testRows": meta["testRows"],
        "features": meta["features"],
        "firstDate": meta["firstDate"],
        "lastDate": meta["lastDate"],
        "days": int(scored["timestamp"].dt.date.nunique()),
        # The ensemble scores every transaction on the dashboard — it is
        # the deployed architecture. Which model scored BEST is a separate
        # finding, reported on the Model Performance page.
        "scoringModel": "Hybrid Ensemble",
        "bestModel": metrics["selected"],
        "threshold": metrics["threshold"],
        "trainedAt": datetime.fromisoformat(system.trained_at).strftime("%d %b %Y, %H:%M UTC"),
        "currency": CURRENCY,
    }

    _export_overview(system, scored, data_meta, selected,
                     total, actual_fraud, caught_amount)
    _export_transactions(system, scored, shap_payload, metrics)
    _export_analytics(scored)
    _export_models(metrics, meta)
    _export_shap(shap_payload)
    _export_status(system, meta, metrics)


# -------------------------------------------------------------- overview
def _export_overview(system, scored, data_meta, selected,
                     total, actual_fraud, caught_amount):
    avg_risk = float(scored["risk_score"].mean())

    kpis = [
        dict(id="total-transactions", label="Total Transactions", value=total,
             format="count", context="Scored in the test period"),
        dict(id="fraud-transactions", label="Fraud Detected", value=int(scored["predicted"].sum()),
             format="count", context=f"{actual_fraud:,} actual fraud in period",
             emphasis=True),
        dict(id="fraud-rate", label="Fraud Rate",
             value=round(actual_fraud / max(total, 1) * 100, 3),
             format="percent", context="Of all scored transactions"),
        dict(id="avg-risk-score", label="Average Risk Score",
             value=round(avg_risk, 1), format="score",
             context=band_of(int(round(avg_risk))) + " band"),
        dict(id="loss-prevented", label="Fraud Loss Prevented",
             value=round(caught_amount, 2), format="currency",
             context="Value of fraud the model caught", emphasis=True),
        dict(id="false-positive-rate", label="False Positive Rate",
             value=round(selected["falsePositiveRate"], 3), format="percent",
             context="Legitimate transactions flagged"),
    ]

    # --- trend: fraud detected vs flagged for review, per day ---
    by_day = scored.copy()
    by_day["date"] = by_day["timestamp"].dt.date
    grouped = by_day.groupby("date").agg(
        confirmed=("label", "sum"),
        flagged=("predicted", "sum"),
    ).reset_index().tail(cfg.EXPORT_TREND_DAYS)

    trend = [
        dict(date=pd.Timestamp(row.date).strftime("%d %b"),
             confirmed=int(row.confirmed), flagged=int(row.flagged))
        for row in grouped.itertuples()
    ]

    # --- hourly ---
    hourly = scored[scored["label"] == 1].groupby("hour").size()
    by_hour = [dict(hour=f"{h:02d}", cases=int(hourly.get(h, 0)))
               for h in range(24)]

    # --- merchants and cities: fraud count and measured fraud rate ---
    def ranked(column, name_key):
        stats = scored.groupby(column).agg(
            cases=("label", "sum"), total=("label", "size")).reset_index()
        stats = stats[stats["cases"] > 0].nlargest(cfg.EXPORT_TOP_N, "cases")
        out = []
        for row in stats.itertuples():
            rate = row.cases / max(row.total, 1) * 100
            score = int(round(min(100, rate / 5 * 100))) if rate else 0
            out.append({
                name_key: getattr(row, column),
                "cases": int(row.cases),
                "fraudRate": round(float(rate), 2),
                "riskScore": max(1, min(100, score)),
            })
        return out

    write("overview.js",
          header("OVERVIEW — MODEL RESULTS",
                 "Computed from the hybrid ensemble's predictions on the\n"
                 "   held-out test split.")
          + f"export const DATA_META = {dump(data_meta)};\n\n"
          + f"export const overviewKpis = {dump(kpis)};\n\n"
          + f"export const fraudTrend = {dump(trend)};\n\n"
          + f"export const fraudByHour = {dump(by_hour)};\n\n"
          + f"export const fraudByMerchant = {dump(ranked('merchant', 'merchant'))};\n\n"
          + f"export const fraudByLocation = {dump(ranked('city', 'city'))};\n")


# ---------------------------------------------------------- transactions
def _export_transactions(system, scored, shap_payload, metrics):
    explained = set(shap_payload["perTransaction"].keys())

    # Prefer transactions that have a stored SHAP explanation, so every
    # row an analyst opens can show its real feature breakdown.
    has_shap = scored[scored["trans_num"].astype(str).isin(explained)]
    fraud_rows = has_shap.nlargest(
        min(cfg.EXPORT_SAMPLE_FRAUD, len(has_shap)), "probability")
    remaining = cfg.EXPORT_SAMPLE_SIZE - len(fraud_rows)
    legit_rows = has_shap.drop(index=fraud_rows.index).nlargest(
        max(remaining, 0), "timestamp")
    sample = pd.concat([fraud_rows, legit_rows]).sort_values(
        "timestamp", ascending=False)

    records, seen = [], set()
    for row in sample.itertuples():
        txn_id = "TXN-" + str(row.trans_num)[-8:].upper()
        if txn_id in seen:
            txn_id = f"{txn_id}-{len(seen)}"
        seen.add(txn_id)

        records.append({
            "id": txn_id,
            "shapKey": str(row.trans_num),
            "amount": round(float(row.amount), 2),
            "merchant": row.merchant,
            "location": f"{row.city}, {row.state}",
            "channel": pretty_category(row.category),
            "timestamp": pd.Timestamp(row.timestamp).strftime("%Y-%m-%d %H:%M"),
            "actual": "Fraud" if row.label == 1 else "Legitimate",
            "prediction": "Fraud" if row.predicted == 1 else "Legitimate",
            "probability": round(float(row.probability), 4),
            "riskScore": int(row.risk_score),
            "anomalyScore": round(float(row.anomaly_score), 4),
            "xgbProbability": round(float(row.xgb_probability), 4),
            "catProbability": round(float(row.cat_probability), 4),
            "distanceKm": round(float(row.distance_km), 1),
            "txnsLast24h": int(row.txns_last_24h),
            "hoursSinceLast": round(float(row.hours_since_last_txn), 1),
            "status": ("Blocked" if row.predicted == 1 and row.probability > 0.9
                       else "Under review" if row.predicted == 1 else "Cleared"),
        })

    write("transactions.js",
          header("TRANSACTIONS — SCORED BY THE HYBRID ENSEMBLE",
                 "'actual' is the dataset label. 'prediction', 'probability'\n"
                 "   and 'riskScore' are the trained model's output on data it\n"
                 "   never saw during training.")
          + f"export const DECISION_THRESHOLD = {metrics['threshold']};\n\n"
          + f"export const ENSEMBLE_WEIGHTS = {dump(metrics['ensembleWeights'])};\n\n"
          + f"export const transactions = {dump(records)};\n\n"
          + """export const recentHighRisk = [...transactions]
  .sort((a, b) => b.riskScore - a.riskScore)
  .slice(0, 5);

export const merchantOptions = [
  ...new Set(transactions.map((t) => t.merchant)),
].sort();

export const locationOptions = [
  ...new Set(transactions.map((t) => t.location)),
].sort();

export const channelOptions = [
  ...new Set(transactions.map((t) => t.channel)),
].sort();
""")


# -------------------------------------------------------------- analytics
def _export_analytics(scored):
    bands = [("< $10", 0, 10), ("$10–50", 10, 50), ("$50–100", 100 * 0.5, 100),
             ("$100–250", 100, 250), ("$250–500", 250, 500),
             ("> $500", 500, float("inf"))]
    bands[2] = ("$50–100", 50, 100)

    rows = []
    for label, low, high in bands:
        subset = scored[(scored["amount"] >= low) & (scored["amount"] < high)]
        cases = int(subset["label"].sum())
        rows.append({
            "band": label,
            "transactions": int(len(subset)),
            "fraudCases": cases,
            "fraudRate": round(cases / max(len(subset), 1) * 100, 3),
        })

    buckets = Counter(np.clip(scored["risk_score"] // 10, 0, 9))
    distribution = [
        {"bucket": f"{i*10 + (1 if i else 0)}–{i*10+10}",
         "count": int(buckets.get(i, 0))}
        for i in range(10)
    ]

    cat = scored[scored["label"] == 1].groupby("category").size().nlargest(6)
    cat_total = int(cat.sum()) or 1
    channels = [
        {"channel": pretty_category(name), "cases": int(count),
         "share": round(count / cat_total * 100, 1)}
        for name, count in cat.items()
    ]

    day_names = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
    heat = scored[scored["label"] == 1].groupby(
        ["day_of_week", "hour"]).size().to_dict()
    heatmap = [
        {"day": day_names[d], "dayIndex": d, "hour": h,
         "cases": int(heat.get((d, h), 0))}
        for d in range(7) for h in range(24)
    ]

    write("analytics.js",
          header("ANALYTICS — BUSINESS INTELLIGENCE LAYER",
                 "Aggregations over the scored test split. These are the\n"
                 "   measures Power BI will serve in the deployed system.")
          + f"export const fraudByAmountBand = {dump(rows)};\n\n"
          + f"export const riskDistribution = {dump(distribution)};\n\n"
          + f"export const fraudByChannel = {dump(channels)};\n\n"
          + f"export const fraudHeatmap = {dump(heatmap)};\n\n"
          + 'export const HEATMAP_DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];\n\n'
          + """export const dateRangeOptions = [
  "Last 7 days",
  "Last 30 days",
  "Last 90 days",
  "Full test period",
];

export const riskLevelOptions = ["All", "High Risk", "Medium Risk", "Low Risk"];
""")


# ----------------------------------------------------------------- models
def _export_models(metrics, meta):
    models = []
    for row in metrics["models"]:
        models.append({
            "id": row["name"].lower().replace(" ", "-"),
            "name": row["name"],
            "type": row["type"],
            "role": row["role"],
            "accuracy": row["accuracy"],
            "precision": row["precision"],
            "recall": row["recall"],
            "f1": row["f1"],
            "rocAuc": row["rocAuc"],
            "prAuc": row["prAuc"],
            "threshold": row["threshold"],
            "falsePositiveRate": row["falsePositiveRate"],
            "selected": row["name"] == metrics["selected"],
        })

    chosen = next(r for r in metrics["models"] if r["name"] == metrics["selected"])

    status = {
        "selected": metrics["selected"],
        "selectionBasis": "Highest PR-AUC on the held-out test split",
        "deployed": "Hybrid Ensemble",
        "deployedBasis": "The architecture under study — scores every "
                         "transaction on this dashboard and via the API",
        "evaluatedOn": f"{meta['testRows']:,} held-out transactions "
                       f"({meta['firstDate']} to {meta['lastDate']})",
        "dataset": f"Sparkov credit card transactions — {meta['rows']:,} rows, "
                   f"{meta['features']} engineered features",
        "ensembleWeights": metrics["ensembleWeights"],
        "threshold": metrics["threshold"],
        "validationPrAuc": metrics["validationPrAuc"],
    }

    write("models.js",
          header("MODEL PERFORMANCE — MEASURED RESULTS",
                 "Every figure is measured on a chronologically held-out test\n"
                 "   split. Ensemble weights and the decision threshold were\n"
                 "   fitted on validation data; test was scored once.")
          + f"export const MODEL_STATUS = {dump(status)};\n\n"
          + f"export const models = {dump(models)};\n\n"
          + f"export const confusionMatrix = {dump(dict(model=chosen['name'], **chosen['confusion']))};\n\n"
          + """export const METRIC_DEFINITIONS = [
  {
    key: "accuracy",
    label: "Accuracy",
    description:
      "Share of all predictions that were correct. Near-meaningless on fraud data, where almost everything is legitimate.",
  },
  {
    key: "precision",
    label: "Precision",
    description:
      "Of the transactions flagged as fraud, how many actually were. Low precision wastes analyst time.",
  },
  {
    key: "recall",
    label: "Recall",
    description:
      "Of the real frauds, how many were caught. Low recall means fraud slips through.",
  },
  {
    key: "f1",
    label: "F1 Score",
    description:
      "The balance between precision and recall. The decision threshold was chosen to maximise it.",
  },
  {
    key: "prAuc",
    label: "PR-AUC",
    description:
      "Area under the precision-recall curve. The primary selection metric — unlike ROC-AUC it stays sensitive on imbalanced data.",
  },
  {
    key: "rocAuc",
    label: "ROC-AUC",
    description:
      "How well the model separates fraud from legitimate across every threshold.",
  },
];
""")


# ------------------------------------------------------------------ shap
def _export_shap(payload):
    write("shap.js",
          header("SHAP EXPLAINABILITY — COMPUTED VALUES",
                 "Exact SHAP values from the trained XGBoost component,\n"
                 "   computed with TreeExplainer. Values are in log-odds and sum\n"
                 "   to the gap between this prediction and the base value.")
          + f"export const SHAP_BASE_VALUE = {payload['baseValue']};\n\n"
          + f"export const globalImportance = {dump(payload['globalImportance'])};\n\n"
          + f"const contributionsByTransaction = {dump(payload['perTransaction'])};\n\n"
          + """/* Feature families, derived from what the model actually uses. */
export const SHAP_FEATURES = globalImportance.map((f) => ({
  key: f.feature,
  label: f.label,
  family: f.family,
}));

/* Look up one transaction's feature contributions. */
export function getShapExplanation(txn) {
  if (!txn) return [];
  const key = txn.shapKey ?? txn.id;
  return contributionsByTransaction[key] ?? [];
}

/* The contributions that pushed this transaction toward fraud. */
export function getTopReasons(txn, limit = 5) {
  return getShapExplanation(txn)
    .filter((f) => f.direction === "fraud")
    .slice(0, limit);
}

export function hasExplanation(txn) {
  const key = txn?.shapKey ?? txn?.id;
  return Boolean(key && contributionsByTransaction[key]);
}
""")


# ---------------------------------------------------------------- status
def _export_status(system, meta, metrics):
    weights = metrics["ensembleWeights"]
    write("systemStatus.js",
          header("SYSTEM STATUS", "Reflects the trained system in backend/artifacts/.")
          + f"""export const systemStatus = {{
  dataSource: "Sparkov dataset",
  ensembleStatus: "Hybrid Ensemble",
  shapStatus: "TreeExplainer",
  thresholdStatus: "{metrics['threshold']}",
  biStatus: "Power BI export ready",
  lastRefresh: "{datetime.fromisoformat(system.trained_at).strftime('%d %b %Y, %H:%M UTC')}",
  environment: "Trained",
}};

export const pipelineStages = [
  {{ stage: "Dataset", status: "{meta['rows']:,} rows" }},
  {{ stage: "Data preprocessing", status: "Complete" }},
  {{ stage: "Feature engineering", status: "{meta['features']} features" }},
  {{ stage: "Autoencoder", status: "Trained (weight {weights['ae']})" }},
  {{ stage: "XGBoost", status: "Trained (weight {weights['xgb']})" }},
  {{ stage: "CatBoost", status: "Trained (weight {weights['cat']})" }},
  {{ stage: "Hybrid ensemble", status: "Trained" }},
  {{ stage: "SHAP explainability", status: "Computed" }},
  {{ stage: "Threshold optimisation", status: "{metrics['threshold']}" }},
  {{ stage: "Power BI dashboard", status: "Export ready" }},
];
""")
