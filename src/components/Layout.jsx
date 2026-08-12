import { useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

/* The top bar needs to know the current page name.
   We read the URL and look the title up here, so pages don't
   have to pass it upwards. */
const PAGE_TITLES = {
  "/": "Overview",
  "/predictions": "Predictions",
  "/transactions": "Transactions",
  "/explainability": "Explainability",
  "/model-performance": "Model Performance",
  "/analytics": "Analytics",
  "/reports": "Reports",
  "/settings": "Settings",
};

export default function Layout() {
  /* One piece of state for the whole shell: is the mobile drawer open?
     On desktop the sidebar is always visible and this is ignored. */
  const [isNavOpen, setIsNavOpen] = useState(false);
  const { pathname } = useLocation();
  const title = PAGE_TITLES[pathname] ?? "CreSense";

  return (
    <div className="min-h-screen bg-ink-100">
      <Sidebar isOpen={isNavOpen} onClose={() => setIsNavOpen(false)} />

      {/* The left padding on large screens reserves room for the fixed sidebar. */}
      <div className="lg:pl-60">
        <Topbar title={title} onMenuClick={() => setIsNavOpen(true)} />

        {/* <Outlet /> is where react-router renders whichever page matches the URL. */}
        <main className="px-4 py-5 lg:px-6 lg:py-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
