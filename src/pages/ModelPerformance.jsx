import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import { CheckCircle2 } from "lucide-react";
import PageHeader from "../components/PageHeader";
import ChartCard from "../components/ChartCard";
import ChartTooltip from "../components/ChartTooltip";
import { CHART, axisProps } from "../lib/chartTheme";
import {
  models,
  MODEL_STATUS,
  METRIC_DEFINITIONS,
  confusionMatrix,
} from "../data/models";
import { formatCount } from "../lib/format";

/*
  THE MODEL PERFORMANCE PAGE

  Everything here is measured, not chosen. The training run scores all
  four models on a chronologically held-out test split and picks the
  winner by PR-AUC — so the "Selected model" line is a result read off
  the table, not a decision made in advance.

  Why PR-AUC rather than accuracy: on data that is over 99% legitimate,
  a model predicting "never fraud" scores above 99% accuracy and catches
  nothing. PR-AUC stays sensitive to the quality of the positive
  predictions, which is the only thing that matters here.
*/

/* Recall is listed last deliberately: on imbalanced fraud data it is the
   metric that actually matters, and the chart puts it nearest the eye. */
const CHART_METRICS = [
  { key: "precision", label: "Precision", color: CHART.primary },
  { key: "recall", label: "Recall", color: CHART.secondary },
  { key: "prAuc", label: "PR-AUC", color: CHART.muted },
];

