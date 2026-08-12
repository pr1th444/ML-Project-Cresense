import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Overview from "./pages/Overview";
import Predictions from "./pages/Predictions";
import Transactions from "./pages/Transactions";
import Explainability from "./pages/Explainability";
import ModelPerformance from "./pages/ModelPerformance";
import Analytics from "./pages/Analytics";
import Reports from "./pages/Reports";
import SettingsPage from "./pages/Settings";

/*
  Routing map: URL -> page component.
  Every page is nested inside <Layout />, which is why the sidebar and
  top bar stay put while only the middle of the screen changes.
*/
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Overview />} />
          <Route path="/predictions" element={<Predictions />} />
          <Route path="/transactions" element={<Transactions />} />
          <Route path="/explainability" element={<Explainability />} />
          <Route path="/model-performance" element={<ModelPerformance />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/settings" element={<SettingsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
