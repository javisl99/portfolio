import Link from "next/link";
import { Mail } from "lucide-react";

import { ButtonLink } from "@/components/ui/button-link";
import { BrandLogo } from "@/components/ui/brand-logo";
import { Container } from "@/components/ui/container";
import { LocaleSwitcher } from "@/components/navigation/locale-switcher";
import { MainNav } from "@/components/navigation/main-nav";
import { MobileMenu } from "@/components/navigation/mobile-menu";
import { siteCopy, siteSettings } from "@/data/site";
import type { Locale } from "@/lib/i18n";

interface HeaderProps {
  locale: Locale;
}

export function Header({ locale }: HeaderProps) {
  const copy = siteCopy[locale];

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line bg-[rgba(3,7,18,0.82)] shadow-[0_10px_30px_-20px_rgba(2,6,23,0.95)] backdrop-blur-2xl">
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
          <div className="hidden md:block">
            <LocaleSwitcher label={copy.languageSwitch} locale={locale} />
          </div>
          <ButtonLink className="hidden md:inline-flex" href={`/${locale}/contact`} variant="primary">
            <Mail className="h-4 w-4" />
            {copy.ctas.contact}
          </ButtonLink>
          <MobileMenu locale={locale} />
        </div>
      </Container>
    </header>
  );
}
