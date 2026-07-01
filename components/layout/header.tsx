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
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/7 bg-[rgba(3,7,18,0.74)] shadow-[0_10px_34px_-24px_rgba(2,6,23,0.96)] backdrop-blur-2xl transition-colors duration-200">
      <Container className="flex min-h-[4.25rem] items-center justify-between gap-4 sm:min-h-[4.7rem]">
        <div className="flex items-center gap-6 lg:gap-8">
          <Link className="hidden shrink-0 items-center gap-3 text-sm md:inline-flex" href={`/${locale}`}>
            <BrandLogo className="w-[18.4rem] shrink-0" imageClassName="w-[18.4rem]" priority variant="full-light" />
          </Link>
          <Link
            aria-label={locale === "es" ? "Ir al inicio" : "Go to home"}
            className="flex items-center gap-3 md:hidden"
            href={`/${locale}`}
          >
            <BrandLogo className="w-10" imageClassName="w-10" priority variant="mark" />
            <span className="text-base font-bold tracking-tight text-ink">{siteSettings.name}</span>
          </Link>
          <MainNav items={copy.navigation} locale={locale} />
        </div>
        <div className="flex items-center gap-3">
          <div className="hidden md:block">
            <LocaleSwitcher label={copy.languageSwitch} locale={locale} />
          </div>
          <ButtonLink className="hidden md:inline-flex" href={`mailto:${siteSettings.email}`} variant="primary">
            <Mail className="h-4 w-4" />
            {locale === "es" ? "Enviar email" : "Send email"}
          </ButtonLink>
          <MobileMenu locale={locale} />
        </div>
      </Container>
    </header>
  );
}
