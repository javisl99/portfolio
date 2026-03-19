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
    <section className={cn("py-18 sm:py-24", className)} id={id}>
      <Container>
        <div
          className={cn(
            "mb-10 flex flex-col gap-5 md:mb-12",
            isCentered ? "items-center text-center" : "md:flex-row md:items-end md:justify-between",
          )}
        >
          <div className="max-w-3xl space-y-4">
            {eyebrow ? <p className="text-xs font-bold uppercase tracking-[0.24em] text-accent">{eyebrow}</p> : null}
            <h2 className="max-w-3xl font-display text-3xl font-black tracking-tight text-ink sm:text-5xl">{title}</h2>
            {description ? <p className="max-w-2xl text-lg leading-8 text-muted">{description}</p> : null}
            {isCentered ? <div className="mx-auto h-1 w-20 rounded-full bg-accent" /> : null}
          </div>
          {actions ? <div className="shrink-0">{actions}</div> : null}
        </div>
        {children}
      </Container>
    </section>
  );
}
