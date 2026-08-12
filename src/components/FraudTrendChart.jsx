import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";
import { CHART, axisProps } from "../lib/chartTheme";
import ChartTooltip from "./ChartTooltip";
import { fraudTrend } from "../data/overview";

/*
  Two lines over 30 days.

    confirmed — transactions the model called fraud (solid plum)
    flagged   — transactions sent to an analyst (dashed taupe)

  The distance between the lines is the review workload, which is the
  thing a fraud manager actually watches. A single line would show
  fraud volume but hide the operational cost of catching it.

  ResponsiveContainer makes the chart fill whatever box it is placed in,
  which is how the layout stays responsive without hard-coded widths.
*/
export default function FraudTrendChart() {
  return (
    <div className="h-[220px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={fraudTrend}
          margin={{ top: 4, right: 8, bottom: 0, left: -22 }}
        >
          {/* Horizontal gridlines only — vertical ones add noise. */}
          <CartesianGrid
            stroke={CHART.grid}
            strokeDasharray="0"
            vertical={false}
          />
          <XAxis dataKey="date" {...axisProps} interval={5} />
          <YAxis {...axisProps} width={44} />
          <Tooltip
            content={<ChartTooltip />}
            cursor={{ stroke: CHART.axis, strokeWidth: 1 }}
          />
          <Line
            type="monotone"
            dataKey="flagged"
            name="Flagged for review"
            stroke={CHART.secondary}
            strokeWidth={1.25}
            strokeDasharray="3 3"
            dot={false}
            activeDot={{ r: 3, strokeWidth: 0 }}
          />
          <Line
            type="monotone"
            dataKey="confirmed"
            name="Predicted fraud"
            stroke={CHART.primary}
            strokeWidth={1.75}
            dot={false}
            activeDot={{ r: 3, strokeWidth: 0 }}
          />
        </LineChart>
      </ResponsiveContainer>

      {/* A hand-built legend, so it matches the interface type scale. */}
      <div className="mt-1 flex items-center gap-4 pl-1">
        <span className="flex items-center gap-1.5 text-[11px] text-ink-600">
          <span className="h-[2px] w-4 bg-plum-600" />
          Predicted fraud
        </span>
        <span className="flex items-center gap-1.5 text-[11px] text-ink-600">
          <span className="h-[2px] w-4 border-t border-dashed border-plum-400" />
          Flagged for review
        </span>
      </div>
    </div>
  );
}
