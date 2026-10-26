import { useState } from "react";
import { FileDown, FileText, Loader2, Check } from "lucide-react";
import PageHeader from "../components/PageHeader";
import ChartCard from "../components/ChartCard";
import { SelectFilter } from "../components/FilterBar";
import { RiskBadge } from "../components/RiskBadge";
import { transactions } from "../data/transactions";
import {
  fraudByMerchant,
  fraudByLocation,
  overviewKpis,
} from "../data/overview";
import { dateRangeOptions } from "../data/analytics";
import {
  formatCount,
  formatAmount,
  formatMoney,
  formatPercent,
  formatProbability,
} from "../lib/format";

/*
  THE REPORTS PAGE

  The CSV export writes the scored transactions straight from the
  model's output — no library, no server round trip.

  HOW THE DOWNLOAD WORKS (no library, no server):
   1. Build the CSV as a string.
   2. Wrap it in a Blob — an in-memory file.
   3. URL.createObjectURL() gives that blob a temporary address.
   4. Create an invisible <a download> pointing at it and click it.
   5. Revoke the URL so the memory is released.

  PDF generation is not wired up: it needs a reporting library or a
  backend endpoint, which belongs with the Power BI work.
*/

const REPORT_TYPES = [
  "Fraud Summary",
  "High-Risk Transactions",
  "Merchant Risk Report",
];

/* ---------- Summary ----------
   IMPORTANT: the headline figures come from the portfolio KPIs in
   overview.js, NOT from the 60-row transaction sample.

   Why: that sample is deliberately enriched with fraud so the table and
   filters have something to show. Computing a fraud rate from it would
   report roughly 30%, contradicting the 0.17% on the Overview. A report
   that disagrees with the dashboard is worse than no report.

   The sample is still used for the case-level lists lower down, which
   are labelled as a sample. */
function kpi(id) {
  return overviewKpis.find((k) => k.id === id)?.value ?? 0;
}

function buildSummary() {
  const sampleFraud = transactions.filter((t) => t.prediction === "Fraud");

  return {
    /* Portfolio-level, consistent with the Overview dashboard. */
    transactionCount: kpi("total-transactions"),
    fraudCount: kpi("fraud-transactions"),
    fraudRate: kpi("fraud-rate"),
    fraudAmount: kpi("fraud-amount"),
    avgRiskScore: kpi("avg-risk-score"),
    falsePositiveRate: kpi("false-positive-rate"),

    /* Sample-level, for the case lists. */
    sampleSize: transactions.length,
    sampleFraudCount: sampleFraud.length,
    blocked: transactions.filter((t) => t.status === "Blocked").length,
    underReview: transactions.filter((t) => t.status === "Under review").length,
  };
}

