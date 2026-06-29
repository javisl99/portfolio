import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ExperienceSnapshotGrid } from "@/components/sections/experience-snapshot-grid";
import { HomeHero } from "@/components/sections/home-hero";
import { ProjectGrid } from "@/components/sections/project-grid";
import { ButtonLink } from "@/components/ui/button-link";
import { Section } from "@/components/ui/section";
import { siteCopy } from "@/data/site";
import { createMetadata } from "@/lib/metadata";
import { getFeaturedProjects } from "@/lib/projects";
import { isLocale, localizePath, type Locale } from "@/lib/i18n";

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
  const projects = await getFeaturedProjects(locale);
  const aboutPage = copy.pages.about;

  return (
    <>
      <HomeHero locale={locale} />

      <Section
        actions={
          <ButtonLink href={localizePath(locale, "/experience")} variant="secondary">
            {copy.ctas.experience}
          </ButtonLink>
        }
        id="experience"
        align="center"
        description={copy.home.career.description}
        eyebrow={copy.home.career.eyebrow}
        title={copy.home.career.title}
      >
        <ExperienceSnapshotGrid locale={locale} variant="compact" />
      </Section>

      <Section
        actions={
          <ButtonLink href={localizePath(locale, "/projects")} variant="secondary">
            {copy.ctas.projects}
          </ButtonLink>
        }
        id="projects"
        align="center"
        description={copy.home.projects.description}
        eyebrow={copy.home.projects.eyebrow}
        title={copy.home.projects.title}
      >
        <ProjectGrid locale={locale} projects={projects} variant="compact" />
      </Section>

      <Section
        actions={
          <ButtonLink href={localizePath(locale, "/about")} variant="secondary">
            {copy.ctas.about}
          </ButtonLink>
        }
        id="about"
        align="center"
        description={aboutPage.intro}
        eyebrow={aboutPage.eyebrow}
        title={aboutPage.title}
      >
        <article className="mx-auto max-w-4xl rounded-[1.9rem] border border-line bg-panel p-7 text-left shadow-soft sm:p-8">
          <p className="mb-3 font-mono text-[0.68rem] font-bold uppercase tracking-[0.2em] text-[#9fbeff]">{aboutPage.summaryTitle}</p>
          <h3 className="text-2xl font-black tracking-tight text-ink">{copy.roleLabel}</h3>
          <p className="mt-4 text-sm leading-7 text-muted sm:text-base">{aboutPage.principlesIntro}</p>
        </article>
      </Section>

      <Section
        actions={
          <ButtonLink href={localizePath(locale, "/contact")} variant="secondary">
            {copy.ctas.contact}
          </ButtonLink>
        }
        id="contact"
        align="center"
        description={copy.pages.contact.availability}
        eyebrow={copy.pages.contact.eyebrow}
        title={locale === "es" ? "Disponible para una conversación rápida" : "Available for a quick conversation"}
      >
        <div className="mx-auto max-w-4xl rounded-[1.9rem] border border-line bg-[linear-gradient(180deg,rgba(11,18,32,0.95),rgba(7,12,24,0.98))] p-7 text-center shadow-soft sm:p-9">
          <p className="mx-auto max-w-2xl text-sm leading-7 text-muted sm:text-base">{copy.home.contact.description}</p>
          <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
            <ButtonLink className="justify-center" href={localizePath(locale, "/contact")} variant="primary">
              {copy.ctas.contact}
            </ButtonLink>
            <ButtonLink className="justify-center" href={localizePath(locale, "/projects")} variant="secondary">
              {copy.ctas.projects}
            </ButtonLink>
          </div>
        </div>
      </Section>
    </>
  );
}
