/* ============================================================
   MOCK DATA — SYSTEM STATUS
   ------------------------------------------------------------
   The stages below mirror the architecture diagram exactly:

     Dataset -> Preprocessing -> Autoencoder / XGBoost / CatBoost
     -> Hybrid Ensemble -> SHAP -> Threshold Optimization
     -> Fraud Score >= Threshold? -> Result -> Power BI Dashboard

   TODAY:  hard-coded strings saying nothing is built yet.
   LATER:  the same shape arrives from the backend, e.g.
           GET /api/status -> { ensembleStatus, lastRefresh, ... }

   Because the sidebar only reads these field names, swapping the
   source later does not require touching the UI.
   ============================================================ */

export const systemStatus = {
  dataSource: "Mock dataset",
  ensembleStatus: "Not trained",
  shapStatus: "Not generated",
  thresholdStatus: "Not optimised",
  biStatus: "Power BI not connected",
  lastRefresh: "12 Aug 2026, 15:40",
  environment: "Prototype",
};

/* The pipeline as a list, so the Settings page can later render the
   full flow without hard-coding stage names into a component. */
export const pipelineStages = [
  { stage: "Dataset", status: "Mock" },
  { stage: "Data preprocessing", status: "Not built" },
  { stage: "Autoencoder", status: "Not built" },
  { stage: "XGBoost", status: "Not built" },
  { stage: "CatBoost", status: "Not built" },
  { stage: "Hybrid ensemble", status: "Not built" },
  { stage: "SHAP explainability", status: "Not built" },
  { stage: "Threshold optimisation", status: "Not built" },
  { stage: "Power BI dashboard", status: "Not connected" },
];
