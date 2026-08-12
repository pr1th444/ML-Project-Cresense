/*
  Recharts ships a default tooltip that looks like a generic web chart.
  This replaces it so hover states match the rest of the interface:
  square corners, thin border, mono numbers.

  Recharts calls this component and hands it `active` (is the cursor
  over a data point?), `label` (the x-axis value) and `payload` (the
  series values at that point).
*/
export default function ChartTooltip({ active, payload, label, suffix = "" }) {
  if (!active || !payload?.length) return null;

  return (
    <div className="border border-ink-300 bg-white px-2.5 py-1.5 shadow-sm">
      <div className="text-[10px] font-semibold uppercase tracking-[0.08em] text-ink-500">
        {label}
      </div>
      {payload.map((entry) => (
        <div
          key={entry.dataKey}
          className="mt-1 flex items-center gap-2 text-[11px]"
        >
          <span
            className="h-1.5 w-1.5 shrink-0"
            style={{ backgroundColor: entry.color }}
          />
          <span className="text-ink-600">{entry.name}</span>
          <span className="num ml-auto font-medium text-ink-950">
            {entry.value}
            {suffix}
          </span>
        </div>
      ))}
    </div>
  );
}
