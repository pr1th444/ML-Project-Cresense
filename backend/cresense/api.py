"""Inference API — serves the trained system to the React frontend.

    uvicorn cresense.api:app --reload --port 8000

Endpoints:
    GET  /api/health        is a model loaded, and which one
    GET  /api/models        measured performance of all four models
    POST /api/predict       score one transaction, with SHAP

The frontend calls /api/predict from the Predictions page. Everything
else is already baked into the bundle at export time, so the dashboard
works whether or not this service is running.
"""

from __future__ import annotations

from datetime import datetime
from typing import Optional

import joblib
import numpy as np
import pandas as pd
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, Field

from . import config as cfg
from .explain import explain_one
from .features import add_sequential_features, haversine_km

app = FastAPI(title="CreSense Fraud Detection API", version="1.0")

# The Vite dev server runs on a different port from this API, so the
# browser blocks the call unless we say otherwise. Any localhost port is
# allowed, because Vite picks a different one whenever 5173 is taken.
# Localhost only — this is not an open CORS policy.
app.add_middleware(
    CORSMiddleware,
    allow_origin_regex=r"http://(localhost|127\.0\.0\.1):\d+",
    allow_methods=["*"],
    allow_headers=["*"],
)

_system = None


def get_system():
    """Load the trained bundle once, on first use."""
    global _system
    if _system is None:
        path = cfg.ARTIFACT_DIR / "fraud_system.joblib"
        if not path.exists():
            raise HTTPException(
                status_code=503,
                detail="No trained model found. Run: python -m cresense.train <csv>",
            )
        _system = joblib.load(path)
    return _system


class TransactionIn(BaseModel):
    amount: float = Field(..., gt=0, description="Transaction amount")
    hour: int = Field(..., ge=0, le=23)
    merchant: str
    category: str
    city: str
    state: str
    day_of_week: int = Field(3, ge=0, le=6)
    age_years: float = Field(42.0, ge=16, le=110)
    city_pop: int = Field(500_000, ge=0)
    distance_km: Optional[float] = Field(None, ge=0)
    hours_since_last_txn: float = Field(24.0, ge=0)
    txns_last_24h: int = Field(1, ge=0)
    card_txn_count: int = Field(120, ge=0)


def build_row(system, payload: TransactionIn) -> pd.DataFrame:
    """Turn an API payload into the exact feature frame the model expects.

    The per-entity statistics come from the encoding maps fitted during
    training — the same values the model learned against, so a live
    prediction is computed identically to a training-time one.
    """
    maps = system.encoding_maps
    amount = float(payload.amount)

    merchant_rate = maps.merchant_rate.get(payload.merchant, maps.global_rate)
    category_rate = maps.category_rate.get(payload.category, maps.global_rate)
    state_rate = maps.state_rate.get(payload.state, maps.global_rate)
    category_mean = maps.category_mean_amount.get(
        payload.category, maps.global_mean_amount) or maps.global_mean_amount

    distance = (payload.distance_km if payload.distance_km is not None else 30.0)

    row = {
        "amount": amount,
        "amount_log": float(np.log1p(max(amount, 0))),
        "hour": int(payload.hour),
        "day_of_week": int(payload.day_of_week),
        "is_night": int(payload.hour >= 22 or payload.hour <= 4),
        "is_weekend": int(payload.day_of_week >= 5),
        "age_years": float(payload.age_years),
        "city_pop_log": float(np.log1p(max(payload.city_pop, 0))),
        "distance_km": float(distance),
        # No per-card history over the API, so compare against the
        # category average — the best available stand-in.
        "amount_vs_card_mean": float(min(amount / max(maps.global_mean_amount, 1e-6), 50)),
        "amount_vs_category_mean": float(min(amount / max(category_mean, 1e-6), 50)),
        "card_txn_count": int(payload.card_txn_count),
        "merchant_fraud_rate": float(merchant_rate),
        "category_fraud_rate": float(category_rate),
        "state_fraud_rate": float(state_rate),
        "hours_since_last_txn": float(payload.hours_since_last_txn),
        "txns_last_24h": int(payload.txns_last_24h),
        "category": payload.category,
        "state": payload.state,
    }
    return pd.DataFrame([row])


@app.get("/api/health")
def health():
    path = cfg.ARTIFACT_DIR / "fraud_system.joblib"
    if not path.exists():
        return {"status": "no_model",
                "detail": "Run: python -m cresense.train <csv>"}
    system = get_system()
    return {
        "status": "ready",
        "scoringModel": "Hybrid Ensemble",
        "bestModel": system.metrics.get("selected"),
        "threshold": system.ensemble.threshold,
        "ensembleWeights": system.ensemble.weights,
        "trainedAt": system.trained_at,
        "datasetRows": system.dataset_meta.get("rows"),
    }


@app.get("/api/models")
def models():
    return get_system().metrics


@app.get("/api/options")
def options():
    """Merchants, categories and states the model was trained on."""
    maps = get_system().encoding_maps
    return {
        "merchants": sorted(maps.merchant_rate.keys()),
        "categories": sorted(maps.category_rate.keys()),
        "states": sorted(maps.state_rate.keys()),
    }


@app.post("/api/predict")
def predict(payload: TransactionIn):
    system = get_system()
    frame = build_row(system, payload)

    xgb_p, cat_p, ae_p = system.raw_scores(frame)
    probability = float(system.ensemble.combine(xgb_p, cat_p, ae_p)[0])
    threshold = float(system.ensemble.threshold)
    risk = int(system.risk_score([probability])[0])

    band = next((label for _, label, low, high in cfg.RISK_BANDS
                 if low <= risk <= high), "Low Risk")

    # Confidence reflects distance from the decision boundary: a
    # probability sitting on the threshold is a genuinely uncertain call.
    margin = abs(probability - threshold)
    confidence = "High" if margin > 0.25 else "Moderate" if margin > 0.10 else "Low"

    return {
        "prediction": "Fraud" if probability >= threshold else "Legitimate",
        "probability": round(probability, 4),
        "riskScore": risk,
        "riskBand": band,
        "confidence": confidence,
        "threshold": round(threshold, 4),
        "componentScores": {
            "xgboost": round(float(xgb_p[0]), 4),
            "catboost": round(float(cat_p[0]), 4),
            "autoencoder": round(float(ae_p[0]), 4),
        },
        "contributions": explain_one(system, frame),
        "model": "Hybrid Ensemble",
        "scoredAt": datetime.utcnow().isoformat() + "Z",
    }
