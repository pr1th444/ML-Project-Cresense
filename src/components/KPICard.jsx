import { formatCount, formatMoney, formatPercent } from "../lib/format";

/*
  A single KPI tile.

  The card does not know what a "fraud rate" is. It receives a number
  and the name of a formatter, then renders. Adding a KPI later is a
  data change, not a component change.

  A value of null renders as a dash rather than a zero, so a metric
  that could not be computed is visibly absent instead of looking
  like a real measurement of nothing.
*/

const FORMATTERS = {
  count: formatCount,
  currency: formatMoney,
  percent: (v) => formatPercent(v),
  score: (v) => (v === null || v === undefined ? "—" : v.toFixed(1)),
};

export default function KPICard({
  label,
  value,
  format,
  context,
  emphasis,
  source,
}) {
  const formatValue = FORMATTERS[format] ?? String;
  const isPending = source === "pending" || value === null || value === undefined;

  return (
    <div className="panel relative px-3.5 py-3">
      {/* Emphasised KPIs get a thin plum spine — the same device the
          sidebar uses for the active page. */}
      {emphasis && !isPending && (
        <span className="absolute left-0 top-0 h-full w-[2px] bg-plum-600" />
      )}

      {/* Two lines reserved for the label whether or not it wraps, so
          every value in the row shares a baseline. */}
      <div className="eyebrow flex min-h-[26px] items-start">{label}</div>

      <div
        className={[
          "num tabular-nums text-[22px] font-medium leading-none",
          isPending
            ? "text-ink-300"
            : emphasis
              ? "text-plum-700"
              : "text-ink-950",
        ].join(" ")}
      >
        {isPending ? "—" : formatValue(value)}
      </div>

      {context && (
        <div
          className={[
            "mt-1.5 text-[11px] leading-tight",
            isPending ? "text-plum-600" : "text-ink-500",
          ].join(" ")}
        >
          {context}
        </div>
      )}
    </div>
  );
}
