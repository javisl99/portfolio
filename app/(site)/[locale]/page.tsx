import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Download, Mail } from "lucide-react";

import { AIImpactSection } from "@/components/sections/ai-impact-section";
import { ExperienceSnapshotGrid } from "@/components/sections/experience-snapshot-grid";
import { HomeAboutPreview } from "@/components/sections/home-about-preview";
import { HomeHero } from "@/components/sections/home-hero";
import { ProjectGrid } from "@/components/sections/project-grid";
import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { siteCopy } from "@/data/site";
import { getCvDownloadName, getCvFilePath } from "@/lib/cv";
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
  const cvHref = getCvFilePath(locale);
  const cvDownloadName = getCvDownloadName(locale);

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

      <section className="py-16 sm:py-24" id="ai">
        <Container>
          <AIImpactSection
          context={copy.home.ai.context}
          description={copy.home.ai.description}
          eyebrow={copy.home.ai.eyebrow}
          items={copy.home.ai.items}
          locale={locale}
          metricsNote={copy.home.ai.metricsNote}
          note={copy.home.ai.note}
          title={copy.home.ai.title}
        />
      </Container>
    </section>

      <Section
        actions={
          <ButtonLink href={localizePath(locale, "/about")} variant="secondary">
            {locale === "es" ? "Ver cómo trabajo" : "See how I work"}
          </ButtonLink>
        }
        id="about"
        align="center"
        description={aboutPage.intro}
        eyebrow={aboutPage.eyebrow}
        title={aboutPage.title}
      >
        <HomeAboutPreview items={aboutPage.principlesItems} locale={locale} />
      </Section>

      <section className="pb-4 pt-8 sm:pb-5 sm:pt-4" id="contact">
        <Container>
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="font-display text-4xl font-black tracking-tight text-ink sm:text-5xl">
              {locale === "es" ? "¿Listo para hablar de backend, integraciones y producto?" : "Ready to talk about backend, integrations, and product?"}
            </h2>
            <p className="mx-auto mt-4 max-w-[37.5rem] text-sm leading-7 text-muted sm:text-base">
              {locale === "es"
                ? "Abierto a nuevas oportunidades y conversaciones relacionadas con backend, integraciones y plataformas de producto."
                : "Open to new opportunities and conversations around backend engineering, integrations and product platforms."}
            </p>
            <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
              <ButtonLink className="justify-center px-10 py-4 text-lg" href={localizePath(locale, "/contact")} variant="primary">
                <Mail className="h-5 w-5 shrink-0 self-center" />
                <span className="inline-flex items-center leading-none">{locale === "es" ? "Contactar" : "Get in Touch"}</span>
              </ButtonLink>
              <ButtonLink
                className="justify-center px-10 py-4 text-lg"
                download={cvDownloadName}
                href={cvHref}
                target="_blank"
                variant="secondary"
              >
                <Download className="h-5 w-5 shrink-0 self-center" />
                <span className="inline-flex items-center leading-none">{copy.ctas.resume}</span>
              </ButtonLink>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
