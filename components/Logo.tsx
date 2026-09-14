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
      <circle cx="60" cy="60" r="58" fill="#111E46" />
      <circle cx="60" cy="60" r="58" fill="none" stroke="#4379AA" strokeWidth="3" />
      <path
        d="M28 72c10-18 18-34 32-46 14 12 22 28 32 46"
        fill="none"
        stroke="#F4FAFF"
        strokeWidth="5"
        strokeLinecap="round"
      />
      <path
        d="M34 78c9-14 16-26 26-36 10 10 17 22 26 36"
        fill="none"
        stroke="#C2420D"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <circle cx="60" cy="78" r="6" fill="#F4FAFF" />
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
