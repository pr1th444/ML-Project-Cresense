import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  Crosshair,
  Table2,
  Lightbulb,
  GitCompare,
  BarChart3,
  FileText,
  Settings,
  X,
} from "lucide-react";
import { systemStatus } from "../data/systemStatus";
import BrandMark from "./BrandMark";

/* Navigation is defined once, as data.
   Adding a page later = adding one line here + one route in App.jsx. */
const NAV_ITEMS = [
  { label: "Overview", to: "/", icon: LayoutDashboard, end: true },
  { label: "Predictions", to: "/predictions", icon: Crosshair },
  { label: "Transactions", to: "/transactions", icon: Table2 },
  { label: "Explainability", to: "/explainability", icon: Lightbulb },
  { label: "Model Performance", to: "/model-performance", icon: GitCompare },
  { label: "Analytics", to: "/analytics", icon: BarChart3 },
  { label: "Reports", to: "/reports", icon: FileText },
];

/* One row of the status block at the bottom of the sidebar. */
function StatusRow({ label, value }) {
  return (
    <div className="flex items-baseline justify-between gap-3 py-[3px]">
      <span className="text-[11px] text-ink-400">{label}</span>
      <span className="num text-[11px] text-ink-200">{value}</span>
    </div>
  );
}

export default function Sidebar({ isOpen, onClose }) {
  /* Shared class logic for nav links.
     NavLink gives us `isActive` for free based on the current URL. */
  const linkClasses = ({ isActive }) =>
    [
      "group relative flex items-center gap-2.5 pl-4 pr-3 py-2 text-[13px] transition-colors",
      isActive
        ? "bg-ink-900 text-white font-medium"
        : "text-ink-300 hover:bg-ink-900/60 hover:text-white",
    ].join(" ");

  return (
    <>
      {/* Dimmed backdrop, only on small screens when the drawer is open. */}
      {isOpen && (
        <div
          className="fixed inset-0 z-30 bg-ink-950/40 lg:hidden"
          onClick={onClose}
          aria-hidden="true"
        />
      )}

      <aside
        className={[
          "fixed inset-y-0 left-0 z-40 flex w-60 flex-col bg-ink-800 border-r border-ink-900",
          "transition-transform duration-200 lg:translate-x-0",
          isOpen ? "translate-x-0" : "-translate-x-full",
        ].join(" ")}
      >
        {/* ---------- Brand ---------- */}
        <div className="flex items-center gap-2.5 px-4 h-14 border-b border-ink-900">
          <div className="flex h-7 w-7 shrink-0 items-center justify-center bg-plum-600 rounded-[2px]">
            <BrandMark size={16} className="text-white" />
          </div>
          <div className="min-w-0">
            <div className="text-white text-[14px] font-semibold tracking-[0.02em]">
              Cre<span className="text-plum-300">Sense</span>
            </div>
            <div className="text-[10px] text-ink-400 -mt-0.5">
              Fraud Analytics
            </div>
          </div>

          {/* Close button appears only on small screens. */}
          <button
            onClick={onClose}
            className="ml-auto text-ink-400 hover:text-white lg:hidden"
            aria-label="Close navigation"
          >
            <X size={16} />
          </button>
        </div>

        {/* ---------- Navigation ---------- */}
        <nav className="flex-1 overflow-y-auto py-3">
          <div className="eyebrow px-4 pb-1.5 !text-ink-500">Workspace</div>
          {NAV_ITEMS.map(({ label, to, icon: Icon, end }) => (
            <NavLink key={to} to={to} end={end} className={linkClasses}>
              {({ isActive }) => (
                <>
                  {/* Signature detail: a thin plum spine marking the active page. */}
                  <span
                    className={[
                      "absolute left-0 top-0 h-full w-[2px]",
                      isActive ? "bg-plum-400" : "bg-transparent",
                    ].join(" ")}
                  />
                  <Icon size={15} strokeWidth={1.75} className="shrink-0" />
                  <span className="truncate">{label}</span>
                </>
              )}
            </NavLink>
          ))}
        </nav>

        {/* ---------- System status ---------- */}
        <div className="border-t border-ink-900 px-4 py-3">
          <div className="eyebrow pb-1 !text-ink-500">System status</div>
          <StatusRow label="Data source" value={systemStatus.dataSource} />
          <StatusRow label="Ensemble" value={systemStatus.ensembleStatus} />
          <StatusRow label="SHAP" value={systemStatus.shapStatus} />
          <StatusRow label="Threshold" value={systemStatus.thresholdStatus} />
          <StatusRow label="Last refresh" value={systemStatus.lastRefresh} />
        </div>

        {/* ---------- Settings ---------- */}
        <NavLink to="/settings" className={linkClasses}>
          {({ isActive }) => (
            <>
              <span
                className={[
                  "absolute left-0 top-0 h-full w-[2px]",
                  isActive ? "bg-plum-400" : "bg-transparent",
                ].join(" ")}
              />
              <Settings size={15} strokeWidth={1.75} />
              <span>Settings</span>
            </>
          )}
        </NavLink>
      </aside>
    </>
  );
}
