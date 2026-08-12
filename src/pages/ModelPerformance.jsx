import PageHeader from "../components/PageHeader";
import PanelPlaceholder from "../components/PanelPlaceholder";

export default function ModelPerformance() {
  return (
    <>
      <PageHeader
        title="Model Performance"
        description="Comparison of Random Forest, XGBoost and CatBoost, plus the hybrid ensemble. No model has been trained or evaluated yet, so every figure shown is illustrative."
      />
      <div className="mb-3">
        <PanelPlaceholder
          label="Selected Model"
          note="Currently: pending model evaluation."
          step="8"
          height={80}
        />
      </div>
      <div className="grid grid-cols-1 gap-3 lg:grid-cols-2">
        <PanelPlaceholder
          label="Metric Comparison Table"
          note="Accuracy, precision, recall, F1, ROC-AUC per model."
          step="8"
          height={260}
        />
        <PanelPlaceholder
          label="Metric Comparison Chart"
          note="Grouped bars across the candidate models."
          step="8"
          height={260}
        />
      </div>
    </>
  );
}
