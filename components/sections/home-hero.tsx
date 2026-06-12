import { Bot, Braces, BriefcaseBusiness, Layers3, Mail, Verified } from "lucide-react";

import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { Pill } from "@/components/ui/pill";
import { siteCopy } from "@/data/site";
import { localizePath, type Locale } from "@/lib/i18n";

export function HomeHero({ locale }: { locale: Locale }) {
  const copy = siteCopy[locale];
  const hero = copy.home.hero;
  const snapshotIcons = [Braces, BriefcaseBusiness, Bot, Verified];

  return (
    <section className="relative overflow-hidden py-12 lg:py-24" id="top">
      <div className="absolute inset-x-0 top-0 h-[36rem] bg-[radial-gradient(circle_at_top_left,rgba(37,99,235,0.24),transparent_42%),radial-gradient(circle_at_82%_18%,rgba(129,140,248,0.22),transparent_34%)]" />
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
            </div>
          </div>

          <div className="lg:col-span-5">
            <aside className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(160deg,rgba(12,20,36,0.96),rgba(6,10,22,0.98))] p-7 shadow-[0_42px_100px_-48px_rgba(15,23,42,0.82)] sm:p-8">
              <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-[#60a5fa]/10 blur-3xl transition-colors group-hover:bg-[#818cf8]/16" />
              <div className="relative">
                <h2 className="mb-3 flex items-center gap-2 text-lg font-bold text-white">
                  <Layers3 className="h-5 w-5 text-[#bcd1ff]" />
                  {locale === "es" ? "Resumen para recruiters" : "Recruiter snapshot"}
                </h2>
                <p className="mb-6 text-sm leading-7 text-slate-300">
                  {locale === "es"
                    ? "Una lectura rápida del perfil: backend, plataformas enterprise, especialización fuerte en SAP Commerce Cloud y uso práctico de IA para acelerar entrega sin perder criterio técnico."
                    : "A quick read of the profile: backend, enterprise platforms, strong SAP Commerce Cloud specialization, and practical AI usage to accelerate delivery without giving up technical judgment."}
                </p>
                <ul className="space-y-5">
                  {hero.quickFacts.map((fact, index) => {
                    const Icon = snapshotIcons[index % snapshotIcons.length];

                    return (
                      <li className="flex items-start gap-4" key={fact.label.en}>
                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/8 bg-white/[0.04] text-[#bcd1ff]">
                          <Icon className="h-4 w-4" />
                        </div>
                        <div>
                          <p className="font-mono text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-slate-400">{fact.label[locale]}</p>
                          <p className="mt-1 font-semibold text-white">{fact.value[locale]}</p>
                        </div>
                      </li>
                    );
                  })}
                </ul>
                <div className="mt-7 border-t border-white/10 pt-7">
                  <p className="font-mono text-[0.7rem] font-bold uppercase tracking-[0.18em] text-[#bcd1ff]">
                    {locale === "es" ? "Lo que mejor representa mi valor" : "What best represents my value"}
                  </p>
                  <ul className="mt-4 grid gap-3 text-sm leading-7 text-slate-300">
                    <li className="flex gap-3">
                      <span className="mt-2 h-2 w-2 rounded-full bg-[#818cf8]" />
                      <span>
                        {locale === "es"
                          ? "Backend engineering aplicado a plataformas enterprise con complejidad real"
                          : "Backend engineering applied to enterprise platforms with real complexity"}
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <span className="mt-2 h-2 w-2 rounded-full bg-[#60a5fa]" />
                      <span>
                        {locale === "es"
                          ? "Capacidad de moverme entre implementación, incidencias, cliente y negocio"
                          : "Ability to move across implementation, incidents, client communication, and business context"}
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
