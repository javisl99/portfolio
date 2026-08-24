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

  if (variant === "compact") {
    return (
      <div className="grid gap-5 lg:grid-cols-2">
        {projects.map((project) => {
          const projectHref = localizePath(locale, `/projects/${project.slug}`);
          const projectSignals = getProjectSignals(project);

          return (
            <article
              className="group relative flex flex-col justify-between overflow-hidden rounded-[1.6rem] border border-white/8 bg-gradient-to-b from-[#14192b]/80 to-[#0c0f1c]/95 p-6 text-left shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_20px_45px_-20px_rgba(0,0,0,0.85)] transition duration-300 hover:-translate-y-1 hover:border-indigo-400/35 hover:shadow-[0_20px_50px_-20px_rgba(99,102,241,0.25)] motion-reduce:transform-none motion-reduce:transition-none"
              key={`${project.locale}-${project.slug}`}
            >
              <div>
                <div className="mb-3 flex items-center justify-between gap-3">
                  <p className="font-mono text-[0.66rem] font-bold uppercase tracking-wider text-indigo-300">
                    {project.employer}
                    {project.client ? ` · ${project.client}` : ""}
                    {` · ${project.year}`}
                  </p>
                  <span className="rounded-md border border-emerald-500/20 bg-emerald-500/10 px-2 py-0.5 font-mono text-[0.62rem] font-bold text-emerald-400">
                    {locale === "es" ? "Producción" : "Production"}
                  </span>
                </div>

                <h3 className="text-xl font-black leading-tight tracking-tight text-white transition-colors group-hover:text-indigo-200">
                  {project.title}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-slate-300">
                  {project.stakes}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {projectSignals.map((item) => (
                    <span className="rounded-full border border-indigo-400/20 bg-indigo-500/10 px-2.5 py-1 text-xs font-semibold text-indigo-200" key={item}>
                      {item}
                    </span>
                  ))}
                  {project.stack.slice(0, 3).map((item) => (
                    <span className="rounded-md border border-white/8 bg-white/[0.04] px-2 py-1 font-mono text-[0.68rem] text-slate-300" key={item}>
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <Link
                className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-indigo-300 transition group-hover:translate-x-1 group-hover:text-white motion-reduce:transform-none motion-reduce:transition-none focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-accent"
                href={projectHref}
              >
                {locale === "es" ? "Ver caso de arquitectura" : "View case study"}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </article>
          );
        })}
      </div>
    );
  }

  return (
    <div className="grid gap-8 lg:grid-cols-2">
      {projects.map((project, index) => {
        const VisualIcon = visuals[index % visuals.length].icon;
        const projectHref = localizePath(locale, `/projects/${project.slug}`);
        const projectSignals = getProjectSignals(project);

        return (
          <article
            className="group overflow-hidden rounded-[1.8rem] border border-white/8 bg-gradient-to-b from-[#14192b]/85 to-[#0b0e1a]/98 shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_24px_60px_-25px_rgba(0,0,0,0.9)] transition duration-300 hover:-translate-y-1.5 hover:border-indigo-400/35 hover:shadow-[0_24px_60px_-20px_rgba(99,102,241,0.25)] motion-reduce:transform-none motion-reduce:transition-none"
            key={`${project.locale}-${project.slug}`}
          >
            {/* Blueprint Header */}
            <div className="relative aspect-[16/9] overflow-hidden border-b border-white/8 bg-gradient-to-br from-indigo-950/40 via-slate-950 to-black p-6">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(99,102,241,0.15),transparent_70%)]" />
              <div className="absolute inset-0 tech-grid-bg opacity-30" />

              <div className="absolute inset-0 flex items-center justify-center">
                <VisualIcon className="h-20 w-20 text-indigo-400/20 transition duration-300 group-hover:scale-110 group-hover:text-indigo-400/30 motion-reduce:transform-none motion-reduce:transition-none" />
              </div>

              <div className="relative z-10 flex flex-wrap gap-2">
                {project.stack.slice(0, 3).map((item) => (
                  <span
                    className="rounded-md border border-white/10 bg-black/60 px-2.5 py-1 font-mono text-[0.65rem] font-bold text-slate-200 backdrop-blur-md"
                    key={item}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="p-6 sm:p-7">
              <p className="mb-2 font-mono text-[0.68rem] font-bold uppercase tracking-wider text-indigo-300">
                {project.employer}
                {project.client ? ` · ${project.client}` : ""}
                {` · ${project.year}`}
              </p>
              <h3 className="mb-3 text-2xl font-black tracking-tight text-white transition-colors group-hover:text-indigo-200">
                {project.title}
              </h3>
              <div className="space-y-4">
                <div>
                  <p className="font-mono text-[0.66rem] font-bold uppercase tracking-wider text-slate-500">{locale === "es" ? "Contexto" : "Context"}</p>
                  <p className="mt-1 text-sm font-medium text-slate-200">{project.domain}</p>
                </div>
                <div>
                  <p className="font-mono text-[0.66rem] font-bold uppercase tracking-wider text-slate-500">{locale === "es" ? "Problema" : "Problem"}</p>
                  <p className="mt-1 text-sm leading-relaxed text-slate-300">{project.stakes}</p>
                </div>
                <div>
                  <p className="font-mono text-[0.66rem] font-bold uppercase tracking-wider text-slate-500">{locale === "es" ? "Qué hice" : "What I did"}</p>
                  <p className="mt-1 text-sm leading-relaxed text-slate-300">{project.contribution}</p>
                </div>
                <div>
                  <p className="font-mono text-[0.66rem] font-bold uppercase tracking-wider text-slate-500">{locale === "es" ? "Resultado" : "Outcome"}</p>
                  <p className="mt-1 text-sm leading-relaxed text-slate-300">{project.outcome}</p>
                </div>
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                {project.stack.slice(0, 5).map((item) => (
                  <span className="rounded-md border border-white/8 bg-white/[0.03] px-2.5 py-1 font-mono text-[0.68rem] text-slate-300" key={item}>
                    {item}
                  </span>
                ))}
              </div>

              <div className="mt-4">
                <p className="font-mono text-[0.66rem] font-bold uppercase tracking-wider text-slate-500">{locale === "es" ? "Señal backend" : "Backend signal"}</p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {projectSignals.map((item) => (
                    <span className="rounded-full border border-indigo-400/20 bg-indigo-500/10 px-3 py-1 text-xs font-semibold text-indigo-200" key={item}>
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <Link
                className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-indigo-300 transition group-hover:translate-x-1 group-hover:text-white motion-reduce:transform-none motion-reduce:transition-none focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-accent"
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
