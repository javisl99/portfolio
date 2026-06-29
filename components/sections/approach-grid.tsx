import { Search, ShieldCheck, Wrench, Workflow } from "lucide-react";

import type { CopyCard } from "@/data/types";
import type { Locale } from "@/lib/i18n";
import { cn } from "@/lib/utils";

const icons = [Search, ShieldCheck, Wrench, Workflow];

export function ApproachGrid({ items, locale }: { items: CopyCard[]; locale: Locale }) {
  const [featuredItem, ...supportingItems] = items;

  if (!featuredItem) {
    return null;
  }

  const FeaturedIcon = icons[0];

  return (
    <div className="grid gap-6 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)]">
      <article className="group rounded-[1.8rem] border border-line bg-[linear-gradient(160deg,rgba(11,18,32,0.98),rgba(5,10,22,0.98))] p-8 text-white shadow-[0_36px_80px_-38px_rgba(37,99,235,0.48)] transition duration-300 hover:-translate-y-1 hover:border-accent-soft/35">
        <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl border border-line bg-[linear-gradient(180deg,rgba(96,165,250,0.18),rgba(37,99,235,0.16))] text-[#c8d2ff] transition duration-300 group-hover:border-accent-soft/35 group-hover:bg-[linear-gradient(180deg,rgba(96,165,250,0.24),rgba(37,99,235,0.2))] group-hover:text-white">
          <FeaturedIcon className="h-5 w-5" />
        </div>
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-[#9fbeff]">
          {locale === "es" ? "Enfoque técnico" : "Technical approach"}
        </p>
        <h3 className="mb-4 text-3xl font-black tracking-tight text-white">{featuredItem.title[locale]}</h3>
        <p className="max-w-2xl text-base leading-8 text-slate-300">{featuredItem.body[locale]}</p>
      </article>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
        {supportingItems.map((item, index) => {
          const Icon = icons[(index + 1) % icons.length];

          return (
            <article
              className={cn(
                "group rounded-[1.6rem] border border-line bg-[linear-gradient(180deg,rgba(11,18,32,0.94),rgba(7,12,24,0.98))] p-6 shadow-soft transition duration-300 hover:-translate-y-1 hover:border-accent-soft/35",
                index === 2 && "sm:col-span-2 lg:col-span-1",
              )}
              key={item.title.en}
            >
              <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl border border-line bg-[linear-gradient(180deg,rgba(96,165,250,0.18),rgba(37,99,235,0.14))] text-[#c8d2ff] transition duration-300 group-hover:border-accent-soft/35 group-hover:bg-[linear-gradient(180deg,rgba(96,165,250,0.24),rgba(37,99,235,0.18))] group-hover:text-white">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mb-3 text-xl font-black tracking-tight text-ink transition duration-300 group-hover:text-white">{item.title[locale]}</h3>
              <p className="text-sm leading-7 text-muted">{item.body[locale]}</p>
            </article>
          );
        })}
      </div>
    </div>
  );
}
