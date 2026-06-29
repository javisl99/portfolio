import Link from "next/link";
import { TerminalSquare } from "lucide-react";

import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { MainNav } from "@/components/navigation/main-nav";
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
    <header className="sticky top-0 z-40 border-b border-line bg-bg/80 backdrop-blur-md">
      <Container className="flex min-h-20 items-center justify-between gap-4">
        <div className="flex items-center gap-8">
          <Link className="hidden items-center gap-3 text-sm md:inline-flex" href={`/${locale}`}>
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-accent text-accent-contrast">
              <TerminalSquare className="h-4 w-4" />
            </span>
            <span className="font-display text-lg font-black tracking-tight text-ink">{siteSettings.name}</span>
          </Link>
          <div className="flex items-center md:hidden">
            <span className="inline-flex h-10 w-10 items-center justify-center overflow-hidden rounded-full border border-accent/20 bg-panel">
              <TerminalSquare className="h-4 w-4 text-accent" />
            </span>
            <span className="ml-3 text-base font-bold tracking-tight text-ink">{siteSettings.name}</span>
          </div>
          <MainNav items={copy.navigation} locale={locale} />
        </div>
        <div className="flex items-center gap-3">
          <Link className="hidden text-sm font-medium text-muted transition hover:text-accent md:inline-flex" href={`/${alternateLocale}`}>
            {alternateLocale.toUpperCase()}
          </Link>
          <ButtonLink className="hidden md:inline-flex" href={`/${locale}/contact`} variant="primary">
            {copy.ctas.contact}
          </ButtonLink>
          <MobileMenu locale={locale} />
        </div>
      </Container>
    </header>
  );
}
