"use client";

import Link from "next/link";
import { Mail, Menu, X } from "lucide-react";
import { type MouseEvent as ReactMouseEvent, useEffect, useRef, useState } from "react";
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
  const mobileLanguageLabel = locale === "es" ? "Ver en English" : "View in Spanish";

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

  function handleLocaleSwitch(event: ReactMouseEvent<HTMLAnchorElement>) {
    event.preventDefault();
    const targetHref = event.currentTarget.href;
    closeMenu();

    window.setTimeout(() => {
      window.location.assign(targetHref);
    }, 120);
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
        className={`mr-1 mt-1 inline-flex h-11 w-11 cursor-pointer items-center justify-center rounded-xl border text-white shadow-[0_14px_34px_-20px_rgba(2,6,23,0.92)] transition duration-200 focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-accent active:scale-[0.97] ${
          open
            ? "border-[#93c5fd]/40 bg-[rgba(17,27,45,0.98)] shadow-[0_0_0_1px_rgba(147,197,253,0.12),0_18px_38px_-20px_rgba(37,99,235,0.45)] hover:border-[#bfdbfe]/55 hover:bg-[rgba(24,36,58,0.99)]"
            : "border-[#60a5fa]/20 bg-[rgba(8,17,31,0.96)] hover:border-[#93c5fd]/30 hover:bg-[#60a5fa]/10"
        }`}
        onClick={toggleMenu}
        ref={triggerRef}
        type="button"
      >
        <span className="relative block h-5 w-5">
          <Menu
            aria-hidden="true"
            className={`absolute inset-0 h-5 w-5 stroke-[2.35] transition-all duration-200 ${open ? "scale-90 -rotate-90 opacity-0" : "scale-100 rotate-0 opacity-100"}`}
          />
          <X
            aria-hidden="true"
            className={`absolute inset-0 h-5 w-5 stroke-[2.6] transition-all duration-200 ${open ? "scale-100 rotate-0 opacity-100 text-white" : "scale-90 rotate-90 opacity-0"}`}
          />
        </span>
      </button>

      {mounted ? (
        <>
          <div
            aria-hidden="true"
            className={`fixed inset-x-0 bottom-0 top-[4.25rem] z-30 bg-[rgba(2,6,18,0.68)] backdrop-blur-xl transition-opacity duration-180 motion-reduce:transition-none ${
              open ? "opacity-100" : "pointer-events-none opacity-0"
            }`}
          />
          <div
            aria-hidden={!open}
            aria-modal="true"
            className={`fixed inset-x-0 top-[4.25rem] z-40 border-b border-white/10 bg-[rgba(4,9,20,0.92)] px-5 pb-5 pt-2 shadow-[0_30px_70px_-32px_rgba(2,6,23,0.98)] backdrop-blur-3xl transition-all duration-180 motion-reduce:transition-none ${
              open ? "translate-y-0 scale-100 opacity-100 ease-out" : "pointer-events-none -translate-y-2 scale-[0.985] opacity-0 ease-in"
            }`}
            id="mobile-nav-panel"
            ref={panelRef}
            role="dialog"
          >
            <div className="mx-auto flex max-w-7xl flex-col gap-3">
              <nav aria-label="Mobile" className="grid gap-2">
              {copy.navigation.map((item) => (
                (() => {
                  const href = localizePath(locale, item.href);
                  const isActive = pathname === href;

                  return (
                    <Link
                      className={`cursor-pointer rounded-[1.15rem] border px-4 py-3 text-sm font-semibold transition focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-accent ${
                        isActive
                          ? "border-[#93c5fd]/32 bg-[rgba(96,165,250,0.14)] text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.02)]"
                          : "border-white/8 bg-[rgba(8,17,31,0.72)] text-ink hover:border-accent/28 hover:bg-white/[0.04] hover:text-white"
                      }`}
                      href={href}
                      key={item.href}
                      onClick={closeMenu}
                      ref={item.href === copy.navigation[0]?.href ? firstLinkRef : undefined}
                    >
                      {item.label}
                    </Link>
                  );
                })()
              ))}
              </nav>

              <div className="flex flex-col gap-2.5">
                <ButtonLink className="w-full" href={`mailto:${siteSettings.email}`} onClick={closeMenu} variant="primary">
                  <Mail className="h-4 w-4" />
                  {locale === "es" ? "Enviar email" : "Send email"}
                </ButtonLink>
                <ButtonLink className="w-full border-white/10 bg-transparent" download={cvDownloadName} href={cvHref} onClick={closeMenu} target="_blank" variant="secondary">
                  {copy.ctas.resume}
                </ButtonLink>
                <a
                  className="flex items-center justify-between rounded-[1.1rem] border border-white/8 bg-[rgba(8,17,31,0.72)] px-4 py-3 transition hover:border-accent/28 hover:bg-white/[0.04] focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-accent"
                  href={replaceLocaleInPathname(pathname, alternateLocale)}
                  hrefLang={alternateLocale}
                  lang={alternateLocale}
                  onClick={handleLocaleSwitch}
                >
                  <span className="text-xs font-bold uppercase tracking-[0.16em] text-muted">{mobileLanguageLabel}</span>
                  <span className="inline-flex min-w-10 items-center justify-center rounded-full border border-[#60a5fa]/20 bg-[#60a5fa]/10 px-2.5 py-1 text-sm font-bold text-accent-soft">
                    {alternateLocale.toUpperCase()}
                  </span>
                </a>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </div>
  );
}