/* ---------- CSV helpers ---------- */
function toCsv(rows, columns) {
  const header = columns.map((c) => c.label).join(",");
  const body = rows
    .map((row) =>
      columns
        .map((col) => {
          const value = String(row[col.key] ?? "");
          /* Wrap in quotes if the value contains a comma or quote. */
          return /[",]/.test(value) ? `"${value.replace(/"/g, '""')}"` : value;
        })
        .join(",")
    )
    .join("\n");
  return `${header}\n${body}`;
}

function downloadFile(filename, contents, mimeType = "text/csv") {
  const blob = new Blob([contents], { type: `${mimeType};charset=utf-8;` });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

function Stat({ label, value, emphasis }) {
  return (
    <div className="border-b border-ink-100 py-2 last:border-b-0">
      <div className="flex items-baseline justify-between gap-3">
        <span className="text-[12px] text-ink-600">{label}</span>
        <span
          className={[
            "num text-[13px] font-medium",
            emphasis ? "text-plum-700" : "text-ink-950",
          ].join(" ")}
        >
          {value}
        </span>
      </div>
    </div>
  );
}

export default function Reports() {
  const [reportType, setReportType] = useState("Fraud Summary");
  const [dateRange, setDateRange] = useState("Last 30 days");
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedAt, setGeneratedAt] = useState(null);

  const summary = buildSummary();

  function handleGenerate() {
    setIsGenerating(true);
    setTimeout(() => {
      setIsGenerating(false);
      setGeneratedAt(
        new Date().toLocaleString("en-IN", {
          day: "2-digit",
          month: "short",
          year: "numeric",
          hour: "2-digit",
          minute: "2-digit",
        })
      );
    }, 700);
  }

  function handleExportCsv() {
    const csv = toCsv(transactions, [
      { key: "id", label: "Transaction ID" },
      { key: "timestamp", label: "Date Time" },
      { key: "amount", label: "Amount" },
      { key: "merchant", label: "Merchant" },
      { key: "location", label: "Location" },
      { key: "channel", label: "Transaction Type" },
      { key: "actual", label: "Actual Label" },
      { key: "prediction", label: "Model Prediction" },
      { key: "probability", label: "Fraud Probability" },
      { key: "riskScore", label: "Risk Score" },
      { key: "status", label: "Status" },
    ]);
    downloadFile("cresense-transactions.csv", csv);
  }

  function handleExportSummary() {
    const lines = [
      "CreSense Fraud Summary",
      `Report type,${reportType}`,
      `Date range,${dateRange}`,
      `Generated,${generatedAt ?? "Not generated"}`,
      "",
      "Metric,Value",
      `Total transactions,${summary.transactionCount}`,
      `Fraud cases,${summary.fraudCount}`,
      `Fraud rate %,${summary.fraudRate.toFixed(2)}`,
      `Fraud amount,${summary.fraudAmount}`,
      `Average risk score,${summary.avgRiskScore.toFixed(1)}`,
      `False positive rate %,${summary.falsePositiveRate.toFixed(2)}`,
      `Sample size,${summary.sampleSize}`,
      `Sample blocked,${summary.blocked}`,
      `Sample under review,${summary.underReview}`,
      "",
      "High-Risk Merchants,Cases,Risk Score",
      ...fraudByMerchant
        .slice(0, 3)
        .map((m) => `${m.merchant},${m.cases},${m.riskScore}`),
      "",
      "High-Risk Locations,Cases,Risk Score",
      ...fraudByLocation
        .slice(0, 3)
        .map((c) => `${c.city},${c.cases},${c.riskScore}`),
    ];
    downloadFile("cresense-fraud-summary.csv", lines.join("\n"));
  }

  return (
    <>
      <PageHeader
        title="Reports"
        description="Build a fraud summary for a chosen period and export it for investigation or review."
      />

      <div className="grid grid-cols-1 gap-3 lg:grid-cols-3">
        {/* ---------- Report options ---------- */}
        <div className="panel self-start">
          <header className="border-b border-ink-200 px-3.5 py-2.5">
            <h3 className="text-[13px] font-semibold text-ink-950">
              Report Options
            </h3>
          </header>

          <div className="flex flex-col gap-3.5 p-3.5">
            <SelectFilter
              label="Report type"
              value={reportType}
              onChange={setReportType}
              options={REPORT_TYPES}
            />
            <SelectFilter
              label="Date range"
              value={dateRange}
              onChange={setDateRange}
              options={dateRangeOptions}
            />

            <div className="flex flex-col gap-2 border-t border-ink-200 pt-3.5">
              <button
                onClick={handleGenerate}
                disabled={isGenerating}
                className="flex items-center justify-center gap-2 border border-plum-600 bg-plum-600 px-3 py-2 text-[12.5px] font-medium text-white hover:bg-plum-700 disabled:opacity-60"
              >
                {isGenerating ? (
                  <Loader2 size={13} className="animate-spin" />
                ) : (
                  <FileText size={13} />
                )}
                {isGenerating ? "Generating…" : "Generate Report"}
              </button>

              <button
                onClick={handleExportCsv}
                className="flex items-center justify-center gap-2 border border-ink-300 bg-white px-3 py-2 text-[12.5px] font-medium text-ink-800 hover:bg-ink-50"
              >
                <FileDown size={13} />
                Export Transactions CSV
              </button>

              <button
                onClick={handleExportSummary}
                className="flex items-center justify-center gap-2 border border-ink-300 bg-white px-3 py-2 text-[12.5px] font-medium text-ink-800 hover:bg-ink-50"
              >
                <FileDown size={13} />
                Export Summary CSV
              </button>

              <button
                disabled
                title="Requires a reporting library or backend endpoint"
                className="flex cursor-not-allowed items-center justify-center gap-2 border border-ink-200 bg-ink-50 px-3 py-2 text-[12.5px] font-medium text-ink-400"
              >
                <FileDown size={13} />
                Download PDF — not available
              </button>
            </div>

            {generatedAt && (
              <div className="flex items-center gap-1.5 border-t border-ink-200 pt-3 text-[11px] text-ink-600">
                <Check size={12} className="text-plum-600" />
                Generated {generatedAt}
              </div>
            )}
          </div>
        </div>

        {/* ---------- Summary preview ---------- */}
        <div className="flex flex-col gap-3 lg:col-span-2">
          <ChartCard
            title="Fraud Summary"
            subtitle={`${reportType} · ${dateRange}`}
          >
            <div className="grid grid-cols-1 gap-x-8 sm:grid-cols-2">
              <div>
                <Stat
                  label="Transactions analysed"
                  value={formatCount(summary.transactionCount)}
                />
                <Stat
                  label="Fraud cases"
                  value={formatCount(summary.fraudCount)}
                  emphasis
                />
                <Stat
                  label="Fraud rate"
                  value={formatPercent(summary.fraudRate)}
                />
                <Stat
                  label="Average risk score"
                  value={summary.avgRiskScore.toFixed(1)}
                />
              </div>
              <div>
                <Stat
                  label="Fraud amount"
                  value={formatMoney(summary.fraudAmount)}
                  emphasis
                />
                <Stat
                  label="False positive rate"
                  value={formatPercent(summary.falsePositiveRate)}
                />
                <Stat
                  label="Blocked"
                  value={formatCount(summary.blocked)}
                />
                <Stat
                  label="Under review"
                  value={formatCount(summary.underReview)}
                />
              </div>
            </div>
          </ChartCard>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            <ChartCard title="High-Risk Merchants">
              <ul className="flex flex-col gap-2">
                {fraudByMerchant.slice(0, 4).map((m) => (
                  <li
                    key={m.merchant}
                    className="flex items-center justify-between gap-2 border-b border-ink-100 pb-2 last:border-b-0 last:pb-0"
                  >
                    <span className="truncate text-[12px] text-ink-800">
                      {m.merchant}
                    </span>
                    <RiskBadge score={m.riskScore} />
                  </li>
                ))}
              </ul>
            </ChartCard>

            <ChartCard title="High-Risk Locations">
              <ul className="flex flex-col gap-2">
                {fraudByLocation.slice(0, 4).map((c) => (
                  <li
                    key={c.city}
                    className="flex items-center justify-between gap-2 border-b border-ink-100 pb-2 last:border-b-0 last:pb-0"
                  >
                    <span className="text-[12px] text-ink-800">{c.city}</span>
                    <RiskBadge score={c.riskScore} />
                  </li>
                ))}
              </ul>
            </ChartCard>
          </div>

          <ChartCard
            title="Highest-Value Fraud Cases"
            subtitle="Top five flagged transactions by amount"
          >
            <ul className="flex flex-col gap-2">
              {[...transactions]
                .filter((t) => t.prediction === "Fraud")
                .sort((a, b) => b.amount - a.amount)
                .slice(0, 5)
                .map((t) => (
                  <li
                    key={t.id}
                    className="flex items-center justify-between gap-3 border-b border-ink-100 pb-2 last:border-b-0 last:pb-0"
                  >
                    <div className="min-w-0">
                      <span className="num text-[12px] font-medium text-ink-950">
                        {t.id}
                      </span>
                      <span className="ml-2 truncate text-[11.5px] text-ink-600">
                        {t.merchant} · {t.location}
                      </span>
                    </div>
                    <div className="flex shrink-0 items-center gap-3">
                      <span className="num text-[12px] text-ink-950">
                        {formatAmount(t.amount)}
                      </span>
                      <span className="num text-[11px] text-ink-500">
                        {formatProbability(t.probability)}
                      </span>
                    </div>
                  </li>
                ))}
            </ul>
          </ChartCard>
        </div>
      </div>
    </>
  );
}
