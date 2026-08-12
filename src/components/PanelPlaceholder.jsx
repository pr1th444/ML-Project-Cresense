/*
  A reserved slot for a section we have not built yet.

  This is a scaffolding component: it shows what will occupy the space
  and which build step fills it. Every one of these disappears as we
  work through the plan — none of them ship in the finished prototype.
*/
export default function PanelPlaceholder({ label, note, step, height = 180 }) {
  return (
    <div
      className="flex flex-col justify-center border border-dashed border-ink-300 bg-white/50 px-4 py-4"
      style={{ minHeight: height }}
    >
      <div className="flex items-baseline gap-2">
        <span className="text-[13px] font-medium text-ink-700">{label}</span>
        {step && (
          <span className="num text-[10px] text-plum-600">Step {step}</span>
        )}
      </div>
      {note && <p className="mt-1 text-[11.5px] text-ink-500">{note}</p>}
    </div>
  );
}
