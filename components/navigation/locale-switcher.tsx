"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { getAlternateLocale, type Locale } from "@/lib/i18n";

interface LocaleSwitcherProps {
  locale: Locale;
  label: string;
}

export function LocaleSwitcher({ locale, label }: LocaleSwitcherProps) {
  const pathname = usePathname();
  const alternateLocale = getAlternateLocale(locale);
  const alternatePath = pathname?.replace(/^\/(es|en)(?=\/|$)/, `/${alternateLocale}`) ?? `/${alternateLocale}`;

  return (
    <Link
      aria-label={label}
      className="inline-flex rounded-xl border border-line bg-panel/90 px-3 py-2 text-xs font-bold uppercase tracking-[0.16em] text-muted transition hover:border-accent/35 hover:text-ink"
      href={alternatePath}
    >
      {alternateLocale.toUpperCase()}
    </Link>
  );
}
