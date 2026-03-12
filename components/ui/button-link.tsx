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
    "bg-ink text-white shadow-[0_18px_38px_-22px_rgba(15,23,42,0.6)] hover:-translate-y-0.5 hover:bg-ink/92",
  secondary:
    "border border-line bg-white/80 text-ink hover:-translate-y-0.5 hover:border-line-strong hover:bg-white",
  ghost: "text-ink hover:bg-white/70",
};

export function ButtonLink({ className, href, target, rel, variant = "primary", ...props }: ButtonLinkProps) {
  const sharedClassName = cn(
    "inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition duration-200 focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-accent",
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

