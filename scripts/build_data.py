#!/usr/bin/env python3
"""
CRESENSE — REAL DATA PIPELINE
=============================================================
Reads the Sparkov credit-card transaction CSV and writes the
JavaScript data files the React app imports.

This is the step the whole frontend was designed around: the mock
files in src/data/ are replaced by real aggregations, and not a
single React component changes.

WHAT IS REAL AFTER RUNNING THIS
  transaction counts, fraud counts, fraud rate, fraud amounts,
  merchant names, cities, categories, timestamps, hourly and
  daily patterns, the fraud heatmap, amount bands

WHAT IS STILL SIMULATED (needs the trained model)
  fraud probability, risk score, SHAP contributions,
  model performance metrics, false positive rate

USAGE
  python scripts/build_data.py path/to/fraudTrain.csv

  Optionally pass a second CSV (the test split) to include it:
  python scripts/build_data.py fraudTrain.csv fraudTest.csv

Uses only the Python standard library — no pip install needed.
=============================================================
"""

import csv
import json
import os
import shutil
import sys
from collections import Counter, defaultdict
from datetime import datetime

# Where this script lives, so paths work from any directory.
ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DATA_DIR = os.path.join(ROOT, "src", "data")
BACKUP_DIR = os.path.join(DATA_DIR, "_mock_backup")

# How many transactions to embed in the app's table.
SAMPLE_SIZE = 80
# Of those, how many should be fraud (so the table is worth filtering).
SAMPLE_FRAUD = 25

DAYS_IN_TREND = 30
TOP_MERCHANTS = 6
TOP_CITIES = 6

AMOUNT_BANDS = [
    ("< $10", 0, 10),
    ("$10–50", 10, 50),
    ("$50–100", 50, 100),
    ("$100–250", 100, 250),
    ("$250–500", 250, 500),
    ("> $500", 500, float("inf")),
]


def clean_merchant(name):
    """Sparkov prefixes every merchant with 'fraud_'. Strip it."""
    return name.replace("fraud_", "").strip()


def pretty_category(code):
    """'grocery_pos' -> 'Grocery (in person)'"""
    mapping = {
        "_pos": " (in person)",
        "_net": " (online)",
    }
    label = code
    for suffix, replacement in mapping.items():
        if label.endswith(suffix):
            label = label[: -len(suffix)] + replacement
            break
    return label.replace("_", " ").strip().capitalize()


def read_rows(paths):
    """Stream the CSV(s) row by row, accumulating only what we need.

    The file is large (1.3M+ rows). We never hold it all in memory —
    we build counters as we go and keep only a small sample of rows.
    """
    stats = {
        "total": 0,
        "fraud": 0,
        "fraud_amount": 0.0,
        "total_amount": 0.0,
        "by_hour": Counter(),
        "fraud_by_hour": Counter(),
        "by_merchant": Counter(),
        "fraud_by_merchant": Counter(),
        "by_city": Counter(),
        "fraud_by_city": Counter(),
        "by_category": Counter(),
        "fraud_by_category": Counter(),
        "fraud_by_date": Counter(),
        "all_by_date": Counter(),
        "heatmap": Counter(),          # (weekday, hour) -> fraud count
        "band_total": Counter(),
        "band_fraud": Counter(),
        "amounts_fraud": [],
    }
    fraud_rows, legit_rows = [], []

    for path in paths:
        print(f"  reading {os.path.basename(path)} …")
        with open(path, newline="", encoding="utf-8") as handle:
            for row in csv.DictReader(handle):
                try:
                    amount = float(row["amt"])
                    is_fraud = row["is_fraud"].strip() in ("1", "1.0")
                    stamp = datetime.strptime(
                        row["trans_date_trans_time"], "%Y-%m-%d %H:%M:%S"
                    )
                except (ValueError, KeyError):
                    continue  # skip malformed rows rather than crashing

                merchant = clean_merchant(row["merchant"])
                city = row["city"].strip()
                category = row["category"].strip()
                date_key = stamp.strftime("%Y-%m-%d")

                stats["total"] += 1
                stats["total_amount"] += amount
                stats["by_hour"][stamp.hour] += 1
                stats["by_merchant"][merchant] += 1
                stats["by_city"][city] += 1
                stats["by_category"][category] += 1
                stats["all_by_date"][date_key] += 1

                for label, low, high in AMOUNT_BANDS:
                    if low <= amount < high:
                        stats["band_total"][label] += 1
                        if is_fraud:
                            stats["band_fraud"][label] += 1
                        break

                if is_fraud:
                    stats["fraud"] += 1
                    stats["fraud_amount"] += amount
                    stats["fraud_by_hour"][stamp.hour] += 1
                    stats["fraud_by_merchant"][merchant] += 1
                    stats["fraud_by_city"][city] += 1
                    stats["fraud_by_category"][category] += 1
                    stats["fraud_by_date"][date_key] += 1
                    stats["heatmap"][(stamp.weekday(), stamp.hour)] += 1
                    stats["amounts_fraud"].append(amount)

                # Keep a small reservoir of rows for the table.
                record = {
                    "trans_num": row["trans_num"],
                    "amount": round(amount, 2),
                    "merchant": merchant,
                    "city": city,
                    "state": row["state"].strip(),
                    "category": category,
                    "timestamp": stamp.strftime("%Y-%m-%d %H:%M"),
                    "hour": stamp.hour,
                    "is_fraud": is_fraud,
                }
                if is_fraud and len(fraud_rows) < SAMPLE_FRAUD * 4:
                    fraud_rows.append(record)
                elif not is_fraud and len(legit_rows) < SAMPLE_SIZE * 4:
                    legit_rows.append(record)

    return stats, fraud_rows, legit_rows


