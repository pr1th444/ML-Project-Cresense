import { Link } from "react-router-dom";
import PageHeader from "../components/PageHeader";
import KPICard from "../components/KPICard";
import ChartCard from "../components/ChartCard";
import BarList from "../components/BarList";
import FraudTrendChart from "../components/FraudTrendChart";
import FraudByHourChart from "../components/FraudByHourChart";
import HighRiskTable from "../components/HighRiskTable";
import { overviewKpis, fraudByMerchant, fraudByLocation } from "../data/overview";

/*
  THE OVERVIEW DASHBOARD

  Reading order is deliberate, top to bottom:

    1. KPIs        how much fraud is happening?
    2. Trend       is it getting worse?
    3. By hour     when does it happen?
    4. Merchant    who is being hit?
    5. Location    where?
    6. Queue       what do I open first?

  Notice this file contains no numbers. It arranges components and
  passes them data from src/data/. That separation is the whole point:
  when the backend arrives, this file does not change at all.
*/
export default function Overview() {
  return (
    <>
      <PageHeader
        title="Fraud Overview"
        description="Current fraud position across all monitored transactions. Every figure on this screen is demo data — no model has been trained and no live feed is connected."
      />

      {/* ---------- KPI strip ---------- */}
      <div className="mb-4 grid grid-cols-2 gap-3 md:grid-cols-3 xl:grid-cols-6">
        {overviewKpis.map((kpi) => (
          <KPICard key={kpi.id} {...kpi} />
        ))}
      </div>

      {/* ---------- Trend + hourly ----------
          Trend gets two thirds of the width because a 30-day series
          needs the horizontal room; the 24-hour chart does not. */}
      <div className="mb-4 grid grid-cols-1 gap-3 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <ChartCard
            title="Fraud Trend Over Time"
            subtitle="Predicted fraud against transactions flagged for analyst review, last 30 days"
          >
            <FraudTrendChart />
          </ChartCard>
        </div>

        <ChartCard
          title="Fraud by Hour"
          subtitle="Cases by hour of day, all 30 days combined"
        >
          <FraudByHourChart />
        </ChartCard>
      </div>

      {/* ---------- Merchant + location ---------- */}
      <div className="mb-4 grid grid-cols-1 gap-3 lg:grid-cols-2">
        <ChartCard
          title="Fraud by Merchant"
          subtitle="Ranked by case count, with merchant risk band"
        >
          <BarList
            items={fraudByMerchant}
            labelKey="merchant"
            valueKey="cases"
          />
        </ChartCard>

        <ChartCard
          title="Fraud by Location"
          subtitle="Ranked by case count, with city risk band"
        >
          <BarList items={fraudByLocation} labelKey="city" valueKey="cases" />
        </ChartCard>
      </div>

      {/* ---------- Investigation queue ---------- */}
      <ChartCard
        title="Recent High-Risk Transactions"
        subtitle="Highest risk scores first — the analyst's queue"
        action={
          <Link
            to="/transactions"
            className="text-[11px] font-medium text-plum-600 hover:text-plum-700 hover:underline"
          >
            View all transactions
          </Link>
        }
      >
        <HighRiskTable />
      </ChartCard>
    </>
  );
}
