import type { ReactNode } from "react";

import { Container } from "@/components/ui/container";
import { cn } from "@/lib/utils";

interface PageHeroProps {
  eyebrow: string;
  title: string;
  intro: string;
  children?: ReactNode;
  className?: string;
}

export function PageHero({ eyebrow, title, intro, children, className }: PageHeroProps) {
  return (
    <section className={cn("relative overflow-hidden py-18 sm:py-24", className)}>
      <Container className="relative">
        <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_18rem] lg:items-end">
          <div className="max-w-3xl space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-accent">{eyebrow}</p>
            <h1 className="text-4xl font-semibold tracking-tight text-ink sm:text-5xl lg:text-6xl">{title}</h1>
            <p className="max-w-2xl text-lg leading-8 text-muted sm:text-xl">{intro}</p>
          </div>
          {children ? <div className="rounded-[1.75rem] border border-line bg-panel/88 p-5 shadow-soft">{children}</div> : null}
        </div>
      </Container>
    </section>
  );
}
