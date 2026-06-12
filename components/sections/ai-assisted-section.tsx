import { Bot, FileText, Search, Wrench } from "lucide-react";

import { Container } from "@/components/ui/container";
import type { CopyCard } from "@/data/types";
import type { Locale } from "@/lib/i18n";

const icons = [Search, Wrench, FileText, Bot];

interface AIAssistedSectionProps {
  locale: Locale;
  eyebrow: string;
  title: string;
  description: string;
  items: CopyCard[];
}

export function AIAssistedSection({ locale, eyebrow, title, description, items }: AIAssistedSectionProps) {
  const supportBullets =
    locale === "es"
      ? [
          "Análisis técnico más rápido",
          "Flujos de debugging más claros",
          "Documentación más limpia",
          "Automatización de tareas repetitivas",
          "Soporte a calidad de código",
          "Mayor velocidad de entrega",
        ]
      : [
          "Faster technical analysis",
          "Better debugging workflows",
          "Cleaner documentation",
          "Automation of repetitive tasks",
          "Code quality support",
          "Higher delivery speed",
        ];

  return (
    <section className="py-18 sm:py-24" id="ai-assisted-engineering">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]">
          <div className="rounded-[2rem] border border-white/10 bg-[linear-gradient(160deg,rgba(14,23,42,0.96),rgba(6,10,22,0.98))] p-8 shadow-[0_36px_80px_-42px_rgba(37,99,235,0.34)] sm:p-10">
            <p className="mb-4 font-mono text-[0.7rem] font-bold uppercase tracking-[0.24em] text-[#bcd1ff]">{eyebrow}</p>
            <h2 className="max-w-3xl font-display text-3xl font-black tracking-tight text-white sm:text-4xl">
              {title}
            </h2>
            <p className="mt-5 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">{description}</p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {supportBullets.map((item) => (
                <div
                  className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm font-medium text-slate-200"
                  key={item}
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {items.map((item, index) => {
              const Icon = icons[index % icons.length];

              return (
                <article
                  className="rounded-[1.6rem] border border-line bg-[linear-gradient(180deg,rgba(10,16,31,0.92),rgba(8,13,26,0.96))] p-6 shadow-soft transition duration-200 hover:-translate-y-1 hover:border-accent-soft/35"
                  key={item.title.en}
                >
                  <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/8 bg-[linear-gradient(180deg,rgba(96,165,250,0.18),rgba(129,140,248,0.12))] text-[#d5e2ff]">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mb-3 text-lg font-black tracking-tight text-ink">{item.title[locale]}</h3>
                  <p className="text-sm leading-7 text-muted">{item.body[locale]}</p>
                </article>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
