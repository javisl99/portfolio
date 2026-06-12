import { FileDown, Linkedin, Mail, MapPin } from "lucide-react";

import { ButtonLink } from "@/components/ui/button-link";
import { siteCopy, siteSettings } from "@/data/site";
import type { Locale } from "@/lib/i18n";

interface ContactPanelProps {
  locale: Locale;
  fitTitle: string;
  fitBullets: string[];
}

export function ContactPanel({ locale, fitTitle, fitBullets }: ContactPanelProps) {
  const copy = siteCopy[locale];
  const contactCopy = copy.pages.contact;

  return (
    <div className="mx-auto max-w-5xl">
      <div className="rounded-[1.9rem] border border-line bg-[linear-gradient(180deg,rgba(10,16,31,0.92),rgba(8,13,26,0.96))] p-8 shadow-soft sm:p-10">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1.2fr)_minmax(18rem,0.8fr)]">
          <div>
            <p className="mb-5 font-mono text-[0.7rem] font-bold uppercase tracking-[0.2em] text-[#bcd1ff]">{fitTitle}</p>
            <ul className="grid gap-4 text-sm leading-7 text-muted sm:grid-cols-2">
              {fitBullets.map((bullet) => (
                <li className="rounded-2xl border border-white/8 bg-white/[0.04] px-4 py-4" key={bullet}>
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-5">
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
                    <span className="mt-1 block break-all">{item.value}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