export default function ModelPerformance() {
  const chartData = models.map((m) => ({
    name: m.name.replace(" Ensemble", ""),
    precision: m.precision,
    recall: m.recall,
    f1: m.f1,
    prAuc: m.prAuc,
  }));

  const { truePositive, falseNegative, falsePositive, trueNegative } =
    confusionMatrix;

  return (
    <>
      <PageHeader
        title="Model Performance"
        description="Measured performance of all four models on a chronologically held-out test split. Ensemble weights and the decision threshold were fitted on validation data; the test split was scored once."
      />

      {/* ---------- Selected model ---------- */}
      <div className="panel mb-3 flex flex-wrap items-center gap-x-8 gap-y-3 px-3.5 py-3">
        <div className="flex items-center gap-2.5">
          <CheckCircle2 size={15} className="text-plum-600" />
          <div>
            <div className="eyebrow">Selected model</div>
            <div className="text-[14px] font-semibold text-plum-700">
              {MODEL_STATUS.selected}
            </div>
            <div className="text-[10.5px] text-ink-500">
              {MODEL_STATUS.selectionBasis}
            </div>
          </div>
        </div>
        <div>
          <div className="eyebrow">Evaluated on</div>
          <div className="mt-0.5 text-[12.5px] text-ink-800">
            {MODEL_STATUS.evaluatedOn}
          </div>
        </div>
        <div>
          <div className="eyebrow">Dataset</div>
          <div className="mt-0.5 text-[12.5px] text-ink-800">
            {MODEL_STATUS.dataset}
          </div>
        </div>
        <div>
          <div className="eyebrow">Decision threshold</div>
          <div className="num mt-0.5 text-[12.5px] text-ink-800">
            {MODEL_STATUS.threshold}
          </div>
        </div>
        {MODEL_STATUS.deployed && (
          <div>
            <div className="eyebrow">Deployed scorer</div>
            <div className="mt-0.5 text-[12.5px] text-ink-800">
              {MODEL_STATUS.deployed}
            </div>
            <div className="text-[10.5px] text-ink-500">
              {MODEL_STATUS.deployedBasis}
            </div>
          </div>
        )}
      </div>

      {/* ---------- Comparison table ---------- */}
      <div className="panel mb-3 overflow-x-auto">
        <header className="border-b border-ink-200 px-3.5 py-2.5">
          <h3 className="text-[13px] font-semibold text-ink-950">
            Metric Comparison
          </h3>
          <p className="mt-0.5 text-[11px] text-ink-500">
            Measured on the held-out test split
          </p>
        </header>

        <table className="w-full min-w-[760px] border-collapse">
          <thead>
            <tr className="border-b border-ink-200 bg-ink-50">
              <th className="eyebrow px-3 py-2 text-left font-semibold">
                Model
              </th>
              <th className="eyebrow px-3 py-2 text-left font-semibold">
                Role
              </th>
              {METRIC_DEFINITIONS.map((metric) => (
                <th
                  key={metric.key}
                  className="eyebrow px-3 py-2 text-right font-semibold"
                  title={metric.description}
                >
                  {metric.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {models.map((model) => {
              const isProposed = model.selected;
              return (
                <tr
                  key={model.id}
                  className={[
                    "border-b border-ink-100 last:border-b-0",
                    isProposed ? "bg-plum-50/50" : "",
                  ].join(" ")}
                >
                  <td className="px-3 py-2">
                    <div className="text-[12.5px] font-medium text-ink-950">
                      {model.name}
                    </div>
                    <div className="text-[10.5px] text-ink-500">
                      {model.type}
                    </div>
                  </td>
                  <td className="px-3 py-2 text-[11.5px] text-ink-600">
                    {model.role}
                  </td>
                  {METRIC_DEFINITIONS.map((metric) => (
                    <td
                      key={metric.key}
                      className="num px-3 py-2 text-right text-[12px] text-ink-950"
                    >
                      {model[metric.key].toFixed(1)}%
                    </td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className="grid grid-cols-1 gap-3 lg:grid-cols-3">
        {/* ---------- Comparison chart ---------- */}
        <div className="lg:col-span-2">
          <ChartCard
            title="Precision, Recall and PR-AUC"
            subtitle="Accuracy is omitted — on data this imbalanced, a model predicting 'never fraud' scores above 99% and catches nothing"
          >
            <div className="h-[240px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={chartData}
                  margin={{ top: 4, right: 8, bottom: 0, left: -18 }}
                  barCategoryGap="24%"
                >
                  <CartesianGrid
                    stroke={CHART.grid}
                    strokeDasharray="0"
                    vertical={false}
                  />
                  <XAxis dataKey="name" {...axisProps} />
                  <YAxis {...axisProps} domain={[0, 100]} width={44} />
                  <Tooltip
                    content={<ChartTooltip suffix="%" />}
                    cursor={{ fill: "rgba(101,73,90,0.06)" }}
                  />
                  <Legend
                    wrapperStyle={{ fontSize: 11, paddingTop: 6 }}
                    iconType="square"
                    iconSize={8}
                  />
                  {CHART_METRICS.map((metric) => (
                    <Bar
                      key={metric.key}
                      dataKey={metric.key}
                      name={metric.label}
                      fill={metric.color}
                    />
                  ))}
                </BarChart>
              </ResponsiveContainer>
            </div>
          </ChartCard>
        </div>

        {/* ---------- Confusion matrix + metric guide ---------- */}
        <div className="flex flex-col gap-3">
          <ChartCard
            title="Confusion Matrix"
            subtitle={`${confusionMatrix.model} — held-out test split`}
          >
            <div className="grid grid-cols-2 gap-px bg-ink-200">
              {[
                { label: "True positive", value: truePositive, good: true },
                { label: "False negative", value: falseNegative },
                { label: "False positive", value: falsePositive },
                { label: "True negative", value: trueNegative, good: true },
              ].map((cell) => (
                <div key={cell.label} className="bg-white px-3 py-2.5">
                  <div className="eyebrow">{cell.label}</div>
                  <div
                    className={[
                      "num mt-1 text-[16px] font-medium",
                      cell.good ? "text-ink-950" : "text-plum-700",
                    ].join(" ")}
                  >
                    {formatCount(cell.value)}
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-2.5 text-[11px] leading-relaxed text-ink-500">
              False negatives are frauds that slipped through. False positives
              are legitimate customers inconvenienced. The threshold decides
              the trade between them.
            </p>
          </ChartCard>

          <ChartCard title="What These Metrics Mean">
            <ul className="flex flex-col gap-2.5">
              {METRIC_DEFINITIONS.map((metric) => (
                <li key={metric.key}>
                  <div className="text-[12px] font-medium text-ink-950">
                    {metric.label}
                  </div>
                  <p className="mt-0.5 text-[11px] leading-relaxed text-ink-600">
                    {metric.description}
                  </p>
                </li>
              ))}
            </ul>
          </ChartCard>
        </div>
      </div>
    </>
  );
}
