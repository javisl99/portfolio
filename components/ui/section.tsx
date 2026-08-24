import type { ReactNode } from "react";

import { Container } from "@/components/ui/container";
import { cn } from "@/lib/utils";

interface SectionProps {
  eyebrow?: string;
  title: string;
  description?: string;
  id?: string;
  className?: string;
  actions?: ReactNode;
  align?: "start" | "center";
  children: ReactNode;
}

export function Section({ eyebrow, title, description, id, className, actions, align = "start", children }: SectionProps) {
  const isCentered = align === "center";

  return (
    <section className={cn("py-16 sm:py-24", className)} id={id}>
      <Container>
        <div
          className={cn(
            "mb-10 flex flex-col gap-4 md:mb-12",
            isCentered ? "items-center text-center" : "md:flex-row md:items-end md:justify-between",
          )}
        >
          <div className="max-w-3xl space-y-3">
            {eyebrow ? <p className="font-mono text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-indigo-400">{eyebrow}</p> : null}
            <h2 className="max-w-3xl font-display text-3xl font-black tracking-tight text-white sm:text-5xl">{title}</h2>
            {description ? <p className="max-w-2xl text-base leading-relaxed text-slate-400 sm:text-lg">{description}</p> : null}
            {isCentered ? <div className="mx-auto h-px w-24 bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent" /> : null}
          </div>
          {actions ? <div className="shrink-0">{actions}</div> : null}
        </div>
        {children}
      </Container>
    </section>
  );
}

