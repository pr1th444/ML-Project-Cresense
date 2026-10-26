import { getRiskBand } from "../data/riskBands";

/*
  Status indicators.

  The brief asks for restraint: no screaming red and green. Severity is
  carried by weight and depth of tone instead — high risk is solid plum,
  medium is a lighter taupe outline, low is plain grey. It still reads
  instantly in a table, but the screen stays calm when there are forty
  rows of it.

  Crucially, RiskBadge does not decide what counts as "high". It asks
  getRiskBand(), which reads the 0-30 / 31-70 / 71-100 thresholds from
  the proposal. One source of truth, so no two pages can disagree.
*/

const RISK_TONES = {
  plum: "bg-plum-600 text-white border-plum-600",
  taupe: "bg-plum-50 text-plum-700 border-plum-300",
  ink: "bg-ink-50 text-ink-600 border-ink-200",
};

export function RiskBadge({ score, showScore = true }) {
  const band = getRiskBand(score);

  return (
    <span
      className={[
        "inline-flex items-center gap-1.5 border px-1.5 py-0.5 text-[10px] font-medium whitespace-nowrap",
        RISK_TONES[band.tone],
      ].join(" ")}
    >
      {showScore && <span className="num tabular-nums">{score}</span>}
      <span>{band.label}</span>
    </span>
  );
}

/*
  Fraud vs Legitimate. Deliberately quieter than the risk badge —
  the score is the actionable number, the label is just the outcome.
*/
export function PredictionBadge({ prediction }) {
  const isFraud = prediction === "Fraud";

  return (
    <span
      className={[
        "inline-flex items-center gap-1.5 text-[11px] font-medium whitespace-nowrap",
        isFraud ? "text-plum-700" : "text-ink-500",
      ].join(" ")}
    >
      <span
        className={[
          "h-1.5 w-1.5 rounded-full",
          isFraud ? "bg-plum-600" : "bg-ink-300",
        ].join(" ")}
      />
      {prediction}
    </span>
  );
}

export default RiskBadge;
