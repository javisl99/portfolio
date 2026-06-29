import { Braces, BriefcaseBusiness, Download, Layers3, Linkedin, Mail, Verified } from "lucide-react";

import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { Pill } from "@/components/ui/pill";
import { siteCopy, siteSettings } from "@/data/site";
import { getCvDownloadName, getCvFilePath } from "@/lib/cv";
import { localizePath, type Locale } from "@/lib/i18n";

export function HomeHero({ locale }: { locale: Locale }) {
  const copy = siteCopy[locale];
  const hero = copy.home.hero;
  const snapshotIcons = [Braces, Verified, BriefcaseBusiness, BriefcaseBusiness];
  const cvHref = getCvFilePath(locale);
  const cvDownloadName = getCvDownloadName(locale);
  const highlightIcons = [Verified, Braces, BriefcaseBusiness, Layers3, Verified];

  return (
    <section className="relative overflow-hidden py-8 sm:py-10 lg:py-24" id="top">
      <div className="absolute inset-x-0 top-0 h-[36rem] bg-[radial-gradient(circle_at_top_left,rgba(96,165,250,0.28),transparent_38%),radial-gradient(circle_at_82%_18%,rgba(37,99,235,0.24),transparent_32%)]" />
      <Container>
        <div className="grid items-start gap-8 lg:grid-cols-12 lg:gap-10">
          <div className="relative space-y-5 sm:space-y-6 lg:col-span-7 lg:space-y-8">
            <Pill className="max-w-full px-4 py-3 text-[0.62rem] leading-5 sm:px-5 sm:py-3.5 sm:text-[0.68rem]">
              {hero.eyebrow}
            </Pill>
            <div className="space-y-3 sm:space-y-4">
              <h1 className="max-w-5xl font-display text-[2.65rem] font-black leading-[0.98] tracking-tight text-ink sm:text-5xl lg:text-7xl">
                {hero.title}
              </h1>
              <p className="max-w-3xl text-base leading-7 text-muted sm:text-xl sm:leading-8">{hero.summary}</p>
              <p className="max-w-3xl text-sm leading-6 text-slate-300 sm:text-base sm:leading-7">{hero.proof}</p>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:flex sm:flex-row sm:flex-wrap">
              <ButtonLink className="px-5 text-sm sm:px-7 sm:text-base" href={localizePath(locale, "/experience")} variant="primary">
                {copy.ctas.experience}
              </ButtonLink>
              <ButtonLink className="px-5 text-sm sm:px-7 sm:text-base" href={localizePath(locale, "/contact")} variant="secondary">
                <Mail className="h-4 w-4" />
                {copy.ctas.contact}
              </ButtonLink>
              <ButtonLink className="px-5 text-sm sm:px-7 sm:text-base" href={siteSettings.linkedin} target="_blank" variant="secondary">
                <Linkedin className="h-4 w-4" />
                LinkedIn
              </ButtonLink>
              <ButtonLink
                className="px-5 text-sm sm:px-7 sm:text-base"
                download={cvDownloadName}
                href={cvHref}
                target="_blank"
                variant="secondary"
              >
                <Download className="h-4 w-4" />
                {copy.ctas.resume}
              </ButtonLink>
            </div>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-slate-300">
              <span className="font-mono text-[0.68rem] uppercase tracking-[0.18em] text-slate-400">
                {locale === "es" ? `Ubicación · ${siteSettings.location.es}` : `Location · ${siteSettings.location.en}`}
              </span>
            </div>
          </div>

          <div className="lg:col-span-5">
            <aside className="group relative overflow-hidden rounded-[2rem] border border-line bg-[linear-gradient(160deg,rgba(11,18,32,0.96),rgba(6,10,22,0.98))] p-6 shadow-[0_42px_100px_-48px_rgba(2,6,23,0.88)] sm:p-8">
              <div className="pointer-events-none absolute right-0 top-0 h-32 w-32 rounded-full bg-[#60a5fa]/12 blur-3xl transition-colors group-hover:bg-[#2563eb]/20" />
              <div className="relative">
                <h2 className="mb-3 flex items-center gap-2 text-lg font-bold text-white">
                  <Layers3 className="h-5 w-5 text-[#bcd1ff]" />
                  {locale === "es" ? "Resumen para recruiters" : "Recruiter snapshot"}
                </h2>
                <p className="mb-5 text-sm leading-6 text-slate-300 sm:leading-7">
                  {locale === "es"
                    ? "Una lectura rápida del perfil: Java backend, SAP Commerce Cloud, producción, integraciones y ubicación."
                    : "A quick read of the profile: Java backend, SAP Commerce Cloud, production work, integrations, and location."}
                </p>
                <ul className="space-y-4 sm:space-y-5">
                  {hero.quickFacts.map((fact, index) => {
                    const Icon = snapshotIcons[index % snapshotIcons.length];

                    return (
                      <li className="flex items-start gap-4" key={fact.label.en}>
                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-line bg-white/[0.03] text-[#bcd1ff]">
                          <Icon className="h-4 w-4" />
                        </div>
                        <div>
                          <p className="font-mono text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-slate-400">{fact.label[locale]}</p>
                          <p className="mt-1 text-sm font-semibold leading-6 text-white">{fact.value[locale]}</p>
                        </div>
                      </li>
                    );
                  })}
                </ul>
                <div className="mt-6 border-t border-white/10 pt-6 sm:mt-7 sm:pt-7">
                  <p className="font-mono text-[0.7rem] font-bold uppercase tracking-[0.18em] text-[#9fbeff]">
                    {locale === "es" ? "Lo que mejor representa mi valor" : "What best represents my value"}
                  </p>
                  <ul className="mt-4 grid gap-3 text-sm leading-6 text-slate-300 sm:leading-7">
                    <li className="flex gap-3">
                      <span className="mt-2 h-2 w-2 rounded-full bg-[#818cf8]" />
                      <span>
                        {locale === "es"
                          ? "Trabajo sobre producción, incidencias, integraciones y lógica de negocio sensible"
                          : "Work across production, incidents, integrations, and business-sensitive logic"}
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <span className="mt-2 h-2 w-2 rounded-full bg-[#60a5fa]" />
                      <span>
                        {locale === "es"
                          ? "Colaboración con QA, negocio y cliente; IA solo como apoyo táctico de análisis"
                          : "Collaboration with QA, business, and clients; AI only as tactical analysis support"}
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </aside>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-2.5 sm:mt-10 sm:gap-3 xl:grid-cols-5">
          {hero.highlights.map((highlight, index) => {
            const Icon = highlightIcons[index % highlightIcons.length];
            const isLastHighlight = index === hero.highlights.length - 1;

            return (
              <div
                className={`group flex items-center gap-2 rounded-[1.1rem] border border-line bg-[linear-gradient(180deg,rgba(11,18,32,0.92),rgba(7,12,24,0.97))] px-3 py-2.5 shadow-soft transition duration-300 hover:-translate-y-1 hover:border-accent-soft/35 sm:gap-3 sm:rounded-[1.35rem] sm:px-4 sm:py-3 ${
                  isLastHighlight ? "col-span-2 mx-auto w-full max-w-[14rem] sm:col-span-1 sm:max-w-none" : ""
                }`}
                key={highlight.label.en}
              >
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-line bg-white/[0.04] text-[#bcd1ff] transition duration-300 group-hover:border-accent-soft/35 group-hover:bg-white/[0.06] group-hover:text-white sm:h-10 sm:w-10 sm:rounded-xl">
                  <Icon className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                </div>
                <div>
                  <p className="text-[0.92rem] font-semibold leading-5 text-slate-100 transition duration-300 group-hover:text-white sm:hidden">
                    {highlight.shortLabel?.[locale] ?? highlight.label[locale]}
                  </p>
                  <p className="hidden text-sm font-semibold leading-6 text-slate-100 transition duration-300 group-hover:text-white sm:block">
                    {highlight.label[locale]}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
