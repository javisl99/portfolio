"use client";

import { useState } from "react";
import { ArrowRight, Blocks, Building2, Layers3, ShieldCheck, ShoppingCart, Wrench } from "lucide-react";

import { DetailModal } from "@/components/ui/detail-modal";
import type { Locale } from "@/lib/i18n";
import type { ProjectSummary } from "@/lib/projects";

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
  const [isModalVisible, setIsModalVisible] = useState(false);
  const stackTitle = locale === "es" ? "Stack técnico" : "Tech stack";

  function openModal(project: ProjectSummary) {
    setActiveProject(project);

    window.requestAnimationFrame(() => {
      setIsModalVisible(true);
    });
  }

  function closeModal() {
    setIsModalVisible(false);

    window.setTimeout(() => {
      setActiveProject(null);
    }, 240);
  }

  return (
    <>
      <div className="grid gap-8 lg:grid-cols-2">
        {projects.map((project, index) => {
          const VisualIcon = visuals[index % visuals.length].icon;

          return (
            <article
              className="group overflow-hidden rounded-[1.9rem] border border-line bg-[linear-gradient(180deg,rgba(11,18,33,0.95),rgba(7,12,24,0.99))] shadow-[0_30px_72px_-42px_rgba(2,6,23,0.92)] transition duration-300 hover:-translate-y-2 hover:border-accent-soft/30"
              key={`${project.locale}-${project.slug}`}
            >
              <div className="relative aspect-[16/10] overflow-hidden border-b border-line bg-[linear-gradient(180deg,rgba(37,99,235,0.12),rgba(255,255,255,0.02))]">
                <div className={`absolute inset-0 bg-gradient-to-br ${visuals[index % visuals.length].gradient}`} />
                <div className="absolute inset-0 flex items-center justify-center">
                  <VisualIcon className="h-24 w-24 text-ink/8 transition duration-300 group-hover:scale-105" />
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
                <div className="mb-5 flex items-center justify-between gap-3">
                  <p className="font-mono text-[0.68rem] font-bold uppercase tracking-[0.22em] text-[#9fbeff]">{project.year}</p>
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
                <p className="text-sm leading-7 text-muted">{project.summary}</p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.stack.slice(0, 5).map((item) => (
                    <span className="rounded-md border border-white/10 bg-white/[0.04] px-2.5 py-1.5 font-mono text-[0.68rem] text-slate-200" key={item}>
                      {item}
                    </span>
                  ))}
                </div>

                <button
                  className="mt-6 inline-flex cursor-pointer items-center gap-2 text-sm font-bold text-[#c7d6ff] transition group-hover:translate-x-1 group-hover:text-white"
                  onClick={() => openModal(project)}
                  type="button"
                >
                  {locale === "es" ? "Más información" : "More information"}
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </article>
          );
        })}
      </div>

      <DetailModal
        ariaLabel={locale === "es" ? "Cerrar modal del caso" : "Close case modal"}
        eyebrow={locale === "es" ? "Caso destacado" : "Featured case"}
        headerExtras={
          activeProject ? (
            <div className="grid gap-4 md:grid-cols-4">
              <div>
                <p className="font-mono text-[0.66rem] font-bold uppercase tracking-[0.2em] text-[#bcd1ff]">{locale === "es" ? "Año" : "Year"}</p>
                <p className="mt-2 text-sm font-semibold text-white">{activeProject.year}</p>
              </div>
              <div>
                <p className="font-mono text-[0.66rem] font-bold uppercase tracking-[0.2em] text-[#bcd1ff]">{locale === "es" ? "Rol" : "Role"}</p>
                <p className="mt-2 text-sm font-semibold text-white">{activeProject.role}</p>
              </div>
              <div>
                <p className="font-mono text-[0.66rem] font-bold uppercase tracking-[0.2em] text-[#bcd1ff]">{locale === "es" ? "Empresa" : "Employer"}</p>
                <p className="mt-2 text-sm font-semibold text-white">{activeProject.employer}</p>
              </div>
              <div>
                <p className="font-mono text-[0.66rem] font-bold uppercase tracking-[0.2em] text-[#bcd1ff]">{locale === "es" ? "Contexto" : "Context"}</p>
                <p className="mt-2 text-sm font-semibold text-white">{activeProject.client ?? activeProject.domain}</p>
              </div>
            </div>
          ) : null
        }
        onClose={closeModal}
        open={Boolean(activeProject)}
        summary={activeProject?.summary}
        title={activeProject?.title ?? ""}
        visible={isModalVisible}
      >
        {activeProject ? (
          <div className="grid gap-6 lg:grid-cols-[minmax(0,1.08fr)_minmax(18rem,0.92fr)]">
            <div className="space-y-6">
              <section className="rounded-[1.8rem] border border-white/10 bg-[#0d1426] p-6 sm:p-7">
                <p className="mb-3 flex items-center gap-2 font-mono text-[0.7rem] font-bold uppercase tracking-[0.18em] text-[#bcd1ff]">
                  <ShieldCheck className="h-4 w-4" />
                  {locale === "es" ? "Problema" : "Problem"}
                </p>
                <p className="text-base leading-8 text-slate-200">{activeProject.stakes}</p>
              </section>

              <section className="rounded-[1.8rem] border border-white/10 bg-[#0d1426] p-6 sm:p-7">
                <p className="mb-3 flex items-center gap-2 font-mono text-[0.7rem] font-bold uppercase tracking-[0.18em] text-[#bcd1ff]">
                  <Wrench className="h-4 w-4" />
                  {locale === "es" ? "Solución" : "Solution"}
                </p>
                <p className="text-base leading-8 text-slate-200">{activeProject.contribution}</p>
              </section>
            </div>

            <div className="space-y-6">
              <section className="rounded-[1.8rem] border border-[#60a5fa]/18 bg-[linear-gradient(135deg,rgba(18,39,82,0.96),rgba(24,35,76,0.98))] p-6 sm:p-7">
                <p className="mb-3 flex items-center gap-2 font-mono text-[0.7rem] font-bold uppercase tracking-[0.18em] text-[#bcd1ff]">
                  <Layers3 className="h-4 w-4" />
                  {locale === "es" ? "Impacto" : "Impact"}
                </p>
                <p className="text-base leading-8 text-white">{activeProject.signal}</p>
              </section>

              <section className="rounded-[1.8rem] border border-white/10 bg-[#0d1426] p-6 sm:p-7">
                <p className="mb-3 font-mono text-[0.7rem] font-bold uppercase tracking-[0.18em] text-[#bcd1ff]">{stackTitle}</p>
                <div className="flex flex-wrap gap-2.5">
                  {activeProject.stack.map((item) => (
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
                <p className="text-base leading-8 text-slate-200">{activeProject.domain}</p>
              </section>
            </div>
          </div>
        ) : null}
      </DetailModal>
    </>
  );
}
