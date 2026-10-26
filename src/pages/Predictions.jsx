import { useState, useEffect } from "react";
import { Loader2, Crosshair, RotateCcw, AlertTriangle } from "lucide-react";
import PageHeader from "../components/PageHeader";
import { RiskBadge, PredictionBadge } from "../components/RiskBadge";
import SHAPChart from "../components/SHAPChart";
import { checkHealth, scoreTransaction, fetchOptions } from "../lib/api";
import { formatProbability, formatAmount, CURRENCY } from "../lib/format";

/*
  THE PREDICTIONS PAGE

  Submits a transaction to the inference service, which runs it through
  the same pipeline the dashboard was built from: feature engineering,
  the hybrid ensemble, the optimised threshold, and SHAP.

  The component holds no scoring logic of its own. It sends fields and
  renders what comes back — which is why retraining the model changes
  the answers here without a line of frontend code changing.
*/

const DEFAULT_FORM = {
  amount: "890",
  hour: "02",
  category: "",
  merchant: "",
  state: "",
  city: "Dallas",
  day_of_week: "5",
  age_years: "38",
  distance_km: "180",
  hours_since_last_txn: "3",
  txns_last_24h: "4",
};

const inputClass =
  "h-8 border border-ink-200 bg-white px-2 text-[12px] text-ink-950 focus:border-plum-400 focus:outline-none";

function Field({ label, hint, children }) {
  return (
    <label className="flex flex-col gap-1">
      <span className="eyebrow">{label}</span>
      {children}
      {hint && <span className="text-[10.5px] text-ink-500">{hint}</span>}
    </label>
  );
}

/* Shows how each of the three models scored, before fusion. */
function ComponentScores({ scores, weights }) {
  const rows = [
    { key: "xgboost", label: "XGBoost" },
    { key: "catboost", label: "CatBoost" },
    { key: "autoencoder", label: "Autoencoder" },
  ];
  return (
    <div className="mt-3 border-t border-ink-200 pt-2.5">
      <div className="eyebrow mb-1.5">Component scores before fusion</div>
      {rows.map((row) => (
        <div
          key={row.key}
          className="flex items-center justify-between py-0.5 text-[11.5px]"
        >
          <span className="text-ink-600">{row.label}</span>
          <span className="num text-ink-950">
            {(scores[row.key] * 100).toFixed(1)}%
          </span>
        </div>
      ))}
    </div>
  );
}

