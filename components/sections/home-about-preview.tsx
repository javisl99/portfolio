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
  "text-[#74a5ff] border-[#4f86ff]/24 bg-[#4f86ff]/10",
  "text-[#7fb0ff] border-[#5d92ff]/22 bg-[#5d92ff]/10",
  "text-[#90b8ff] border-[#6f9cff]/22 bg-[#6f9cff]/10",
  "text-[#9fbfff] border-[#89a9ff]/20 bg-[#89a9ff]/10",
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
            className="group relative rounded-[1.65rem] border border-white/8 bg-[linear-gradient(180deg,rgba(11,18,32,0.94),rgba(7,12,24,0.98))] px-5 py-4.5 text-left shadow-soft transition duration-300 hover:-translate-y-1 hover:border-[#60a5fa]/35 hover:shadow-[0_0_30px_rgba(59,130,246,0.08)] motion-reduce:transform-none motion-reduce:transition-none sm:px-6 sm:py-5"
            key={item.title.en}
          >
            <div className="flex items-start justify-between gap-4">
              <div className={cn("flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border", accent)}>
                <Icon className="h-5 w-5" strokeWidth={1.9} />
              </div>
              <span className="rounded-full border border-[#60a5fa]/25 bg-[#3b82f6]/12 px-2.5 py-1 font-mono text-[0.68rem] font-bold tracking-[0.25em] text-[#bfdbfe]/90 transition duration-300 group-hover:border-[#93c5fd]/35 group-hover:bg-[#60a5fa]/16 group-hover:text-[#dbeafe] motion-reduce:transition-none">
                {stepNumber}
              </span>
            </div>
            <div className="mt-3.5">
              <h3 className="text-lg font-black tracking-tight text-ink">{item.title[locale]}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-300 sm:text-[0.96rem]">{previewCopy[locale][index]}</p>
            </div>
          </article>
        );
      })}
    </div>
  );
}
