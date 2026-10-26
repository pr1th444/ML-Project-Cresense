import {
  ResponsiveContainer,
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";
import { CHART, axisProps } from "../lib/chartTheme";
import ChartTooltip from "./ChartTooltip";
import { fraudByHour } from "../data/overview";

/*
  Fraud volume across the 24 hours of the day.

  Bars in the late-night window are drawn in full plum and the rest in
  grey. That single colour split is what turns a wall of 24 bars into a
  readable statement: fraud clusters after midnight. It also lines up
  with "midnight purchase", one of the top contributing factors named
  in the proposal.

  <Cell> is how Recharts lets you colour individual bars differently
  instead of the whole series at once.
*/

/* Hours 22:00–03:59 count as the peak window. */
const isPeakHour = (hour) => Number(hour) >= 22 || Number(hour) <= 3;

export default function FraudByHourChart() {
  return (
    <div className="h-[220px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={fraudByHour}
          margin={{ top: 4, right: 4, bottom: 0, left: -26 }}
          barCategoryGap="18%"
        >
          <CartesianGrid
            stroke={CHART.grid}
            strokeDasharray="0"
            vertical={false}
          />
          <XAxis dataKey="hour" {...axisProps} interval={2} />
          <YAxis {...axisProps} width={44} />
          <Tooltip
            content={<ChartTooltip />}
            cursor={{ fill: "rgba(101,73,90,0.06)" }}
          />
          <Bar dataKey="cases" name="Fraud cases">
            {fraudByHour.map((entry) => (
              <Cell
                key={entry.hour}
                fill={isPeakHour(entry.hour) ? CHART.primary : CHART.muted}
              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>

      <div className="mt-1 flex items-center gap-4 pl-1">
        <span className="flex items-center gap-1.5 text-[11px] text-ink-600">
          <span className="h-2 w-2 bg-plum-600" />
          Peak window (22:00–04:00)
        </span>
      </div>
    </div>
  );
}
