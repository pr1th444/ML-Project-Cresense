/* ============================================================
   FORMATTING HELPERS
   ------------------------------------------------------------
   All number and currency formatting lives here, so changing how
   money is displayed is a one-file edit.

   CURRENCY: the Sparkov dataset records amounts in US dollars, so
   that is what we display. Converting to rupees would invent an
   exchange rate the data does not contain. To switch, change the
   three values in CURRENCY below.
   ============================================================ */

export const CURRENCY = {
  symbol: "$",
  locale: "en-US",
  /* Compact tiers, largest first. For rupees use:
     [{ value: 1e7, suffix: "Cr" }, { value: 1e5, suffix: "L" }]
     and set locale to "en-IN". */
  tiers: [
    { value: 1e9, suffix: "B" },
    { value: 1e6, suffix: "M" },
    { value: 1e3, suffix: "K" },
  ],
};

/* 284807 -> "284,807" (or "2,84,807" with an Indian locale) */
export function formatCount(value) {
  if (value === null || value === undefined) return "—";
  return new Intl.NumberFormat(CURRENCY.locale).format(value);
}

/* Compact money for KPI tiles: 1840000 -> "$1.84M" */
export function formatMoney(value) {
  if (value === null || value === undefined) return "—";
  for (const tier of CURRENCY.tiers) {
    if (value >= tier.value) {
      return `${CURRENCY.symbol}${(value / tier.value).toFixed(2)}${tier.suffix}`;
    }
  }
  return formatAmount(value);
}

/* Exact money for tables: 12500 -> "$12,500" */
export function formatAmount(value) {
  if (value === null || value === undefined) return "—";
  return `${CURRENCY.symbol}${new Intl.NumberFormat(CURRENCY.locale, {
    minimumFractionDigits: value % 1 === 0 ? 0 : 2,
    maximumFractionDigits: 2,
  }).format(value)}`;
}

/* Percentages already on a 0-100 scale.
   Sub-1% values need decimals to say anything ("0%" would be useless). */
export function formatPercent(value, decimals) {
  if (value === null || value === undefined) return "—";
  if (decimals !== undefined) return `${value.toFixed(decimals)}%`;
  if (value < 1) return `${value.toFixed(3)}%`;
  return `${Number(value.toFixed(1))}%`;
}

/* 0.94 -> "94.0%"  (a 0-1 probability) */
export function formatProbability(value) {
  if (value === null || value === undefined) return "—";
  return `${(value * 100).toFixed(1)}%`;
}

/* "2026-08-10 02:14" -> "10 Aug, 02:14" */
export function formatTimestamp(timestamp) {
  if (!timestamp) return "—";
  const [datePart, timePart] = timestamp.split(" ");
  const date = new Date(`${datePart}T${timePart}:00`);
  if (Number.isNaN(date.getTime())) return timestamp;
  const day = date.getDate();
  const month = date.toLocaleString("en-GB", { month: "short" });
  return `${day} ${month}, ${timePart}`;
}

/* Kept as aliases so older imports keep working. */
export const formatINR = formatMoney;
export const formatRupees = formatAmount;
