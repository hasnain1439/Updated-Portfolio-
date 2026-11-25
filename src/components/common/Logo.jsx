import React from "react";

// "Hi" monogram (H + i for Hasnain Iqbal), monochrome with an emerald dot on the i.
// Default: black tile in light mode, white tile in dark mode.
// variant="onDark": always the white tile, for surfaces that stay dark (footer).
// Same artwork as public/favicon.svg.
export default function Logo({ size = 40, className = "", variant = "auto" }) {
  const tile = variant === "onDark" ? "fill-white" : "fill-neutral-900 dark:fill-white";
  const glyph = variant === "onDark" ? "fill-neutral-900" : "fill-white dark:fill-neutral-900";

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      role="img"
      aria-label="Hasnain Iqbal logo"
      className={className}
    >
      <rect width="64" height="64" rx="15" className={tile} />
      <rect x="13" y="17" width="7" height="30" rx="2" className={glyph} />
      <rect x="31" y="17" width="7" height="30" rx="2" className={glyph} />
      <rect x="13" y="29" width="25" height="6" rx="1" className={glyph} />
      <rect x="44" y="28" width="7" height="19" rx="2" className={glyph} />
      <circle cx="47.5" cy="20.5" r="4" fill="#10B981" />
    </svg>
  );
}
