import { Blocks, BriefcaseBusiness, MessagesSquare, ShieldCheck, Wrench } from "lucide-react";

import type { CopyCard } from "@/data/types";
import type { Locale } from "@/lib/i18n";

const icons = [ShieldCheck, Wrench, MessagesSquare, Blocks, BriefcaseBusiness];

export function StrengthGrid({ items, locale }: { items: CopyCard[]; locale: Locale }) {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      {items.map((item, index) => {
        const Icon = icons[index % icons.length];

        return (
          <article
            className="rounded-2xl border border-line bg-panel p-8 shadow-soft transition duration-200 hover:border-accent/35"
            key={item.title.en}
          >
            <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent">
              <Icon className="h-5 w-5" />
            </div>
            <h3 className="mb-3 text-xl font-black tracking-tight text-ink">{item.title[locale]}</h3>
            <p className="text-sm leading-7 text-muted">{item.body[locale]}</p>
          </article>
        );
      })}
    </div>
  );
}
