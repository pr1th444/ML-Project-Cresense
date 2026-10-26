/* ============================================================
   SYSTEM STATUS
   ------------------------------------------------------------
   GENERATED FILE — do not edit by hand.
   Written by backend/cresense/export.py from the trained model.

   Reflects the trained system in backend/artifacts/.
   ============================================================ */

export const systemStatus = {
  dataSource: "Sparkov dataset",
  ensembleStatus: "Hybrid Ensemble",
  shapStatus: "TreeExplainer",
  thresholdStatus: "0.5845",
  biStatus: "Power BI export ready",
  lastRefresh: "06 Oct 2026, 04:19 UTC",
  environment: "Trained",
};

export const pipelineStages = [
  { stage: "Dataset", status: "220,000 rows" },
  { stage: "Data preprocessing", status: "Complete" },
  { stage: "Feature engineering", status: "37 features" },
  { stage: "Autoencoder", status: "Trained (weight 0.25)" },
  { stage: "XGBoost", status: "Trained (weight 0.1)" },
  { stage: "CatBoost", status: "Trained (weight 0.65)" },
  { stage: "Hybrid ensemble", status: "Trained" },
  { stage: "SHAP explainability", status: "Computed" },
  { stage: "Threshold optimisation", status: "0.5845" },
  { stage: "Power BI dashboard", status: "Export ready" },
];
