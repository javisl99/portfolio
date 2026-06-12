import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ExperienceSnapshotGrid } from "@/components/sections/experience-snapshot-grid";
import { HomeHero } from "@/components/sections/home-hero";
import { ProjectGrid } from "@/components/sections/project-grid";
import { SkillsSection } from "@/components/sections/skills-section";
import { ContactPanel } from "@/components/sections/contact-panel";
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
        id="experience"
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
        id="projects"
        align="center"
        description={copy.home.projects.description}
        eyebrow={copy.home.projects.eyebrow}
        title={copy.home.projects.title}
      >
        <ProjectGrid locale={locale} projects={featuredProjects.slice(0, 2)} />
      </Section>

      <SkillsSection
        aiDescription={copy.home.ai.description}
        aiItems={copy.home.ai.items}
        aiTitle={copy.home.ai.title}
        categories={copy.home.skills.categories}
        description={copy.home.skills.description}
        eyebrow={copy.home.skills.eyebrow}
        locale={locale}
        title={copy.home.skills.title}
      />

      <Section
        id="contact"
        align="center"
        description={copy.home.contact.description}
        eyebrow={copy.home.contact.eyebrow}
        title={copy.home.contact.title}
      >
        <ContactPanel fitBullets={copy.home.contact.fitBullets} fitTitle={copy.home.contact.fitTitle} locale={locale} />
      </Section>
    </>
  );
}
