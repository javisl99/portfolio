import { experienceEntries } from "@/data/experience";
import type { Locale } from "@/lib/i18n";

export function ExperienceTimeline({ locale, limit }: { locale: Locale; limit?: number }) {
  const entries = typeof limit === "number" ? experienceEntries.slice(0, limit) : experienceEntries;

  return (
    <div className="grid gap-5">
      {entries.map((entry) => (
        <article
          className="grid gap-4 rounded-[1.75rem] border border-line bg-white/76 p-6 shadow-soft lg:grid-cols-[12rem_minmax(0,1fr)]"
          key={`${entry.company}-${entry.period.en}`}
        >
          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">{entry.period[locale]}</p>
            <div>
              <h3 className="text-xl font-semibold text-ink">{entry.role[locale]}</h3>
              <p className="text-sm text-muted">{entry.company}</p>
            </div>
            <p className="text-sm leading-6 text-muted">{entry.sector[locale]}</p>
          </div>
          <div className="space-y-5">
            <p className="text-base leading-7 text-muted">{entry.summary[locale]}</p>
            <ul className="grid gap-3">
              {entry.achievements.map((achievement) => (
                <li className="flex gap-3 text-sm leading-7 text-muted" key={achievement.en}>
                  <span className="mt-2 h-2 w-2 rounded-full bg-accent" />
                  <span>{achievement[locale]}</span>
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-2">
              {entry.stack.map((item) => (
                <span className="rounded-full border border-line px-3 py-1 text-xs font-medium text-muted" key={item}>
                  {item}
                </span>
              ))}
            </div>
            <p className="rounded-2xl bg-surface px-4 py-3 text-sm leading-7 text-ink">{entry.impact[locale]}</p>
          </div>
        </article>
      ))}
    </div>
  );
}
