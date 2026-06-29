"use client";

import { Download, Github, Linkedin } from "lucide-react";

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
  const cvHref = getCvFilePath(locale);
  const cvDownloadName = getCvDownloadName(locale);

  return (
    <footer className="mt-24 border-t border-line bg-[linear-gradient(180deg,rgba(3,7,18,0),rgba(8,13,26,0.98))] pb-10 pt-24">
      <Container>
        <div className="mb-16 flex flex-col items-center text-center">
          <h2 className="mb-6 max-w-4xl font-display text-4xl font-black tracking-tight text-ink sm:text-5xl">
            {locale === "es" ? "¿Listo para hablar de backend, integraciones y producto?" : "Ready to talk about backend, integrations, and product?"}
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            <ButtonLink className="px-10 py-4 text-lg" href={localizePath(locale, "/contact")} variant="primary">
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
            <BrandLogo className="w-[19rem]" imageClassName="w-[19rem]" variant="full-light" />
            <div className="text-sm text-muted">© {currentYear} {siteSettings.name}</div>
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
