import type { ReactNode } from "react";
import { ArrowRight, Terminal } from "lucide-react";

import { Container } from "@/components/ui/container";
import { cn } from "@/lib/utils";

interface StatusPageProps {
  actions: ReactNode;
  code: string;
  description: string;
  eyebrow: string;
  title: string;
  detail?: string;
  className?: string;
}

export function StatusPage({
  actions,
  className,
  code,
  description,
  detail,
  eyebrow,
  title,
}: StatusPageProps) {
  return (
    <section className={cn("relative isolate flex min-h-[calc(100vh-13rem)] items-center overflow-hidden py-14 sm:py-20", className)}>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_22%_28%,rgba(59,130,246,0.14),transparent_32%),radial-gradient(circle_at_76%_68%,rgba(99,102,241,0.16),transparent_34%)]"
      />
      <Container>
        <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-[minmax(0,1fr)_17rem] lg:items-center lg:gap-14">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-indigo-400/20 bg-indigo-500/8 px-3 py-1.5 font-mono text-[0.66rem] font-semibold uppercase tracking-[0.18em] text-indigo-300">
              <span className="h-1.5 w-1.5 rounded-full bg-indigo-400 shadow-[0_0_12px_rgba(129,140,248,0.9)]" />
              {eyebrow}
            </div>
            <p aria-hidden="true" className="font-display text-[clamp(5rem,18vw,10rem)] font-black leading-[0.72] tracking-[-0.08em] text-white/[0.045]">
              {code}
            </p>
            <h1 className="relative -mt-3 max-w-3xl font-display text-4xl font-black tracking-tight text-white sm:text-6xl">
              <span className="text-gradient-silver">{title}</span>
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">{description}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">{actions}</div>
          </div>

          <div className="glass-panel tech-grid-bg relative overflow-hidden rounded-3xl p-5 sm:p-6">
            <div className="mb-8 flex items-center justify-between border-b border-white/8 pb-4">
              <div className="flex items-center gap-2 font-mono text-[0.68rem] text-slate-400">
                <Terminal className="h-4 w-4 text-indigo-400" />
                system.status
              </div>
              <span className="h-2 w-2 rounded-full bg-amber-400 shadow-[0_0_12px_rgba(251,191,36,0.65)]" />
            </div>
            <p className="font-mono text-5xl font-bold tracking-[-0.06em] text-white">{code}</p>
            <div className="mt-5 space-y-2 font-mono text-[0.68rem] leading-5 text-slate-400">
              <p><span className="text-indigo-400">status</span> · handled</p>
              <p><span className="text-indigo-400">fallback</span> · ready</p>
              {detail ? <p className="border-t border-white/8 pt-3 text-slate-500">{detail}</p> : null}
            </div>
            <ArrowRight aria-hidden="true" className="absolute bottom-5 right-5 h-5 w-5 text-indigo-400/45" />
          </div>
        </div>
      </Container>
    </section>
  );
}
