"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, BriefcaseBusiness, Building2, CalendarDays, Layers3 } from "lucide-react";

import { DetailModal } from "@/components/ui/detail-modal";
import { experienceEntries } from "@/data/experience";
import type { ExperienceEntry } from "@/data/types";
import { localizePath, type Locale } from "@/lib/i18n";

interface ExperienceSnapshotGridProps {
  locale: Locale;
  variant?: "compact" | "full";
}

export function ExperienceSnapshotGrid({ locale, variant = "full" }: ExperienceSnapshotGridProps) {
  const [activeEntry, setActiveEntry] = useState<ExperienceEntry | null>(null);
  const [isModalVisible, setIsModalVisible] = useState(false);

  function openModal(entry: ExperienceEntry) {
    setActiveEntry(entry);

    window.requestAnimationFrame(() => {
      setIsModalVisible(true);
    });
  }

  function closeModal() {
    setIsModalVisible(false);

    window.setTimeout(() => {
      setActiveEntry(null);
    }, 240);
  }

  function getStageSignals(entry: ExperienceEntry) {
    const stack = entry.stack.join(" ").toLowerCase();
    const responsibilities = entry.responsibilities.map((item) => item[locale].toLowerCase()).join(" ");
    const context = entry.context[locale].toLowerCase();
    const source = `${stack} ${responsibilities} ${context}`;
    const catalog = [
      { es: "Producción", en: "Production", match: ["producción", "production"] },
      { es: "Integraciones", en: "Integrations", match: ["integraciones", "integrations"] },
      { es: "APIs REST", en: "REST APIs", match: ["api", "rest"] },
      { es: "SQL", en: "SQL", match: ["sql", "oracle", "flexiblesearch"] },
      { es: "Jobs", en: "Jobs", match: ["jobs", "batch"] },
      { es: "Interceptors", en: "Interceptors", match: ["interceptors"] },
      { es: "Validators", en: "Validators", match: ["validators"] },
      { es: "Backoffice", en: "Backoffice", match: ["backoffice"] },
      { es: "QA / negocio / cliente", en: "QA / business / client", match: ["qa", "negocio", "business", "cliente", "client"] },
    ];

    return catalog.filter((item) => item.match.some((keyword) => source.includes(keyword))).slice(0, 4).map((item) => item[locale]);
  }

  if (variant === "compact") {
    return (
      <div className="mx-auto grid max-w-5xl gap-4 md:grid-cols-2 xl:grid-cols-4">
        {experienceEntries.map((entry) => {
          const stageSignals = getStageSignals(entry).slice(0, 3);

          return (
            <Link
              className="group flex flex-col justify-between rounded-[1.6rem] border border-white/8 bg-gradient-to-b from-[#14192b]/80 to-[#0c0f1c]/95 p-5 text-left shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_20px_45px_-20px_rgba(0,0,0,0.85)] transition duration-300 hover:-translate-y-1 hover:border-indigo-400/35 hover:shadow-[0_20px_50px_-20px_rgba(99,102,241,0.25)] focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-accent motion-reduce:transform-none motion-reduce:transition-none"
              href={localizePath(locale, "/experience")}
              key={entry.id}
            >
              <div>
                <div className="mb-4 flex items-center justify-between gap-3">
                  <p className="font-mono text-[0.65rem] font-bold uppercase tracking-wider text-indigo-300">{entry.badge[locale]}</p>
                  <span className="text-xs font-semibold text-slate-400">{entry.period[locale]}</span>
                </div>
                <h3 className="text-lg font-black leading-tight tracking-tight text-white group-hover:text-indigo-200">{entry.company}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-300">{entry.cardImpact[locale]}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {stageSignals.map((item) => (
                    <span className="rounded-full border border-indigo-400/20 bg-indigo-500/10 px-2.5 py-1 text-[0.68rem] font-semibold text-indigo-200" key={item}>
                      {item}
                    </span>
                  ))}
                </div>
              </div>
              <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-indigo-300 group-hover:text-white">
                {locale === "es" ? "Ver trayectoria" : "View path"}
                <ArrowRight className="h-4 w-4" />
              </span>
            </Link>
          );
        })}
      </div>
    );
  }

  return (
    <>
      <div className="grid gap-6 md:grid-cols-2">
        {experienceEntries.map((entry) => {
          const stageSignals = getStageSignals(entry).slice(0, 3);

          return (
            <article
              className="group flex h-full flex-col rounded-[1.8rem] border border-white/8 bg-gradient-to-b from-[#14192b]/85 to-[#0b0e1a]/98 p-7 shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_24px_60px_-25px_rgba(0,0,0,0.9)] transition duration-300 hover:-translate-y-1 hover:border-indigo-400/35 hover:shadow-[0_24px_60px_-20px_rgba(99,102,241,0.25)]"
              key={entry.id}
            >
              <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
                <p className="font-mono text-[0.68rem] font-bold uppercase tracking-wider text-indigo-300">{entry.badge[locale]}</p>
                <span className="rounded-lg border border-white/8 bg-white/[0.03] px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-wider text-slate-400">
                  {entry.period[locale]}
                </span>
              </div>

              <div className="space-y-3">
                <h3 className="text-xl font-black tracking-tight text-white">{entry.title[locale]}</h3>
                <p className="text-sm font-semibold uppercase tracking-wider text-slate-200">{entry.company}</p>
                <p className="text-sm text-slate-400">{entry.subtitle[locale]}</p>
              </div>

              <p className="mt-5 text-sm leading-relaxed text-slate-300">{entry.cardImpact[locale]}</p>

              <div className="mt-5 rounded-xl border border-white/6 bg-white/[0.02] p-4">
                <p className="font-mono text-[0.68rem] font-bold uppercase tracking-wider text-indigo-300">
                  {locale === "es" ? "Contexto de la etapa" : "Stage context"}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-slate-200">{entry.context[locale]}</p>
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                {stageSignals.map((item) => (
                  <span className="rounded-full border border-indigo-400/20 bg-indigo-500/10 px-3 py-1 text-xs font-semibold text-indigo-200" key={item}>
                    {item}
                  </span>
                ))}
                {entry.stack.slice(0, 3).map((item) => (
                  <span className="rounded-md border border-white/8 bg-white/[0.04] px-2.5 py-1 text-xs font-mono text-slate-300" key={item}>
                    {item}
                  </span>
                ))}
              </div>

              <button
                className="mt-6 inline-flex cursor-pointer items-center gap-2 text-sm font-bold text-indigo-300 transition hover:translate-x-1 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-accent group-hover:text-white"
                onClick={() => openModal(entry)}
                type="button"
              >
                {entry.buttonLabel[locale]}
                <ArrowRight className="h-4 w-4" />
              </button>
            </article>
          );
        })}
      </div>


      <DetailModal
        ariaLabel={locale === "es" ? "Cerrar modal de experiencia" : "Close experience modal"}
        eyebrow={locale === "es" ? "Experiencia profesional" : "Professional experience"}
        headerExtras={
          activeEntry ? (
            <div className="space-y-3">
              <div className="flex flex-wrap gap-2">
                {activeEntry.stack.slice(0, 4).map((item) => (
                  <span className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-1.5 text-[0.68rem] font-mono text-slate-200" key={item}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ) : null
        }
        onClose={closeModal}
        open={Boolean(activeEntry)}
        summary={activeEntry?.modalSummary[locale]}
        subtitle={activeEntry?.modalSubtitle[locale]}
        title={activeEntry?.title[locale] ?? ""}
        visible={isModalVisible}
        widthClassName="w-[min(92vw,1040px)]"
      >
        {activeEntry ? (
          <div className="grid gap-4 lg:grid-cols-2">
            {activeEntry.modalHighlights.map((insight, index) => {
              const Icon = index === 0 ? Building2 : CalendarDays;

              return (
                <section className="rounded-[1.6rem] border border-white/10 bg-[#0d1426] p-5 sm:p-6" key={insight.title.en}>
                  <p className="mb-3 flex items-center gap-2 font-mono text-[0.7rem] font-bold uppercase tracking-[0.18em] text-[#bcd1ff]">
                    <Icon className="h-4 w-4" />
                    {insight.title[locale]}
                  </p>
                  <p className="text-[0.96rem] leading-7 text-slate-200">{insight.body[locale]}</p>
                </section>
              );
            })}

            <section className="rounded-[1.6rem] border border-white/10 bg-[#0d1426] p-5 sm:p-6">
              <p className="mb-3 flex items-center gap-2 font-mono text-[0.7rem] font-bold uppercase tracking-[0.18em] text-[#bcd1ff]">
                <BriefcaseBusiness className="h-4 w-4" />
                {locale === "es" ? "Responsabilidades" : "Responsibilities"}
              </p>
              <ul className="grid gap-2.5">
                {activeEntry.responsibilities.map((responsibility) => (
                  <li className="flex gap-3 text-[0.96rem] leading-7 text-slate-200" key={responsibility.en}>
                    <span className="mt-2.5 h-2 w-2 rounded-full bg-accent" />
                    <span>{responsibility[locale]}</span>
                  </li>
                ))}
              </ul>
            </section>

            {activeEntry.modalImpact ? (
              <section className="rounded-[1.6rem] border border-white/10 bg-[#0d1426] p-5 sm:p-6">
                <p className="mb-3 flex items-center gap-2 font-mono text-[0.7rem] font-bold uppercase tracking-[0.18em] text-[#bcd1ff]">
                  <CalendarDays className="h-4 w-4" />
                  {locale === "es" ? "Lo que aporta esta etapa" : "What this stage adds"}
                </p>
                <p className="text-[0.96rem] leading-7 text-slate-200">{activeEntry.modalImpact[locale]}</p>
              </section>
            ) : null}

            <section className="rounded-[1.6rem] border border-white/10 bg-[#0d1426] p-5 sm:p-6">
              <p className="mb-3 flex items-center gap-2 font-mono text-[0.7rem] font-bold uppercase tracking-[0.18em] text-[#bcd1ff]">
                <Layers3 className="h-4 w-4" />
                {activeEntry.focusAreas?.length ? (locale === "es" ? "Focus areas y stack técnico" : "Focus areas and technical stack") : locale === "es" ? "Stack técnico" : "Technical stack"}
              </p>
              {activeEntry.focusAreas?.length ? (
                <div className="mb-4">
                  <p className="mb-2 font-mono text-[0.66rem] font-bold uppercase tracking-[0.18em] text-[#8fb5ff]">Focus areas</p>
                  <div className="flex flex-wrap gap-2">
                    {activeEntry.focusAreas.map((item) => (
                      <span className="rounded-md border border-white/10 bg-white/[0.06] px-3 py-1.5 font-mono text-[0.68rem] text-slate-200" key={item}>
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ) : null}
              <div className="flex flex-wrap gap-2.5">
                {activeEntry.stack.map((item) => (
                  <span className="rounded-md border border-white/10 bg-white/[0.04] px-3 py-1.5 font-mono text-[0.68rem] text-slate-200" key={item}>
                    {item}
                  </span>
                ))}
              </div>
            </section>
          </div>
        ) : null}
      </DetailModal>
    </>
  );
}
