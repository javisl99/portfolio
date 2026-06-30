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
    <section className={cn("py-20 sm:py-28", className)} id={id}>
      <Container>
        <div
          className={cn(
            "mb-12 flex flex-col gap-4.5 md:mb-14",
            isCentered ? "items-center text-center" : "md:flex-row md:items-end md:justify-between",
          )}
        >
          <div className="max-w-3xl space-y-3.5">
            {eyebrow ? <p className="font-mono text-[0.7rem] font-semibold uppercase tracking-[0.24em] text-[#9fbeff]">{eyebrow}</p> : null}
            <h2 className="max-w-3xl font-display text-[2rem] font-black tracking-tight text-ink sm:text-5xl">{title}</h2>
            {description ? <p className="max-w-2xl text-[1.02rem] leading-7 text-muted sm:text-lg sm:leading-8">{description}</p> : null}
            {isCentered ? <div className="mx-auto h-px w-24 bg-[linear-gradient(90deg,transparent,#60a5fa,#2563eb,transparent)]" /> : null}
          </div>
          {actions ? <div className="shrink-0">{actions}</div> : null}
        </div>
        {children}
      </Container>
    </section>
  );
}
