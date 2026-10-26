import { useState } from "react";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  LineChart,
  Line,
  ComposedChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Cell,
} from "recharts";
import PageHeader from "../components/PageHeader";
import ChartCard from "../components/ChartCard";
import ChartTooltip from "../components/ChartTooltip";
import BarList from "../components/BarList";
import Heatmap from "../components/Heatmap";
import FilterBar, { SelectFilter, ToggleGroup } from "../components/FilterBar";
import { CHART, axisProps } from "../lib/chartTheme";
import {
  fraudTrend,
  fraudByMerchant,
  fraudByLocation,
  DATA_META,
} from "../data/overview";
import {
  fraudByAmountBand,
  riskDistribution,
  fraudByChannel,
  dateRangeOptions,
  riskLevelOptions,
} from "../data/analytics";
import {
  merchantOptions,
  locationOptions,
  channelOptions,
} from "../data/transactions";
import { formatCount } from "../lib/format";

/*
  THE ANALYTICS PAGE — the Business Intelligence layer.

  WHERE THIS SITS IN THE ARCHITECTURE: the diagram ends with
  "Power BI Interactive Dashboard". This page is that box, built in
  React so the intended analytics experience exists and can be shown
  before any BI work starts.

  TWO WAYS IT CAN BE DELIVERED LATER:
   1. Power BI embedded — this page becomes a container for an embedded
      report, and these charts are rebuilt in Power BI itself.
   2. Power BI as a parallel surface — analysts use Power BI for deep
      reporting, while this page stays as the in-app view served by the
      same prediction data.

  Either way, the value of building it now is that it defines the
  requirement. "Fraud rate rises with amount band" is a specification a
  BI developer can build against.

  NOTE ON THE FILTERS: they are presentational. Wiring them to filter
  every chart would mean recomputing six aggregations client-side, which
  is work the BI layer will do properly later. They are here to show the
  intended controls.
*/

