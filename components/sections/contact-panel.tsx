import { FileDown, Linkedin, Mail, MapPin } from "lucide-react";

import { ButtonLink } from "@/components/ui/button-link";
import { siteCopy, siteSettings } from "@/data/site";
import type { Locale } from "@/lib/i18n";

interface ContactPanelProps {
  locale: Locale;
  description: string;
  fitTitle: string;
  fitBullets: string[];
}

export function ContactPanel({ locale, description, fitTitle, fitBullets }: ContactPanelProps) {
  const copy = siteCopy[locale];

  return (
    <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_22rem]">
      <div className="rounded-2xl border border-line bg-panel p-8 shadow-soft">
        <p className="max-w-3xl text-base leading-8 text-muted">{description}</p>
        <div>
          <p className="mb-5 mt-8 text-xs font-bold uppercase tracking-[0.2em] text-accent">{fitTitle}</p>
          <ul className="grid gap-4 text-sm leading-7 text-muted sm:grid-cols-2">
            {fitBullets.map((bullet) => (
              <li className="border-l-2 border-accent pl-4" key={bullet}>
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-8 flex flex-wrap gap-3">
          <ButtonLink href={`mailto:${siteSettings.email}`} variant="primary">
            <Mail className="mr-2 h-4 w-4" />
            {copy.ctas.email}
          </ButtonLink>
          <ButtonLink href={siteSettings.linkedin} target="_blank" variant="secondary">
            <Linkedin className="mr-2 h-4 w-4" />
            {copy.ctas.linkedin}
          </ButtonLink>
          <ButtonLink href={`/${locale}/cv`} target="_blank" variant="secondary">
            <FileDown className="mr-2 h-4 w-4" />
            {copy.ctas.resume}
          </ButtonLink>
        </div>
      </div>
      <aside className="space-y-5 rounded-2xl border border-accent/25 bg-[#102022] p-6 text-white shadow-[0_28px_60px_-32px_rgba(2,6,23,0.72)]">
        <div className="border-b border-white/10 pb-4">
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-accent">
            {locale === "es" ? "Canales directos" : "Direct channels"}
          </p>
        </div>
        <ul className="grid gap-4 text-sm text-slate-300">
          <li>
            <div className="rounded-xl border border-white/10 bg-white/5 p-4">
              <span className="flex items-center gap-2 font-semibold text-white">
                <Mail className="h-4 w-4 text-accent" />
                Email
              </span>
              <span className="mt-1 block break-all">{siteSettings.email}</span>
            </div>
          </li>
          <li>
            <div className="rounded-xl border border-white/10 bg-white/5 p-4">
              <span className="flex items-center gap-2 font-semibold text-white">
                <Linkedin className="h-4 w-4 text-accent" />
                LinkedIn
              </span>
              <span className="mt-1 block break-all">{siteSettings.linkedin}</span>
            </div>
          </li>
          <li>
            <div className="rounded-xl border border-white/10 bg-white/5 p-4">
              <span className="flex items-center gap-2 font-semibold text-white">
                <MapPin className="h-4 w-4 text-accent" />
                {locale === "es" ? "Ubicación" : "Location"}
              </span>
              <span className="mt-1 block">{siteSettings.location[locale]}</span>
            </div>
          </li>
        </ul>
        <div className="flex flex-col gap-3">
          <ButtonLink className="w-full" href={`mailto:${siteSettings.email}`} variant="primary">
            <Mail className="mr-2 h-4 w-4" />
            {copy.ctas.contact}
          </ButtonLink>
          <ButtonLink className="w-full border-white/12 bg-white/6 text-white hover:bg-white/12" href={`/${locale}/cv`} target="_blank" variant="secondary">
            <FileDown className="mr-2 h-4 w-4" />
            {copy.ctas.resume}
          </ButtonLink>
        </div>
      </aside>
    </div>
  );
}
