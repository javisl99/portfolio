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
    "bg-accent text-accent-contrast shadow-[0_16px_38px_-18px_rgba(19,218,236,0.55)] hover:-translate-y-0.5 hover:brightness-105",
  secondary:
    "border border-line bg-panel/92 text-ink hover:-translate-y-0.5 hover:border-accent/35 hover:bg-panel-strong",
  ghost: "text-ink hover:text-accent",
};

export function ButtonLink({ className, href, target, rel, variant = "primary", ...props }: ButtonLinkProps) {
  const sharedClassName = cn(
    "inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-bold transition duration-200 focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-accent",
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
