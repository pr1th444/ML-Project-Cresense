/* ============================================================
   MODEL PERFORMANCE — MEASURED RESULTS
   ------------------------------------------------------------
   GENERATED FILE — do not edit by hand.
   Written by backend/cresense/export.py from the trained model.

   Every figure is measured on a chronologically held-out test
   split. Ensemble weights and the decision threshold were
   fitted on validation data; test was scored once.
   ============================================================ */

export const MODEL_STATUS = {
  "selected": "Random Forest",
  "selectionBasis": "Highest PR-AUC on the held-out test split",
  "deployed": "Hybrid Ensemble",
  "deployedBasis": "The architecture under study — scores every transaction on this dashboard and via the API",
  "evaluatedOn": "33,000 held-out transactions (2019-01-01 to 2020-10-22)",
  "dataset": "Sparkov credit card transactions — 220,000 rows, 37 engineered features",
  "ensembleWeights": {
    "xgb": 0.1,
    "cat": 0.65,
    "ae": 0.25
  },
  "threshold": 0.5845,
  "validationPrAuc": 97.682
};

export const models = [
  {
    "id": "random-forest",
    "name": "Random Forest",
    "type": "Supervised ensemble",
    "role": "Baseline",
    "accuracy": 99.979,
    "precision": 100.0,
    "recall": 88.333,
    "f1": 93.805,
    "rocAuc": 99.994,
    "prAuc": 98.072,
    "threshold": 0.4648,
    "falsePositiveRate": 0.0,
    "selected": true
  },
  {
    "id": "xgboost",
    "name": "XGBoost",
    "type": "Gradient boosting",
    "role": "Candidate",
    "accuracy": 99.982,
    "precision": 96.552,
    "recall": 93.333,
    "f1": 94.915,
    "rocAuc": 99.993,
    "prAuc": 97.361,
    "threshold": 0.9846,
    "falsePositiveRate": 0.0061,
    "selected": false
  },
  {
    "id": "catboost",
    "name": "CatBoost",
    "type": "Gradient boosting",
    "role": "Candidate",
    "accuracy": 99.973,
    "precision": 93.22,
    "recall": 91.667,
    "f1": 92.437,
    "rocAuc": 99.878,
    "prAuc": 91.075,
    "threshold": 0.6809,
    "falsePositiveRate": 0.0121,
    "selected": false
  },
  {
    "id": "hybrid-ensemble",
    "name": "Hybrid Ensemble",
    "type": "Autoencoder + XGBoost + CatBoost",
    "role": "Proposed architecture",
    "accuracy": 99.976,
    "precision": 91.935,
    "recall": 95.0,
    "f1": 93.443,
    "rocAuc": 99.977,
    "prAuc": 96.438,
    "threshold": 0.5845,
    "falsePositiveRate": 0.0152,
    "selected": false
  }
];

export const confusionMatrix = {
  "model": "Random Forest",
  "truePositive": 53,
  "falsePositive": 0,
  "falseNegative": 7,
  "trueNegative": 32940
};

export const METRIC_DEFINITIONS = [
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
