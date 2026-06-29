import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ExperienceSnapshotGrid } from "@/components/sections/experience-snapshot-grid";
import { HomeHero } from "@/components/sections/home-hero";
import { HowIWorkSection } from "@/components/sections/how-i-work-section";
import { ProjectGrid } from "@/components/sections/project-grid";
import { StrengthGrid } from "@/components/sections/strength-grid";
import { Section } from "@/components/ui/section";
import { siteCopy } from "@/data/site";
import { createMetadata } from "@/lib/metadata";
import { getFeaturedProjects } from "@/lib/projects";
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
  const copy = siteCopy[locale];

  return createMetadata({
    locale,
    title: copy.metadata.defaultTitle,
    description: copy.metadata.defaultDescription,
    keywords: copy.metadata.keywords,
  });
}

export default async function HomePage({
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
  const featuredProjects = await getFeaturedProjects(locale);

  return (
    <>
      <HomeHero locale={locale} />

      <Section
        align="center"
        description={copy.home.strengths.description}
        eyebrow={copy.home.strengths.eyebrow}
        title={copy.home.strengths.title}
      >
        <StrengthGrid items={copy.home.strengths.items.slice(0, 4)} locale={locale} />
      </Section>

      <Section
        align="center"
        description={copy.home.career.description}
        eyebrow={copy.home.career.eyebrow}
        title={copy.home.career.title}
      >
        <div className="space-y-10">
          <ExperienceSnapshotGrid locale={locale} variant="timeline" />
        </div>
      </Section>

      <Section
        description={copy.home.projects.description}
        eyebrow={copy.home.projects.eyebrow}
        title={copy.home.projects.title}
      >
        <ProjectGrid locale={locale} projects={featuredProjects.slice(0, 2)} />
      </Section>

      <HowIWorkSection
        description={copy.home.approach.description}
        eyebrow={copy.home.approach.eyebrow}
        items={copy.home.approach.items}
        locale={locale}
        title={copy.home.approach.title}
      />
    </>
  );
}
