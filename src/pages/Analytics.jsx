import PageHeader from "../components/PageHeader";
import PanelPlaceholder from "../components/PanelPlaceholder";

export default function Analytics() {
  return (
    <>
      <PageHeader
        title="Analytics"
        description="The business intelligence layer. This screen defines the analytics experience that Power BI will serve in the finished system."
      />
      <div className="mb-3">
        <PanelPlaceholder
          label="Filter Bar"
          note="Date range, merchant, location, transaction type, risk level."
          step="9"
          height={72}
        />
      </div>
      <div className="mb-3 grid grid-cols-1 gap-3 lg:grid-cols-2">
        <PanelPlaceholder label="Fraud Trend" step="9" height={220} />
        <PanelPlaceholder label="Fraud by Merchant" step="9" height={220} />
        <PanelPlaceholder label="Fraud by City" step="9" height={220} />
        <PanelPlaceholder label="Fraud by Transaction Amount" step="9" height={220} />
      </div>
      <div className="grid grid-cols-1 gap-3 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <PanelPlaceholder
            label="Fraud Heatmap"
            note="Hour of day against day of week."
            step="9"
            height={240}
          />
        </div>
        <PanelPlaceholder label="Risk Distribution" step="9" height={240} />
      </div>
    </>
  );
}
