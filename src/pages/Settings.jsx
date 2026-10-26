import { useState } from "react";
import PageHeader from "../components/PageHeader";
import ChartCard from "../components/ChartCard";
import { RISK_BANDS } from "../data/riskBands";
import { systemStatus, pipelineStages } from "../data/systemStatus";
import { DECISION_THRESHOLD } from "../data/transactions";
import { formatProbability } from "../lib/format";

/*
  THE SETTINGS PAGE

  Deliberately small. The only genuinely useful thing here for a review
  is the pipeline status table — it makes the architecture legible and
  states plainly which stages exist and which do not.

  Nothing on this page changes how transactions are scored. The risk
  threshold shown is a display reference, not a control: moving the real
  decision threshold is a modelling decision made during threshold
  optimisation, not something an analyst should adjust from a settings
  screen.
*/

function Toggle({ label, description, checked, onChange }) {
  return (
    <label className="flex cursor-pointer items-start justify-between gap-4 border-b border-ink-100 py-2.5 last:border-b-0">
      <span className="min-w-0">
        <span className="block text-[12.5px] text-ink-950">{label}</span>
        {description && (
          <span className="mt-0.5 block text-[11px] leading-tight text-ink-500">
            {description}
          </span>
        )}
      </span>
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        className="mt-0.5 h-3.5 w-3.5 shrink-0 accent-[#65495A]"
      />
    </label>
  );
}

export default function Settings() {
  const [denseTables, setDenseTables] = useState(true);
  const [showProbability, setShowProbability] = useState(true);
  const [highlightPeak, setHighlightPeak] = useState(true);

  return (
    <>
      <PageHeader
        title="Settings"
        description="Display preferences for this workspace. Nothing here changes how transactions are scored."
      />

      <div className="grid grid-cols-1 gap-3 lg:grid-cols-2">
        {/* ---------- Pipeline status ---------- */}
        <div className="lg:col-span-2">
          <ChartCard
            title="Pipeline Status"
            subtitle="Stages from the system architecture and their current state"
          >
            <div className="overflow-x-auto">
              <table className="w-full min-w-[420px] border-collapse">
                <thead>
                  <tr className="border-b border-ink-200">
                    <th className="eyebrow px-0 py-1.5 text-left font-semibold">
                      Stage
                    </th>
                    <th className="eyebrow px-0 py-1.5 text-right font-semibold">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {pipelineStages.map((stage, index) => (
                    <tr
                      key={stage.stage}
                      className="border-b border-ink-100 last:border-b-0"
                    >
                      <td className="py-2 text-[12.5px] text-ink-950">
                        <span className="num mr-2 text-[11px] text-ink-400">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        {stage.stage}
                      </td>
                      <td className="py-2 text-right">
                        <span
                          className={[
                            "inline-block border px-1.5 py-0.5 text-[10px] font-medium",
                            stage.status === "Trained" ||
                            stage.status === "Computed"
                              ? "border-plum-300 bg-plum-50 text-plum-700"
                              : "border-ink-200 bg-ink-50 text-ink-600",
                          ].join(" ")}
                        >
                          {stage.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </ChartCard>
        </div>

        {/* ---------- Dashboard preferences ---------- */}
        <ChartCard title="Dashboard Preferences">
          <Toggle
            label="Dense table rows"
            description="Fit more transactions on screen at once"
            checked={denseTables}
            onChange={setDenseTables}
          />
          <Toggle
            label="Show fraud probability"
            description="Display the raw probability alongside the risk score"
            checked={showProbability}
            onChange={setShowProbability}
          />
          <Toggle
            label="Highlight peak fraud hours"
            description="Emphasise the 22:00–04:00 window in hourly charts"
            checked={highlightPeak}
            onChange={setHighlightPeak}
          />
        </ChartCard>

        {/* ---------- Risk thresholds ---------- */}
        <ChartCard
          title="Risk Threshold Display"
          subtitle="Reference values — not editable from this screen"
        >
          <ul className="flex flex-col">
            {RISK_BANDS.map((band) => (
              <li
                key={band.id}
                className="flex items-center justify-between border-b border-ink-100 py-2.5 last:border-b-0"
              >
                <span className="text-[12.5px] text-ink-950">{band.label}</span>
                <span className="num text-[12px] text-ink-600">
                  {band.min} – {band.max}
                </span>
              </li>
            ))}
          </ul>

          <div className="mt-3 border-t border-ink-200 pt-3">
            <div className="flex items-center justify-between">
              <span className="text-[12.5px] text-ink-950">
                Decision threshold
              </span>
              <span className="num text-[12px] font-medium text-plum-700">
                {formatProbability(DECISION_THRESHOLD)}
              </span>
            </div>
            <p className="mt-1.5 text-[11px] leading-relaxed text-ink-500">
              Chosen by the threshold optimisation stage to maximise F1 on
              the validation split. It is a modelling output, not an
              analyst-adjustable control.
            </p>
          </div>
        </ChartCard>

        {/* ---------- Theme ---------- */}
        <ChartCard title="Theme">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-[12.5px] text-ink-950">Institutional</div>
              <div className="mt-0.5 text-[11px] text-ink-500">
                The only theme in this build
              </div>
            </div>
            <div className="flex gap-1">
              {["#E5E3E2", "#8A6B76", "#65495A", "#2B292B", "#111111"].map(
                (color) => (
                  <span
                    key={color}
                    className="h-5 w-5 border border-ink-300"
                    style={{ backgroundColor: color }}
                    title={color}
                  />
                )
              )}
            </div>
          </div>
        </ChartCard>

        {/* ---------- Data refresh ---------- */}
        <ChartCard title="Data Refresh">
          <ul className="flex flex-col">
            {[
              ["Data source", systemStatus.dataSource],
              ["Environment", systemStatus.environment],
              ["Last refresh", systemStatus.lastRefresh],
              ["Business intelligence", systemStatus.biStatus],
            ].map(([label, value]) => (
              <li
                key={label}
                className="flex items-center justify-between gap-3 border-b border-ink-100 py-2.5 last:border-b-0"
              >
                <span className="text-[12.5px] text-ink-600">{label}</span>
                <span className="num text-[11.5px] text-ink-950">{value}</span>
              </li>
            ))}
          </ul>
        </ChartCard>
      </div>
    </>
  );
}
