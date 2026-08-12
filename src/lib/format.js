/* ============================================================
   FORMATTING HELPERS
   ------------------------------------------------------------
   Formatting lives here, not inside components. One reason:
   if the platform ever needs to show US dollars instead of
   rupees, this is the only file that changes.

   Note the Indian digit grouping. 284807 becomes 2,84,807 —
   not 284,807 — because Indian convention groups the last three
   digits, then pairs. The "en-IN" locale handles this for us.
   ============================================================ */

/* 284807 -> "2,84,807" */
export function formatCount(value) {
  return new Intl.NumberFormat("en-IN").format(value);
}

/* Rupees in lakh / crore, the way an Indian analyst reads money.
   1 lakh     = 100,000
   1 crore    = 10,000,000
   1840000 -> "₹18.4L"      24500000 -> "₹2.45Cr" */
export function formatINR(value) {
  if (value >= 10000000) {
    return `₹${(value / 10000000).toFixed(2)}Cr`;
  }
  if (value >= 100000) {
    return `₹${(value / 100000).toFixed(1)}L`;
  }
  return `₹${new Intl.NumberFormat("en-IN").format(value)}`;
}

/* Full rupee amount for tables, where exact values matter.
   12500 -> "₹12,500" */
export function formatRupees(value) {
  return `₹${new Intl.NumberFormat("en-IN").format(value)}`;
}

/* Percentages, already on a 0-100 scale.
   Sub-1% values need two decimals to say anything at all (a fraud rate
   of "0%" would be useless), while larger ones read better short.
     0.17 -> "0.17%"      2.8 -> "2.8%"      99 -> "99%"          */
export function formatPercent(value, decimals) {
  if (decimals !== undefined) return `${value.toFixed(decimals)}%`;
  if (value < 1) return `${value.toFixed(2)}%`;
  return `${Number(value.toFixed(1))}%`;
}

/* 0.94 -> "94.0%"  (a 0–1 probability from the model) */
export function formatProbability(value) {
  return `${(value * 100).toFixed(1)}%`;
}

/* "2026-08-10 02:14" -> "10 Aug, 02:14" */
export function formatTimestamp(timestamp) {
  const [datePart, timePart] = timestamp.split(" ");
  const date = new Date(`${datePart}T${timePart}:00`);
  const day = date.getDate();
  const month = date.toLocaleString("en-GB", { month: "short" });
  return `${day} ${month}, ${timePart}`;
}