def simulated_score(record):
    """STAND-IN FOR THE MODEL — not machine learning.

    The dataset gives us real transactions and real fraud labels, but
    no probabilities: those only exist once a model is trained. This
    reproduces the same visible arithmetic rule used on the Predictions
    page so the UI has something to display.

    When the ensemble is trained, this function is deleted and the
    probability comes from the model instead.
    """
    score = 0.10
    score += min(record["amount"] / 1200, 1) * 0.34
    score += 0.20 if record["hour"] >= 22 or record["hour"] <= 4 else -0.04
    score += 0.12 if record["category"].endswith("_net") else 0.0
    score += 0.08 if record["amount"] > 400 else 0.0
    probability = max(0.02, min(0.985, score))
    return round(probability, 2), max(1, min(99, round(probability * 100)))


def risk_from_rate(rate, all_rates):
    """Turn a historical fraud RATE into a 0-100 comparative figure.

    This is a descriptive statistic computed from real data — the share
    of this merchant's (or city's) transactions that were fraudulent,
    rescaled against the highest in the set. It is NOT a model output.
    """
    top = max(all_rates) if all_rates else 1
    if top <= 0:
        return 0
    return max(1, min(100, round((rate / top) * 100)))


def js_header(title, body_note):
    return f'''/* ============================================================
   {title}
   ------------------------------------------------------------
   GENERATED FILE — do not edit by hand.
   Written by scripts/build_data.py from the Sparkov credit-card
   transaction dataset.

   {body_note}
   ============================================================ */

'''


def write_js(filename, contents):
    path = os.path.join(DATA_DIR, filename)
    with open(path, "w", encoding="utf-8") as handle:
        handle.write(contents)
    print(f"  wrote src/data/{filename}")


def backup_mocks():
    """Keep the original mock files once, so the app can be reverted."""
    if os.path.exists(BACKUP_DIR):
        return
    os.makedirs(BACKUP_DIR)
    for name in ("overview.js", "transactions.js", "analytics.js", "systemStatus.js"):
        src = os.path.join(DATA_DIR, name)
        if os.path.exists(src):
            shutil.copy2(src, os.path.join(BACKUP_DIR, name))
    print(f"  backed up mock files to src/data/_mock_backup/")


