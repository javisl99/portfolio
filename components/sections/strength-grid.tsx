import { Blocks, BriefcaseBusiness, MessagesSquare, ShieldCheck, Wrench } from "lucide-react";

import type { CopyCard } from "@/data/types";
import type { Locale } from "@/lib/i18n";
import { cn } from "@/lib/utils";

const icons = [ShieldCheck, Wrench, MessagesSquare, Blocks, BriefcaseBusiness];
const accentStyles = [
  "border-sky-400/25 bg-sky-500/10 text-sky-300",
  "border-emerald-400/25 bg-emerald-500/10 text-emerald-300",
  "border-purple-400/25 bg-purple-500/10 text-purple-300",
  "border-amber-400/25 bg-amber-500/10 text-amber-300",
  "border-blue-400/25 bg-blue-500/10 text-blue-300",
] as const;

export function StrengthGrid({ items, locale }: { items: CopyCard[]; locale: Locale }) {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      {items.map((item, index) => {
        const Icon = icons[index % icons.length];
        const featured = index === 0;

        return (
          <article
            className={cn(
              "rounded-[1.7rem] border p-8 transition duration-200 hover:-translate-y-1",
              featured
                ? "border-white/10 bg-[linear-gradient(155deg,rgba(20,33,66,0.94),rgba(8,14,28,0.98))] shadow-[0_32px_80px_-48px_rgba(37,99,235,0.52)] md:col-span-2"
                : "border-line bg-[linear-gradient(180deg,rgba(10,16,31,0.92),rgba(8,13,26,0.96))] shadow-soft hover:border-accent-soft/35",
            )}
            key={item.title.en}
          >
            <div className={`mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl border ${accentStyles[index % accentStyles.length]}`}>
              <Icon className="h-5 w-5" />
            </div>
            <h3 className="mb-3 text-xl font-black tracking-tight text-ink">{item.title[locale]}</h3>
            <p className={cn("leading-7 text-muted", featured ? "max-w-2xl text-base" : "text-sm")}>{item.body[locale]}</p>
          </article>
        );
      })}
    </div>
  );
}
