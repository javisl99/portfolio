import { Binary, BrainCircuit, Building2, Network } from "lucide-react";

import type { CopyCard } from "@/data/types";
import type { Locale } from "@/lib/i18n";

const icons = [Binary, Building2, BrainCircuit, Network];

export function ProfessionalValueGrid({ items, locale }: { items: CopyCard[]; locale: Locale }) {
  return (
    <div className="grid gap-5 md:grid-cols-2">
      {items.map((item, index) => {
        const Icon = icons[index % icons.length];

        return (
          <article
            className="rounded-[1.7rem] border border-line bg-[linear-gradient(180deg,rgba(11,18,32,0.94),rgba(7,12,24,0.98))] p-6 shadow-soft transition duration-200 hover:-translate-y-1 hover:border-accent-soft/35 sm:p-7"
            key={item.title.en}
          >
            <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl border border-line bg-[linear-gradient(180deg,rgba(96,165,250,0.18),rgba(37,99,235,0.14))] text-[#c8d2ff]">
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
