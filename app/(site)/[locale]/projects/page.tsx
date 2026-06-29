import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ProjectGrid } from "@/components/sections/project-grid";
import { PageHero } from "@/components/ui/page-hero";
import { RecruiterScanCard } from "@/components/ui/recruiter-scan-card";
import { Section } from "@/components/ui/section";
import { siteCopy } from "@/data/site";
import { createMetadata } from "@/lib/metadata";
import { isLocale, type Locale } from "@/lib/i18n";
import { getProjects } from "@/lib/projects";

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
    keywords: pageMeta.keywords,
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
  const page = copy.pages.projects;
  const projects = await getProjects(locale);

  return (
    <>
      <PageHero eyebrow={page.eyebrow} intro={page.intro} title={page.title}>
        <RecruiterScanCard bullets={page.scanBullets} description={page.scanBody} eyebrow={page.scanTitle} title={locale === "es" ? "Qué vas a encontrar" : "What you will find"} />
      </PageHero>

      <Section
        align="center"
        description={copy.home.projects.description}
        eyebrow={copy.home.projects.eyebrow}
        title={locale === "es" ? "Casos completos con problema, contribución y stack" : "Complete cases with problem, contribution, and stack"}
      >
        <ProjectGrid locale={locale} projects={projects} />
      </Section>
    </>
  );
}
