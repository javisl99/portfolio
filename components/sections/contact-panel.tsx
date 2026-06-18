import { FileDown, FolderOpen, Github, Linkedin, Mail, MapPin } from "lucide-react";

import { ButtonLink } from "@/components/ui/button-link";
import { siteCopy, siteSettings } from "@/data/site";
import { getCvDownloadName, getCvFilePath } from "@/lib/cv";
import { localizePath, type Locale } from "@/lib/i18n";

interface ContactPanelProps {
  locale: Locale;
  fitTitle: string;
  fitBullets: string[];
}

export function ContactPanel({ locale, fitTitle, fitBullets }: ContactPanelProps) {
  const copy = siteCopy[locale];
  const contactCopy = copy.pages.contact;
  const cvHref = getCvFilePath(locale);
  const cvDownloadName = getCvDownloadName(locale);
  const secondaryActions = [
    {
      href: siteSettings.github,
      label: "GitHub",
      icon: Github,
      external: true,
    },
    {
      href: `${localizePath(locale)}#projects`,
      label: locale === "es" ? "Proyectos" : "Projects",
      icon: FolderOpen,
      external: false,
    },
  ];

  return (
    <div className="mx-auto max-w-5xl">
      <div className="rounded-[1.9rem] border border-line bg-[linear-gradient(180deg,rgba(11,18,32,0.95),rgba(7,12,24,0.98))] p-8 shadow-soft sm:p-10">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1.2fr)_minmax(18rem,0.8fr)]">
          <div>
            <p className="mb-5 font-mono text-[0.7rem] font-bold uppercase tracking-[0.2em] text-[#9fbeff]">{fitTitle}</p>
            <ul className="grid gap-4 text-sm leading-7 text-muted sm:grid-cols-2">
              {fitBullets.map((bullet) => (
                <li className="rounded-2xl border border-line bg-white/[0.03] px-4 py-4" key={bullet}>
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-5">
            <div className="border-b border-white/10 pb-4">
              <p className="font-mono text-[0.7rem] font-bold uppercase tracking-[0.24em] text-[#9fbeff]">{contactCopy.channelsTitle}</p>
            </div>
            <ul className="grid gap-4 text-sm text-slate-300">
              {contactCopy.channelsItems.map((item, index) => (
                <li key={item.label}>
                  <div className="rounded-xl border border-white/10 bg-white/[0.04] p-4">
                    <span className="flex items-center gap-2 font-semibold text-white">
                      {index === 0 ? <Mail className="h-4 w-4 text-[#bcd1ff]" /> : null}
                      {index === 1 ? <Linkedin className="h-4 w-4 text-[#bcd1ff]" /> : null}
                      {index === 2 ? <Github className="h-4 w-4 text-[#bcd1ff]" /> : null}
                      {index === 3 ? <MapPin className="h-4 w-4 text-[#bcd1ff]" /> : null}
                      {item.label}
                    </span>
                    {item.href ? (
                      <a className="mt-1 block break-all text-slate-300 transition hover:text-white" href={item.href} rel="noreferrer" target="_blank">
                        {item.value}
                      </a>
                    ) : (
                      <span className="mt-1 block break-all">{item.value}</span>
                    )}
                  </div>
                </li>
              ))}
            </ul>
            <p className="text-sm leading-7 text-muted">{contactCopy.channelsNote}</p>
            <div className="flex flex-col gap-3 sm:flex-row">
              {secondaryActions.map((action) => {
                const Icon = action.icon;

                return (
                  <ButtonLink
                    className="justify-center sm:flex-1"
                    href={action.href}
                    key={action.label}
                    target={action.external ? "_blank" : undefined}
                    variant="secondary"
                  >
                    <Icon className="h-4 w-4" />
                    {action.label}
                  </ButtonLink>
                );
              })}
            </div>
            <ButtonLink className="w-full justify-center" download={cvDownloadName} href={cvHref} target="_blank" variant="secondary">
              <FileDown className="h-4 w-4" />
              {copy.ctas.resume}
            </ButtonLink>
          </div>
        </div>
      </div>
    </div>
  );
}
