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
    "cursor-pointer border border-indigo-400/35 bg-gradient-to-r from-blue-600 via-indigo-600 to-indigo-500 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.25),0_16px_36px_-14px_rgba(99,102,241,0.6)] hover:-translate-y-0.5 hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.35),0_20px_44px_-16px_rgba(99,102,241,0.75)] hover:brightness-110 active:translate-y-0",
  secondary:
    "cursor-pointer border border-white/10 bg-gradient-to-b from-white/[0.08] to-white/[0.02] text-ink shadow-[inset_0_1px_0_rgba(255,255,255,0.12),0_16px_36px_-20px_rgba(0,0,0,0.9)] hover:-translate-y-0.5 hover:border-indigo-400/35 hover:bg-white/[0.09] hover:text-white active:translate-y-0",
  ghost:
    "cursor-pointer border border-transparent bg-transparent text-slate-300 hover:-translate-y-0.5 hover:border-white/10 hover:bg-white/[0.05] hover:text-white active:translate-y-0",
};

export function ButtonLink({ className, href, target, rel, variant = "primary", ...props }: ButtonLinkProps) {
  const sharedClassName = cn(
    "inline-flex min-h-11 cursor-pointer items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold leading-none whitespace-nowrap transition duration-200 focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-accent disabled:pointer-events-none disabled:opacity-60",
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