export default function Predictions() {
  const [form, setForm] = useState(DEFAULT_FORM);
  const [result, setResult] = useState(null);
  const [isScoring, setIsScoring] = useState(false);
  const [error, setError] = useState(null);
  const [health, setHealth] = useState(null);
  const [options, setOptions] = useState(null);

  /* Check the service once on load, and pull the merchant, category and
     state lists the model was actually trained on — so the form can only
     submit values the model recognises. */
  useEffect(() => {
    let active = true;
    checkHealth().then((status) => {
      if (!active) return;
      setHealth(status);
      if (status.status === "ready") {
        fetchOptions()
          .then((opts) => {
            if (!active) return;
            setOptions(opts);
            setForm((f) => ({
              ...f,
              merchant: f.merchant || opts.merchants[0] || "",
              category: f.category || opts.categories[0] || "",
              state: f.state || opts.states[0] || "",
            }));
          })
          .catch(() => {});
      }
    });
    return () => {
      active = false;
    };
  }, []);

  const update = (key, value) => setForm((f) => ({ ...f, [key]: value }));
  const isOffline = health && health.status !== "ready";

  async function handleAnalyze() {
    setIsScoring(true);
    setError(null);
    setResult(null);
    try {
      const scored = await scoreTransaction({
        amount: Number(form.amount),
        hour: Number(form.hour),
        merchant: form.merchant,
        category: form.category,
        city: form.city,
        state: form.state,
        day_of_week: Number(form.day_of_week),
        age_years: Number(form.age_years),
        distance_km: Number(form.distance_km),
        hours_since_last_txn: Number(form.hours_since_last_txn),
        txns_last_24h: Number(form.txns_last_24h),
      });
      setResult(scored);
    } catch (err) {
      setError(err.message || "Could not reach the scoring service.");
    } finally {
      setIsScoring(false);
    }
  }

  return (
    <>
      <PageHeader
        title="Transaction Prediction"
        description="Score a single transaction through the hybrid ensemble and see the feature contributions behind the result."
        actions={
          <button
            onClick={() => {
              setForm((f) => ({ ...DEFAULT_FORM, merchant: f.merchant, category: f.category, state: f.state }));
              setResult(null);
              setError(null);
            }}
            className="flex items-center gap-1.5 border border-ink-300 bg-white px-2.5 py-1.5 text-[12px] font-medium text-ink-700 hover:bg-ink-50"
          >
            <RotateCcw size={12} />
            Reset
          </button>
        }
      />

      {isOffline && (
        <div className="mb-3 flex gap-2.5 border border-plum-100 bg-plum-50 px-3 py-2.5">
          <AlertTriangle size={14} className="mt-px shrink-0 text-plum-600" />
          <div className="text-[11.5px] leading-relaxed text-plum-900">
            <span className="font-semibold">Scoring service not reachable. </span>
            Live prediction needs the inference API running. Start it with{" "}
            <code className="num bg-white px-1">
              uvicorn cresense.api:app --port 8000
            </code>{" "}
            from the <code className="num bg-white px-1">backend</code> folder.
            Every other page works without it.
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 gap-3 lg:grid-cols-5">
        {/* ---------- Input form ---------- */}
        <div className="panel lg:col-span-3">
          <header className="border-b border-ink-200 px-3.5 py-2.5">
            <h3 className="text-[13px] font-semibold text-ink-950">
              Transaction Input
            </h3>
            <p className="mt-0.5 text-[11px] text-ink-500">
              Fields map to the engineered features the model was trained on
            </p>
          </header>

          <div className="grid grid-cols-1 gap-3.5 p-3.5 sm:grid-cols-2">
            <Field label={`Transaction Amount (${CURRENCY.symbol})`}>
              <input
                type="number"
                value={form.amount}
                onChange={(e) => update("amount", e.target.value)}
                className={`${inputClass} num`}
              />
            </Field>

            <Field label="Transaction Hour" hint="24-hour clock">
              <select
                value={form.hour}
                onChange={(e) => update("hour", e.target.value)}
                className={inputClass}
              >
                {Array.from({ length: 24 }, (_, i) =>
                  String(i).padStart(2, "0")
                ).map((h) => (
                  <option key={h} value={h}>
                    {h}:00
                  </option>
                ))}
              </select>
            </Field>

            <Field label="Merchant">
              <select
                value={form.merchant}
                onChange={(e) => update("merchant", e.target.value)}
                className={inputClass}
                disabled={!options}
              >
                {(options?.merchants ?? []).map((m) => (
                  <option key={m}>{m}</option>
                ))}
              </select>
            </Field>

            <Field label="Merchant Category">
              <select
                value={form.category}
                onChange={(e) => update("category", e.target.value)}
                className={inputClass}
                disabled={!options}
              >
                {(options?.categories ?? []).map((c) => (
                  <option key={c}>{c}</option>
                ))}
              </select>
            </Field>

            <Field label="State">
              <select
                value={form.state}
                onChange={(e) => update("state", e.target.value)}
                className={inputClass}
                disabled={!options}
              >
                {(options?.states ?? []).map((s) => (
                  <option key={s}>{s}</option>
                ))}
              </select>
            </Field>

            <Field label="Day of Week">
              <select
                value={form.day_of_week}
                onChange={(e) => update("day_of_week", e.target.value)}
                className={inputClass}
              >
                {["Monday", "Tuesday", "Wednesday", "Thursday", "Friday",
                  "Saturday", "Sunday"].map((d, i) => (
                  <option key={d} value={i}>
                    {d}
                  </option>
                ))}
              </select>
            </Field>

            <Field
              label="Distance to Merchant (km)"
              hint="Between cardholder home and merchant"
            >
              <input
                type="number"
                value={form.distance_km}
                onChange={(e) => update("distance_km", e.target.value)}
                className={`${inputClass} num`}
              />
            </Field>

            <Field label="Cardholder Age">
              <input
                type="number"
                value={form.age_years}
                onChange={(e) => update("age_years", e.target.value)}
                className={`${inputClass} num`}
              />
            </Field>

            <Field
              label="Hours Since Last Transaction"
              hint="On the same card"
            >
              <input
                type="number"
                value={form.hours_since_last_txn}
                onChange={(e) => update("hours_since_last_txn", e.target.value)}
                className={`${inputClass} num`}
              />
            </Field>

            <Field
              label="Transactions in Last 24h"
              hint="Velocity signal"
            >
              <input
                type="number"
                value={form.txns_last_24h}
                onChange={(e) => update("txns_last_24h", e.target.value)}
                className={`${inputClass} num`}
              />
            </Field>
          </div>

          <footer className="border-t border-ink-200 px-3.5 py-3">
            <button
              onClick={handleAnalyze}
              disabled={isScoring || isOffline}
              className="flex items-center gap-2 border border-plum-600 bg-plum-600 px-4 py-2 text-[12.5px] font-medium text-white hover:bg-plum-700 disabled:opacity-50"
            >
              {isScoring ? (
                <Loader2 size={13} className="animate-spin" />
              ) : (
                <Crosshair size={13} />
              )}
              {isScoring ? "Scoring…" : "Analyze Transaction"}
            </button>
          </footer>
        </div>

        {/* ---------- Result ---------- */}
        <div className="flex flex-col gap-3 lg:col-span-2">
          <div className="panel">
            <header className="flex items-baseline justify-between border-b border-ink-200 px-3.5 py-2.5">
              <h3 className="text-[13px] font-semibold text-ink-950">
                Prediction Result
              </h3>
              {health?.scoringModel && (
                <span className="text-[10.5px] text-ink-500">
                  {health.scoringModel}
                </span>
              )}
            </header>

            {!result && !isScoring && !error && (
              <div className="px-3.5 py-8 text-center text-[12px] text-ink-500">
                Fill in the form and select Analyze Transaction.
              </div>
            )}

            {isScoring && (
              <div className="flex items-center justify-center gap-2 px-3.5 py-8 text-[12px] text-ink-500">
                <Loader2 size={13} className="animate-spin" />
                Running the ensemble…
              </div>
            )}

            {error && !isScoring && (
              <div className="px-3.5 py-5 text-[12px] text-plum-700">
                {error}
              </div>
            )}

            {result && !isScoring && (
              <div className="p-3.5">
                <div className="flex items-baseline justify-between">
                  <div className="eyebrow">Prediction</div>
                  <PredictionBadge prediction={result.prediction} />
                </div>

                <div className="mt-3 grid grid-cols-2 gap-3 border-t border-ink-200 pt-3">
                  <div>
                    <div className="eyebrow">Fraud probability</div>
                    <div className="num mt-1 text-[22px] font-medium leading-none text-plum-700">
                      {formatProbability(result.probability)}
                    </div>
                  </div>
                  <div>
                    <div className="eyebrow">Risk score</div>
                    <div className="num mt-1 text-[22px] font-medium leading-none text-ink-950">
                      {result.riskScore}
                      <span className="text-[12px] text-ink-400">/100</span>
                    </div>
                  </div>
                </div>

                <div className="mt-3 flex items-center justify-between border-t border-ink-200 pt-2.5">
                  <RiskBadge score={result.riskScore} showScore={false} />
                  <span className="text-[11px] text-ink-500">
                    Confidence{" "}
                    <span className="font-medium text-ink-950">
                      {result.confidence}
                    </span>
                  </span>
                </div>

                <div className="mt-2 flex items-center justify-between text-[11px] text-ink-500">
                  <span>Decision threshold</span>
                  <span className="num text-ink-800">
                    {formatProbability(result.threshold)}
                  </span>
                </div>

                <ComponentScores scores={result.componentScores} />

                <div className="mt-3 border-t border-ink-200 pt-2.5 text-[11px] text-ink-500">
                  {formatAmount(Number(form.amount))} · {form.merchant} ·{" "}
                  {form.city}, {form.state}
                </div>
              </div>
            )}
          </div>

          {result && !isScoring && result.contributions?.length > 0 && (
            <div className="panel">
              <header className="border-b border-ink-200 px-3.5 py-2.5">
                <h3 className="text-[13px] font-semibold text-ink-950">
                  Why was this transaction flagged?
                </h3>
                <p className="mt-0.5 text-[11px] text-ink-500">
                  SHAP contributions, in log-odds
                </p>
              </header>
              <div className="p-3.5">
                <SHAPChart contributions={result.contributions} compact />
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
