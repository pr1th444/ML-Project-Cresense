import PageHeader from "../components/PageHeader";
import PanelPlaceholder from "../components/PanelPlaceholder";

export default function SettingsPage() {
  return (
    <>
      <PageHeader
        title="Settings"
        description="Display preferences for this workspace. Nothing here changes how transactions are scored."
      />
      <div className="grid grid-cols-1 gap-3 lg:grid-cols-2">
        <PanelPlaceholder label="Dashboard Preferences" step="10" height={160} />
        <PanelPlaceholder
          label="Risk Threshold Display"
          note="The score above which a transaction is shown as high risk."
          step="10"
          height={160}
        />
        <PanelPlaceholder label="Theme" step="10" height={140} />
        <PanelPlaceholder label="Data Refresh" step="10" height={140} />
      </div>
    </>
  );
}
