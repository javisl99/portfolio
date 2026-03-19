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
  const pageCopy = copy.pages.projects;
  const projects = await getProjects(locale);

  return (
    <>
      <PageHero eyebrow={pageCopy.eyebrow} intro={pageCopy.intro} title={pageCopy.title}>
        <div className="space-y-4">
          <p className="text-sm text-muted">{pageCopy.scanTitle}</p>
          <p className="text-2xl font-black tracking-tight text-ink">{pageCopy.scanBody}</p>
          <ul className="grid gap-3 text-sm leading-7 text-muted">
            {pageCopy.scanBullets.map((item) => (
              <li className="flex gap-3" key={item}>
                <span className="mt-2 h-2 w-2 rounded-full bg-accent" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </PageHero>

      <Section description={pageCopy.intro} eyebrow={pageCopy.eyebrow} title={pageCopy.title}>
        <ProjectGrid locale={locale} projects={projects} />
      </Section>
    </>
  );
}
