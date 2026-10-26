import { useState, useMemo } from "react";
import PageHeader from "../components/PageHeader";
import FilterBar, {
  SearchInput,
  SelectFilter,
  ToggleGroup,
} from "../components/FilterBar";
import TransactionTable from "../components/TransactionTable";
import TransactionDetail from "../components/TransactionDetail";
import {
  transactions,
  merchantOptions,
  locationOptions,
} from "../data/transactions";
import { getRiskBand } from "../data/riskBands";

/*
  THE TRANSACTIONS PAGE — the analyst's working screen.

  This page owns all the filter and sort state. The components below it
  (FilterBar, TransactionTable, TransactionDetail) hold no state of their
  own: they display what they are given and report clicks upward. That
  pattern is called "lifting state up", and it is why the result count,
  the table and the reset button can never get out of step.

  useMemo re-runs the filtering only when something it depends on
  actually changes, rather than on every re-render. With 60 rows it makes
  no practical difference; with 50,000 rows from a real API it would.
*/

const PREDICTION_FILTERS = ["All", "Fraud", "Legitimate"];
const RISK_FILTERS = ["All", "High Risk", "Medium Risk", "Low Risk"];

export default function Transactions() {
  const [search, setSearch] = useState("");
  const [prediction, setPrediction] = useState("All");
  const [riskLevel, setRiskLevel] = useState("All");
  const [merchant, setMerchant] = useState("All merchants");
  const [location, setLocation] = useState("All locations");
  const [sortKey, setSortKey] = useState("riskScore");
  const [sortDirection, setSortDirection] = useState("desc");
  const [selected, setSelected] = useState(null);

  /* ---------- Filter, then sort ---------- */
  const rows = useMemo(() => {
    const term = search.trim().toLowerCase();

    const filtered = transactions.filter((txn) => {
      if (term) {
        const haystack = `${txn.id} ${txn.merchant} ${txn.location}`.toLowerCase();
        if (!haystack.includes(term)) return false;
      }
      if (prediction !== "All" && txn.prediction !== prediction) return false;
      if (riskLevel !== "All" && getRiskBand(txn.riskScore).label !== riskLevel)
        return false;
      if (merchant !== "All merchants" && txn.merchant !== merchant)
        return false;
      if (location !== "All locations" && txn.location !== location)
        return false;
      return true;
    });

    return [...filtered].sort((a, b) => {
      const left = a[sortKey];
      const right = b[sortKey];
      const comparison =
        typeof left === "number"
          ? left - right
          : String(left).localeCompare(String(right));
      return sortDirection === "asc" ? comparison : -comparison;
    });
  }, [search, prediction, riskLevel, merchant, location, sortKey, sortDirection]);

  /* Clicking the same column flips direction; a new column starts descending. */
  function handleSort(key) {
    if (key === sortKey) {
      setSortDirection((d) => (d === "asc" ? "desc" : "asc"));
    } else {
      setSortKey(key);
      setSortDirection("desc");
    }
  }

  function resetFilters() {
    setSearch("");
    setPrediction("All");
    setRiskLevel("All");
    setMerchant("All merchants");
    setLocation("All locations");
  }

  return (
    <>
      <PageHeader
        title="Transactions"
        description="Search, filter and investigate transactions scored by the hybrid ensemble. Select any row for its full detail and SHAP breakdown."
      />

      <FilterBar resultCount={rows.length} onReset={resetFilters}>
        <div className="flex min-w-[220px] flex-col gap-1">
          <span className="eyebrow">Search</span>
          <SearchInput
            value={search}
            onChange={setSearch}
            placeholder="Transaction ID, merchant or city"
          />
        </div>

        <ToggleGroup
          label="Prediction"
          value={prediction}
          onChange={setPrediction}
          options={PREDICTION_FILTERS}
        />

        <ToggleGroup
          label="Risk level"
          value={riskLevel}
          onChange={setRiskLevel}
          options={RISK_FILTERS}
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
      </FilterBar>

      <TransactionTable
        rows={rows}
        sortKey={sortKey}
        sortDirection={sortDirection}
        onSort={handleSort}
        onSelect={setSelected}
        selectedId={selected?.id}
      />

      <p className="mt-2.5 text-[11px] text-ink-500">
        Showing {rows.length} of {transactions.length} scored transactions.
        Actual Label is the dataset&rsquo;s ground truth; Prediction is the
        model&rsquo;s output on data it never trained on.
      </p>

      {/* Rendered only when a row is selected. */}
      <TransactionDetail
        transaction={selected}
        onClose={() => setSelected(null)}
      />
    </>
  );
}
