import type { AiImpactMetric, CopyCard } from "@/data/types";
import type { Locale } from "@/lib/i18n";

interface AIImpactSectionProps {
  locale: Locale;
  eyebrow: string;
  title: string;
  description: string;
  context: string;
  metricsNote: string;
  note: string;
  metrics: AiImpactMetric[];
  items: CopyCard[];
  variant?: "compact" | "full";
  showLead?: boolean;
}

export function AIImpactSection({
  locale,
  eyebrow,
  title,
  description,
  context,
  metricsNote,
  note,
  metrics,
  items,
  variant = "compact",
  showLead = true,
}: AIImpactSectionProps) {
  const isCompact = variant === "compact";

  return (
    <div className="mx-auto max-w-6xl">
      <div className="grid gap-4 sm:gap-6 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)]">
        <article className="rounded-[1.7rem] border border-white/8 bg-[linear-gradient(180deg,rgba(11,18,32,0.92),rgba(7,12,24,0.97))] p-5 shadow-soft sm:rounded-[1.9rem] sm:p-7">
          {showLead ? (
            <>
              <p className="font-mono text-[0.68rem] font-bold uppercase tracking-[0.2em] text-[#9fbeff]">{eyebrow}</p>
              <h3 className="mt-3 text-2xl font-black tracking-tight text-ink sm:text-3xl">{title}</h3>
              <p className="mt-4 text-sm leading-7 text-slate-300 sm:text-base">{description}</p>
            </>
          ) : null}

          <div className={`${showLead ? "mt-5" : ""} rounded-[1.2rem] bg-white/[0.035] p-3.5 sm:rounded-[1.4rem] sm:p-4`}>
            <p className="font-mono text-[0.66rem] font-bold uppercase tracking-[0.18em] text-slate-400">
              {locale === "es" ? "Contexto de la comparación" : "Comparison context"}
            </p>
            <p className="mt-3 text-sm leading-7 text-slate-200">{context}</p>
          </div>

          <div className={`mt-4 grid gap-3 ${isCompact ? "" : "sm:grid-cols-2"}`}>
            {items.map((item) => (
              <div className="rounded-[1.15rem] bg-white/[0.025] p-3.5 sm:rounded-[1.35rem] sm:p-4" key={item.title.en}>
                <p className="font-mono text-[0.64rem] font-bold uppercase tracking-[0.18em] text-[#bcd1ff]">{item.title[locale]}</p>
                {item.body[locale].includes("\n") ? (
                  <ul className="mt-3 grid gap-1.5 text-sm leading-6 text-slate-300 sm:gap-2 sm:leading-7">
                    {item.body[locale].split("\n").map((line) => (
                      <li className="flex gap-3" key={line}>
                        <span className="mt-2 h-2 w-2 rounded-full bg-accent" />
                        <span>{line}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="mt-2 text-sm leading-6 text-slate-300 sm:leading-7">{item.body[locale]}</p>
                )}
              </div>
            ))}
          </div>

          <p className="mt-4 text-sm leading-6 text-muted sm:mt-5 sm:leading-7">{note}</p>
        </article>

        <div className="grid gap-3 sm:gap-4">
          <p className="rounded-[1.05rem] bg-white/[0.03] px-3.5 py-3 text-sm leading-6 text-muted sm:rounded-[1.2rem] sm:px-4">
            {metricsNote}
          </p>
          {metrics.map((metric) => (
            <article
              className="rounded-[1.35rem] border border-white/8 bg-[linear-gradient(180deg,rgba(11,18,32,0.9),rgba(7,12,24,0.96))] p-4.5 shadow-soft transition duration-200 hover:-translate-y-1 hover:border-accent-soft/30 motion-reduce:transform-none motion-reduce:transition-none sm:rounded-[1.6rem] sm:p-6"
              key={metric.title.en}
            >
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <p className="text-base font-black tracking-tight text-ink sm:text-lg">{metric.title[locale]}</p>
                  <p className="mt-2 text-sm font-semibold leading-6 text-[#cfe0ff]">{metric.highlight[locale]}</p>
                </div>
              </div>

              <div className="mt-4 space-y-4">
                <div>
                  <div className="mb-2 text-xs uppercase tracking-[0.16em] text-slate-400">
                    <span>{metric.beforeLabel[locale]}</span>
                  </div>
                  <p className="mb-2.5 text-sm leading-6 text-slate-300">{metric.beforeValue[locale]}</p>
                  <div className="h-2.5 rounded-full bg-white/[0.06]">
                    <div className="h-2.5 rounded-full bg-[linear-gradient(90deg,rgba(148,163,184,0.92),rgba(203,213,225,0.72))]" style={{ width: `${metric.beforeRatio}%` }} />
                  </div>
                </div>

                <div>
                  <div className="mb-2 text-xs uppercase tracking-[0.16em] text-slate-400">
                    <span>{metric.afterLabel[locale]}</span>
                  </div>
                  <p className="mb-2.5 text-sm leading-6 text-slate-200">{metric.afterValue[locale]}</p>
                  <div className="h-2.5 rounded-full bg-white/[0.06]">
                    <div className="h-2.5 rounded-full bg-[linear-gradient(90deg,#2563eb,#60a5fa)] shadow-[0_0_0_1px_rgba(96,165,250,0.12),0_12px_30px_-16px_rgba(37,99,235,0.72)]" style={{ width: `${metric.afterRatio}%` }} />
                  </div>
                </div>
              </div>

              <p className="mt-3.5 text-sm leading-6 text-muted sm:mt-4 sm:leading-7">{metric.note[locale]}</p>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
