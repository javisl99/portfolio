import { experienceEntries } from "@/data/experience";
import type { Locale } from "@/lib/i18n";

interface ExperienceSnapshotGridProps {
  locale: Locale;
}

export function ExperienceSnapshotGrid({ locale }: ExperienceSnapshotGridProps) {
  return (
    <div className="grid gap-4 xl:grid-cols-3">
      {experienceEntries.map((entry) => (
        <article
          className="rounded-[1.75rem] border border-line bg-panel/88 p-6 shadow-soft transition duration-300 hover:-translate-y-1 hover:bg-panel-strong"
          key={`${entry.company}-${entry.period.en}-snapshot`}
        >
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-accent">{entry.period[locale]}</p>
          <div className="space-y-1">
            <h3 className="text-lg font-semibold text-ink">{entry.role[locale]}</h3>
            <p className="text-sm text-muted">{entry.company}</p>
          </div>
          <div className="mt-5 grid gap-2 text-sm leading-6 text-muted">
            {entry.project ? (
              <p>
                <span className="font-semibold text-ink">{locale === "es" ? "Proyecto:" : "Project:"}</span>{" "}
                {entry.project[locale]}
              </p>
            ) : null}
            {entry.client ? (
              <p>
                <span className="font-semibold text-ink">{locale === "es" ? "Cliente:" : "Client:"}</span>{" "}
                {entry.client}
              </p>
            ) : null}
          </div>
          <p className="mt-5 text-sm leading-7 text-muted">{entry.cvSummary[locale]}</p>
          <div className="mt-5 flex flex-wrap gap-2">
            {entry.stack.slice(0, 3).map((item) => (
              <span className="rounded-full bg-surface px-3 py-1 text-xs font-medium text-muted" key={item}>
                {item}
              </span>
            ))}
          </div>
        </article>
      ))}
    </div>
  );
}
