/* ============================================================
   MOCK DATA — OVERVIEW DASHBOARD
   ------------------------------------------------------------
   Everything the Overview screen displays. All values are
   invented for the prototype.

   Transaction and fraud counts follow the Kaggle Credit Card
   Fraud Detection dataset named in the proposal (284,807
   transactions, 492 frauds) so the demo figures are at least
   plausible for the dataset we intend to use.

   TODAY:  hard-coded objects.
   LATER:  GET /api/overview returns this same shape, computed
           from the ensemble's predictions. No component changes.
   ============================================================ */

/* ---------- KPI strip ----------
   Each KPI carries its own formatting hint ("format") so the card
   component does not need to know what any particular metric means.
   It reads the number, applies the named formatter, and renders. */
export const overviewKpis = [
  {
    id: "total-transactions",
    label: "Total Transactions",
    value: 284807,
    format: "count",
    context: "Full monitored period",
  },
  {
    id: "fraud-transactions",
    label: "Fraud Transactions",
    value: 492,
    format: "count",
    context: "Predicted fraud",
    emphasis: true,
  },
  {
    id: "fraud-rate",
    label: "Fraud Rate",
    value: 0.17,
    format: "percent",
    context: "Of all transactions",
  },
  {
    id: "avg-risk-score",
    label: "Average Risk Score",
    value: 63.4,
    format: "score",
    context: "Medium risk band",
  },
  {
    id: "loss-prevented",
    label: "Fraud Loss Prevented",
    value: 1840000,
    format: "inr",
    context: "Blocked before settlement",
    emphasis: true,
  },
  {
    id: "false-positive-rate",
    label: "False Positive Rate",
    value: 2.8,
    format: "percent",
    context: "Legitimate flagged as fraud",
  },
];

/* ---------- Fraud trend over time ----------
   Two series, because a fraud team cares about both:
     confirmed  — transactions the model called fraud
     flagged    — transactions sent for analyst review
   The gap between the lines is the review workload. */
export const fraudTrend = [
  { date: "14 Jul", confirmed: 12, flagged: 34 },
  { date: "15 Jul", confirmed: 15, flagged: 39 },
  { date: "16 Jul", confirmed: 11, flagged: 31 },
  { date: "17 Jul", confirmed: 18, flagged: 44 },
  { date: "18 Jul", confirmed: 21, flagged: 52 },
  { date: "19 Jul", confirmed: 26, flagged: 61 },
  { date: "20 Jul", confirmed: 24, flagged: 57 },
  { date: "21 Jul", confirmed: 14, flagged: 36 },
  { date: "22 Jul", confirmed: 13, flagged: 33 },
  { date: "23 Jul", confirmed: 16, flagged: 41 },
  { date: "24 Jul", confirmed: 19, flagged: 46 },
  { date: "25 Jul", confirmed: 23, flagged: 55 },
  { date: "26 Jul", confirmed: 29, flagged: 68 },
  { date: "27 Jul", confirmed: 27, flagged: 64 },
  { date: "28 Jul", confirmed: 17, flagged: 42 },
  { date: "29 Jul", confirmed: 15, flagged: 38 },
  { date: "30 Jul", confirmed: 18, flagged: 45 },
  { date: "31 Jul", confirmed: 22, flagged: 51 },
  { date: "01 Aug", confirmed: 25, flagged: 59 },
  { date: "02 Aug", confirmed: 31, flagged: 72 },
  { date: "03 Aug", confirmed: 28, flagged: 66 },
  { date: "04 Aug", confirmed: 19, flagged: 47 },
  { date: "05 Aug", confirmed: 16, flagged: 40 },
  { date: "06 Aug", confirmed: 20, flagged: 49 },
  { date: "07 Aug", confirmed: 24, flagged: 56 },
  { date: "08 Aug", confirmed: 30, flagged: 70 },
  { date: "09 Aug", confirmed: 34, flagged: 79 },
  { date: "10 Aug", confirmed: 32, flagged: 74 },
  { date: "11 Aug", confirmed: 21, flagged: 50 },
  { date: "12 Aug", confirmed: 18, flagged: 43 },
];

/* ---------- Fraud by hour ----------
   Peaks after midnight, matching the "midnight purchase" signal
   listed among the proposal's top contributing factors. */
export const fraudByHour = [
  { hour: "00", cases: 41 },
  { hour: "01", cases: 52 },
  { hour: "02", cases: 58 },
  { hour: "03", cases: 47 },
  { hour: "04", cases: 29 },
  { hour: "05", cases: 14 },
  { hour: "06", cases: 8 },
  { hour: "07", cases: 6 },
  { hour: "08", cases: 9 },
  { hour: "09", cases: 11 },
  { hour: "10", cases: 13 },
  { hour: "11", cases: 12 },
  { hour: "12", cases: 15 },
  { hour: "13", cases: 14 },
  { hour: "14", cases: 12 },
  { hour: "15", cases: 13 },
  { hour: "16", cases: 16 },
  { hour: "17", cases: 18 },
  { hour: "18", cases: 21 },
  { hour: "19", cases: 24 },
  { hour: "20", cases: 27 },
  { hour: "21", cases: 31 },
  { hour: "22", cases: 34 },
  { hour: "23", cases: 38 },
];

/* ---------- Fraud by merchant ---------- */
export const fraudByMerchant = [
  { merchant: "QuickCart Online", cases: 68, riskScore: 88 },
  { merchant: "GlobalPay Wallet", cases: 54, riskScore: 81 },
  { merchant: "TravelDesk Bookings", cases: 47, riskScore: 76 },
  { merchant: "MetroFuel Stations", cases: 39, riskScore: 64 },
  { merchant: "PrimeElectronics", cases: 33, riskScore: 58 },
  { merchant: "CityMart Retail", cases: 26, riskScore: 44 },
];

/* ---------- Fraud by location ---------- */
export const fraudByLocation = [
  { city: "Mumbai", cases: 94, riskScore: 84 },
  { city: "Delhi", cases: 81, riskScore: 79 },
  { city: "Bengaluru", cases: 67, riskScore: 71 },
  { city: "Chennai", cases: 58, riskScore: 66 },
  { city: "Hyderabad", cases: 44, riskScore: 57 },
  { city: "Pune", cases: 31, riskScore: 48 },
];
