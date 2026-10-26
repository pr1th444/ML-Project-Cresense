"""Central configuration for the CreSense fraud detection pipeline.

Every tunable value lives here so experiments are reproducible and the
training run can be described exactly in the project report.
"""

from pathlib import Path

# ---------------------------------------------------------------- paths
BACKEND_DIR = Path(__file__).resolve().parent.parent
PROJECT_DIR = BACKEND_DIR.parent
ARTIFACT_DIR = BACKEND_DIR / "artifacts"
FRONTEND_DATA_DIR = PROJECT_DIR / "src" / "data"

ARTIFACT_DIR.mkdir(parents=True, exist_ok=True)

# ---------------------------------------------------------------- data
RANDOM_SEED = 42

# Sparkov column names. Changing dataset means changing only this block.
COL_TIMESTAMP = "trans_date_trans_time"
COL_AMOUNT = "amt"
COL_MERCHANT = "merchant"
COL_CATEGORY = "category"
COL_CITY = "city"
COL_STATE = "state"
COL_LABEL = "is_fraud"
COL_CARD = "cc_num"
COL_DOB = "dob"
COL_LAT = "lat"
COL_LONG = "long"
COL_MERCH_LAT = "merch_lat"
COL_MERCH_LONG = "merch_long"
COL_CITY_POP = "city_pop"
COL_TRANS_NUM = "trans_num"

# Train / validation / test split. The split is time-ordered, not random:
# fraud patterns drift, and a random split lets the model peek at the
# future, which inflates every metric. Validation tunes the ensemble
# weights and the decision threshold; test is touched exactly once.
TRAIN_FRACTION = 0.70
VALIDATION_FRACTION = 0.15
# test takes the remainder

# ---------------------------------------------------------------- models
# Kept modest so a full run finishes on a laptop in minutes, not hours.
XGB_PARAMS = {
    "n_estimators": 400,
    "max_depth": 6,
    "learning_rate": 0.1,
    "subsample": 0.9,
    "colsample_bytree": 0.9,
    "min_child_weight": 2,
    "eval_metric": "aucpr",
    "tree_method": "hist",
    "n_jobs": -1,
    "random_state": RANDOM_SEED,
}

CATBOOST_PARAMS = {
    "iterations": 400,
    "depth": 6,
    "learning_rate": 0.1,
    "loss_function": "Logloss",
    "eval_metric": "PRAUC",
    "random_seed": RANDOM_SEED,
    "verbose": False,
    "allow_writing_files": False,
}

RANDOM_FOREST_PARAMS = {
    "n_estimators": 200,
    "max_depth": 18,
    "min_samples_leaf": 2,
    "class_weight": "balanced_subsample",
    "n_jobs": -1,
    "random_state": RANDOM_SEED,
}

# Autoencoder: trained only on legitimate transactions, so a high
# reconstruction error means "unlike anything normal I was shown".
AUTOENCODER_PARAMS = {
    "hidden_layer_sizes": (24, 8, 24),
    "activation": "relu",
    "solver": "adam",
    "learning_rate_init": 0.002,
    "max_iter": 60,
    "early_stopping": True,
    "n_iter_no_change": 6,
    "random_state": RANDOM_SEED,
}
AUTOENCODER_TRAIN_CAP = 150_000  # legit rows used; more adds little

# ---------------------------------------------------------------- scoring
# Risk bands from the research proposal.
RISK_BANDS = [
    ("low", "Low Risk", 0, 30),
    ("medium", "Medium Risk", 31, 70),
    ("high", "High Risk", 71, 100),
]

# How many scored transactions get embedded in the frontend bundle.
EXPORT_SAMPLE_SIZE = 120
EXPORT_SAMPLE_FRAUD = 40
EXPORT_TREND_DAYS = 30
EXPORT_TOP_N = 6
