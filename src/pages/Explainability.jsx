import PageHeader from "../components/PageHeader";
import PanelPlaceholder from "../components/PanelPlaceholder";

export default function Explainability() {
  return (
    <>
      <PageHeader
        title="Prediction Explainability"
        description="Feature-level breakdown of a single prediction. In the finished system these contributions come from SHAP; here they are fixed demo values."
      />
      <div className="mb-3">
        <PanelPlaceholder
          label="Transaction Summary"
          note="Transaction ID, prediction, fraud probability, risk score."
          step="7"
          height={92}
        />
      </div>
      <div className="grid grid-cols-1 gap-3 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <PanelPlaceholder
            label="Feature Contribution Chart"
            note="Horizontal bars showing how much each feature pushed the score up or down, signed negative to positive."
            step="7"
            height={300}
          />
        </div>
        <PanelPlaceholder
          label="Reading This Chart"
          note="Top contributing factors: high amount, new merchant, midnight purchase, different city, multiple attempts."
          step="7"
          height={300}
        />
      </div>
    </>
  );
}
