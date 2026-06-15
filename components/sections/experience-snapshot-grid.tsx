import { experienceEntries } from "@/data/experience";
import type { Locale } from "@/lib/i18n";
import { cn } from "@/lib/utils";

interface ExperienceSnapshotGridProps {
  locale: Locale;
  variant?: "cards" | "timeline";
}

export function ExperienceSnapshotGrid({ locale, variant = "cards" }: ExperienceSnapshotGridProps) {
  if (variant === "timeline") {
    return (
      <div className="relative mx-auto max-w-5xl">
        <div className="absolute bottom-0 left-5 top-0 w-px bg-gradient-to-b from-transparent via-line-strong to-transparent md:left-1/2 md:-translate-x-px" />
        <div className="space-y-8">
          {experienceEntries.map((entry, index) => (
            <article
              className={cn("relative flex", index % 2 === 0 ? "md:justify-end" : "md:justify-start")}
              key={`${entry.company}-${entry.period.en}-timeline`}
            >
              <span className="absolute left-5 top-7 h-3 w-3 -translate-x-1/2 rounded-full bg-accent ring-4 ring-bg md:left-1/2" />
              <div
                className={cn(
                  "ml-12 w-full rounded-[1.7rem] border border-line bg-[linear-gradient(180deg,rgba(11,18,32,0.94),rgba(7,12,24,0.98))] p-6 shadow-soft md:ml-0 md:w-[calc(50%-2.5rem)]",
                  index % 2 === 0 ? "md:mr-[2.5rem]" : "md:ml-[2.5rem]",
                )}
              >
                <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
                  <p className="font-mono text-[0.68rem] font-bold uppercase tracking-[0.22em] text-[#9fbeff]">{entry.progression[locale]}</p>
                  <span className="text-xs font-bold uppercase tracking-[0.14em] text-muted">{entry.period[locale]}</span>
                </div>
                <h3 className="text-lg font-black tracking-tight text-ink">{entry.role[locale]}</h3>
                <p className="mt-1 text-sm text-muted">
                  {entry.company}
                  {entry.client ? ` · ${entry.client}` : ""}
                </p>
                <p className="mt-4 text-sm font-semibold leading-6 text-ink">{entry.project[locale]}</p>
                <p className="mt-3 text-sm leading-7 text-muted">{entry.result[locale]}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="grid gap-6 xl:grid-cols-3">
      {experienceEntries.map((entry) => (
        <article
          className="rounded-[1.7rem] border border-line bg-[linear-gradient(180deg,rgba(11,18,32,0.94),rgba(7,12,24,0.98))] p-7 shadow-soft transition duration-300 hover:-translate-y-1 hover:border-accent-soft/35"
          key={`${entry.company}-${entry.period.en}-snapshot`}
        >
          <div className="mb-4 flex flex-wrap items-center gap-3">
            <p className="font-mono text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-[#9fbeff]">{entry.progression[locale]}</p>
            <span className="rounded-lg border border-line px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-muted">
              {entry.period[locale]}
            </span>
          </div>
          <div className="space-y-2">
            <h3 className="text-lg font-black tracking-tight text-ink">{entry.role[locale]}</h3>
            <p className="text-sm text-muted">
              {entry.company}
              {entry.client ? ` · ${entry.client}` : ""}
            </p>
          </div>
          <p className="mt-5 text-sm font-medium leading-6 text-ink">{entry.project[locale]}</p>
          <p className="mt-4 text-sm leading-7 text-muted">{entry.overview[locale]}</p>
          <p className="mt-4 rounded-xl border-l-4 border-accent bg-white/[0.04] px-4 py-3 text-sm leading-7 text-ink">{entry.signal[locale]}</p>
          <div className="mt-5 flex flex-wrap gap-2">
            {entry.stack.slice(0, 3).map((item) => (
              <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs font-medium text-muted" key={item}>
                {item}
              </span>
            ))}
          </div>
        </article>
      ))}
    </div>
  );
}
