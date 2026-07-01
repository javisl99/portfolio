"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

import { ButtonLink } from "@/components/ui/button-link";
import { BrandLogo } from "@/components/ui/brand-logo";
import { siteCopy, siteSettings } from "@/data/site";
import { getCvDownloadName, getCvFilePath } from "@/lib/cv";
import { getAlternateLocale, localizePath, replaceLocaleInPathname, type Locale } from "@/lib/i18n";

interface MobileMenuProps {
  locale: Locale;
}

export function MobileMenu({ locale }: MobileMenuProps) {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();
  const copy = siteCopy[locale];
  const alternateLocale = getAlternateLocale(locale);
  const cvHref = getCvFilePath(locale);
  const cvDownloadName = getCvDownloadName(locale);
  const triggerRef = useRef<HTMLButtonElement | null>(null);
  const panelRef = useRef<HTMLDivElement | null>(null);
  const firstLinkRef = useRef<HTMLAnchorElement | null>(null);
  const lastActiveElementRef = useRef<HTMLElement | null>(null);

  function openMenu() {
    lastActiveElementRef.current = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    setMounted(true);

    window.requestAnimationFrame(() => {
      setOpen(true);
    });
  }

  function closeMenu() {
    setOpen(false);

    window.setTimeout(() => {
      setMounted(false);
      lastActiveElementRef.current?.focus();
    }, 240);
  }

  function toggleMenu() {
    if (open) {
      closeMenu();
      return;
    }

    openMenu();
  }

  useEffect(() => {
    if (!mounted) {
      return;
    }

    const previousOverflow = document.body.style.overflow;

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeMenu();
      }
    };

    const handleTab = (event: KeyboardEvent) => {
      if (event.key !== "Tab" || !panelRef.current) {
        return;
      }

      const focusableElements = panelRef.current.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])',
      );

      if (focusableElements.length === 0) {
        return;
      }

      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault();
        lastElement.focus();
      } else if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault();
        firstElement.focus();
      }
    };

    const handlePointerDown = (event: MouseEvent | TouchEvent) => {
      const target = event.target;

      if (!(target instanceof Node)) {
        return;
      }

      if (panelRef.current?.contains(target)) {
        return;
      }

      if (triggerRef.current?.contains(target)) {
        return;
      }

      closeMenu();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleEscape);
    window.addEventListener("keydown", handleTab);
    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("touchstart", handlePointerDown);
    window.requestAnimationFrame(() => {
      firstLinkRef.current?.focus();
    });

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleEscape);
      window.removeEventListener("keydown", handleTab);
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("touchstart", handlePointerDown);
    };
  }, [mounted]);

  return (
    <div className="md:hidden">
      <button
        aria-expanded={open}
        aria-controls="mobile-nav-panel"
        aria-label={open ? (locale === "es" ? "Cerrar menú" : "Close menu") : locale === "es" ? "Abrir menú" : "Open menu"}
        className="inline-flex h-10 w-10 cursor-pointer items-center justify-center text-ink focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-accent"
        onClick={toggleMenu}
        ref={triggerRef}
        type="button"
      >
        <span className="relative block h-5 w-5">
          <Menu
            aria-hidden="true"
            className={`absolute inset-0 h-5 w-5 transition-all duration-200 ${open ? "scale-90 -rotate-90 opacity-0" : "scale-100 rotate-0 opacity-100"}`}
          />
          <X
            aria-hidden="true"
            className={`absolute inset-0 h-5 w-5 transition-all duration-200 ${open ? "scale-100 rotate-0 opacity-100" : "scale-90 rotate-90 opacity-0"}`}
          />
        </span>
      </button>

      {mounted ? (
        <div
          aria-hidden={!open}
        className={`fixed inset-x-0 top-[4.5rem] z-40 border-b border-white/8 bg-[rgba(3,7,18,0.92)] px-5 pb-6 pt-4 shadow-[0_28px_60px_-36px_rgba(2,6,23,0.98)] backdrop-blur-2xl transition-all duration-240 motion-reduce:transition-none ${
            open ? "translate-y-0 scale-100 opacity-100 ease-out" : "pointer-events-none -translate-y-2 scale-[0.985] opacity-0 ease-in"
          }`}
          id="mobile-nav-panel"
          ref={panelRef}
        >
          <div className="mx-auto flex max-w-7xl flex-col gap-5">
            <div className="flex items-center gap-3">
              <BrandLogo className="w-12" imageClassName="w-12" variant="mark" />
              <div>
                <p className="text-sm font-bold text-ink">{siteSettings.name}</p>
                <p className="text-xs uppercase tracking-[0.18em] text-muted">{copy.roleLabel}</p>
              </div>
            </div>

            <nav aria-label="Mobile" className="grid gap-2">
              {copy.navigation.map((item) => (
                <Link
                  className="cursor-pointer rounded-2xl border border-white/8 bg-[rgba(8,17,31,0.72)] px-4 py-3.5 text-sm font-semibold text-ink transition hover:border-accent/28 hover:bg-white/[0.04] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-accent"
                  href={localizePath(locale, item.href)}
                  key={item.href}
                  onClick={closeMenu}
                  ref={item.href === copy.navigation[0]?.href ? firstLinkRef : undefined}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="flex flex-col gap-3">
              <ButtonLink className="w-full" href={`${localizePath(locale)}/contact`} onClick={closeMenu} variant="primary">
                {copy.ctas.contact}
              </ButtonLink>
              <ButtonLink className="w-full" download={cvDownloadName} href={cvHref} onClick={closeMenu} target="_blank" variant="secondary">
                {copy.ctas.resume}
              </ButtonLink>
              <div className="flex items-center justify-between rounded-xl border border-white/8 bg-[rgba(8,17,31,0.72)] px-4 py-3">
                <span className="text-xs font-bold uppercase tracking-[0.16em] text-muted">{copy.languageSwitch}</span>
                <a
                  className="text-sm font-bold text-accent-soft focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-accent"
                  href={replaceLocaleInPathname(pathname, alternateLocale)}
                  hrefLang={alternateLocale}
                  lang={alternateLocale}
                  onClick={closeMenu}
                >
                  {alternateLocale.toUpperCase()}
                </a>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
