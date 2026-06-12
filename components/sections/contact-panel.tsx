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
  const contactCopy = copy.pages.contact;

  return (
    <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_22rem]">
      <div className="rounded-[1.8rem] border border-line bg-[linear-gradient(180deg,rgba(10,16,31,0.92),rgba(8,13,26,0.96))] p-8 shadow-soft">
        <p className="max-w-3xl text-base leading-8 text-muted">{description}</p>
        <div>
          <p className="mb-5 mt-8 font-mono text-[0.7rem] font-bold uppercase tracking-[0.2em] text-[#bcd1ff]">{fitTitle}</p>
          <ul className="grid gap-4 text-sm leading-7 text-muted sm:grid-cols-2">
            {fitBullets.map((bullet) => (
              <li className="rounded-2xl border border-white/8 bg-white/[0.04] px-4 py-4" key={bullet}>
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
      <aside className="space-y-5 rounded-[1.8rem] border border-white/10 bg-[linear-gradient(160deg,rgba(14,23,42,0.96),rgba(6,10,22,0.98))] p-6 text-white shadow-[0_36px_80px_-38px_rgba(15,23,42,0.82)]">
        <div className="border-b border-white/10 pb-4">
          <p className="font-mono text-[0.7rem] font-bold uppercase tracking-[0.24em] text-[#bcd1ff]">{contactCopy.channelsTitle}</p>
        </div>
        <ul className="grid gap-4 text-sm text-slate-300">
          {contactCopy.channelsItems.map((item, index) => (
            <li key={item.label}>
              <div className="rounded-xl border border-white/10 bg-white/[0.04] p-4">
                <span className="flex items-center gap-2 font-semibold text-white">
                  {index === 0 ? <Mail className="h-4 w-4 text-[#bcd1ff]" /> : null}
                  {index === 1 ? <Linkedin className="h-4 w-4 text-[#bcd1ff]" /> : null}
                  {index === 2 ? <MapPin className="h-4 w-4 text-[#bcd1ff]" /> : null}
                  {item.label}
                </span>
                <span className="mt-1 block">{item.value}</span>
              </div>
            </li>
          ))}
        </ul>
        <p className="text-sm leading-7 text-slate-300">{contactCopy.channelsNote}</p>
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
