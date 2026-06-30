"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { getAlternateLocale, replaceLocaleInPathname, type Locale } from "@/lib/i18n";

interface LocaleSwitcherProps {
  locale: Locale;
  label: string;
}

export function LocaleSwitcher({ locale, label }: LocaleSwitcherProps) {
  const pathname = usePathname();
  const alternateLocale = getAlternateLocale(locale);
  const alternatePath = replaceLocaleInPathname(pathname, alternateLocale);

  return (
    <Link
      aria-label={label}
      className="inline-flex rounded-xl border border-white/8 bg-[rgba(8,17,31,0.72)] px-3 py-2 text-xs font-bold uppercase tracking-[0.16em] text-muted transition hover:border-accent/28 hover:text-ink focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-accent"
      href={alternatePath}
    >
      {alternateLocale.toUpperCase()}
    </Link>
  );
}
