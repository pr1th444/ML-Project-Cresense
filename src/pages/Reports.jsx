import PageHeader from "../components/PageHeader";
import PanelPlaceholder from "../components/PanelPlaceholder";

export default function Reports() {
  return (
    <>
      <PageHeader
        title="Reports"
        description="Build a fraud summary for a chosen period and export it for review."
      />
      <div className="grid grid-cols-1 gap-3 lg:grid-cols-3">
        <PanelPlaceholder
          label="Report Options"
          note="Date range and report type, with generate and export actions."
          step="10"
          height={300}
        />
        <div className="lg:col-span-2">
          <PanelPlaceholder
            label="Fraud Summary Preview"
            note="Transaction count, fraud cases, fraud rate, total fraud amount, high-risk merchants and locations."
            step="10"
            height={300}
          />
        </div>
      </div>
    </>
  );
}
