import Link from "next/link";
import { Mail } from "lucide-react";

import { ButtonLink } from "@/components/ui/button-link";
import { BrandLogo } from "@/components/ui/brand-logo";
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
    <header className="sticky top-0 z-40 border-b border-line bg-[rgba(3,7,18,0.82)] backdrop-blur-2xl">
      <Container className="flex min-h-20 items-center justify-between gap-4">
        <div className="flex items-center gap-6 lg:gap-8">
          <Link className="hidden shrink-0 items-center gap-3 text-sm md:inline-flex" href={`/${locale}`}>
            <BrandLogo className="w-[19rem] shrink-0" imageClassName="w-[19rem]" priority variant="full-light" />
          </Link>
          <div className="flex items-center gap-3 md:hidden">
            <BrandLogo className="w-10" imageClassName="w-10" priority variant="mark" />
            <span className="text-base font-bold tracking-tight text-ink">{siteSettings.name}</span>
          </div>
          <MainNav items={copy.navigation} locale={locale} />
        </div>
        <div className="flex items-center gap-3">
          <Link
            className="hidden cursor-pointer rounded-full border border-line bg-panel px-3.5 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-muted hover:border-accent-soft/35 hover:text-white md:inline-flex"
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
