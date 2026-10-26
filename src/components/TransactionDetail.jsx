import { useEffect } from "react";
import { X } from "lucide-react";
import { RiskBadge, PredictionBadge } from "./RiskBadge";
import SHAPChart from "./SHAPChart";
import { getShapExplanation } from "../data/shap";
import { DECISION_THRESHOLD } from "../data/transactions";
import {
  formatAmount,
  formatProbability,
  formatTimestamp,
} from "../lib/format";

/*
  The investigation panel. Slides in from the right when a row is clicked.

  A side panel rather than a full page, deliberately: the analyst keeps
  the queue visible behind it and can move through suspicious items
  without losing their place.

  Everything here comes from the scored transaction plus its SHAP
  breakdown, both produced by the training run and read from
  src/data/. The panel contains no scoring logic of its own.
*/

/* A labelled value, used throughout the panel. */
function Field({ label, value, mono = false }) {
  return (
    <div>
      <div className="eyebrow">{label}</div>
      <div
        className={[
          "mt-0.5 text-[12.5px] text-ink-950",
          mono ? "num" : "",
        ].join(" ")}
      >
        {value}
      </div>
    </div>
  );
}

export default function TransactionDetail({ transaction, onClose }) {
  /* Escape closes the panel. Small thing, but any analyst will try it. */
  useEffect(() => {
    if (!transaction) return;
    const handleKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [transaction, onClose]);

  if (!transaction) return null;

  const contributions = getShapExplanation(transaction);
  const hour = transaction.timestamp.split(" ")[1];

  return (
    <>
      {/* Dimmed backdrop. Clicking it closes the panel. */}
      <div
        className="fixed inset-0 z-40 bg-ink-950/30"
        onClick={onClose}
        aria-hidden="true"
      />

      <aside className="fixed inset-y-0 right-0 z-50 flex w-full max-w-[460px] flex-col border-l border-ink-300 bg-white shadow-xl">
        {/* ---------- Header ---------- */}
        <header className="flex items-start justify-between gap-3 border-b border-ink-200 px-4 py-3">
          <div>
            <div className="eyebrow">Transaction</div>
            <div className="num text-[15px] font-semibold text-ink-950">
              {transaction.id}
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-ink-500 hover:text-ink-950"
            aria-label="Close panel"
          >
            <X size={17} />
          </button>
        </header>

        <div className="flex-1 overflow-y-auto">
          {/* ---------- Model output ---------- */}
          <section className="border-b border-ink-200 bg-ink-50 px-4 py-3.5">
            <div className="eyebrow mb-2">Model output</div>
            <div className="grid grid-cols-3 gap-3">
              <div>
                <div className="text-[10px] text-ink-500">Prediction</div>
                <div className="mt-1">
                  <PredictionBadge prediction={transaction.prediction} />
                </div>
              </div>
              <div>
                <div className="text-[10px] text-ink-500">Probability</div>
                <div className="num mt-1 text-[15px] font-medium text-ink-950">
                  {formatProbability(transaction.probability)}
                </div>
              </div>
              <div>
                <div className="text-[10px] text-ink-500">Risk score</div>
                <div className="num mt-1 text-[15px] font-medium text-ink-950">
                  {transaction.riskScore}
                  <span className="text-[11px] text-ink-400">/100</span>
                </div>
              </div>
            </div>

            {transaction.actual && (
              <div className="mt-3 flex items-center justify-between border-t border-ink-200 pt-2.5">
                <span className="text-[10px] text-ink-500">
                  Actual label (from dataset)
                </span>
                <PredictionBadge prediction={transaction.actual} />
              </div>
            )}

            <div className="mt-3 flex items-center justify-between border-t border-ink-200 pt-2.5">
              <RiskBadge score={transaction.riskScore} />
              <span className="text-[11px] text-ink-500">
                Decision threshold{" "}
                <span className="num text-ink-800">
                  {formatProbability(DECISION_THRESHOLD)}
                </span>
              </span>
            </div>
          </section>

          {/* ---------- Transaction details ---------- */}
          <section className="border-b border-ink-200 px-4 py-3.5">
            <div className="eyebrow mb-2.5">Transaction details</div>
            <div className="grid grid-cols-2 gap-x-4 gap-y-3">
              <Field
                label="Amount"
                value={formatAmount(transaction.amount)}
                mono
              />
              <Field
                label="Date / time"
                value={formatTimestamp(transaction.timestamp)}
                mono
              />
              <Field label="Merchant" value={transaction.merchant} />
              <Field label="Location" value={transaction.location} />
              <Field label="Channel" value={transaction.channel} />
              <Field label="Status" value={transaction.status} />
            </div>
          </section>

          {/* ---------- Behavioural features ---------- */}
          <section className="border-b border-ink-200 px-4 py-3.5">
            <div className="eyebrow mb-2.5">Feature signals and component scores</div>
            <div className="grid grid-cols-3 gap-3">
              <Field label="Hour of day" value={hour} mono />
              <Field
                label="Distance to merchant"
                value={
                  transaction.distanceKm !== undefined
                    ? `${transaction.distanceKm} km`
                    : "—"
                }
                mono
              />
              <Field
                label="Txns in last 24h"
                value={transaction.txnsLast24h ?? "—"}
                mono
              />
              <Field
                label="Hours since last"
                value={
                  transaction.hoursSinceLast !== undefined
                    ? `${transaction.hoursSinceLast}h`
                    : "—"
                }
                mono
              />
              <Field
                label="XGBoost"
                value={
                  transaction.xgbProbability !== undefined
                    ? formatProbability(transaction.xgbProbability)
                    : "—"
                }
                mono
              />
              <Field
                label="Autoencoder"
                value={
                  transaction.anomalyScore !== undefined
                    ? formatProbability(transaction.anomalyScore)
                    : "—"
                }
                mono
              />
            </div>
          </section>

          {/* ---------- Explanation ---------- */}
          <section className="px-4 py-3.5">
            <div className="eyebrow mb-2.5">
              Why this score — feature contributions
            </div>
            <SHAPChart contributions={contributions} compact />
            <p className="mt-3 border-t border-ink-200 pt-2.5 text-[11px] leading-relaxed text-ink-500">
              SHAP values are in log-odds. They sum to the gap between this
              prediction and the model&rsquo;s base value, not to the
              probability.
            </p>
          </section>
        </div>

        {/* ---------- Actions ---------- */}
        <footer className="flex gap-2 border-t border-ink-200 px-4 py-3">
          <button className="flex-1 border border-plum-600 bg-plum-600 px-3 py-1.5 text-[12px] font-medium text-white hover:bg-plum-700">
            Block transaction
          </button>
          <button className="flex-1 border border-ink-300 bg-white px-3 py-1.5 text-[12px] font-medium text-ink-800 hover:bg-ink-50">
            Mark legitimate
          </button>
        </footer>
      </aside>
    </>
  );
}
