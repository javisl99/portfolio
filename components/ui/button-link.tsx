import Link from "next/link";
import type { ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost";

interface ButtonLinkProps extends ComponentPropsWithoutRef<"a"> {
  href: string;
  variant?: Variant;
}

const variants: Record<Variant, string> = {
  primary:
    "cursor-pointer border border-[#60a5fa]/30 bg-[linear-gradient(135deg,#2563eb,#3b82f6_58%,#60a5fa)] text-accent-contrast shadow-[0_22px_44px_-22px_rgba(37,99,235,0.64)] hover:-translate-y-0.5 hover:shadow-[0_30px_60px_-26px_rgba(37,99,235,0.72)] hover:brightness-105",
  secondary:
    "cursor-pointer border border-white/8 bg-[linear-gradient(180deg,rgba(11,18,32,0.88),rgba(6,11,22,0.94))] text-ink shadow-[0_18px_44px_-30px_rgba(2,6,23,0.92)] hover:-translate-y-0.5 hover:border-accent-soft/28 hover:bg-[linear-gradient(180deg,rgba(14,24,42,0.94),rgba(8,14,28,0.96))] hover:text-white",
  ghost:
    "cursor-pointer border border-transparent bg-transparent text-slate-300 hover:-translate-y-0.5 hover:border-line hover:bg-white/[0.04] hover:text-white",
};

export function ButtonLink({ className, href, target, rel, variant = "primary", ...props }: ButtonLinkProps) {
  const sharedClassName = cn(
    "inline-flex min-h-12 cursor-pointer items-center justify-center gap-2 rounded-xl px-6 py-3.5 text-sm font-bold leading-none whitespace-nowrap transition duration-200 focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-accent disabled:pointer-events-none disabled:opacity-60",
    variants[variant],
    className,
  );

  const isExternal = href.startsWith("http") || href.startsWith("mailto:") || href.endsWith(".pdf");
  const resolvedRel = target === "_blank" ? rel ?? "noreferrer" : rel;

  if (isExternal) {
    return <a className={sharedClassName} href={href} rel={resolvedRel} target={target} {...props} />;
  }

  return <Link className={sharedClassName} href={href} {...props} />;
}
