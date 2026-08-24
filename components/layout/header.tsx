import Link from "next/link";
import { Mail } from "lucide-react";

import { ButtonLink } from "@/components/ui/button-link";
import { BrandLogo } from "@/components/ui/brand-logo";
import { CopyEmailButton } from "@/components/ui/copy-email-button";
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
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/6 bg-[#08090d]/80 shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_12px_32px_-16px_rgba(0,0,0,0.9)] backdrop-blur-2xl transition-colors duration-200">
      <Container className="flex min-h-[4rem] items-center justify-between gap-4 sm:min-h-[4.4rem]">
        <div className="flex items-center gap-5 lg:gap-7">
          <Link className="group flex shrink-0 items-center text-sm" href={`/${locale}`}>
            <BrandLogo variant="full-light" />
          </Link>
          <MainNav items={copy.navigation} locale={locale} />
        </div>


        <div className="flex items-center gap-3">
          {/* Status Badge */}
          <div className="hidden items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 lg:flex">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            <span className="font-mono text-[0.66rem] font-semibold text-emerald-300">
              {locale === "es" ? "Disponible" : "Open to Roles"}
            </span>
          </div>

          <div className="hidden md:block">
            <LocaleSwitcher label={copy.languageSwitch} locale={locale} />
          </div>

          <CopyEmailButton className="hidden h-9 px-3.5 text-xs md:inline-flex" locale={locale} variant="secondary" />

          <MobileMenu locale={locale} />
        </div>

      </Container>
    </header>
  );
}
