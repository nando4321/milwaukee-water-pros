import type { ReactNode } from "react";
import Link from "next/link";
import { ArrowIcon } from "@/components/Icons";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "accent" | "navy" | "ghost";
  className?: string;
  showArrow?: boolean;
};

const variants = {
  accent: "bg-accent text-white hover:bg-accent-dark shadow-sm",
  navy: "bg-navy text-white hover:bg-navy-deep",
  ghost: "bg-transparent text-accent hover:text-accent-dark px-0",
};

export function ButtonLink({
  href,
  children,
  variant = "accent",
  className = "",
  showArrow = true,
}: ButtonProps) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center gap-2 rounded-md px-5 py-3 text-sm font-bold tracking-wide transition ${variants[variant]} ${className}`}
    >
      {showArrow ? <ArrowIcon className="h-3.5 w-3.5" /> : null}
      {children}
    </Link>
  );
}
