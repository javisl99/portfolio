"use client";

import { useEffect, useState } from "react";
import { ArrowRight, Blocks, Building2, Layers3, ShieldCheck, ShoppingCart, Wrench, X } from "lucide-react";

import type { ProjectSummary } from "@/lib/projects";
import type { Locale } from "@/lib/i18n";

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
  const [activeProject, setActiveProject] = useState<ProjectSummary | null>(null);
  const [visibleProject, setVisibleProject] = useState<ProjectSummary | null>(null);
  const [isModalVisible, setIsModalVisible] = useState(false);

  useEffect(() => {
    if (!activeProject) {
      return;
    }

    setVisibleProject(activeProject);

    const frame = window.requestAnimationFrame(() => {
      setIsModalVisible(true);
    });

    return () => {
      window.cancelAnimationFrame(frame);
    };
  }, [activeProject]);

  useEffect(() => {
    if (!visibleProject) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeModal();
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleEscape);
    };
  }, [visibleProject]);

  const closeModal = () => {
    setIsModalVisible(false);

    window.setTimeout(() => {
      setActiveProject(null);
      setVisibleProject(null);
    }, 240);
  };

  return (
    <>
      <div className="grid gap-8 lg:grid-cols-2">
        {projects.map((project, index) => {
          const VisualIcon = visuals[index % visuals.length].icon;
          const stackTitle = locale === "es" ? "Stack técnico" : "Tech stack";

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
                <h3 className="mb-3 text-2xl font-black tracking-tight text-ink transition-colors group-hover:text-white">{project.title}</h3>
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
                        {locale === "es" ? "Solución" : "Solution"}
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

                <button
                  className="mt-6 inline-flex cursor-pointer items-center gap-2 text-sm font-bold text-[#c7d6ff] transition group-hover:translate-x-1 group-hover:text-white"
                  onClick={() => setActiveProject(project)}
                  type="button"
                >
                  {locale === "es" ? "Leer caso completo" : "Read full case"}
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </article>
          );
        })}
      </div>

      {visibleProject ? (
        <div aria-hidden={false} className="fixed inset-0 z-[70] pointer-events-auto" onClick={closeModal}>
          <div
            className={`absolute inset-0 bg-[rgba(2,6,23,0.88)] backdrop-blur-xl transition-all duration-300 ease-out ${isModalVisible ? "opacity-100" : "opacity-0"}`}
            onClick={closeModal}
          />

          <div className="absolute inset-0 overflow-y-auto px-4 py-6 sm:px-6 sm:py-8">
            <div
              className={`mx-auto flex min-h-full max-w-[62rem] items-start justify-center pt-20 sm:pt-24 transform transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                isModalVisible ? "translate-y-0 scale-100 opacity-100" : "translate-y-8 scale-[0.985] opacity-0"
              }`}
            >
              <article
                className="relative w-full overflow-hidden rounded-[2.25rem] border border-white/10 bg-[#050814] shadow-[0_48px_120px_-42px_rgba(2,6,23,1)] ring-1 ring-white/6"
                onClick={(event) => event.stopPropagation()}
              >
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.12),transparent_24%),radial-gradient(circle_at_top_left,rgba(129,140,248,0.08),transparent_22%)]" />
                <div className="relative border-b border-white/10 px-6 py-6 sm:px-8">
                  <button
                    aria-label={locale === "es" ? "Cerrar modal" : "Close modal"}
                    className="absolute right-5 top-5 inline-flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-white/10 bg-[rgba(9,14,28,0.94)] text-slate-200 transition hover:border-accent-soft/35 hover:bg-[rgba(16,24,44,0.98)] hover:text-white"
                    onClick={closeModal}
                    type="button"
                  >
                    <X className="h-4 w-4" />
                  </button>
                  <div className="max-w-4xl pr-16">
                    <p className="font-mono text-[0.7rem] font-bold uppercase tracking-[0.22em] text-[#bcd1ff]">
                      {locale === "es" ? "Caso destacado" : "Featured case"}
                    </p>
                    <h3 className="mt-4 font-display text-3xl font-black leading-[1.02] tracking-tight text-white sm:text-5xl">
                      {visibleProject.title}
                    </h3>
                    <p className="mt-5 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">{visibleProject.summary}</p>
                  </div>
                </div>

                <div className="relative border-b border-white/8 bg-[#0a1020] px-6 py-5 sm:px-8">
                  <div className="grid gap-4 md:grid-cols-4">
                    <div>
                      <p className="font-mono text-[0.66rem] font-bold uppercase tracking-[0.2em] text-[#bcd1ff]">{locale === "es" ? "Año" : "Year"}</p>
                      <p className="mt-2 text-sm font-semibold text-white">{visibleProject.year}</p>
                    </div>
                    <div>
                      <p className="font-mono text-[0.66rem] font-bold uppercase tracking-[0.2em] text-[#bcd1ff]">{locale === "es" ? "Rol" : "Role"}</p>
                      <p className="mt-2 text-sm font-semibold text-white">{visibleProject.role}</p>
                    </div>
                    <div>
                      <p className="font-mono text-[0.66rem] font-bold uppercase tracking-[0.2em] text-[#bcd1ff]">{locale === "es" ? "Empresa" : "Employer"}</p>
                      <p className="mt-2 text-sm font-semibold text-white">{visibleProject.employer}</p>
                    </div>
                    <div>
                      <p className="font-mono text-[0.66rem] font-bold uppercase tracking-[0.2em] text-[#bcd1ff]">{locale === "es" ? "Contexto" : "Context"}</p>
                      <p className="mt-2 text-sm font-semibold text-white">{visibleProject.client ?? visibleProject.domain}</p>
                    </div>
                  </div>
                </div>

                <div className="relative grid gap-6 px-6 py-7 sm:px-8 sm:py-8 lg:grid-cols-[minmax(0,1.08fr)_minmax(18rem,0.92fr)]">
                  <div className="space-y-6">
                    <section className="rounded-[1.8rem] border border-white/10 bg-[#0d1426] p-6 sm:p-7">
                      <p className="mb-3 font-mono text-[0.7rem] font-bold uppercase tracking-[0.18em] text-[#bcd1ff]">
                        {locale === "es" ? "Problema" : "Problem"}
                      </p>
                      <p className="text-base leading-8 text-slate-200">{visibleProject.stakes}</p>
                    </section>

                    <section className="rounded-[1.8rem] border border-white/10 bg-[#0d1426] p-6 sm:p-7">
                      <p className="mb-3 font-mono text-[0.7rem] font-bold uppercase tracking-[0.18em] text-[#bcd1ff]">
                        {locale === "es" ? "Solución" : "Solution"}
                      </p>
                      <p className="text-base leading-8 text-slate-200">{visibleProject.contribution}</p>
                    </section>
                  </div>

                  <div className="space-y-6">
                    <section className="rounded-[1.8rem] border border-[#60a5fa]/18 bg-[linear-gradient(135deg,rgba(18,39,82,0.96),rgba(24,35,76,0.98))] p-6 sm:p-7">
                      <p className="mb-3 font-mono text-[0.7rem] font-bold uppercase tracking-[0.18em] text-[#bcd1ff]">
                        {locale === "es" ? "Impacto" : "Impact"}
                      </p>
                      <p className="text-base leading-8 text-white">{visibleProject.signal}</p>
                    </section>

                    <section className="rounded-[1.8rem] border border-white/10 bg-[#0d1426] p-6 sm:p-7">
                      <p className="mb-3 font-mono text-[0.7rem] font-bold uppercase tracking-[0.18em] text-[#bcd1ff]">
                        {locale === "es" ? "Stack técnico" : "Tech stack"}
                      </p>
                      <div className="flex flex-wrap gap-2.5">
                        {visibleProject.stack.map((item) => (
                          <span className="rounded-md border border-white/10 bg-white/[0.04] px-3 py-1.5 font-mono text-[0.68rem] text-slate-200" key={item}>
                            {item}
                          </span>
                        ))}
                      </div>
                    </section>

                    <section className="rounded-[1.8rem] border border-white/10 bg-[#0d1426] p-6 sm:p-7">
                      <p className="mb-3 font-mono text-[0.7rem] font-bold uppercase tracking-[0.18em] text-[#bcd1ff]">
                        {locale === "es" ? "Dominio" : "Domain"}
                      </p>
                      <p className="text-base leading-8 text-slate-200">{visibleProject.domain}</p>
                    </section>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
