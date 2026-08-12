/* ============================================================
   RISK BANDS
   ------------------------------------------------------------
   Straight from the research proposal, section 8 of the detailed
   architecture (Risk Scoring & Business Logic):

       0  – 30   Low Risk
       31 – 70   Medium Risk
       71 – 100  High Risk

   These are project definitions, not mock data. They stay the same
   once the backend is connected — the model will return a risk score,
   and this file decides which band it falls into.

   Every screen that colours or labels a risk score imports from here,
   so the bands can never disagree between two pages.
   ============================================================ */

export const RISK_BANDS = [
  { id: "low", label: "Low Risk", min: 0, max: 30, tone: "ink" },
  { id: "medium", label: "Medium Risk", min: 31, max: 70, tone: "taupe" },
  { id: "high", label: "High Risk", min: 71, max: 100, tone: "plum" },
];

/* Given a score, return its band. Used by risk badges and filters. */
export function getRiskBand(score) {
  return (
    RISK_BANDS.find((band) => score >= band.min && score <= band.max) ??
    RISK_BANDS[0]
  );
}
