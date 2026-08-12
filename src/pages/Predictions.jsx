import PageHeader from "../components/PageHeader";
import PanelPlaceholder from "../components/PanelPlaceholder";

export default function Predictions() {
  return (
    <>
      <PageHeader
        title="Transaction Prediction"
        description="Enter transaction details to score a single transaction. Results are simulated in this prototype and do not come from a trained model."
      />
      <div className="grid grid-cols-1 gap-3 lg:grid-cols-5">
        <div className="lg:col-span-3">
          <PanelPlaceholder
            label="Transaction Input Form"
            note="Transaction, time, merchant, geo-location and behavioural features."
            step="6"
            height={380}
          />
        </div>
        <div className="lg:col-span-2 flex flex-col gap-3">
          <PanelPlaceholder
            label="Prediction Result"
            note="Fraud or legitimate, probability, risk score out of 100, risk band."
            step="6"
            height={180}
          />
          <PanelPlaceholder
            label="Why was this transaction flagged?"
            note="Plain-language reasons behind the score."
            step="6"
            height={188}
          />
        </div>
      </div>
    </>
  );
}
