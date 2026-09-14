import Link from "next/link";
import { site } from "@/lib/site";

type LogoProps = {
  className?: string;
  compact?: boolean;
  inverted?: boolean;
};

export function Logo({ className = "", compact = false, inverted = false }: LogoProps) {
  const word = inverted ? "text-white" : "text-navy";
  const sub = inverted ? "text-white/80" : "text-blue";

  return (
    <Link
      href="/"
      className={`flex items-center gap-3 no-underline ${className}`}
      aria-label={`${site.name} home`}
    >
      <span className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-navy shadow-sm ring-2 ring-accent">
        <svg
          viewBox="0 0 48 48"
          className="h-8 w-8"
          aria-hidden="true"
        >
          <path
            d="M24 8c.6 0 8 9.2 8 16.2C32 30.4 28.4 35 24 35s-8-4.6-8-10.8C16 17.2 23.4 8 24 8z"
            fill="#F4FAFF"
          />
          <circle cx="24" cy="24.5" r="3.2" fill="#C2420D" />
        </svg>
      </span>
      {!compact ? (
        <span className="leading-tight">
          <span className={`block font-heading text-[15px] font-extrabold tracking-tight ${word}`}>
            Milwaukee
          </span>
          <span className={`block font-heading text-[15px] font-extrabold tracking-tight ${word}`}>
            Water Pros
          </span>
          <span className={`hidden text-[11px] font-semibold uppercase tracking-[0.14em] sm:block ${sub}`}>
            Greater Milwaukee
          </span>
        </span>
      ) : null}
    </Link>
  );
}
