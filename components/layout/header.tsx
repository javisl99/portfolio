import Link from "next/link";
import { Mail, TerminalSquare } from "lucide-react";

import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { MobileMenu } from "@/components/navigation/mobile-menu";
import { siteCopy, siteSettings } from "@/data/site";
import { getAlternateLocale, type Locale } from "@/lib/i18n";

interface HeaderProps {
  locale: Locale;
}

export function Header({ locale }: HeaderProps) {
  const copy = siteCopy[locale];
  const alternateLocale = getAlternateLocale(locale);

  return (
    <header className="sticky top-0 z-40 border-b border-white/8 bg-[rgba(3,7,18,0.78)] backdrop-blur-2xl">
      <Container className="flex min-h-20 items-center justify-between gap-4">
        <div className="flex items-center gap-8">
          <Link className="hidden items-center gap-3 text-sm md:inline-flex" href={`/${locale}`}>
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-[linear-gradient(135deg,#2563eb,#3b82f6_55%,#6366f1)] text-accent-contrast shadow-[0_18px_40px_-20px_rgba(37,99,235,0.45)]">
              <TerminalSquare className="h-4 w-4" />
            </span>
            <span className="font-display text-lg font-black tracking-tight text-ink">{siteSettings.name}</span>
          </Link>
          <div className="flex items-center md:hidden">
            <span className="inline-flex h-10 w-10 items-center justify-center overflow-hidden rounded-xl border border-white/10 bg-panel">
              <TerminalSquare className="h-4 w-4 text-[#bcd1ff]" />
            </span>
            <span className="ml-3 text-base font-bold tracking-tight text-ink">{siteSettings.name}</span>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <Link
            className="hidden cursor-pointer rounded-full border border-white/8 px-3 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-muted hover:border-accent-soft/35 hover:text-white md:inline-flex"
            href={`/${alternateLocale}`}
          >
            {alternateLocale.toUpperCase()}
          </Link>
          <ButtonLink className="hidden md:inline-flex" href={`/${locale}#contact`} variant="primary">
            <Mail className="h-4 w-4" />
            {copy.ctas.contact}
          </ButtonLink>
          <MobileMenu locale={locale} />
        </div>
      </Container>
    </header>
  );
}
