"""Export the scored test split to CSV for Power BI.

    python -m cresense.to_csv

Writes backend/artifacts/scored_transactions.csv — one row per scored
transaction with its probability, risk score and component scores.
Point Power BI at this file as its data source.
"""

import pandas as pd

from . import config as cfg

COLUMNS = [
    "trans_num", "timestamp", "amount", "merchant", "category", "city",
    "state", "hour", "day_of_week", "distance_km", "txns_last_24h",
    "label", "predicted", "probability", "risk_score",
    "xgb_probability", "cat_probability", "anomaly_score",
]


def main():
    source = cfg.ARTIFACT_DIR / "scored_test.pkl"
    if not source.exists():
        raise SystemExit("No scored data. Run: python -m cresense.train <csv>")

    df = pd.read_pickle(source)
    out = df[[c for c in COLUMNS if c in df.columns]].copy()
    out = out.rename(columns={"label": "actual_fraud",
                              "predicted": "predicted_fraud"})

    target = cfg.ARTIFACT_DIR / "scored_transactions.csv"
    out.to_csv(target, index=False)
    print(f"wrote {target}  ({len(out):,} rows, {out.shape[1]} columns)")


if __name__ == "__main__":
    main()
