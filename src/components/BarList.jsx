import { RiskBadge } from "./RiskBadge";

/*
  A ranked breakdown: label, a proportional bar, a count, a risk badge.

  This is built from plain divs rather than a charting library. For a
  short ranked list that is both denser and sharper than a chart —
  and an analyst reading "which merchants are risky?" wants to scan a
  ranking, not measure a bar against an axis.

  Bar widths are percentages of the largest value, so the top row is
  always full width and the rest are read relative to it.
*/
export default function BarList({ items, labelKey, valueKey }) {
  const max = Math.max(...items.map((item) => item[valueKey]));

  return (
    <ol className="flex flex-col gap-2.5">
      {items.map((item) => {
        const label = item[labelKey];
        const value = item[valueKey];
        const width = `${(value / max) * 100}%`;

        return (
          <li key={label}>
            <div className="flex items-baseline justify-between gap-3">
              <span className="truncate text-[12px] text-ink-800">{label}</span>
              <div className="flex shrink-0 items-center gap-2">
                <span className="num text-[12px] font-medium text-ink-950">
                  {value}
                </span>
                <RiskBadge score={item.riskScore} showScore={false} />
              </div>
            </div>

            {/* The track stays visible at full width; the fill shows the value. */}
            <div className="mt-1 h-[3px] w-full bg-ink-100">
              <div
                className="h-full bg-plum-600"
                style={{ width }}
                role="presentation"
              />
            </div>
          </li>
        );
      })}
    </ol>
  );
}
