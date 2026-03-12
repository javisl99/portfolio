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
  children: ReactNode;
}

export function Section({ eyebrow, title, description, id, className, actions, children }: SectionProps) {
  return (
    <section className={cn("py-14 sm:py-18", className)} id={id}>
      <Container>
        <div className="mb-8 flex flex-col gap-5 md:mb-10 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl space-y-3">
            {eyebrow ? <p className="text-xs font-semibold uppercase tracking-[0.26em] text-accent">{eyebrow}</p> : null}
            <h2 className="max-w-2xl text-3xl font-semibold tracking-tight text-ink sm:text-4xl">{title}</h2>
            {description ? <p className="max-w-2xl text-base leading-7 text-muted">{description}</p> : null}
          </div>
          {actions ? <div className="shrink-0">{actions}</div> : null}
        </div>
        {children}
      </Container>
    </section>
  );
}

