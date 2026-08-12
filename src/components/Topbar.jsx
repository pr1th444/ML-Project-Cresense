import { Menu, Search, Bell } from "lucide-react";

/*
  The top bar is deliberately quiet. Its only real jobs are:
   1. tell you where you are (breadcrumb + title)
   2. state plainly that everything on screen is demo data
   3. hold search / alerts / account, which stay placeholders for now
*/
export default function Topbar({ title, onMenuClick }) {
  return (
    <header className="sticky top-0 z-20 flex h-14 items-center gap-3 border-b border-ink-200 bg-white px-4 lg:px-6">
      {/* Hamburger: small screens only. */}
      <button
        onClick={onMenuClick}
        className="text-ink-600 hover:text-ink-950 lg:hidden"
        aria-label="Open navigation"
      >
        <Menu size={18} />
      </button>

      <div className="min-w-0">
        <div className="text-[11px] text-ink-500 leading-tight">
          CreSense <span className="text-ink-300">/</span> {title}
        </div>
        <h1 className="text-[15px] font-semibold text-ink-950 leading-tight truncate">
          {title}
        </h1>
      </div>

      {/* Honest labelling, visible on every screen of the prototype. */}
      <span className="ml-3 hidden shrink-0 items-center gap-1.5 border border-plum-100 bg-plum-50 px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.08em] text-plum-700 sm:flex">
        <span className="h-1.5 w-1.5 rounded-full bg-plum-400" />
        Demo data
      </span>

      <div className="ml-auto flex items-center gap-2">
        {/* Search is visual only until there is data to search. */}
        <div className="relative hidden md:block">
          <Search
            size={14}
            className="pointer-events-none absolute left-2.5 top-1/2 -translate-y-1/2 text-ink-400"
          />
          <input
            type="text"
            placeholder="Search transaction ID"
            className="h-8 w-56 border border-ink-200 bg-ink-50 pl-8 pr-3 text-[12px] text-ink-950 placeholder:text-ink-400 focus:border-plum-400 focus:bg-white focus:outline-none"
          />
        </div>

        <button
          className="flex h-8 w-8 items-center justify-center border border-ink-200 text-ink-600 hover:bg-ink-50 hover:text-ink-950"
          aria-label="Notifications"
        >
          <Bell size={15} strokeWidth={1.75} />
        </button>

        <div className="flex items-center gap-2 border-l border-ink-200 pl-2.5">
          <div className="flex h-8 w-8 items-center justify-center bg-ink-800 text-[11px] font-semibold text-white">
            FA
          </div>
          <div className="hidden leading-tight lg:block">
            <div className="text-[12px] font-medium text-ink-950">
              Fraud Analyst
            </div>
            <div className="text-[10px] text-ink-500">Demo account</div>
          </div>
        </div>
      </div>
    </header>
  );
}
