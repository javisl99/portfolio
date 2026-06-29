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
    <section className={cn("relative overflow-hidden py-14 sm:py-18", className)}>
      <Container className="relative">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,2fr)_21rem] lg:items-start">
          <div className="max-w-4xl space-y-5">
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-accent">{eyebrow}</p>
            <h1 className="font-display text-4xl font-black leading-[1.05] tracking-tight text-ink sm:text-5xl lg:text-6xl">{title}</h1>
            <p className="max-w-3xl text-lg leading-8 text-muted sm:text-xl">{intro}</p>
          </div>
          {children ? <div className="rounded-2xl border border-line bg-panel p-6 shadow-soft">{children}</div> : null}
        </div>
      </Container>
    </section>
  );
}
