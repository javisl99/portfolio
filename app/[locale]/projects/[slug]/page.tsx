import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { PageHero } from "@/components/ui/page-hero";
import { Pill } from "@/components/ui/pill";
import { siteCopy } from "@/data/site";
import { createMetadata } from "@/lib/metadata";
import { getAllProjectPaths, getProject } from "@/lib/projects";
import { isLocale, localizePath, type Locale } from "@/lib/i18n";

export async function generateStaticParams() {
  return getAllProjectPaths();
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale: rawLocale, slug } = await params;

  if (!isLocale(rawLocale)) {
    return {};
  }

  const locale = rawLocale as Locale;
  const project = await getProject(locale, slug);

  if (!project) {
    return {};
  }

  return createMetadata({
    locale,
    title: project.title,
    description: project.summary,
    path: `/projects/${slug}`,
  });
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale: rawLocale, slug } = await params;

  if (!isLocale(rawLocale)) {
    notFound();
  }

  const locale = rawLocale as Locale;
  const project = await getProject(locale, slug);

  if (!project) {
    notFound();
  }

  const copy = siteCopy[locale];

  return (
    <>
      <PageHero
        eyebrow={locale === "es" ? "Caso de estudio" : "Case study"}
        intro={project.summary}
        title={project.title}
      >
        <div className="space-y-4">
          <Pill>{project.year}</Pill>
          <div>
            <p className="text-sm text-muted">{locale === "es" ? "Rol" : "Role"}</p>
            <p className="text-lg font-semibold text-ink">{project.role}</p>
          </div>
          <div>
            <p className="text-sm text-muted">{locale === "es" ? "Impacto" : "Impact"}</p>
            <p className="text-sm leading-7 text-ink">{project.impact}</p>
          </div>
        </div>
      </PageHero>

      <Container className="pb-18 sm:pb-24">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_18rem]">
          <article className="rounded-[2rem] border border-line bg-white/82 p-6 shadow-soft sm:p-8">
            <div className="mb-8 flex flex-wrap gap-2">
              {project.stack.map((item) => (
                <span className="rounded-full bg-surface px-3 py-1 text-xs font-medium text-muted" key={item}>
                  {item}
                </span>
              ))}
            </div>
            <div className="grid gap-5">{project.content}</div>
          </article>

          <aside className="space-y-4">
            <div className="rounded-[1.75rem] border border-line bg-white/82 p-5 shadow-soft">
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                {locale === "es" ? "Contexto" : "Snapshot"}
              </p>
              <p className="text-sm leading-7 text-muted">{project.summary}</p>
            </div>
            <ButtonLink href={localizePath(locale, "/projects")} variant="secondary">
              {copy.ctas.allProjects}
            </ButtonLink>
            <ButtonLink href={localizePath(locale, "/contact")} variant="primary">
              {copy.navigation[4]?.label}
            </ButtonLink>
          </aside>
        </div>
      </Container>
    </>
  );
}