export default function Analytics() {
  const [dateRange, setDateRange] = useState("Last 30 days");
  const [merchant, setMerchant] = useState("All merchants");
  const [location, setLocation] = useState("All locations");
  const [channel, setChannel] = useState("All types");
  const [riskLevel, setRiskLevel] = useState("All");

  function resetFilters() {
    setDateRange("Last 30 days");
    setMerchant("All merchants");
    setLocation("All locations");
    setChannel("All types");
    setRiskLevel("All");
  }

  return (
    <>
      <PageHeader
        title="Analytics"
        description={`Business intelligence across ${DATA_META.rows.toLocaleString()} scored transactions. These are the measures the Power BI layer publishes.`}
      />

      <FilterBar onReset={resetFilters}>
        <SelectFilter
          label="Date range"
          value={dateRange}
          onChange={setDateRange}
          options={dateRangeOptions}
        />
        <SelectFilter
          label="Merchant"
          value={merchant}
          onChange={setMerchant}
          options={["All merchants", ...merchantOptions]}
        />
        <SelectFilter
          label="Location"
          value={location}
          onChange={setLocation}
          options={["All locations", ...locationOptions]}
        />
        <SelectFilter
          label="Transaction type"
          value={channel}
          onChange={setChannel}
          options={["All types", ...channelOptions]}
        />
        <ToggleGroup
          label="Risk level"
          value={riskLevel}
          onChange={setRiskLevel}
          options={riskLevelOptions}
        />
      </FilterBar>

      {/* ---------- Trend ---------- */}
      <div className="mb-3">
        <ChartCard
          title="Fraud Trend"
          subtitle="Predicted fraud cases per day across the selected period"
        >
          <div className="h-[200px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                data={fraudTrend}
                margin={{ top: 4, right: 8, bottom: 0, left: -22 }}
              >
                <CartesianGrid
                  stroke={CHART.grid}
                  strokeDasharray="0"
                  vertical={false}
                />
                <XAxis dataKey="date" {...axisProps} interval={4} />
                <YAxis {...axisProps} width={44} />
                <Tooltip
                  content={<ChartTooltip />}
                  cursor={{ stroke: CHART.axis, strokeWidth: 1 }}
                />
                <Line
                  type="monotone"
                  dataKey="confirmed"
                  name="Fraud cases"
                  stroke={CHART.primary}
                  strokeWidth={1.75}
                  dot={false}
                  activeDot={{ r: 3, strokeWidth: 0 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </ChartCard>
      </div>

      {/* ---------- Merchant + city ---------- */}
      <div className="mb-3 grid grid-cols-1 gap-3 lg:grid-cols-2">
        <ChartCard
          title="Fraud by Merchant"
          subtitle="Ranked by case count, with merchant risk band"
        >
          <BarList items={fraudByMerchant} labelKey="merchant" valueKey="cases" />
        </ChartCard>

        <ChartCard
          title="Fraud by City"
          subtitle="Ranked by case count, with city risk band"
        >
          <BarList items={fraudByLocation} labelKey="city" valueKey="cases" />
        </ChartCard>
      </div>

      {/* ---------- Amount band + channel ---------- */}
      <div className="mb-3 grid grid-cols-1 gap-3 lg:grid-cols-2">
        <ChartCard
          title="Fraud by Transaction Amount"
          subtitle="Case count as bars, fraud rate as a line — fraud rate climbs steeply with amount"
        >
          <div className="h-[220px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <ComposedChart
                data={fraudByAmountBand}
                margin={{ top: 4, right: 4, bottom: 0, left: -22 }}
              >
                <CartesianGrid
                  stroke={CHART.grid}
                  strokeDasharray="0"
                  vertical={false}
                />
                <XAxis dataKey="band" {...axisProps} />
                <YAxis yAxisId="left" {...axisProps} width={40} />
                <YAxis
                  yAxisId="right"
                  orientation="right"
                  {...axisProps}
                  width={40}
                />
                <Tooltip
                  content={<ChartTooltip />}
                  cursor={{ fill: "rgba(101,73,90,0.06)" }}
                />
                <Bar
                  yAxisId="left"
                  dataKey="fraudCases"
                  name="Fraud cases"
                  fill={CHART.muted}
                />
                <Line
                  yAxisId="right"
                  type="monotone"
                  dataKey="fraudRate"
                  name="Fraud rate %"
                  stroke={CHART.primary}
                  strokeWidth={1.75}
                  dot={{ r: 2, strokeWidth: 0, fill: CHART.primary }}
                />
              </ComposedChart>
            </ResponsiveContainer>
          </div>
        </ChartCard>

        <ChartCard
          title="Fraud by Transaction Type"
          subtitle="Share of all fraud cases by channel"
        >
          <ul className="flex flex-col gap-3">
            {fraudByChannel.map((row) => (
              <li key={row.channel}>
                <div className="flex items-baseline justify-between gap-3">
                  <span className="text-[12px] text-ink-800">
                    {row.channel}
                  </span>
                  <span className="num text-[12px] text-ink-950">
                    {row.cases}
                    <span className="ml-2 text-[11px] text-ink-500">
                      {row.share}%
                    </span>
                  </span>
                </div>
                <div className="mt-1 h-[3px] w-full bg-ink-100">
                  <div
                    className="h-full bg-plum-600"
                    style={{ width: `${row.share}%` }}
                  />
                </div>
              </li>
            ))}
          </ul>
          <p className="mt-4 border-t border-ink-200 pt-2.5 text-[11px] leading-relaxed text-ink-500">
            Card-not-present transactions account for the majority of fraud
            while being a minority of volume — the clearest operational signal
            on this page.
          </p>
        </ChartCard>
      </div>

      {/* ---------- Heatmap + risk distribution ---------- */}
      <div className="grid grid-cols-1 gap-3 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <ChartCard
            title="Fraud Heatmap"
            subtitle="Hour of day against day of week — darker means more cases"
          >
            <Heatmap />
          </ChartCard>
        </div>

        <ChartCard
          title="Risk Distribution"
          subtitle="Scored transactions by risk score bucket"
        >
          <div className="h-[240px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={riskDistribution}
                layout="vertical"
                margin={{ top: 0, right: 8, bottom: 0, left: 8 }}
              >
                <CartesianGrid
                  stroke={CHART.grid}
                  strokeDasharray="0"
                  horizontal={false}
                />
                <XAxis type="number" hide />
                <YAxis
                  type="category"
                  dataKey="bucket"
                  {...axisProps}
                  width={48}
                />
                <Tooltip
                  content={<ChartTooltip />}
                  cursor={{ fill: "rgba(101,73,90,0.06)" }}
                />
                <Bar dataKey="count" name="Transactions">
                  {riskDistribution.map((entry, index) => (
                    <Cell
                      key={entry.bucket}
                      /* The top three buckets are the high-risk band. */
                      fill={index >= 7 ? CHART.primary : CHART.muted}
                    />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
          <p className="mt-2 border-t border-ink-200 pt-2.5 text-[11px] leading-relaxed text-ink-500">
            <span className="num font-medium text-ink-950">
              {formatCount(
                riskDistribution
                  .slice(7)
                  .reduce((sum, b) => sum + b.count, 0)
              )}
            </span>{" "}
            transactions sit in the high-risk band (71–100).
          </p>
        </ChartCard>
      </div>
    </>
  );
}
