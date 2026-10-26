/* ============================================================
   CHART THEME
   ------------------------------------------------------------
   Recharts needs real colour values, not Tailwind class names,
   so the palette is repeated here as plain hex. These must stay
   in step with the tokens in index.css.

   Every chart in the application imports from this file, which is
   what stops chart three from picking a slightly different grey
   than chart one.
   ============================================================ */

export const CHART = {
  /* Primary series — muted plum. Use for the main measure. */
  primary: "#65495A",
  /* Secondary series — rose taupe. Use for context or comparison. */
  secondary: "#8A6B76",
  /* Muted bars, for values that are present but not the story. */
  muted: "#BFBBBA",
  /* Axis labels and tick text. */
  axis: "#97928F",
  /* Horizontal gridlines only, and barely there. */
  grid: "#E5E3E2",
};

/* Shared axis styling. Small, quiet, no axis lines —
   the panel border already does that job. */
export const axisProps = {
  stroke: CHART.axis,
  tick: { fill: CHART.axis, fontSize: 10, fontFamily: "IBM Plex Mono" },
  tickLine: false,
  axisLine: false,
};
