import Link from "next/link";
import { ArrowRight, Blocks, BriefcaseBusiness, Building2, ShieldCheck, ShoppingCart, Wrench } from "lucide-react";

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

        return (
        <article
          className="group overflow-hidden rounded-2xl border border-line bg-panel shadow-soft transition duration-300 hover:-translate-y-2 hover:shadow-[0_32px_60px_-32px_rgba(15,23,42,0.25)]"
          key={`${project.locale}-${project.slug}`}
        >
          <div className="relative aspect-[16/10] overflow-hidden border-b border-line bg-surface/70">
            <div className={`absolute inset-0 bg-gradient-to-br ${visuals[index % visuals.length].gradient}`} />
            <div className="absolute inset-0 flex items-center justify-center">
              <VisualIcon className="h-24 w-24 text-ink/8 transition duration-300 group-hover:scale-105" />
            </div>
            <div className="absolute left-6 top-6 flex flex-wrap gap-2">
              {project.stack.slice(0, 3).map((item) => (
                <span className="rounded-md border border-line bg-panel/90 px-2.5 py-1 text-[0.62rem] font-bold uppercase tracking-[0.14em] text-ink" key={item}>
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="p-7">
            <div className="mb-5 flex items-center justify-between gap-3">
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-accent">{project.year}</p>
              <span className="rounded-lg border border-line px-3 py-1 text-xs text-muted">
                {project.category === "sap-commerce" ? "SAP Commerce" : project.role}
              </span>
            </div>
            <p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-muted">
              {project.employer}
              {project.client ? ` · ${project.client}` : ""}
            </p>
            <h3 className="mb-3 text-2xl font-black tracking-tight text-ink transition-colors group-hover:text-accent">
              {project.title}
            </h3>
            <p className="mb-3 text-sm font-medium text-ink">{project.domain}</p>
            <p className="mb-5 text-sm leading-7 text-muted">{project.summary}</p>

            <div className="mb-4 grid gap-3">
              <div className="rounded-xl border border-line bg-surface/75 p-4">
              <p className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-accent">
                <ShieldCheck className="h-4 w-4" />
                {locale === "es" ? "Qué estaba en juego" : "What was at stake"}
              </p>
              <p className="text-sm leading-7 text-muted">{project.stakes}</p>
              </div>
              <div className="rounded-xl border border-line bg-surface/75 p-4">
              <p className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-accent">
                <Wrench className="h-4 w-4" />
                {locale === "es" ? "Qué hice" : "What I did"}
              </p>
              <p className="text-sm leading-7 text-muted">{project.contribution}</p>
              </div>
            </div>
            <div className="mb-6 rounded-xl border-l-4 border-accent bg-surface/65 px-4 py-4">
              <p className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-accent">
                <BriefcaseBusiness className="h-4 w-4" />
                {locale === "es" ? "Qué demuestra" : "What it shows"}
              </p>
              <p className="text-sm leading-7 text-ink">{project.signal}</p>
            </div>
            <Link
              className="inline-flex items-center gap-2 text-sm font-bold text-accent transition group-hover:translate-x-1"
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
