import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ProjectGrid } from "@/components/sections/project-grid";
import { PageHero } from "@/components/ui/page-hero";
import { Section } from "@/components/ui/section";
import { siteCopy } from "@/data/site";
import { createMetadata } from "@/lib/metadata";
import { getProjects } from "@/lib/projects";
import { isLocale, type Locale } from "@/lib/i18n";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: rawLocale } = await params;

  if (!isLocale(rawLocale)) {
    return {};
  }

  const locale = rawLocale as Locale;
  const pageMeta = siteCopy[locale].metadata.pages.projects;

  return createMetadata({
    locale,
    title: pageMeta.title,
    description: pageMeta.description,
    path: "/projects",
  });
}

export default async function ProjectsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;

  if (!isLocale(rawLocale)) {
    notFound();
  }

  const locale = rawLocale as Locale;
  const copy = siteCopy[locale];
  const projects = await getProjects(locale);

  return (
    <>
      <PageHero
        eyebrow={copy.pages.projects.eyebrow}
        intro={copy.pages.projects.intro}
        title={copy.pages.projects.title}
      >
        <div className="space-y-3">
          <p className="text-sm text-muted">{locale === "es" ? "Formato" : "Format"}</p>
          <p className="text-2xl font-semibold text-ink">{projects.length} MDX case studies</p>
          <p className="text-sm leading-7 text-muted">
            {locale === "es"
              ? "Pensados para ampliar el CV con contexto, decisiones y resultados."
              : "Designed to extend the resume with context, decisions, and results."}
          </p>
        </div>
      </PageHero>

      <Section
        description={copy.pages.projects.intro}
        eyebrow={copy.pages.projects.eyebrow}
        title={copy.pages.projects.title}
      >
        <ProjectGrid locale={locale} projects={projects} />
      </Section>
    </>
  );
}

