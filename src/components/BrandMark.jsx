import { useId } from "react";

/*
  CRESENSE BRAND MARK — a crescent moon.

  The crescent is made by cutting one circle out of another. In SVG that
  cut is done with a <mask>: inside a mask, white means "keep this" and
  black means "remove this". So we keep a full disc, then remove a second
  disc that overlaps it and is nudged up and to the right. What survives
  is the thin curve of a waxing crescent.

  useId() gives each copy of this component a unique mask name. Without
  it, two marks on one page would share an id and the browser would apply
  the wrong mask to one of them.
*/
export default function BrandMark({ size = 24, className = "" }) {
  const maskId = useId();

  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      className={className}
      role="img"
      aria-label="CreSense"
    >
      <defs>
        <mask id={maskId}>
          <rect width="24" height="24" fill="black" />
          <circle cx="11" cy="12" r="9" fill="white" />
          <circle cx="14.4" cy="10.2" r="9.3" fill="black" />
        </mask>
      </defs>
      <circle
        cx="11"
        cy="12"
        r="9"
        fill="currentColor"
        mask={`url(#${maskId})`}
      />
    </svg>
  );
}
