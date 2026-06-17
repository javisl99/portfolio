import { Bot, Braces, BriefcaseBusiness, Download, Layers3, Mail, Verified } from "lucide-react";

import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { Pill } from "@/components/ui/pill";
import { siteCopy } from "@/data/site";
import { getCvDownloadName, getCvFilePath } from "@/lib/cv";
import { localizePath, type Locale } from "@/lib/i18n";

export function HomeHero({ locale }: { locale: Locale }) {
  const copy = siteCopy[locale];
  const hero = copy.home.hero;
  const snapshotIcons = [Braces, BriefcaseBusiness, Bot, Verified];
  const cvHref = getCvFilePath(locale);
  const cvDownloadName = getCvDownloadName(locale);

  return (
    <section className="relative overflow-hidden py-12 lg:py-24" id="top">
      <div className="absolute inset-x-0 top-0 h-[36rem] bg-[radial-gradient(circle_at_top_left,rgba(96,165,250,0.28),transparent_38%),radial-gradient(circle_at_82%_18%,rgba(37,99,235,0.24),transparent_32%)]" />
      <Container>
        <div className="grid items-start gap-10 lg:grid-cols-12">
          <div className="relative space-y-8 lg:col-span-7">
            <Pill>{hero.eyebrow}</Pill>
            <div className="space-y-4">
              <h1 className="max-w-5xl font-display text-4xl font-black leading-[1.02] tracking-tight text-ink sm:text-5xl lg:text-7xl">
                {hero.title}
              </h1>
              <p className="max-w-3xl text-lg leading-8 text-muted sm:text-xl">{hero.summary}</p>
              <p className="max-w-3xl text-sm leading-7 text-slate-300 sm:text-base">{hero.proof}</p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <ButtonLink className="px-7 text-base" href={`${localizePath(locale)}#experience`} variant="primary">
                {copy.ctas.experience}
              </ButtonLink>
              <ButtonLink className="px-7 text-base" href={`${localizePath(locale)}#contact`} variant="secondary">
                <Mail className="h-4 w-4" />
                {copy.ctas.contact}
              </ButtonLink>
              <ButtonLink className="px-7 text-base" download={cvDownloadName} href={cvHref} target="_blank" variant="secondary">
                <Download className="h-4 w-4" />
                {copy.ctas.resume}
              </ButtonLink>
            </div>
          </div>

          <div className="lg:col-span-5">
            <aside className="group relative overflow-hidden rounded-[2rem] border border-line bg-[linear-gradient(160deg,rgba(11,18,32,0.96),rgba(6,10,22,0.98))] p-7 shadow-[0_42px_100px_-48px_rgba(2,6,23,0.88)] sm:p-8">
              <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-[#60a5fa]/12 blur-3xl transition-colors group-hover:bg-[#2563eb]/20" />
              <div className="relative">
                <h2 className="mb-3 flex items-center gap-2 text-lg font-bold text-white">
                  <Layers3 className="h-5 w-5 text-[#bcd1ff]" />
                  {locale === "es" ? "Resumen para recruiters" : "Recruiter snapshot"}
                </h2>
                <p className="mb-6 text-sm leading-7 text-slate-300">
                  {locale === "es"
                    ? "Una lectura rápida del perfil: Java backend, plataformas enterprise y sistemas distribuidos, especialización fuerte en SAP Commerce Cloud sin quedar encerrado en consultoría SAP y uso práctico de Codex y ChatGPT para acelerar entrega sin perder criterio técnico."
                    : "A quick read of the profile: Java backend, enterprise platforms and distributed systems, strong SAP Commerce Cloud specialization without being boxed into SAP consulting, and practical use of Codex and ChatGPT to accelerate delivery without giving up technical judgment."}
                </p>
                <ul className="space-y-5">
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
                <div className="mt-7 border-t border-white/10 pt-7">
                  <p className="font-mono text-[0.7rem] font-bold uppercase tracking-[0.18em] text-[#9fbeff]">
                    {locale === "es" ? "Lo que mejor representa mi valor" : "What best represents my value"}
                  </p>
                  <ul className="mt-4 grid gap-3 text-sm leading-7 text-slate-300">
                    <li className="flex gap-3">
                      <span className="mt-2 h-2 w-2 rounded-full bg-[#818cf8]" />
                      <span>
                        {locale === "es"
                          ? "Backend engineering aplicado a plataformas enterprise, sistemas distribuidos y flujos sensibles de negocio"
                          : "Backend engineering applied to enterprise platforms, distributed systems, and business-sensitive flows"}
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <span className="mt-2 h-2 w-2 rounded-full bg-[#60a5fa]" />
                      <span>
                        {locale === "es"
                          ? "Capacidad de moverme entre implementación, incidencias, debugging, cliente y contexto de producto"
                          : "Ability to move across implementation, incidents, debugging, client communication, and product context"}
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </Container>
    </section>
  );
}
