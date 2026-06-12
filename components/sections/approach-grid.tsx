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
      <article className="rounded-[1.8rem] border border-white/10 bg-[linear-gradient(160deg,rgba(22,31,62,0.98),rgba(8,12,27,0.98))] p-8 text-white shadow-[0_36px_80px_-38px_rgba(92,120,255,0.42)]">
        <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[linear-gradient(180deg,rgba(124,140,255,0.22),rgba(90,143,255,0.18))] text-[#c8d2ff]">
          <FeaturedIcon className="h-5 w-5" />
        </div>
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-[#b8c3ff]">
          {locale === "es" ? "Technical approach" : "Technical approach"}
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
                "rounded-[1.6rem] border border-line bg-[linear-gradient(180deg,rgba(17,25,48,0.92),rgba(11,17,33,0.95))] p-6 shadow-soft transition duration-200 hover:-translate-y-1 hover:border-accent/45",
                index === 2 && "sm:col-span-2 lg:col-span-1",
              )}
              key={item.title.en}
            >
              <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[linear-gradient(180deg,rgba(124,140,255,0.22),rgba(90,143,255,0.18))] text-[#c8d2ff]">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mb-3 text-xl font-black tracking-tight text-ink">{item.title[locale]}</h3>
              <p className="text-sm leading-7 text-muted">{item.body[locale]}</p>
            </article>
          );
        })}
      </div>
    </div>
  );
}
