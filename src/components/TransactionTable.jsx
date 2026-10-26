import { ChevronUp, ChevronDown, ChevronsUpDown } from "lucide-react";
import { RiskBadge, PredictionBadge } from "./RiskBadge";
import {
  formatAmount,
  formatProbability,
  formatTimestamp,
} from "../lib/format";

/*
  The full transaction table.

  Sorting state lives in the parent page, not here, so the page can show
  a result count and reset everything together. This component receives
  the already-sorted rows and reports clicks on the headers upward.

  Columns are defined as data at the top. Adding one means adding an
  entry there plus a cell in the row, rather than editing markup in
  three places.
*/

const COLUMNS = [
  { key: "id", label: "Transaction ID", align: "left", sortable: true },
  { key: "timestamp", label: "Date / Time", align: "left", sortable: true },
  { key: "amount", label: "Amount", align: "right", sortable: true },
  { key: "merchant", label: "Merchant", align: "left", sortable: true },
  { key: "location", label: "Location", align: "left", sortable: true },
  { key: "actual", label: "Actual Label", align: "left", sortable: true },
  { key: "prediction", label: "Prediction", align: "left", sortable: true },
  { key: "probability", label: "Probability", align: "right", sortable: true },
  { key: "riskScore", label: "Risk Score", align: "right", sortable: true },
  { key: "status", label: "Status", align: "left", sortable: true },
];

export default function TransactionTable({
  rows,
  sortKey,
  sortDirection,
  onSort,
  onSelect,
  selectedId,
}) {
  return (
    <div className="panel overflow-x-auto">
      <table className="w-full min-w-[1080px] border-collapse">
        <thead>
          <tr className="border-b border-ink-200 bg-ink-50">
            {COLUMNS.map((col) => {
              const isSorted = sortKey === col.key;
              return (
                <th
                  key={col.key}
                  className={[
                    "px-3 py-2",
                    col.align === "right" ? "text-right" : "text-left",
                  ].join(" ")}
                >
                  <button
                    onClick={() => col.sortable && onSort(col.key)}
                    disabled={!col.sortable}
                    className={[
                      "eyebrow inline-flex items-center gap-1 font-semibold",
                      col.align === "right" ? "flex-row-reverse" : "",
                      col.sortable
                        ? "hover:text-ink-950 cursor-pointer"
                        : "cursor-default",
                      isSorted ? "!text-plum-700" : "",
                    ].join(" ")}
                  >
                    {col.label}
                    {col.sortable &&
                      (isSorted ? (
                        sortDirection === "asc" ? (
                          <ChevronUp size={11} />
                        ) : (
                          <ChevronDown size={11} />
                        )
                      ) : (
                        <ChevronsUpDown size={11} className="opacity-30" />
                      ))}
                  </button>
                </th>
              );
            })}
          </tr>
        </thead>

        <tbody>
          {rows.length === 0 && (
            <tr>
              <td
                colSpan={COLUMNS.length}
                className="px-3 py-10 text-center text-[12.5px] text-ink-500"
              >
                No transactions match these filters.
              </td>
            </tr>
          )}

          {rows.map((txn) => (
            <tr
              key={txn.id}
              onClick={() => onSelect(txn)}
              className={[
                "cursor-pointer border-b border-ink-100 last:border-b-0",
                selectedId === txn.id
                  ? "bg-plum-50"
                  : "hover:bg-plum-50/60",
              ].join(" ")}
            >
              <td className="num px-3 py-2 text-[12px] font-medium text-ink-950">
                {txn.id}
              </td>
              <td className="num px-3 py-2 text-[11.5px] text-ink-600">
                {formatTimestamp(txn.timestamp)}
              </td>
              <td className="num px-3 py-2 text-right text-[12px] font-medium text-ink-950">
                {formatAmount(txn.amount)}
              </td>
              <td className="px-3 py-2 text-[12px] text-ink-800">
                {txn.merchant}
              </td>
              <td className="px-3 py-2 text-[12px] text-ink-600">
                {txn.location}
              </td>
              {/* The dataset's ground-truth label. Real data. */}
              <td className="px-3 py-2">
                {txn.actual ? (
                  <PredictionBadge prediction={txn.actual} />
                ) : (
                  <span className="text-[11px] text-ink-300">—</span>
                )}
              </td>
              {/* The ensemble's prediction for this transaction. */}
              <td className="px-3 py-2">
                <PredictionBadge prediction={txn.prediction} />
              </td>
              <td className="num px-3 py-2 text-right text-[12px] text-ink-800">
                {formatProbability(txn.probability)}
              </td>
              <td className="px-3 py-2 text-right">
                <RiskBadge score={txn.riskScore} />
              </td>
              <td className="px-3 py-2 text-[11.5px] text-ink-600">
                {txn.status}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
