import PageHeader from "../components/PageHeader";
import PanelPlaceholder from "../components/PanelPlaceholder";

export default function Transactions() {
  return (
    <>
      <PageHeader
        title="Transactions"
        description="Search, filter and investigate scored transactions. Select any row to open its full detail and explanation."
      />
      <div className="flex flex-col gap-3">
        <PanelPlaceholder
          label="Search and Filters"
          note="Free text search, plus filters for prediction and risk band (low, medium, high)."
          step="5"
          height={72}
        />
        <PanelPlaceholder
          label="Transaction Table"
          note="ID, date/time, amount, merchant, location, prediction, probability, risk score, status."
          step="5"
          height={420}
        />
      </div>
    </>
  );
}
