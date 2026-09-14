import Link from "next/link";
import { site } from "@/lib/site";

type LogoProps = {
  className?: string;
  showWordmark?: boolean;
  size?: number;
};

export function Mark({ size = 72 }: { size?: number }) {
  return (
    <svg
      viewBox="0 0 120 120"
      width={size}
      height={size}
      aria-hidden="true"
      className="shrink-0"
    >
      <defs>
        <path id="mwp-top" d="M 18 62 A 42 42 0 0 1 102 62" />
        <path id="mwp-bot" d="M 102 66 A 42 42 0 0 1 18 66" />
      </defs>
      <circle cx="60" cy="60" r="58" fill="#111E46" />
      <circle cx="60" cy="60" r="58" fill="none" stroke="#4379AA" strokeWidth="3" />
      <text
        fill="#F4FAFF"
        fontSize="9"
        fontWeight="800"
        letterSpacing="1.6"
        fontFamily="var(--font-plus-jakarta), Plus Jakarta Sans, ui-sans-serif, sans-serif"
      >
        <textPath href="#mwp-top" startOffset="50%" textAnchor="middle">
          MILWAUKEE
        </textPath>
      </text>
      <text
        fill="#F4FAFF"
        fontSize="8"
        fontWeight="800"
        letterSpacing="1.2"
        fontFamily="var(--font-plus-jakarta), Plus Jakarta Sans, ui-sans-serif, sans-serif"
      >
        <textPath href="#mwp-bot" startOffset="50%" textAnchor="middle">
          WATER PROS
        </textPath>
      </text>
      <path
        d="M34 70c8-14 14-26 26-36 12 10 18 22 26 36"
        fill="none"
        stroke="#F4FAFF"
        strokeWidth="4.5"
        strokeLinecap="round"
      />
      <path
        d="M38 76c7-11 12-20 22-28 10 8 15 17 22 28"
        fill="none"
        stroke="#C2420D"
        strokeWidth="3.5"
        strokeLinecap="round"
      />
      <circle cx="60" cy="76" r="5" fill="#F4FAFF" />
    </svg>
  );
}

export function Logo({ className = "", showWordmark = false, size = 72 }: LogoProps) {
  return (
    <Link href="/" className={`flex items-center gap-3 no-underline ${className}`} aria-label={`${site.name} home`}>
      <Mark size={size} />
      {showWordmark ? (
        <span className="leading-tight">
          <span className="block font-heading text-[15px] font-extrabold tracking-tight text-navy">
            Milwaukee
          </span>
          <span className="block font-heading text-[15px] font-extrabold tracking-tight text-navy">
            Water Pros
          </span>
        </span>
      ) : null}
    </Link>
  );
}
