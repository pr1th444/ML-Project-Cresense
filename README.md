# CreSense

An Explainable AI-Powered Credit Card Fraud Analytics Platform
Integrating Machine Learning and Business Intelligence.

A trained fraud detection system with a React analyst workstation on top
of it. Four models, a hybrid ensemble, SHAP explainability, an optimised
decision threshold, and a dashboard that reads the results.

---

## What's in here

```
backend/              Python — the machine learning system
  cresense/
    config.py         every tunable value, in one place
    features.py       preprocessing and feature engineering
    models.py         Autoencoder, hybrid ensemble, risk scoring
    train.py          the training run
    explain.py        SHAP
    export.py         writes results into the frontend
    api.py            FastAPI inference service
  artifacts/          trained models land here

src/                  React — the analyst workstation
  components/         reusable pieces
  pages/              one file per screen
  data/               results written by the training run
  lib/                formatting, chart theme, API client
```

---

## Running it

### 1. Get the dataset

On Kaggle, search for **Credit Card Transactions Fraud Detection
Dataset** by `kartik2112` (simulated with Sparkov). Download and unzip —
you want `fraudTrain.csv`.

### 2. Train the models

```bash
cd backend
pip install -r requirements.txt
python -m cresense.train /path/to/fraudTrain.csv
```

Takes roughly 10–25 minutes on the full file, depending on your machine.
For a fast trial run first:

```bash
python -m cresense.train /path/to/fraudTrain.csv --sample 200000
```

The run prints its own results table and writes everything the dashboard
needs into `src/data/`.

### 3. Start the dashboard

```bash
npm install
npm run dev
```

### 4. Start the inference API (optional)

Only the Predictions page needs it — every other screen reads results
already exported in step 2.

```bash
cd backend
uvicorn cresense.api:app --reload --port 8000
```

---

## How the pipeline works

Following the architecture diagram:

| Stage | What happens | Where |
| --- | --- | --- |
| Dataset | Sparkov transactions | your CSV |
| Preprocessing | parsing, cleaning, chronological split | `features.py` |
| Feature engineering | time, behavioural, transaction, merchant, geo | `features.py` |
| Autoencoder | trained on legitimate transactions only; reconstruction error is the anomaly score | `models.py` |
| XGBoost / CatBoost | supervised fraud probability | `train.py` |
| Hybrid ensemble | weighted fusion, weights fitted on validation | `models.py` |
| SHAP | TreeExplainer, global and per-transaction | `explain.py` |
| Threshold optimisation | F1-maximising cutoff on validation | `models.py` |
| Risk scoring | probability mapped to 0–100, anchored at the threshold | `models.py` |
| Dashboard | React, reading `src/data/` | `src/` |

Random Forest is trained alongside as the baseline the research proposal
compares against. It is not part of the ensemble.

### Evaluation discipline

This is what makes the numbers defensible:

- **The split is chronological, not random.** Fraud patterns drift. A
  random split lets the model learn from the future and inflates every
  metric.
- **Ensemble weights and the threshold are fitted on validation.** Never
  on test.
- **The test split is scored once**, at the end.
- **PR-AUC is the selection metric, not accuracy.** On data that is over
  99% legitimate, predicting "never fraud" scores above 99% accuracy and
  catches nothing.
- **No target leakage.** Merchant and category fraud rates are computed
  on the training split only, then applied to validation and test.

---

## Replacing the dataset

Column names live in `config.py`. Point them at your columns and the
rest of the pipeline follows.

## Currency

`src/lib/format.js` has a `CURRENCY` block at the top. The Sparkov data
is in US dollars; the rupee settings are in a comment there.

## Power BI

`backend/artifacts/scored_test.pkl` holds every scored transaction with
its probability, risk score and component scores. Export it to CSV and
point Power BI at it — that is the BI layer's data source.
