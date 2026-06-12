import { experienceEntries } from "@/data/experience";
import type { Locale } from "@/lib/i18n";

export function ExperienceTimeline({ locale, limit }: { locale: Locale; limit?: number }) {
  const entries = typeof limit === "number" ? experienceEntries.slice(0, limit) : experienceEntries;

  return (
    <div className="grid gap-5">
      {entries.map((entry) => (
        <article
          className="grid gap-6 rounded-2xl border border-line bg-panel p-6 shadow-soft lg:grid-cols-[14rem_minmax(0,1fr)]"
          key={`${entry.company}-${entry.period.en}`}
        >
          <div className="space-y-3">
            <div className="flex flex-wrap items-center gap-2">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">{entry.progression[locale]}</p>
            </div>
            <div>
              <h3 className="text-xl font-black tracking-tight text-ink">{entry.role[locale]}</h3>
              <p className="text-sm text-muted">
                {entry.company}
                {entry.client ? ` · ${entry.client}` : ""}
              </p>
            </div>
            <p className="text-sm leading-6 text-muted">{entry.period[locale]}</p>
            <p className="text-sm leading-6 text-ink">{entry.project[locale]}</p>
            <p className="text-sm leading-6 text-muted">{entry.projectType[locale]}</p>
          </div>
          <div className="space-y-5">
            <p className="text-base leading-7 text-muted">{entry.overview[locale]}</p>
            <div className="grid gap-4 lg:grid-cols-2">
              <div className="rounded-xl border border-line bg-surface/65 p-5">
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                  {locale === "es" ? "Contexto" : "Context"}
                </p>
                <p className="text-sm leading-7 text-muted">{entry.context[locale]}</p>
              </div>
              <div className="rounded-xl border border-line bg-surface/65 p-5">
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                  {locale === "es" ? "Problema" : "Problem"}
                </p>
                <p className="text-sm leading-7 text-muted">{entry.problem[locale]}</p>
              </div>
            </div>
            <div className="rounded-xl border border-line bg-panel p-5">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                {locale === "es" ? "Solucion" : "Solution"}
              </p>
              <ul className="grid gap-3">
                {entry.intervention.map((achievement) => (
                  <li className="flex gap-3 text-sm leading-7 text-muted" key={achievement.en}>
                    <span className="mt-2 h-2 w-2 rounded-full bg-accent" />
                    <span>{achievement[locale]}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-3">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                {locale === "es" ? "Foco técnico" : "Technical focus"}
              </p>
              <div className="flex flex-wrap gap-2">
                {entry.focusAreas.map((focus) => (
                  <span className="rounded-md bg-surface px-3 py-1 text-xs font-medium text-ink" key={focus.en}>
                    {focus[locale]}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              {entry.stack.map((item) => (
                <span className="rounded-md border border-line px-3 py-1 text-xs font-medium text-muted" key={item}>
                  {item}
                </span>
              ))}
            </div>
            <div className="grid gap-4 lg:grid-cols-2">
              <div className="rounded-xl border-l-4 border-accent bg-surface/80 px-4 py-4">
                <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                  {locale === "es" ? "Resultado" : "Result"}
                </p>
                <p className="text-sm leading-7 text-ink">{entry.result[locale]}</p>
              </div>
              <div className="rounded-xl border-l-4 border-accent bg-surface/80 px-4 py-4">
                <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                  {locale === "es" ? "Impacto" : "Impact"}
                </p>
                <p className="text-sm leading-7 text-ink">{entry.signal[locale]}</p>
              </div>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
