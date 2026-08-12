import { ArrowUpRight } from "lucide-react";
import { RiskBadge, PredictionBadge } from "./RiskBadge";
import {
  formatRupees,
  formatProbability,
  formatTimestamp,
} from "../lib/format";
import { recentHighRisk } from "../data/transactions";

/*
  The queue: the highest-scoring transactions, most urgent first.

  Table conventions that matter in financial tooling:
   - numbers are right-aligned and monospaced, so digits line up and
     you can compare magnitudes by eye without reading every figure
   - IDs are monospaced too, because they get read character by character
   - the whole row is clickable, not just a link at the end

  The full table with search, filters and a detail panel is Step 5.
  This is the cut-down version that answers "what needs attention now?"
*/
export default function HighRiskTable() {
  return (
    <div className="-mx-3.5 -my-3.5 overflow-x-auto">
      <table className="w-full min-w-[720px] border-collapse">
        <thead>
          <tr className="border-b border-ink-200 bg-ink-50">
            {[
              { label: "Transaction", align: "left" },
              { label: "Time", align: "left" },
              { label: "Amount", align: "right" },
              { label: "Merchant", align: "left" },
              { label: "Location", align: "left" },
              { label: "Prediction", align: "left" },
              { label: "Probability", align: "right" },
              { label: "Risk", align: "right" },
            ].map((col) => (
              <th
                key={col.label}
                className={[
                  "eyebrow px-3 py-2 font-semibold",
                  col.align === "right" ? "text-right" : "text-left",
                ].join(" ")}
              >
                {col.label}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {recentHighRisk.map((txn) => (
            <tr
              key={txn.id}
              className="group cursor-pointer border-b border-ink-100 last:border-b-0 hover:bg-plum-50/60"
            >
              <td className="px-3 py-2">
                <span className="num flex items-center gap-1 text-[12px] font-medium text-ink-950">
                  {txn.id}
                  <ArrowUpRight
                    size={11}
                    className="text-plum-600 opacity-0 transition-opacity group-hover:opacity-100"
                  />
                </span>
              </td>
              <td className="num px-3 py-2 text-[11.5px] text-ink-600">
                {formatTimestamp(txn.timestamp)}
              </td>
              <td className="num px-3 py-2 text-right text-[12px] font-medium text-ink-950">
                {formatRupees(txn.amount)}
              </td>
              <td className="px-3 py-2 text-[12px] text-ink-800">
                {txn.merchant}
              </td>
              <td className="px-3 py-2 text-[12px] text-ink-600">
                {txn.location}
              </td>
              <td className="px-3 py-2">
                <PredictionBadge prediction={txn.prediction} />
              </td>
              <td className="num px-3 py-2 text-right text-[12px] text-ink-800">
                {formatProbability(txn.probability)}
              </td>
              <td className="px-3 py-2 text-right">
                <RiskBadge score={txn.riskScore} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
