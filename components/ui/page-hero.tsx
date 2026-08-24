import type { ReactNode } from "react";

import { Container } from "@/components/ui/container";
import { cn } from "@/lib/utils";

interface PageHeroProps {
  eyebrow: string;
  title: string;
  intro: string;
  children?: ReactNode;
  className?: string;
  panelClassName?: string;
  titleClassName?: string;
  introClassName?: string;
  panelLayout?: "side" | "below";
}

export function PageHero({ eyebrow, title, intro, children, className, panelClassName, titleClassName, introClassName, panelLayout = "side" }: PageHeroProps) {
  const hasBelowPanel = children && panelLayout === "below";

  return (
    <section
      className={cn(
        "relative overflow-hidden py-12 sm:py-16 before:absolute before:inset-x-0 before:top-0 before:h-96 before:bg-[radial-gradient(circle_at_top_left,rgba(99,102,241,0.16),transparent_40%),radial-gradient(circle_at_80%_8%,rgba(59,130,246,0.12),transparent_35%)] before:content-['']",
        className,
      )}
    >
      <Container className="relative">
        <div className={cn("grid gap-6 sm:gap-8", hasBelowPanel ? "max-w-5xl" : "lg:grid-cols-[minmax(0,1.95fr)_22rem] lg:items-start lg:gap-10")}>
          <div className="max-w-4xl space-y-3 sm:space-y-4">
            <p className="font-mono text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-indigo-400">{eyebrow}</p>
            <h1 className={cn("font-display text-3xl font-black leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl", titleClassName)}>
              <span className="text-gradient-silver">{title}</span>
            </h1>
            <p className={cn("max-w-3xl text-base leading-relaxed text-slate-300 sm:text-lg", introClassName)}>{intro}</p>
          </div>
          {children ? (
            <div
              className={cn(
                "rounded-2xl border border-white/8 bg-gradient-to-b from-[#14192b]/85 to-[#0b0e1a]/98 p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_24px_60px_-25px_rgba(0,0,0,0.9)] sm:p-6",
                hasBelowPanel ? "max-w-3xl" : "",
                panelClassName,
              )}
            >
              {children}
            </div>
          ) : null}
        </div>
      </Container>
    </section>
  );
}

