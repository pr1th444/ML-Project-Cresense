import { Info } from "lucide-react";

/*
  A standing note that the data on screen is simulated.

  This appears on every page that shows a model output. It is a stated
  academic requirement of the project: the prototype must not imply the
  model already exists. Making it a component means the wording and
  styling stay consistent instead of being retyped per page.
*/
export default function Notice({ children, title }) {
  return (
    <div className="mb-3 flex gap-2.5 border border-plum-100 bg-plum-50 px-3 py-2.5">
      <Info size={14} className="mt-px shrink-0 text-plum-600" />
      <div className="text-[11.5px] leading-relaxed text-plum-900">
        {title && <span className="font-semibold">{title} </span>}
        {children}
      </div>
    </div>
  );
}
