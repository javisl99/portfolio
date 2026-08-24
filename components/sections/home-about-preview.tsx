import { Bug, FileSearch, MessagesSquare, Sparkles } from "lucide-react";

import type { CopyCard } from "@/data/types";
import type { Locale } from "@/lib/i18n";
import { cn } from "@/lib/utils";

const previewCopy = {
  es: [
    "Entiendo flujo, datos afectados y riesgos antes de implementar.",
    "Analizo síntomas, logs e hipótesis antes de definir una solución.",
    "Traduzco impacto técnico a próximos pasos claros para QA, cliente y negocio.",
    "La utilizo como acelerador, nunca como sustituto del criterio técnico.",
  ],
  en: [
    "I understand flows, affected data, and risks before implementing.",
    "I analyze symptoms, logs, and hypotheses before defining a solution.",
    "I translate technical impact into clear next steps for QA, clients, and business teams.",
    "I use it as an accelerator, never as a substitute for technical judgment.",
  ],
} as const;

const icons = [FileSearch, Bug, MessagesSquare, Sparkles] as const;
const accentStyles = [
  "text-indigo-300 border-indigo-500/25 bg-indigo-500/10",
  "text-sky-300 border-sky-500/25 bg-sky-500/10",
  "text-purple-300 border-purple-500/25 bg-purple-500/10",
  "text-emerald-300 border-emerald-500/25 bg-emerald-500/10",
] as const;

interface HomeAboutPreviewProps {
  items: CopyCard[];
  locale: Locale;
}

export function HomeAboutPreview({ items, locale }: HomeAboutPreviewProps) {
  return (
    <div className="relative mx-auto -mt-2 grid max-w-[55rem] gap-4 md:grid-cols-2 md:gap-5">
      {items.map((item, index) => {
        const Icon = icons[index];
        const accent = accentStyles[index];
        const stepNumber = String(index + 1).padStart(2, "0");

        return (
          <article
            className="group relative rounded-[1.6rem] border border-white/8 bg-gradient-to-b from-[#14192b]/80 to-[#0c0f1c]/95 px-5 py-5 text-left shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_20px_45px_-20px_rgba(0,0,0,0.85)] transition duration-300 hover:-translate-y-1 hover:border-indigo-400/35 hover:shadow-[0_20px_50px_-20px_rgba(99,102,241,0.25)] motion-reduce:transform-none motion-reduce:transition-none sm:px-6 sm:py-5"
            key={item.title.en}
          >
            <div className="flex items-start justify-between gap-4">
              <div className={cn("flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border", accent)}>
                <Icon className="h-4.5 w-4.5" strokeWidth={1.9} />
              </div>
              <span className="rounded-full border border-indigo-400/25 bg-indigo-500/10 px-2.5 py-0.5 font-mono text-[0.68rem] font-bold tracking-wider text-indigo-300">
                {stepNumber}
              </span>
            </div>
            <div className="mt-3.5">
              <h3 className="text-lg font-black tracking-tight text-white group-hover:text-indigo-200">{item.title[locale]}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-300 sm:text-[0.94rem]">{previewCopy[locale][index]}</p>
            </div>
          </article>
        );
      })}
    </div>
  );
}

