import Link from "next/link";

import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { LocaleSwitcher } from "@/components/navigation/locale-switcher";
import { MainNav } from "@/components/navigation/main-nav";
import { ThemeToggle } from "@/components/theme/theme-toggle";
import { siteCopy, siteSettings } from "@/data/site";
import { type Locale } from "@/lib/i18n";

interface HeaderProps {
  locale: Locale;
}

export function Header({ locale }: HeaderProps) {
  const copy = siteCopy[locale];

  return (
    <header className="sticky top-0 z-40 border-b border-line/70 bg-bg/80 backdrop-blur-xl">
      <Container className="flex min-h-18 items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <Link className="inline-flex flex-col text-sm" href={`/${locale}`}>
            <span className="font-display text-lg font-semibold tracking-tight text-ink">{siteSettings.name}</span>
            <span className="text-xs tracking-[0.16em] text-muted uppercase">{siteSettings.role}</span>
          </Link>
          <MainNav items={copy.navigation} locale={locale} />
        </div>
        <div className="flex items-center gap-3">
          <ThemeToggle locale={locale} />
          <LocaleSwitcher label={copy.languageSwitch} locale={locale} />
          <ButtonLink className="hidden sm:inline-flex" href={`/${locale}/cv`} target="_blank" variant="secondary">
            {copy.ctas.resume}
          </ButtonLink>
        </div>
      </Container>
    </header>
  );
}
