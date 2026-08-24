import { Bot, Braces, Cloud, Cpu, FileText, Search, Sparkles, Users, Wrench } from "lucide-react";

import { Container } from "@/components/ui/container";
import type { CopyCard, SkillCategory } from "@/data/types";
import type { Locale } from "@/lib/i18n";

const icons = [Braces, Cpu, Cloud, Sparkles, Users];
const aiIcons = [Search, Wrench, FileText, Bot];
const accentStyles = [
  "border-sky-400/25 bg-sky-500/10 text-sky-300",
  "border-emerald-400/25 bg-emerald-500/10 text-emerald-300",
  "border-purple-400/25 bg-purple-500/10 text-purple-300",
  "border-amber-400/25 bg-amber-500/10 text-amber-300",
  "border-blue-400/25 bg-blue-500/10 text-blue-300",
] as const;

interface SkillsSectionProps {
  locale: Locale;
  eyebrow: string;
  title: string;
  description: string;
  categories: SkillCategory[];
  aiTitle?: string;
  aiDescription?: string;
  aiItems?: CopyCard[];
}

export function SkillsSection({ locale, eyebrow, title, description, categories, aiTitle, aiDescription, aiItems = [] }: SkillsSectionProps) {
  const supportBullets =
    locale === "es"
      ? [
          "Análisis técnico más rápido",
          "Investigación de incidencias mejor guiada",
          "Automatización con criterio",
          "Mejor foco en decisiones técnicas",
        ]
      : ["Faster technical analysis", "Better incident investigation", "Automation with judgment", "More focus on technical decisions"];

  return (
    <section className="py-18 sm:py-24" id="skills">
      <Container>
        <span className="block" id="about" />
        <div className="mx-auto mb-10 max-w-3xl space-y-4 text-center">
          <p className="font-mono text-[0.7rem] font-bold uppercase tracking-[0.24em] text-[#9fbeff]">{eyebrow}</p>
          <h2 className="font-display text-3xl font-black tracking-tight text-ink sm:text-4xl">{title}</h2>
          <p className="text-base leading-8 text-muted sm:text-lg">{description}</p>
          <div className="mx-auto h-px w-24 bg-[linear-gradient(90deg,transparent,#60a5fa,#2563eb,transparent)]" />
        </div>

        {aiTitle && aiDescription && aiItems.length > 0 ? (
          <div className="mb-8 grid gap-6 lg:grid-cols-[minmax(0,1.08fr)_minmax(0,0.92fr)]">
            <article className="rounded-[2rem] border border-line bg-[linear-gradient(160deg,rgba(11,18,32,0.96),rgba(6,10,22,0.98))] p-8 shadow-[0_36px_80px_-42px_rgba(37,99,235,0.42)] sm:p-10">
              <p className="mb-4 font-mono text-[0.7rem] font-bold uppercase tracking-[0.24em] text-[#9fbeff]">
                {locale === "es" ? "Trabajo asistido con IA" : "AI-assisted work"}
              </p>
              <h3 className="max-w-2xl font-display text-2xl font-black tracking-tight text-white sm:text-3xl">{aiTitle}</h3>
              <p className="mt-4 max-w-3xl text-base leading-8 text-slate-300">{aiDescription}</p>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {supportBullets.map((item) => (
                  <div
                    className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm font-medium text-slate-200 shadow-soft transition duration-300 hover:-translate-y-1 hover:border-accent-soft/35 hover:bg-white/[0.06] hover:text-white"
                    key={item}
                  >
                    {item}
                  </div>
                ))}
              </div>
            </article>

            <div className="grid gap-4 sm:grid-cols-2">
              {aiItems.map((item, index) => {
                const Icon = aiIcons[index % aiIcons.length];

                return (
                  <article
                    className="rounded-[1.6rem] border border-line bg-[linear-gradient(180deg,rgba(11,18,32,0.94),rgba(7,12,24,0.98))] p-6 shadow-soft transition duration-200 hover:-translate-y-1 hover:border-accent-soft/35"
                    key={item.title.en}
                  >
                    <div className={`mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl border ${accentStyles[index % accentStyles.length]}`}>
                      <Icon className="h-5 w-5" />
                    </div>
                    <h4 className="mb-3 text-lg font-black tracking-tight text-ink">{item.title[locale]}</h4>
                    <p className="text-sm leading-7 text-muted">{item.body[locale]}</p>
                  </article>
                );
              })}
            </div>
          </div>
        ) : null}

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-5">
          {categories.map((category, index) => {
            const Icon = icons[index % icons.length];

            return (
              <article
                className="rounded-[1.6rem] border border-line bg-[linear-gradient(180deg,rgba(11,18,32,0.94),rgba(7,12,24,0.98))] p-6 shadow-soft transition duration-200 hover:-translate-y-1 hover:border-accent-soft/35"
                key={category.title.en}
              >
                <div className={`mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl border ${accentStyles[index % accentStyles.length]}`}>
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mb-4 text-lg font-black tracking-tight text-ink">{category.title[locale]}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.items.map((item) => (
                    <span
                      className="rounded-md border border-white/10 bg-white/[0.04] px-3 py-1.5 font-mono text-[0.7rem] font-medium tracking-[0.03em] text-ink"
                      key={item}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
