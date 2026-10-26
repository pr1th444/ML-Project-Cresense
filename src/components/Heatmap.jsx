import { fraudHeatmap, HEATMAP_DAYS } from "../data/analytics";

/*
  FRAUD HEATMAP — 7 days by 24 hours, 168 cells.

  Built from a CSS grid of divs. Each cell's plum opacity is scaled to
  its case count, so density reads as depth of colour. The late-night
  band and the weekend lift both become visible without any labels
  pointing them out, which is what a heatmap is for.

  Opacity has a floor of 0.06 so empty cells still read as part of the
  grid rather than as holes in it.
*/
export default function Heatmap() {
  const max = Math.max(...fraudHeatmap.map((cell) => cell.cases));

  /* Group cells by day so each row can be rendered in order. */
  const byDay = HEATMAP_DAYS.map((day) => ({
    day,
    cells: fraudHeatmap
      .filter((cell) => cell.day === day)
      .sort((a, b) => a.hour - b.hour),
  }));

  return (
    <div className="overflow-x-auto">
      <div className="min-w-[560px]">
        {/* Hour labels across the top, every third hour to avoid crowding. */}
        <div className="mb-1 flex gap-[2px] pl-8">
          {Array.from({ length: 24 }, (_, hour) => (
            <div
              key={hour}
              className="num flex-1 text-center text-[9px] text-ink-400"
            >
              {hour % 3 === 0 ? String(hour).padStart(2, "0") : ""}
            </div>
          ))}
        </div>

        {byDay.map(({ day, cells }) => (
          <div key={day} className="mb-[2px] flex items-center gap-[2px]">
            <div className="eyebrow w-8 shrink-0 !text-[9px]">{day}</div>
            {cells.map((cell) => (
              <div
                key={cell.hour}
                title={`${day} ${String(cell.hour).padStart(2, "0")}:00 — ${cell.cases} cases`}
                className="h-5 flex-1 cursor-default transition-opacity hover:outline hover:outline-1 hover:outline-ink-950"
                style={{
                  backgroundColor: `rgba(101, 73, 90, ${Math.max(
                    0.06,
                    cell.cases / max
                  )})`,
                }}
              />
            ))}
          </div>
        ))}

        {/* Intensity scale. */}
        <div className="mt-2.5 flex items-center gap-2">
          <span className="text-[10px] text-ink-500">Fewer</span>
          {[0.1, 0.3, 0.5, 0.7, 0.9].map((opacity) => (
            <span
              key={opacity}
              className="h-2.5 w-5"
              style={{ backgroundColor: `rgba(101, 73, 90, ${opacity})` }}
            />
          ))}
          <span className="text-[10px] text-ink-500">
            More — peak {max} cases
          </span>
        </div>
      </div>
    </div>
  );
}
