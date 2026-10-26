/*
  SHAP-STYLE FEATURE CONTRIBUTION CHART

  Each row is one feature. The bar grows right from a centre line when
  the feature pushed the prediction toward fraud, and left when it
  pulled toward legitimate. That centre line is the point of the chart:
  it separates evidence for from evidence against, which a plain bar
  chart cannot show.

  Built from divs rather than a charting library. For a signed bar chart
  with a fixed centre, plain CSS is simpler and sharper than configuring
  a chart component to do the same thing.

  Values are exact SHAP contributions from the trained model, in
  log-odds. See src/data/shap.js.
*/
export default function SHAPChart({ contributions, compact = false }) {
  if (!contributions?.length) return null;

  /* Scale bars against the single largest contribution so the biggest
     driver fills half the width and everything else reads relative. */
  const maxMagnitude = Math.max(
    ...contributions.map((c) => Math.abs(c.value))
  );

  return (
    <div>
      {/* Header showing what each side of the centre line means. */}
      <div className="mb-2 flex items-center justify-between text-[10px] font-semibold uppercase tracking-[0.08em] text-ink-500">
        <span>&larr; Toward legitimate</span>
        <span className="text-plum-700">Toward fraud &rarr;</span>
      </div>

      <ol className={compact ? "flex flex-col gap-2" : "flex flex-col gap-3"}>
        {contributions.map((item) => {
          const isFraud = item.direction === "fraud";
          /* Half the track is available to each side. */
          const widthPercent = (Math.abs(item.value) / maxMagnitude) * 50;

          return (
            <li key={item.key}>
              <div className="flex items-baseline justify-between gap-3">
                <span className="text-[12px] text-ink-800">{item.label}</span>
                <span
                  className={[
                    "num text-[11.5px] font-medium",
                    isFraud ? "text-plum-700" : "text-ink-500",
                  ].join(" ")}
                >
                  {item.value > 0 ? "+" : ""}
                  {item.value.toFixed(2)}
                </span>
              </div>

              {/* The track, with a visible centre line. */}
              <div className="relative mt-1 h-[9px] w-full bg-ink-100">
                <span className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-ink-300" />
                <span
                  className={[
                    "absolute top-0 h-full",
                    isFraud ? "bg-plum-600" : "bg-plum-300",
                  ].join(" ")}
                  style={
                    isFraud
                      ? { left: "50%", width: `${widthPercent}%` }
                      : {
                          right: "50%",
                          width: `${widthPercent}%`,
                        }
                  }
                />
              </div>

              {!compact && item.description && (
                <p className="mt-1 text-[11px] leading-tight text-ink-500">
                  {item.description}
                </p>
              )}
            </li>
          );
        })}
      </ol>
    </div>
  );
}
