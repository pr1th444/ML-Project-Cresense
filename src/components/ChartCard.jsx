/*
  A titled panel. Every chart and table on every page sits inside one
  of these, which is what keeps headers, padding and borders identical
  across the application.

  `children` is whatever you put between the opening and closing tags:
      <ChartCard title="Fraud by Hour">
        <MyChart />          <-- this is children
      </ChartCard>

  `action` is an optional slot on the right of the header, for a filter
  or a "view all" link.
*/
export default function ChartCard({ title, subtitle, action, children }) {
  return (
    <section className="panel flex flex-col">
      <header className="flex items-start justify-between gap-3 border-b border-ink-200 px-3.5 py-2.5">
        <div className="min-w-0">
          <h3 className="text-[13px] font-semibold text-ink-950">{title}</h3>
          {subtitle && (
            <p className="mt-0.5 text-[11px] leading-tight text-ink-500">
              {subtitle}
            </p>
          )}
        </div>
        {action && <div className="shrink-0">{action}</div>}
      </header>

      <div className="flex-1 p-3.5">{children}</div>
    </section>
  );
}
