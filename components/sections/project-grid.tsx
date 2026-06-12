import Link from "next/link";
import { ArrowRight, Blocks, Building2, Layers3, ShieldCheck, ShoppingCart, Wrench } from "lucide-react";

import type { ProjectSummary } from "@/lib/projects";
import { localizePath, type Locale } from "@/lib/i18n";

interface ProjectGridProps {
  locale: Locale;
  projects: ProjectSummary[];
}

const visuals = [
  { icon: ShoppingCart, gradient: "from-accent/24 via-accent/7 to-transparent" },
  { icon: Blocks, gradient: "from-accent/20 via-accent/6 to-transparent" },
  { icon: Building2, gradient: "from-accent/28 via-accent/8 to-transparent" },
];

export function ProjectGrid({ locale, projects }: ProjectGridProps) {
  return (
    <div className="grid gap-8 lg:grid-cols-2">
      {projects.map((project, index) => {
        const VisualIcon = visuals[index % visuals.length].icon;
        const stackTitle = locale === "es" ? "Stack tecnico" : "Tech stack";

        return (
          <article
            className="group overflow-hidden rounded-[1.9rem] border border-white/10 bg-[linear-gradient(180deg,rgba(11,18,33,0.94),rgba(7,12,24,0.98))] shadow-[0_30px_72px_-42px_rgba(15,23,42,0.9)] transition duration-300 hover:-translate-y-2 hover:border-accent-soft/30"
            key={`${project.locale}-${project.slug}`}
          >
            <div className="relative aspect-[16/10] overflow-hidden border-b border-line bg-[linear-gradient(180deg,rgba(37,99,235,0.1),rgba(255,255,255,0.02))]">
              <div className={`absolute inset-0 bg-gradient-to-br ${visuals[index % visuals.length].gradient}`} />
              <div className="absolute inset-0 flex items-center justify-center">
                <VisualIcon className="h-24 w-24 text-ink/8 transition duration-300 group-hover:scale-105" />
              </div>
              <div className="absolute left-6 top-6 flex flex-wrap gap-2">
                {project.stack.slice(0, 3).map((item) => (
                  <span className="rounded-full border border-white/10 bg-[rgba(7,10,24,0.72)] px-3 py-1.5 font-mono text-[0.62rem] font-semibold uppercase tracking-[0.14em] text-white" key={item}>
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="p-7">
              <div className="mb-5 flex items-center justify-between gap-3">
                <p className="font-mono text-[0.68rem] font-bold uppercase tracking-[0.22em] text-[#bcd1ff]">{project.year}</p>
                <span className="rounded-lg border border-line px-3 py-1 text-xs text-muted">
                  {project.category === "sap-commerce" ? "SAP Commerce" : project.role}
                </span>
              </div>
              <p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-muted">
                {project.employer}
                {project.client ? ` · ${project.client}` : ""}
              </p>
              <h3 className="mb-3 text-2xl font-black tracking-tight text-ink transition-colors group-hover:text-white">
                {project.title}
              </h3>
              <p className="mb-3 text-sm font-medium text-ink">{project.domain}</p>
              <p className="mb-6 text-sm leading-7 text-muted">{project.summary}</p>

              <div className="grid gap-4 lg:grid-cols-[minmax(0,1.1fr)_minmax(15rem,0.9fr)]">
                <div className="space-y-4">
                  <div className="rounded-2xl border border-line bg-surface/70 p-5">
                    <p className="mb-2 flex items-center gap-2 font-mono text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-[#bcd1ff]">
                      <ShieldCheck className="h-4 w-4" />
                      {locale === "es" ? "Problema" : "Problem"}
                    </p>
                    <p className="text-sm leading-7 text-muted">{project.stakes}</p>
                  </div>
                  <div className="rounded-2xl border border-line bg-surface/70 p-5">
                    <p className="mb-2 flex items-center gap-2 font-mono text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-[#bcd1ff]">
                      <Wrench className="h-4 w-4" />
                      {locale === "es" ? "Solucion" : "Solution"}
                    </p>
                    <p className="text-sm leading-7 text-muted">{project.contribution}</p>
                  </div>
                </div>
                <div className="flex h-full flex-col gap-4">
                  <div className="rounded-2xl border border-line bg-white/[0.03] p-5">
                    <p className="mb-3 font-mono text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-[#bcd1ff]">{stackTitle}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.stack.map((item) => (
                        <span className="rounded-md border border-white/10 bg-white/[0.04] px-2.5 py-1.5 font-mono text-[0.68rem] text-slate-200" key={item}>
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="rounded-2xl border-l-4 border-accent bg-white/[0.04] px-5 py-5">
                    <p className="mb-2 flex items-center gap-2 font-mono text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-[#bcd1ff]">
                      <Layers3 className="h-4 w-4" />
                      {locale === "es" ? "Impacto" : "Impact"}
                    </p>
                    <p className="text-sm leading-7 text-ink">{project.signal}</p>
                  </div>
                </div>
              </div>

              <Link
                className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#c7d6ff] transition group-hover:translate-x-1 group-hover:text-white"
                href={localizePath(locale, `/projects/${project.slug}`)}
              >
                {locale === "es" ? "Leer caso completo" : "Read full case"}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </article>
        );
      })}
    </div>
  );
}
