import { siteCopy } from "@/data/site";
import type { Locale } from "@/lib/i18n";

interface FocusCardGridProps {
  locale: Locale;
}

export function FocusCardGrid({ locale }: FocusCardGridProps) {
  const cards = siteCopy[locale].home.focusCards;

  return (
    <div className="grid gap-4 md:grid-cols-3">
      {cards.map((card) => (
        <article
          className="rounded-[1.75rem] border border-line bg-panel/88 p-6 shadow-soft transition duration-300 hover:-translate-y-1 hover:bg-panel-strong"
          key={card.title}
        >
          <h3 className="mb-3 text-lg font-semibold text-ink">{card.title}</h3>
          <p className="text-sm leading-7 text-muted">{card.body}</p>
        </article>
      ))}
    </div>
  );
}
