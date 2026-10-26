import { useState, useMemo } from "react";
import PageHeader from "../components/PageHeader";
import ChartCard from "../components/ChartCard";
import SHAPChart from "../components/SHAPChart";
import { RiskBadge, PredictionBadge } from "../components/RiskBadge";
import { SelectFilter } from "../components/FilterBar";
import { transactions, DECISION_THRESHOLD } from "../data/transactions";
import { getShapExplanation, SHAP_FEATURES } from "../data/shap";
import {
  formatAmount,
  formatProbability,
  formatTimestamp,
} from "../lib/format";

/*
  THE EXPLAINABILITY PAGE

  WHAT SHAP IS, for the project report:

  The model outputs a number — say 0.94 probability of fraud. On its own
  that is unusable by an analyst, who has to justify blocking a
  customer's card. SHAP answers "which features produced that number,
  and by how much?"

  It works by comparing the model's output with and without each
  feature, across many combinations, and attributing the difference.
  The result is one signed value per feature. They sum to the gap
  between this prediction and the model's base value. Positive pushes
  toward fraud, negative pulls toward legitimate.

  The values here are exact, computed by TreeExplainer against the
  trained XGBoost component during the training run and exported into
  src/data/shap.js. They are in log-odds, which is why they do not sum
  to the probability — that is the standard SHAP convention.
*/

/* Picks out the single most influential feature, for the summary line. */
function topDriver(contributions) {
  return contributions.find((c) => c.direction === "fraud") ?? contributions[0];
}

export default function Explainability() {
  /* Default to the highest-risk transaction — the one most worth explaining. */
  const highest = useMemo(
    () => [...transactions].sort((a, b) => b.riskScore - a.riskScore)[0],
    []
  );
  const [selectedId, setSelectedId] = useState(highest.id);

  const txn = transactions.find((t) => t.id === selectedId) ?? highest;
  const contributions = getShapExplanation(txn);
  const driver = topDriver(contributions);

  /* Sum of contributions, shown so the arithmetic is transparent. */
  const total = contributions.reduce((sum, c) => sum + c.value, 0);

  return (
    <>
      <PageHeader
        title="Prediction Explainability"
        description="SHAP feature contributions behind a single prediction, computed with TreeExplainer from the trained model."
        actions={
          <div className="w-56">
            <SelectFilter
              label="Transaction"
              value={selectedId}
              onChange={setSelectedId}
              options={transactions.map((t) => t.id)}
            />
          </div>
        }
      />

      {/* ---------- Transaction summary ---------- */}
      <div className="panel mb-3 grid grid-cols-2 gap-x-4 gap-y-3 px-3.5 py-3 md:grid-cols-6">
        <div>
          <div className="eyebrow">Transaction ID</div>
          <div className="num mt-0.5 text-[13px] font-medium text-ink-950">
            {txn.id}
          </div>
        </div>
        <div>
          <div className="eyebrow">Amount</div>
          <div className="num mt-0.5 text-[13px] text-ink-950">
            {formatAmount(txn.amount)}
          </div>
        </div>
        <div>
          <div className="eyebrow">Date / time</div>
          <div className="num mt-0.5 text-[13px] text-ink-950">
            {formatTimestamp(txn.timestamp)}
          </div>
        </div>
        <div>
          <div className="eyebrow">Prediction</div>
          <div className="mt-1">
            <PredictionBadge prediction={txn.prediction} />
          </div>
        </div>
        <div>
          <div className="eyebrow">Fraud probability</div>
          <div className="num mt-0.5 text-[13px] font-medium text-plum-700">
            {formatProbability(txn.probability)}
          </div>
        </div>
        <div>
          <div className="eyebrow">Risk score</div>
          <div className="mt-1">
            <RiskBadge score={txn.riskScore} />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-3 lg:grid-cols-3">
        {/* ---------- Contribution chart ---------- */}
        <div className="lg:col-span-2">
          <ChartCard
            title="Feature Contributions"
            subtitle={`${txn.merchant} · ${txn.location} · ${txn.channel}`}
          >
            <SHAPChart contributions={contributions} />

            <div className="mt-4 flex items-center justify-between border-t border-ink-200 pt-2.5 text-[11.5px]">
              <span className="text-ink-600">
                Net contribution toward fraud
              </span>
              <span className="num font-medium text-ink-950">
                {total > 0 ? "+" : ""}
                {total.toFixed(2)}
              </span>
            </div>
          </ChartCard>
        </div>

        {/* ---------- Interpretation ---------- */}
        <div className="flex flex-col gap-3">
          <ChartCard title="Reading This Chart">
            <div className="flex flex-col gap-3 text-[12px] leading-relaxed text-ink-700">
              <p>
                Each bar is one feature. Bars to the right pushed this
                transaction toward a fraud prediction. Bars to the left pulled
                it toward legitimate. Bar length is the size of that effect.
              </p>
              <p>
                The strongest driver here is{" "}
                <span className="font-semibold text-ink-950">
                  {driver.label}
                </span>{" "}
                at{" "}
                <span className="num font-medium text-plum-700">
                  {driver.value > 0 ? "+" : ""}
                  {driver.value.toFixed(2)}
                </span>
                .
              </p>
              <p>
                The model predicts fraud when probability reaches the decision
                threshold of{" "}
                <span className="num font-medium text-ink-950">
                  {formatProbability(DECISION_THRESHOLD)}
                </span>
                . That threshold comes from the threshold optimisation stage,
                which balances catching fraud against false positives.
              </p>
            </div>
          </ChartCard>

          <ChartCard
            title="Feature Families"
            subtitle="Groups from the feature engineering stage"
          >
            <ul className="flex flex-col gap-2">
              {SHAP_FEATURES.map((feature) => (
                <li
                  key={feature.key}
                  className="flex items-baseline justify-between gap-3 border-b border-ink-100 pb-2 last:border-b-0 last:pb-0"
                >
                  <span className="text-[12px] text-ink-800">
                    {feature.label}
                  </span>
                  <span className="eyebrow shrink-0">{feature.family}</span>
                </li>
              ))}
            </ul>
          </ChartCard>
        </div>
      </div>
    </>
  );
}
