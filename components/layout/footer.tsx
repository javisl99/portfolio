"use client";

import Link from "next/link";
import { Download, Github, Linkedin } from "lucide-react";
import { usePathname } from "next/navigation";

import { BrandLogo } from "@/components/ui/brand-logo";
import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { siteCopy, siteSettings } from "@/data/site";
import { getCvDownloadName, getCvFilePath } from "@/lib/cv";
import { localizePath, type Locale } from "@/lib/i18n";

interface FooterProps {
  locale: Locale;
}

export function Footer({ locale }: FooterProps) {
  const copy = siteCopy[locale];
  const currentYear = new Date().getFullYear();
  const pathname = usePathname();
  const isHome = pathname === `/${locale}`;
  const cvHref = getCvFilePath(locale);
  const cvDownloadName = getCvDownloadName(locale);

  if (isHome) {
    return (
      <footer className="mt-24 border-t border-line bg-[linear-gradient(180deg,rgba(3,7,18,0),rgba(8,13,26,0.98))] pb-10 pt-24">
        <Container>
          <div className="mb-16 flex flex-col items-center text-center">
            <h2 className="mb-6 max-w-4xl font-display text-4xl font-black tracking-tight text-ink sm:text-5xl">
              {locale === "es" ? "Listo para hablar de backend, producto y plataformas enterprise?" : "Ready to talk about backend, product, and enterprise platforms?"}
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              <ButtonLink className="px-10 py-4 text-lg" href={`${localizePath(locale)}#contact`} variant="primary">
                {locale === "es" ? "Contactar" : "Get in Touch"}
              </ButtonLink>
              <ButtonLink className="px-10 py-4 text-lg" download={cvDownloadName} href={cvHref} target="_blank" variant="secondary">
                <Download className="mr-2 h-5 w-5" />
                {copy.ctas.resume}
              </ButtonLink>
            </div>
          </div>

          <div className="flex flex-col items-center justify-between gap-6 border-t border-line pt-10 md:flex-row">
            <div className="flex flex-col items-center gap-4 text-center md:items-start md:text-left">
              <BrandLogo className="w-[14rem]" imageClassName="w-[14rem]" variant="full-light" />
              <div className="text-sm text-muted">
                © {currentYear} {siteSettings.name}. {copy.footer.note}
              </div>
            </div>
            <div className="flex items-center gap-6">
              <a
                aria-label="LinkedIn"
                className="flex h-11 w-11 items-center justify-center rounded-2xl border border-line bg-white/[0.03] transition hover:border-accent-soft/30 hover:bg-accent/10 hover:text-white"
                href={siteSettings.linkedin}
                rel="noreferrer"
                target="_blank"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                aria-label="GitHub"
                className="flex h-11 w-11 items-center justify-center rounded-2xl border border-line bg-white/[0.03] transition hover:border-accent-soft/30 hover:bg-accent/10 hover:text-white"
                href={siteSettings.github}
                rel="noreferrer"
                target="_blank"
              >
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>
        </Container>
      </footer>
    );
  }

  return (
    <footer className="mt-24 bg-[linear-gradient(180deg,#08111f,#030712)] py-20 text-white">
      <Container className="text-center">
        <div className="space-y-8">
          <h2 className="font-display text-4xl font-black tracking-tight sm:text-5xl">
            {locale === "es" ? "Listo para hablar de backend, producto y plataformas enterprise?" : "Ready to talk about backend, product, and enterprise platforms?"}
          </h2>
          <p className="mx-auto max-w-2xl text-lg leading-8 text-slate-300">{copy.footer.availability}</p>
          <div className="flex flex-col items-center justify-center gap-4 pt-2 sm:flex-row">
            <ButtonLink className="w-full px-10 py-4 text-lg sm:w-auto" href={`${localizePath(locale)}#contact`} variant="primary">
              {locale === "es" ? "Contactar" : "Get in Touch"}
            </ButtonLink>
            <ButtonLink
              className="w-full border-white/12 bg-white/6 px-10 py-4 text-lg text-white hover:bg-white/12 sm:w-auto"
              download={cvDownloadName}
              href={cvHref}
              target="_blank"
              variant="secondary"
            >
              <Download className="mr-2 h-5 w-5" />
              {copy.ctas.resume}
            </ButtonLink>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-6 border-t border-white/10 pt-10 md:flex-row">
          <div className="flex items-center gap-3">
            <BrandLogo className="w-9" imageClassName="w-9" variant="mark" />
            <span className="text-xs font-bold uppercase tracking-[0.22em] text-slate-400">{siteSettings.name} · {currentYear}</span>
          </div>
          <div className="flex items-center gap-6 text-sm font-medium text-slate-400">
            <Link className="transition hover:text-accent" href={siteSettings.linkedin} rel="noreferrer" target="_blank">
              LinkedIn
            </Link>
            <Link className="transition hover:text-accent" href={siteSettings.github} rel="noreferrer" target="_blank">
              GitHub
            </Link>
            <a className="transition hover:text-accent" download={cvDownloadName} href={cvHref} rel="noreferrer" target="_blank">
              {copy.ctas.resume}
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
