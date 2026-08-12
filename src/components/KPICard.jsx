import {
  formatCount,
  formatINR,
  formatPercent,
} from "../lib/format";

/*
  A single KPI tile.

  The card does not know what a "fraud rate" is. It receives a number
  and the name of a formatter, then renders. That means adding a new
  KPI later is a data change in overview.js, not a component change.
*/

/* Map the format hint from the data file to an actual function. */
const FORMATTERS = {
  count: formatCount,
  inr: formatINR,
  percent: (v) => formatPercent(v),
  score: (v) => v.toFixed(1),
};

export default function KPICard({ label, value, format, context, emphasis }) {
  const formatValue = FORMATTERS[format] ?? String;

  return (
    <div className="panel relative px-3.5 py-3">
      {/* Emphasised KPIs get a thin plum spine — the same device the
          sidebar uses for the active page. Repeating one idea across
          the interface is what makes it feel designed rather than assembled. */}
      {emphasis && (
        <span className="absolute left-0 top-0 h-full w-[2px] bg-plum-600" />
      )}

      {/* Two lines are reserved for the label whether or not it wraps,
          so every value in the row sits on the same baseline. */}
      <div className="eyebrow flex min-h-[26px] items-start">{label}</div>

      <div
        className={[
          "num tabular-nums leading-none",
          emphasis ? "text-plum-700" : "text-ink-950",
          "text-[22px] font-medium",
        ].join(" ")}
      >
        {formatValue(value)}
      </div>

      {context && (
        <div className="mt-1.5 text-[11px] leading-tight text-ink-500">
          {context}
        </div>
      )}
    </div>
  );
}
