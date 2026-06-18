import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ApproachGrid } from "@/components/sections/approach-grid";
import { ExperienceSnapshotGrid } from "@/components/sections/experience-snapshot-grid";
import { HomeHero } from "@/components/sections/home-hero";
import { ProfessionalValueGrid } from "@/components/sections/professional-value-grid";
import { ProjectGrid } from "@/components/sections/project-grid";
import { SkillsSection } from "@/components/sections/skills-section";
import { ContactPanel } from "@/components/sections/contact-panel";
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
  const projects = await getProjects(locale);
  const aboutPage = copy.pages.about;

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
        <ExperienceSnapshotGrid locale={locale} />
      </Section>

      <Section
        id="professional-value"
        align="center"
        description={copy.home.value.description}
        eyebrow={copy.home.value.eyebrow}
        title={copy.home.value.title}
      >
        <ProfessionalValueGrid items={copy.home.value.items} locale={locale} />
      </Section>

      <Section
        id="projects"
        align="center"
        description={copy.home.projects.description}
        eyebrow={copy.home.projects.eyebrow}
        title={copy.home.projects.title}
      >
        <ProjectGrid locale={locale} projects={projects} />
      </Section>

      <Section
        id="about"
        align="center"
        description={aboutPage.intro}
        eyebrow={aboutPage.eyebrow}
        title={aboutPage.title}
      >
        <div className="space-y-8">
          <div className="mx-auto grid max-w-5xl gap-6 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)]">
            <article className="rounded-[1.9rem] border border-line bg-panel p-7 text-left shadow-soft sm:p-8">
              <p className="mb-3 font-mono text-[0.68rem] font-bold uppercase tracking-[0.2em] text-[#9fbeff]">{aboutPage.summaryTitle}</p>
              <h3 className="text-2xl font-black tracking-tight text-ink">{copy.roleLabel}</h3>
              <p className="mt-4 text-sm leading-7 text-muted sm:text-base">{aboutPage.summaryBody}</p>
            </article>
            <article className="rounded-[1.9rem] border border-line bg-[linear-gradient(160deg,rgba(12,20,36,0.96),rgba(6,10,22,0.98))] p-7 text-left shadow-[0_42px_90px_-52px_rgba(37,99,235,0.4)] sm:p-8">
              <p className="mb-3 font-mono text-[0.68rem] font-bold uppercase tracking-[0.2em] text-[#9fbeff]">{aboutPage.principlesTitle}</p>
              <p className="text-sm leading-7 text-slate-300 sm:text-base">{aboutPage.principlesIntro}</p>
            </article>
          </div>
          <ApproachGrid items={copy.home.ai.items} locale={locale} />
        </div>
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
