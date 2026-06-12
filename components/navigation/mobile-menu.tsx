"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

import { ButtonLink } from "@/components/ui/button-link";
import { ProfileAvatar } from "@/components/ui/profile-avatar";
import { siteCopy, siteSettings } from "@/data/site";
import { getAlternateLocale, localizePath, type Locale } from "@/lib/i18n";

interface MobileMenuProps {
  locale: Locale;
}

const homeSectionMap: Record<string, string> = {
  "/": "#top",
  "/experience": "#experience",
  "/projects": "#projects",
  "/about": "#about",
  "/contact": "#contact",
};

export function MobileMenu({ locale }: MobileMenuProps) {
  const [open, setOpen] = useState(false);
  const copy = siteCopy[locale];
  const alternateLocale = getAlternateLocale(locale);

  return (
    <div className="md:hidden">
      <button
        aria-expanded={open}
        aria-label={open ? (locale === "es" ? "Cerrar menú" : "Close menu") : locale === "es" ? "Abrir menú" : "Open menu"}
        className="inline-flex h-10 w-10 cursor-pointer items-center justify-center text-ink"
        onClick={() => setOpen((current) => !current)}
        type="button"
      >
        {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </button>

      {open ? (
        <div className="fixed inset-x-0 top-[4.5rem] z-50 border-b border-line bg-bg/98 px-5 pb-6 pt-4 shadow-lg backdrop-blur-md">
          <div className="mx-auto flex max-w-7xl flex-col gap-5">
            <div className="flex items-center gap-3">
              <ProfileAvatar className="h-12 w-12" />
              <div>
                <p className="text-sm font-bold text-ink">{siteSettings.name}</p>
                <p className="text-xs uppercase tracking-[0.18em] text-muted">{copy.roleLabel}</p>
              </div>
            </div>

            <nav aria-label="Mobile" className="grid gap-2">
              {copy.navigation.map((item) => (
                <Link
                  className="cursor-pointer rounded-xl border border-line bg-panel px-4 py-3 text-sm font-semibold text-ink transition hover:border-accent/35 hover:text-accent"
                  href={`${localizePath(locale)}${homeSectionMap[item.href] ?? "#top"}`}
                  key={item.href}
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="flex flex-col gap-3">
              <ButtonLink className="w-full" href={`${localizePath(locale)}#contact`} variant="primary">
                {copy.ctas.contact}
              </ButtonLink>
              <ButtonLink className="w-full" href={`/${locale}/cv`} target="_blank" variant="secondary">
                {copy.ctas.resume}
              </ButtonLink>
              <div className="flex items-center justify-between rounded-xl border border-line bg-panel px-4 py-3">
                <span className="text-xs font-bold uppercase tracking-[0.16em] text-muted">{copy.languageSwitch}</span>
                <Link
                  className="text-sm font-bold text-accent"
                  href={`/${alternateLocale}`}
                  onClick={() => setOpen(false)}
                >
                  {alternateLocale.toUpperCase()}
                </Link>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
