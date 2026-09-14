type ArtKind =
  | "whole-home"
  | "ro"
  | "well"
  | "softener"
  | "carbon"
  | "city"
  | "process"
  | "hero";

const palettes: Record<ArtKind, { from: string; to: string }> = {
  "whole-home": { from: "#1b3a68", to: "#4379AA" },
  ro: { from: "#0e7490", to: "#67e8f9" },
  well: { from: "#3f6212", to: "#a3e635" },
  softener: { from: "#1e3a5f", to: "#93c5fd" },
  carbon: { from: "#1f2937", to: "#9ca3af" },
  city: { from: "#111E46", to: "#C2420D" },
  process: { from: "#111E46", to: "#4379AA" },
  hero: { from: "#0b1430", to: "#4379AA" },
};

export function ServiceArt({
  kind,
  className = "",
  label,
}: {
  kind: ArtKind;
  className?: string;
  label: string;
}) {
  const palette = palettes[kind];
  const id = `${kind}-${label.replace(/\s+/g, "-").toLowerCase()}`;

  return (
    <svg
      viewBox="0 0 640 420"
      className={className}
      role="img"
      aria-label={label}
    >
      <defs>
        <linearGradient id={`${id}-bg`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={palette.from} />
          <stop offset="100%" stopColor={palette.to} />
        </linearGradient>
      </defs>
      <rect width="640" height="420" fill={`url(#${id}-bg)`} />
      <circle cx="520" cy="70" r="90" fill="white" opacity="0.08" />
      <circle cx="80" cy="360" r="120" fill="white" opacity="0.08" />
      <path
        d="M80 300c60-20 90 20 150 8s90-40 150-18 110 30 180 8"
        fill="none"
        stroke="white"
        strokeOpacity="0.28"
        strokeWidth="10"
        strokeLinecap="round"
      />
      <g transform="translate(250 110)">
        <path
          d="M70 20c4 0 52 60 52 106 0 40-24 72-52 72s-52-32-52-72C18 80 66 20 70 20z"
          fill="#F4FAFF"
        />
        <circle cx="70" cy="128" r="18" fill="#C2420D" />
      </g>
    </svg>
  );
}

export function serviceArtKind(slug: string): ArtKind {
  if (slug.includes("reverse")) return "ro";
  if (slug.includes("well")) return "well";
  if (slug.includes("softener")) return "softener";
  if (slug.includes("carbon")) return "carbon";
  if (slug.includes("city")) return "city";
  return "whole-home";
}
