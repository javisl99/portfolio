"use client";

import { Github, Linkedin } from "lucide-react";

import { BrandLogo } from "@/components/ui/brand-logo";
import { Container } from "@/components/ui/container";
import { siteSettings } from "@/data/site";
import type { Locale } from "@/lib/i18n";

interface FooterProps {
  locale: Locale;
}

export function Footer({ locale }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-6 border-t border-line bg-[linear-gradient(180deg,rgba(3,7,18,0),rgba(8,13,26,0.98))] pb-10 pt-12 sm:mt-7 sm:pt-14">
      <Container>
        <div className="flex flex-col items-center justify-between gap-6 pt-6 md:flex-row md:pt-8">
          <div className="flex flex-col items-center gap-4 text-center md:items-start md:text-left">
            <BrandLogo variant="full-light" />
            <div className="text-sm text-slate-400 md:self-start">© {currentYear} {siteSettings.name}</div>
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
