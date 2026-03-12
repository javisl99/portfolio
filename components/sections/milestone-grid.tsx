import { milestoneHighlights } from "@/data/highlights";
import type { Locale } from "@/lib/i18n";

export function MilestoneGrid({ locale }: { locale: Locale }) {
  return (
    <div className="grid gap-4 lg:grid-cols-3">
      {milestoneHighlights.map((milestone) => (
        <article
          className="rounded-[1.75rem] border border-line bg-white/76 p-6 shadow-soft transition duration-300 hover:-translate-y-1"
          key={milestone.title.en}
        >
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-accent">{milestone.meta[locale]}</p>
          <h3 className="mb-3 text-xl font-semibold text-ink">{milestone.title[locale]}</h3>
          <p className="text-sm leading-7 text-muted">{milestone.body[locale]}</p>
        </article>
      ))}
    </div>
  );
}

