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
    "cursor-pointer border border-[#60a5fa]/30 bg-[linear-gradient(135deg,#2563eb,#3b82f6_52%,#6366f1)] text-accent-contrast shadow-[0_20px_40px_-20px_rgba(37,99,235,0.58)] hover:-translate-y-0.5 hover:shadow-[0_26px_52px_-24px_rgba(59,130,246,0.64)] hover:brightness-105",
  secondary:
    "cursor-pointer border border-white/10 bg-[linear-gradient(180deg,rgba(15,23,42,0.9),rgba(9,14,28,0.96))] text-ink hover:-translate-y-0.5 hover:border-accent-soft/40 hover:bg-[linear-gradient(180deg,rgba(20,31,56,0.95),rgba(10,16,31,0.98))] hover:text-white",
  ghost:
    "cursor-pointer border border-transparent bg-transparent text-slate-300 hover:-translate-y-0.5 hover:border-white/10 hover:bg-white/[0.04] hover:text-white",
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
