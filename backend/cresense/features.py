"""Data loading, cleaning and feature engineering.

This is stage 2 and 3 of the architecture diagram: Data Preprocessing
and Feature Engineering. The feature families follow the research
proposal — time-based, behavioural, transaction, merchant, geo-location.

Two rules govern everything here:

1. No target leakage. Every per-entity statistic (merchant fraud rate,
   card spending average) is computed on the TRAINING split only, then
   applied to validation and test. Computing them over the whole dataset
   would let the model see test labels through the back door and inflate
   every metric in the report.

2. Nothing requires information unavailable at decision time. A feature
   the bank cannot compute the instant a card is swiped is useless in
   production, however well it scores offline.
"""

from __future__ import annotations

import numpy as np
import pandas as pd

from . import config as cfg

# Features fed to the models, in a fixed order. The API depends on this
# order, so it is defined once and imported everywhere.
NUMERIC_FEATURES = [
    "amount",
    "amount_log",
    "hour",
    "day_of_week",
    "is_night",
    "is_weekend",
    "age_years",
    "city_pop_log",
    "distance_km",
    "amount_vs_card_mean",
    "amount_vs_category_mean",
    "card_txn_count",
    "merchant_fraud_rate",
    "category_fraud_rate",
    "state_fraud_rate",
    "hours_since_last_txn",
    "txns_last_24h",
]

CATEGORICAL_FEATURES = ["category", "state"]

ALL_FEATURES = NUMERIC_FEATURES + CATEGORICAL_FEATURES

# Human-readable names for the explainability screen.
FEATURE_LABELS = {
    "amount": ("Transaction Amount", "Transaction"),
    "amount_log": ("Amount (log scale)", "Transaction"),
    "hour": ("Hour of Day", "Time-based"),
    "day_of_week": ("Day of Week", "Time-based"),
    "is_night": ("Late-night Transaction", "Time-based"),
    "is_weekend": ("Weekend Transaction", "Time-based"),
    "age_years": ("Cardholder Age", "Behavioural"),
    "city_pop_log": ("City Population", "Geo-location"),
    "distance_km": ("Distance to Merchant", "Geo-location"),
    "amount_vs_card_mean": ("Amount vs Card Average", "Behavioural"),
    "amount_vs_category_mean": ("Amount vs Category Average", "Behavioural"),
    "card_txn_count": ("Card Transaction History", "Behavioural"),
    "merchant_fraud_rate": ("Merchant Risk", "Merchant"),
    "category_fraud_rate": ("Category Risk", "Merchant"),
    "state_fraud_rate": ("Location Risk", "Geo-location"),
    "hours_since_last_txn": ("Time Since Last Transaction", "Behavioural"),
    "txns_last_24h": ("Transaction Velocity (24h)", "Behavioural"),
    "category": ("Merchant Category", "Merchant"),
    "state": ("State", "Geo-location"),
}


def clean_merchant(name: str) -> str:
    """Sparkov prefixes every merchant with 'fraud_'. It is an artefact of
    how the simulator names rows, not a label — strip it."""
    return str(name).replace("fraud_", "").strip()


def load_raw(paths) -> pd.DataFrame:
    """Read one or more Sparkov CSVs into a single frame."""
    frames = []
    for path in paths:
        print(f"  reading {path} …")
        frame = pd.read_csv(path, low_memory=False)
        frames.append(frame)
    data = pd.concat(frames, ignore_index=True)

    missing = [c for c in (cfg.COL_TIMESTAMP, cfg.COL_AMOUNT, cfg.COL_LABEL)
               if c not in data.columns]
    if missing:
        raise ValueError(
            f"Missing expected columns {missing}. "
            "Is this the Sparkov fraud dataset?"
        )
    return data


def haversine_km(lat1, lon1, lat2, lon2):
    """Great-circle distance between cardholder and merchant, in km."""
    radius = 6371.0
    p1, p2 = np.radians(lat1), np.radians(lat2)
    dp = np.radians(lat2 - lat1)
    dl = np.radians(lon2 - lon1)
    a = np.sin(dp / 2) ** 2 + np.cos(p1) * np.cos(p2) * np.sin(dl / 2) ** 2
    return 2 * radius * np.arcsin(np.sqrt(np.clip(a, 0, 1)))


def base_frame(raw: pd.DataFrame) -> pd.DataFrame:
    """Parse, clean and derive the row-local fields.

    Row-local means computable from the single transaction plus the
    cardholder's own history — nothing that needs the whole dataset.
    """
    df = pd.DataFrame(index=raw.index)

    stamp = pd.to_datetime(raw[cfg.COL_TIMESTAMP], errors="coerce")
    df["timestamp"] = stamp
    df["amount"] = pd.to_numeric(raw[cfg.COL_AMOUNT], errors="coerce")
    df["label"] = pd.to_numeric(raw[cfg.COL_LABEL], errors="coerce").fillna(0).astype(int)

    df["merchant"] = raw[cfg.COL_MERCHANT].map(clean_merchant)
    df["category"] = raw[cfg.COL_CATEGORY].astype(str).str.strip()
    df["city"] = raw[cfg.COL_CITY].astype(str).str.strip()
    df["state"] = raw[cfg.COL_STATE].astype(str).str.strip()
    df["card"] = raw[cfg.COL_CARD].astype(str)
    df["trans_num"] = raw[cfg.COL_TRANS_NUM].astype(str)

    # --- time-based ---
    df["hour"] = stamp.dt.hour
    df["day_of_week"] = stamp.dt.dayofweek
    df["is_night"] = ((df["hour"] >= 22) | (df["hour"] <= 4)).astype(int)
    df["is_weekend"] = (df["day_of_week"] >= 5).astype(int)

    # --- transaction ---
    df["amount_log"] = np.log1p(df["amount"].clip(lower=0))

    # --- cardholder ---
    dob = pd.to_datetime(raw[cfg.COL_DOB], errors="coerce")
    df["age_years"] = ((stamp - dob).dt.days / 365.25).clip(0, 110)

    # --- geo ---
    pop = pd.to_numeric(raw[cfg.COL_CITY_POP], errors="coerce").fillna(0)
    df["city_pop_log"] = np.log1p(pop)
    df["distance_km"] = haversine_km(
        pd.to_numeric(raw[cfg.COL_LAT], errors="coerce"),
        pd.to_numeric(raw[cfg.COL_LONG], errors="coerce"),
        pd.to_numeric(raw[cfg.COL_MERCH_LAT], errors="coerce"),
        pd.to_numeric(raw[cfg.COL_MERCH_LONG], errors="coerce"),
    )

    df = df.dropna(subset=["timestamp", "amount"])
    df = df.sort_values("timestamp").reset_index(drop=True)
    return df


