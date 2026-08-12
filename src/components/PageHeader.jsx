/*
  Every page opens the same way: a title, one line explaining what the
  page is for, and optional actions on the right. Keeping this in one
  component is what stops eight pages from drifting into eight styles.
*/
export default function PageHeader({ title, description, actions }) {
  return (
    <div className="mb-5 flex flex-wrap items-end justify-between gap-3 border-b border-ink-200 pb-4">
      <div className="max-w-2xl">
        <h2 className="text-[17px] font-semibold tracking-[-0.01em] text-ink-950">
          {title}
        </h2>
        {description && (
          <p className="mt-1 text-[12.5px] leading-relaxed text-ink-600">
            {description}
          </p>
        )}
      </div>
      {actions && <div className="flex items-center gap-2">{actions}</div>}
    </div>
  );
}
