import Link from "next/link";

import type { ProjectSummary } from "@/lib/projects";
import { localizePath, type Locale } from "@/lib/i18n";

interface ProjectGridProps {
  locale: Locale;
  projects: ProjectSummary[];
}

export function ProjectGrid({ locale, projects }: ProjectGridProps) {
  return (
    <div className="grid gap-4 lg:grid-cols-3">
      {projects.map((project) => (
        <article
          className="group rounded-[1.9rem] border border-line bg-panel/88 p-6 shadow-soft transition duration-300 hover:-translate-y-1 hover:bg-panel-strong"
          key={`${project.locale}-${project.slug}`}
        >
          <div className="mb-6 flex items-center justify-between gap-3">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">{project.year}</p>
            <span className="rounded-full border border-line px-3 py-1 text-xs text-muted">{project.role}</span>
          </div>
          <h3 className="mb-3 text-2xl font-semibold tracking-tight text-ink">{project.title}</h3>
          <p className="mb-4 text-sm leading-7 text-muted">{project.summary}</p>
          <p className="mb-5 text-sm leading-7 text-ink">{project.impact}</p>
          <div className="mb-5 flex flex-wrap gap-2">
            {project.stack.map((item) => (
              <span className="rounded-full bg-surface px-3 py-1 text-xs font-medium text-muted" key={item}>
                {item}
              </span>
            ))}
          </div>
          <Link
            className="inline-flex items-center text-sm font-semibold text-ink transition group-hover:translate-x-1"
            href={localizePath(locale, `/projects/${project.slug}`)}
          >
            {locale === "es" ? "Abrir caso" : "Open case"}
          </Link>
        </article>
      ))}
    </div>
  );
}
