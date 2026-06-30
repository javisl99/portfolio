import Link from "next/link";
import { ArrowRight, Blocks, Building2, ShoppingCart } from "lucide-react";

import type { Locale } from "@/lib/i18n";
import { localizePath } from "@/lib/i18n";
import type { ProjectSummary } from "@/lib/projects";

interface ProjectGridProps {
  locale: Locale;
  projects: ProjectSummary[];
  variant?: "compact" | "full";
}

const visuals = [
  { icon: ShoppingCart, gradient: "from-accent/24 via-accent/7 to-transparent" },
  { icon: Blocks, gradient: "from-accent/20 via-accent/6 to-transparent" },
  { icon: Building2, gradient: "from-accent/28 via-accent/8 to-transparent" },
];

export function ProjectGrid({ locale, projects, variant = "full" }: ProjectGridProps) {
  function getProjectSignals(project: ProjectSummary) {
    const source = `${project.summary} ${project.stakes} ${project.contribution} ${project.stack.join(" ")} ${project.domain}`.toLowerCase();
    const catalog = [
      { es: "Producción", en: "Production", match: ["producción", "production", "incident"] },
      { es: "Checkout", en: "Checkout", match: ["checkout"] },
      { es: "Pricing", en: "Pricing", match: ["pricing"] },
      { es: "Integraciones", en: "Integrations", match: ["integraciones", "integrations"] },
      { es: "Incidencias", en: "Incidents", match: ["incidencias", "incidents"] },
      { es: "Greenfield", en: "Greenfield", match: ["greenfield", "desde cero", "from scratch"] },
      { es: "SQL", en: "SQL", match: ["sql", "oracle"] },
      { es: "FlexibleSearch", en: "FlexibleSearch", match: ["flexiblesearch"] },
    ];

    return catalog.filter((item) => item.match.some((keyword) => source.includes(keyword))).slice(0, 3).map((item) => item[locale]);
  }

  return (
    <div className={variant === "compact" ? "grid gap-5 lg:grid-cols-2" : "grid gap-8 lg:grid-cols-2"}>
      {projects.map((project, index) => {
        const VisualIcon = visuals[index % visuals.length].icon;
        const projectHref = localizePath(locale, `/projects/${project.slug}`);
        const projectSignals = getProjectSignals(project);

        if (variant === "compact") {
          return (
            <article
              className="group rounded-[1.7rem] border border-line bg-[linear-gradient(180deg,rgba(11,18,33,0.95),rgba(7,12,24,0.99))] p-6 text-left shadow-soft transition duration-300 hover:-translate-y-1 hover:border-accent-soft/30 motion-reduce:transform-none motion-reduce:transition-none"
              key={`${project.locale}-${project.slug}`}
            >
              <p className="mb-2 font-mono text-[0.66rem] font-bold uppercase tracking-[0.18em] text-[#9fbeff]">
                {project.employer}
                {project.client ? ` · ${project.client}` : ""}
                {` · ${project.year}`}
              </p>
              <h3 className="text-xl font-black leading-tight tracking-tight text-ink transition-colors group-hover:text-white">{project.title}</h3>
              <p className="mt-3 text-sm leading-7 text-muted">{project.stakes}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {projectSignals.map((item) => (
                  <span className="rounded-full border border-[#60a5fa]/20 bg-[#60a5fa]/8 px-3 py-1.5 text-xs font-semibold text-[#d5e2ff]" key={item}>
                    {item}
                  </span>
                ))}
                {project.stack.slice(0, 3).map((item) => (
                  <span className="rounded-md border border-white/10 bg-white/[0.04] px-2.5 py-1.5 font-mono text-[0.68rem] text-slate-200" key={item}>
                    {item}
                  </span>
                ))}
              </div>
              <Link
                className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-[#c7d6ff] transition group-hover:translate-x-1 group-hover:text-white motion-reduce:transform-none motion-reduce:transition-none focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-accent"
                href={projectHref}
              >
                {locale === "es" ? "Ver caso" : "View case"}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </article>
          );
        }

        return (
          <article
            className="group overflow-hidden rounded-[1.9rem] border border-white/8 bg-[linear-gradient(180deg,rgba(11,18,33,0.94),rgba(7,12,24,0.99))] shadow-[0_30px_72px_-42px_rgba(2,6,23,0.92)] transition duration-300 hover:-translate-y-2 hover:border-accent-soft/24 motion-reduce:transform-none motion-reduce:transition-none"
            key={`${project.locale}-${project.slug}`}
          >
            <div className="relative aspect-[16/10] overflow-hidden border-b border-line bg-[linear-gradient(180deg,rgba(37,99,235,0.12),rgba(255,255,255,0.02))]">
              <div className={`absolute inset-0 bg-gradient-to-br ${visuals[index % visuals.length].gradient}`} />
              <div className="absolute inset-0 flex items-center justify-center">
                <VisualIcon className="h-24 w-24 text-ink/8 transition duration-300 group-hover:scale-105 motion-reduce:transform-none motion-reduce:transition-none" />
              </div>
              <div className="absolute left-6 top-6 flex flex-wrap gap-2">
                {project.stack.slice(0, 3).map((item) => (
                  <span
                    className="rounded-full border border-white/10 bg-[rgba(7,10,24,0.72)] px-3 py-1.5 font-mono text-[0.62rem] font-semibold uppercase tracking-[0.14em] text-white"
                    key={item}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="p-7">
              <p className="mb-2 font-mono text-[0.68rem] font-bold uppercase tracking-[0.22em] text-[#9fbeff]">
                {project.employer}
                {project.client ? ` · ${project.client}` : ""}
                {` · ${project.year}`}
              </p>
              <h3 className="mb-3 text-2xl font-black tracking-tight text-ink transition-colors group-hover:text-white">{project.title}</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-[0.68rem] font-bold uppercase tracking-[0.18em] text-slate-400">{locale === "es" ? "Contexto" : "Context"}</p>
                  <p className="mt-2 text-sm font-medium text-ink">{project.domain}</p>
                </div>
                <div>
                  <p className="text-[0.68rem] font-bold uppercase tracking-[0.18em] text-slate-400">{locale === "es" ? "Problema" : "Problem"}</p>
                  <p className="mt-2 text-sm leading-7 text-muted">{project.stakes}</p>
                </div>
                <div>
                  <p className="text-[0.68rem] font-bold uppercase tracking-[0.18em] text-slate-400">{locale === "es" ? "Qué hice" : "What I did"}</p>
                  <p className="mt-2 text-sm leading-7 text-muted">{project.contribution}</p>
                </div>
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                {project.stack.slice(0, 5).map((item) => (
                  <span className="rounded-md border border-white/10 bg-white/[0.04] px-2.5 py-1.5 font-mono text-[0.68rem] text-slate-200" key={item}>
                    {item}
                  </span>
                ))}
              </div>

              <div className="mt-4">
                <p className="text-[0.68rem] font-bold uppercase tracking-[0.18em] text-slate-400">{locale === "es" ? "Señal backend" : "Backend signal"}</p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {projectSignals.map((item) => (
                    <span className="rounded-full border border-[#60a5fa]/20 bg-[#60a5fa]/8 px-3 py-1.5 text-xs font-semibold text-[#d5e2ff]" key={item}>
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <Link
                className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#c7d6ff] transition group-hover:translate-x-1 group-hover:text-white motion-reduce:transform-none motion-reduce:transition-none focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-accent"
                href={projectHref}
              >
                {locale === "es" ? "Ver caso completo" : "View full case"}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </article>
        );
      })}
    </div>
  );
}
