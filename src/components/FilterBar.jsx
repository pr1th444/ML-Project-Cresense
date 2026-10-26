import { Search, X } from "lucide-react";

/*
  Filter controls, built from three small pieces that other pages reuse.

  These are "controlled" inputs: React holds the current value in state
  and passes it down, and the input reports changes back up via onChange.
  The input never stores anything itself — the page owns the truth. That
  is why the filters, the table and the result count can never disagree.
*/

export function SearchInput({ value, onChange, placeholder = "Search" }) {
  return (
    <div className="relative">
      <Search
        size={13}
        className="pointer-events-none absolute left-2.5 top-1/2 -translate-y-1/2 text-ink-400"
      />
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="h-8 w-full border border-ink-200 bg-white pl-7.5 pr-7 text-[12px] text-ink-950 placeholder:text-ink-400 focus:border-plum-400 focus:outline-none"
        style={{ paddingLeft: "1.875rem" }}
      />
      {value && (
        <button
          onClick={() => onChange("")}
          className="absolute right-2 top-1/2 -translate-y-1/2 text-ink-400 hover:text-ink-700"
          aria-label="Clear search"
        >
          <X size={13} />
        </button>
      )}
    </div>
  );
}

export function SelectFilter({ label, value, onChange, options }) {
  return (
    <label className="flex flex-col gap-1">
      <span className="eyebrow">{label}</span>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="h-8 border border-ink-200 bg-white px-2 text-[12px] text-ink-950 focus:border-plum-400 focus:outline-none"
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </label>
  );
}

/*
  A row of mutually exclusive buttons. Faster than a dropdown for a
  short list, and it shows every option at once — which matters for
  risk filters, where the analyst wants the choices visible.
*/
export function ToggleGroup({ label, value, onChange, options }) {
  return (
    <div className="flex flex-col gap-1">
      <span className="eyebrow">{label}</span>
      <div className="flex flex-wrap">
        {options.map((option, index) => {
          const isActive = option === value;
          return (
            <button
              key={option}
              onClick={() => onChange(option)}
              className={[
                "h-8 border px-2.5 text-[12px] transition-colors",
                index > 0 ? "-ml-px" : "",
                isActive
                  ? "relative z-10 border-plum-600 bg-plum-600 text-white"
                  : "border-ink-200 bg-white text-ink-600 hover:bg-ink-50 hover:text-ink-950",
              ].join(" ")}
            >
              {option}
            </button>
          );
        })}
      </div>
    </div>
  );
}

/* The bar itself — a panel that lays its controls out in a wrapping row. */
export default function FilterBar({ children, resultCount, onReset }) {
  return (
    <div className="panel mb-3 flex flex-wrap items-end gap-3 px-3.5 py-3">
      {children}

      <div className="ml-auto flex items-center gap-3 self-end pb-0.5">
        {resultCount !== undefined && (
          <span className="text-[11.5px] text-ink-500">
            <span className="num font-medium text-ink-950">{resultCount}</span>{" "}
            result{resultCount === 1 ? "" : "s"}
          </span>
        )}
        {onReset && (
          <button
            onClick={onReset}
            className="text-[11.5px] font-medium text-plum-600 hover:text-plum-700 hover:underline"
          >
            Reset
          </button>
        )}
      </div>
    </div>
  );
}
