import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ContactPanel } from "@/components/sections/contact-panel";
import { ExperienceTimeline } from "@/components/sections/experience-timeline";
import { FocusCardGrid } from "@/components/sections/focus-card-grid";
import { MilestoneGrid } from "@/components/sections/milestone-grid";
import { ProjectGrid } from "@/components/sections/project-grid";
import { SkillGrid } from "@/components/sections/skill-grid";
import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { Pill } from "@/components/ui/pill";
import { Section } from "@/components/ui/section";
import { siteCopy, siteSettings } from "@/data/site";
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
      <section className="relative overflow-hidden py-18 sm:py-24">
        <Container>
          <div className="grid gap-10 xl:grid-cols-[minmax(0,1fr)_24rem] xl:items-center">
            <div className="max-w-3xl space-y-6">
              <Pill>{copy.home.hero.eyebrow}</Pill>
              <h1 className="text-4xl font-semibold tracking-tight text-ink sm:text-6xl">
                {copy.home.hero.title}
              </h1>
              <p className="text-lg leading-8 text-muted sm:text-xl">{copy.home.hero.summary}</p>
              <p className="max-w-2xl text-base leading-7 text-ink/88">{copy.home.hero.availability}</p>
              <div className="flex flex-wrap gap-3">
                <ButtonLink href={localizePath(locale, "/contact")} variant="primary">
                  {copy.navigation[4]?.label}
                </ButtonLink>
                <ButtonLink href={localizePath(locale, "/projects")} variant="secondary">
                  {copy.ctas.allProjects}
                </ButtonLink>
                <ButtonLink href={`/${locale}/cv`} target="_blank" variant="ghost">
                  {copy.ctas.resume}
                </ButtonLink>
              </div>
            </div>
            <aside className="rounded-[2rem] border border-line bg-panel/90 p-6 shadow-soft">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-accent">
                {locale === "es" ? "Resumen rápido" : "Quick overview"}
              </p>
              <div className="space-y-5">
                <div>
                  <p className="text-sm text-muted">{locale === "es" ? "Perfil" : "Profile"}</p>
                  <p className="text-lg font-semibold text-ink">{siteSettings.role}</p>
                </div>
                <div>
                  <p className="text-sm text-muted">{locale === "es" ? "Ubicación" : "Location"}</p>
                  <p className="text-lg font-semibold text-ink">{siteSettings.location}</p>
                </div>
                <div>
                  <p className="text-sm text-muted">{locale === "es" ? "Enfoque" : "Focus"}</p>
                  <ul className="mt-3 grid gap-2 text-sm leading-7 text-muted">
                    <li>
                      {locale === "es"
                        ? "Pensamiento de producto y arquitectura frontend"
                        : "Product thinking and frontend architecture"}
                    </li>
                    <li>
                      {locale === "es"
                        ? "Entrega accesible, estable y con criterio de calidad"
                        : "Accessible delivery with a strong quality bar"}
                    </li>
                    <li>
                      {locale === "es"
                        ? "Contenido bilingüe, datos tipados y casos en MDX"
                        : "Bilingual content, typed data, and MDX case studies"}
                    </li>
                  </ul>
                </div>
              </div>
            </aside>
          </div>
        </Container>
      </section>

      <section className="pb-10">
        <Container>
          <FocusCardGrid locale={locale} />
        </Container>
      </section>

      <Section
        actions={
          <ButtonLink href={localizePath(locale, "/experience")} variant="secondary">
            {copy.ctas.allExperience}
          </ButtonLink>
        }
        description={copy.home.experience.description}
        eyebrow={copy.home.experience.eyebrow}
        title={copy.home.experience.title}
      >
        <ExperienceTimeline limit={2} locale={locale} />
      </Section>

      <Section
        description={copy.home.milestones.description}
        eyebrow={copy.home.milestones.eyebrow}
        title={copy.home.milestones.title}
      >
        <MilestoneGrid locale={locale} />
      </Section>

      <Section
        actions={
          <ButtonLink href={localizePath(locale, "/about")} variant="secondary">
            {copy.ctas.about}
          </ButtonLink>
        }
        description={copy.home.skills.description}
        eyebrow={copy.home.skills.eyebrow}
        title={copy.home.skills.title}
      >
        <SkillGrid locale={locale} />
      </Section>

      <Section
        actions={
          <ButtonLink href={localizePath(locale, "/projects")} variant="secondary">
            {copy.ctas.allProjects}
          </ButtonLink>
        }
        description={copy.home.projects.description}
        eyebrow={copy.home.projects.eyebrow}
        title={copy.home.projects.title}
      >
        <ProjectGrid locale={locale} projects={featuredProjects} />
      </Section>

      <Section
        description={copy.home.contact.description}
        eyebrow={copy.home.contact.eyebrow}
        title={copy.home.contact.title}
      >
        <ContactPanel locale={locale} />
      </Section>
    </>
  );
}