def add_sequential_features(df: pd.DataFrame) -> pd.DataFrame:
    """Per-card history features.

    These use only each card's OWN past, via shift/expanding, so no row
    ever sees its own future. Safe to compute across the whole frame.
    """
    df = df.sort_values(["card", "timestamp"])
    grouped = df.groupby("card", sort=False)

    gap = grouped["timestamp"].diff().dt.total_seconds() / 3600.0
    df["hours_since_last_txn"] = gap.fillna(72.0).clip(0, 720)

    # Count of that card's prior transactions.
    df["card_txn_count"] = grouped.cumcount()

    # Rolling 24h velocity, counting only earlier transactions.
    def velocity(group):
        times = group["timestamp"].to_numpy("datetime64[s]").astype("int64")
        window = 24 * 3600
        out = np.zeros(len(times), dtype=np.int32)
        start = 0
        for i in range(len(times)):
            while times[i] - times[start] > window:
                start += 1
            out[i] = i - start
        return pd.Series(out, index=group.index)

    df["txns_last_24h"] = grouped[["timestamp"]].apply(
        velocity).reset_index(level=0, drop=True)

    return df.sort_values("timestamp").reset_index(drop=True)


class EncodingMaps:
    """Target-derived statistics, fitted on the training split only.

    Each map holds a per-entity fraud rate, smoothed toward the global
    rate so a merchant with three transactions does not get an extreme
    value from one fraud. `prior_weight` is the strength of that pull.
    """

    def __init__(self, prior_weight: float = 50.0):
        self.prior_weight = prior_weight
        self.global_rate = 0.0
        self.merchant_rate = {}
        self.category_rate = {}
        self.state_rate = {}
        self.card_mean_amount = {}
        self.category_mean_amount = {}
        self.global_mean_amount = 1.0

    def _smoothed(self, train: pd.DataFrame, key: str) -> dict:
        stats = train.groupby(key)["label"].agg(["sum", "count"])
        smoothed = (stats["sum"] + self.prior_weight * self.global_rate) / (
            stats["count"] + self.prior_weight
        )
        return smoothed.to_dict()

    def fit(self, train: pd.DataFrame) -> "EncodingMaps":
        self.global_rate = float(train["label"].mean())
        self.merchant_rate = self._smoothed(train, "merchant")
        self.category_rate = self._smoothed(train, "category")
        self.state_rate = self._smoothed(train, "state")

        self.global_mean_amount = float(train["amount"].mean())
        self.card_mean_amount = train.groupby("card")["amount"].mean().to_dict()
        self.category_mean_amount = (
            train.groupby("category")["amount"].mean().to_dict()
        )
        return self

    def transform(self, df: pd.DataFrame) -> pd.DataFrame:
        df = df.copy()
        df["merchant_fraud_rate"] = df["merchant"].map(
            self.merchant_rate).fillna(self.global_rate)
        df["category_fraud_rate"] = df["category"].map(
            self.category_rate).fillna(self.global_rate)
        df["state_fraud_rate"] = df["state"].map(
            self.state_rate).fillna(self.global_rate)

        card_mean = df["card"].map(self.card_mean_amount).fillna(
            self.global_mean_amount).replace(0, self.global_mean_amount)
        cat_mean = df["category"].map(self.category_mean_amount).fillna(
            self.global_mean_amount).replace(0, self.global_mean_amount)

        df["amount_vs_card_mean"] = (df["amount"] / card_mean).clip(0, 50)
        df["amount_vs_category_mean"] = (df["amount"] / cat_mean).clip(0, 50)
        return df


def time_split(df: pd.DataFrame):
    """Chronological train / validation / test split.

    Ordering by time rather than shuffling is what makes the evaluation
    honest: the model is tested on transactions that happened after
    everything it learned from, exactly as in deployment.
    """
    n = len(df)
    train_end = int(n * cfg.TRAIN_FRACTION)
    val_end = int(n * (cfg.TRAIN_FRACTION + cfg.VALIDATION_FRACTION))
    return (
        df.iloc[:train_end].copy(),
        df.iloc[train_end:val_end].copy(),
        df.iloc[val_end:].copy(),
    )


def build(paths):
    """Full preprocessing pipeline. Returns the three splits and the maps."""
    raw = load_raw(paths)
    df = base_frame(raw)
    df = add_sequential_features(df)

    train, val, test = time_split(df)
    maps = EncodingMaps().fit(train)

    train = maps.transform(train)
    val = maps.transform(val)
    test = maps.transform(test)

    return train, val, test, maps


def matrix(df: pd.DataFrame) -> pd.DataFrame:
    """Model input frame, columns in the canonical order."""
    out = df[ALL_FEATURES].copy()
    for col in CATEGORICAL_FEATURES:
        out[col] = out[col].astype("category")
    return out