def build(stats, fraud_rows, legit_rows):
    total = stats["total"]
    fraud = stats["fraud"]
    fraud_rate = (fraud / total * 100) if total else 0

    # ---------- KPIs ----------
    kpis = [
        dict(id="total-transactions", label="Total Transactions",
             value=total, format="count", context="Dataset total", source="real"),
        dict(id="fraud-transactions", label="Fraud Transactions",
             value=fraud, format="count", context="Labelled fraud",
             emphasis=True, source="real"),
        dict(id="fraud-rate", label="Fraud Rate", value=round(fraud_rate, 3),
             format="percent", context="Of all transactions", source="real"),
        dict(id="fraud-amount", label="Fraud Amount",
             value=round(stats["fraud_amount"], 2), format="currency",
             context="Total value of labelled fraud", emphasis=True,
             source="real"),
        dict(id="avg-risk-score", label="Average Risk Score", value=None,
             format="score", context="Requires trained model", source="pending"),
        dict(id="false-positive-rate", label="False Positive Rate",
             value=None, format="percent",
             context="Requires trained model", source="pending"),
    ]

    # ---------- Trend: last N days present in the data ----------
    dates = sorted(stats["all_by_date"])[-DAYS_IN_TREND:]
    trend = [
        dict(date=datetime.strptime(d, "%Y-%m-%d").strftime("%d %b"),
             confirmed=stats["fraud_by_date"].get(d, 0))
        for d in dates
    ]

    # ---------- Hourly ----------
    by_hour = [
        dict(hour=f"{h:02d}", cases=stats["fraud_by_hour"].get(h, 0))
        for h in range(24)
    ]

    # ---------- Merchants ----------
    top_m = stats["fraud_by_merchant"].most_common(TOP_MERCHANTS)
    m_rates = [
        stats["fraud_by_merchant"][name] / stats["by_merchant"][name]
        for name, _ in top_m
    ]
    merchants = [
        dict(merchant=name, cases=count,
             fraudRate=round(stats["fraud_by_merchant"][name]
                             / stats["by_merchant"][name] * 100, 2),
             riskScore=risk_from_rate(
                 stats["fraud_by_merchant"][name] / stats["by_merchant"][name],
                 m_rates))
        for name, count in top_m
    ]

    # ---------- Cities ----------
    top_c = stats["fraud_by_city"].most_common(TOP_CITIES)
    c_rates = [
        stats["fraud_by_city"][name] / stats["by_city"][name]
        for name, _ in top_c
    ]
    cities = [
        dict(city=name, cases=count,
             fraudRate=round(stats["fraud_by_city"][name]
                             / stats["by_city"][name] * 100, 2),
             riskScore=risk_from_rate(
                 stats["fraud_by_city"][name] / stats["by_city"][name],
                 c_rates))
        for name, count in top_c
    ]

    # ---------- Amount bands ----------
    bands = [
        dict(band=label,
             transactions=stats["band_total"].get(label, 0),
             fraudCases=stats["band_fraud"].get(label, 0),
             fraudRate=round(
                 stats["band_fraud"].get(label, 0)
                 / stats["band_total"][label] * 100, 3)
             if stats["band_total"].get(label) else 0.0)
        for label, _, _ in AMOUNT_BANDS
    ]

    # ---------- Category (shown as transaction type) ----------
    top_cat = stats["fraud_by_category"].most_common(6)
    cat_total = sum(c for _, c in top_cat) or 1
    categories = [
        dict(channel=pretty_category(name), cases=count,
             share=round(count / cat_total * 100, 1))
        for name, count in top_cat
    ]

    # ---------- Heatmap ----------
    day_names = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
    heatmap = [
        dict(day=day_names[d], dayIndex=d, hour=h,
             cases=stats["heatmap"].get((d, h), 0))
        for d in range(7) for h in range(24)
    ]

    # ---------- Transaction sample ----------
    fraud_rows.sort(key=lambda r: r["amount"], reverse=True)
    legit_rows.sort(key=lambda r: r["timestamp"], reverse=True)
    sample = fraud_rows[:SAMPLE_FRAUD] + legit_rows[: SAMPLE_SIZE - SAMPLE_FRAUD]

    transactions = []
    seen_ids = set()
    for index, record in enumerate(sample):
        probability, risk = simulated_score(record)
        # trans_num is a hash; take the tail and guarantee uniqueness so
        # React keys never collide.
        txn_id = "TXN-" + record["trans_num"][-8:].upper()
        if txn_id in seen_ids:
            txn_id = f"{txn_id}-{index}"
        seen_ids.add(txn_id)
        transactions.append(dict(
            id=txn_id,
            amount=record["amount"],
            merchant=record["merchant"],
            location=f'{record["city"]}, {record["state"]}',
            channel=pretty_category(record["category"]),
            timestamp=record["timestamp"],
            actual="Fraud" if record["is_fraud"] else "Legitimate",
            prediction="Fraud" if probability >= 0.55 else "Legitimate",
            probability=probability,
            riskScore=risk,
            status="Under review" if probability >= 0.55 else "Cleared",
            failedAttempts=0,
            newMerchant=False,
            deviceChange=False,
        ))
    transactions.sort(key=lambda t: t["timestamp"], reverse=True)

    # ---------- Risk distribution (from simulated scores) ----------
    buckets = Counter()
    for t in transactions:
        index = min(9, t["riskScore"] // 10)
        buckets[index] += 1
    scale = total / max(1, len(transactions))
    distribution = [
        dict(bucket=f"{i*10 + (1 if i else 0)}–{i*10+10}",
             count=int(buckets.get(i, 0) * scale))
        for i in range(10)
    ]

    return dict(kpis=kpis, trend=trend, by_hour=by_hour, merchants=merchants,
                cities=cities, bands=bands, categories=categories,
                heatmap=heatmap, transactions=transactions,
                distribution=distribution,
                meta=dict(total=total, fraud=fraud,
                          fraudRate=round(fraud_rate, 3),
                          fraudAmount=round(stats["fraud_amount"], 2),
                          generated=datetime.now().strftime("%d %b %Y, %H:%M"),
                          days=len(stats["all_by_date"])))


def emit(built):
    dump = lambda obj: json.dumps(obj, indent=2, ensure_ascii=False)

    write_js("overview.js", js_header(
        "OVERVIEW — REAL DATA",
        "Counts, rates, merchants, cities and time patterns are computed\n"
        "   from the dataset. Average Risk Score and False Positive Rate are\n"
        "   null because they require a trained model.")
        + f"export const DATA_META = {dump(built['meta'])};\n\n"
        + f"export const overviewKpis = {dump(built['kpis'])};\n\n"
        + f"export const fraudTrend = {dump(built['trend'])};\n\n"
        + f"export const fraudByHour = {dump(built['by_hour'])};\n\n"
        + f"export const fraudByMerchant = {dump(built['merchants'])};\n\n"
        + f"export const fraudByLocation = {dump(built['cities'])};\n")

    write_js("transactions.js", js_header(
        "TRANSACTIONS — REAL DATA, SIMULATED SCORES",
        "'actual' is the dataset's real fraud label.\n"
        "   'prediction', 'probability' and 'riskScore' are produced by a\n"
        "   visible arithmetic rule, NOT by a model. They are the last\n"
        "   fields that will change when the ensemble is trained.")
        + "export const DECISION_THRESHOLD = 0.55;\n\n"
        + f"export const transactions = {dump(built['transactions'])};\n\n"
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

    write_js("systemStatus.js", js_header(
        "SYSTEM STATUS — REAL DATA",
        "Reflects what actually exists after running the pipeline.")
        + f"""export const systemStatus = {{
  dataSource: "Sparkov dataset",
  ensembleStatus: "Not trained",
  shapStatus: "Simulated",
  thresholdStatus: "Not optimised",
  biStatus: "Power BI not connected",
  lastRefresh: "{built['meta']['generated']}",
  environment: "Real data, no model",
}};

export const pipelineStages = [
  {{ stage: "Dataset", status: "Loaded" }},
  {{ stage: "Data preprocessing", status: "Aggregation only" }},
  {{ stage: "Autoencoder", status: "Not built" }},
  {{ stage: "XGBoost", status: "Not built" }},
  {{ stage: "CatBoost", status: "Not built" }},
  {{ stage: "Hybrid ensemble", status: "Not built" }},
  {{ stage: "SHAP explainability", status: "Simulated" }},
  {{ stage: "Threshold optimisation", status: "Not built" }},
  {{ stage: "Power BI dashboard", status: "Not connected" }},
];
""")

    write_js("analytics.js", js_header(
        "ANALYTICS — REAL DATA",
        "Amount bands, category split and the heatmap are computed from\n"
        "   the dataset. Risk distribution is scaled from simulated scores.")
        + f"export const fraudByAmountBand = {dump(built['bands'])};\n\n"
        + f"export const riskDistribution = {dump(built['distribution'])};\n\n"
        + f"export const fraudByChannel = {dump(built['categories'])};\n\n"
        + f"export const fraudHeatmap = {dump(built['heatmap'])};\n\n"
        + 'export const HEATMAP_DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];\n\n'
        + """export const dateRangeOptions = [
  "Last 7 days",
  "Last 30 days",
  "Last 90 days",
  "Full period",
];

export const riskLevelOptions = ["All", "High Risk", "Medium Risk", "Low Risk"];
""")


def main():
    if len(sys.argv) < 2:
        print(__doc__)
        print("ERROR: give me the path to fraudTrain.csv\n")
        sys.exit(1)

    paths = sys.argv[1:]
    for path in paths:
        if not os.path.exists(path):
            print(f"ERROR: file not found — {path}")
            sys.exit(1)

    print("\nCreSense data pipeline")
    print("=" * 46)
    stats, fraud_rows, legit_rows = read_rows(paths)

    if stats["total"] == 0:
        print("ERROR: no valid rows read. Is this the Sparkov CSV?")
        sys.exit(1)

    print(f"\n  {stats['total']:,} transactions")
    print(f"  {stats['fraud']:,} labelled fraud "
          f"({stats['fraud'] / stats['total'] * 100:.3f}%)")
    print(f"  {len(stats['by_merchant']):,} merchants, "
          f"{len(stats['by_city']):,} cities")
    print(f"  {len(stats['all_by_date']):,} days covered\n")

    backup_mocks()
    emit(build(stats, fraud_rows, legit_rows))

    print("\nDone. Restart the dev server to see real data:")
    print("  npm run dev\n")


if __name__ == "__main__":
    main()
