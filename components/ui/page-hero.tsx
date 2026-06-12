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
    <section
      className={cn(
        "relative overflow-hidden py-16 sm:py-20 before:absolute before:inset-x-0 before:top-0 before:h-80 before:bg-[radial-gradient(circle_at_top_left,rgba(37,99,235,0.18),transparent_38%),radial-gradient(circle_at_82%_8%,rgba(129,140,248,0.18),transparent_32%)] before:content-['']",
        className,
      )}
    >
      <Container className="relative">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,2fr)_21rem] lg:items-start">
          <div className="max-w-4xl space-y-5">
            <p className="font-mono text-[0.7rem] font-semibold uppercase tracking-[0.24em] text-[#bcd1ff]">{eyebrow}</p>
            <h1 className="font-display text-4xl font-black leading-[1.05] tracking-tight text-ink sm:text-5xl lg:text-6xl">{title}</h1>
            <p className="max-w-3xl text-lg leading-8 text-muted sm:text-xl">{intro}</p>
          </div>
          {children ? <div className="rounded-[1.8rem] border border-white/10 bg-[linear-gradient(180deg,rgba(13,21,39,0.95),rgba(8,13,26,0.98))] p-6 shadow-[0_30px_70px_-44px_rgba(15,23,42,0.95)]">{children}</div> : null}
        </div>
      </Container>
    </section>
  );
}
