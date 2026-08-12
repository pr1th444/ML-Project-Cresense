/* ============================================================
   MOCK DATA — TRANSACTIONS
   ------------------------------------------------------------
   The object shape here is the contract between the frontend and
   the eventual backend. It matches the shape given in the brief:

     { id, amount, merchant, location, prediction,
       probability, riskScore, timestamp }

   Two fields are added that the pipeline will also produce:
     status  — where the transaction sits in the analyst workflow
     channel — how the payment was made

   TODAY:  a hard-coded array.
   LATER:  GET /api/transactions returns the same array shape.
           `probability` comes from the hybrid ensemble,
           `prediction` from the threshold comparison,
           `riskScore`  from the risk scoring stage.

   Keeping the field names identical now means the swap is a
   one-line import change later, not a UI rewrite.
   ============================================================ */

export const transactions = [
  {
    id: "TXN-84412",
    amount: 148900,
    merchant: "QuickCart Online",
    location: "Mumbai",
    prediction: "Fraud",
    probability: 0.96,
    riskScore: 94,
    timestamp: "2026-08-12 02:14",
    status: "Under review",
    channel: "Card not present",
  },
  {
    id: "TXN-84397",
    amount: 92400,
    merchant: "GlobalPay Wallet",
    location: "Delhi",
    prediction: "Fraud",
    probability: 0.93,
    riskScore: 91,
    timestamp: "2026-08-12 01:47",
    status: "Blocked",
    channel: "Online transfer",
  },
  {
    id: "TXN-84355",
    amount: 76250,
    merchant: "TravelDesk Bookings",
    location: "Bengaluru",
    prediction: "Fraud",
    probability: 0.89,
    riskScore: 87,
    timestamp: "2026-08-12 01:05",
    status: "Under review",
    channel: "Card not present",
  },
  {
    id: "TXN-84318",
    amount: 54800,
    merchant: "PrimeElectronics",
    location: "Chennai",
    prediction: "Fraud",
    probability: 0.84,
    riskScore: 82,
    timestamp: "2026-08-12 00:38",
    status: "Escalated",
    channel: "Card present",
  },
  {
    id: "TXN-84290",
    amount: 41200,
    merchant: "MetroFuel Stations",
    location: "Hyderabad",
    prediction: "Fraud",
    probability: 0.78,
    riskScore: 76,
    timestamp: "2026-08-11 23:52",
    status: "Under review",
    channel: "Card present",
  },
  {
    id: "TXN-84271",
    amount: 33750,
    merchant: "CityMart Retail",
    location: "Pune",
    prediction: "Legitimate",
    probability: 0.61,
    riskScore: 68,
    timestamp: "2026-08-11 23:19",
    status: "Cleared",
    channel: "Card present",
  },
  {
    id: "TXN-84244",
    amount: 28600,
    merchant: "QuickCart Online",
    location: "Mumbai",
    prediction: "Legitimate",
    probability: 0.44,
    riskScore: 55,
    timestamp: "2026-08-11 22:41",
    status: "Cleared",
    channel: "Card not present",
  },
];

/* The Overview only shows the most pressing cases.
   Sorting lives here, not in the component, so the rule is
   written once and the same list can be reused elsewhere. */
export const recentHighRisk = [...transactions]
  .sort((a, b) => b.riskScore - a.riskScore)
  .slice(0, 5);
