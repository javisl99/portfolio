import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Download, Mail } from "lucide-react";

import { AIImpactSection } from "@/components/sections/ai-impact-section";
import { ExperienceSnapshotGrid } from "@/components/sections/experience-snapshot-grid";
import { HomeAboutPreview } from "@/components/sections/home-about-preview";
import { HomeHero } from "@/components/sections/home-hero";
import { ProjectGrid } from "@/components/sections/project-grid";
import { ToolMarquee } from "@/components/sections/tool-marquee";
import { ButtonLink } from "@/components/ui/button-link";
import { CopyEmailButton } from "@/components/ui/copy-email-button";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";

import { siteCopy } from "@/data/site";
import { getCvDownloadName, getCvFilePath } from "@/lib/cv";
import { createMetadata, getPersonStructuredData, getWebsiteStructuredData } from "@/lib/metadata";
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
  const personStructuredData = getPersonStructuredData(locale);
  const websiteStructuredData = getWebsiteStructuredData(locale);

  return (
    <>
      <script
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(personStructuredData),
        }}
        type="application/ld+json"
      />
      <script
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteStructuredData),
        }}
        type="application/ld+json"
      />
      <HomeHero locale={locale} />
      <ToolMarquee locale={locale} />

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

      <section className="pb-8 pt-10 sm:pb-12 sm:pt-8" id="contact">
        <Container>
          <div className="relative mx-auto max-w-4xl overflow-hidden rounded-[2rem] border border-white/8 bg-gradient-to-b from-[#14192b]/90 to-[#0c0f1d]/98 px-6 py-12 text-center shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_24px_60px_-25px_rgba(0,0,0,0.9)] sm:px-12 sm:py-16">
            <div className="pointer-events-none absolute -top-24 left-1/2 h-48 w-96 -translate-x-1/2 rounded-full bg-indigo-500/15 blur-3xl" />
            <h2 className="relative font-display text-3xl font-black tracking-tight text-white sm:text-5xl">
              {locale === "es" ? "¿Buscas un Backend Engineer para sistemas reales?" : "Looking for a Backend Engineer for real systems?"}
            </h2>
            <p className="relative mx-auto mt-4 max-w-[38rem] text-sm leading-relaxed text-slate-300 sm:text-base">
              {locale === "es"
                ? "Hablemos de Java, Spring, integraciones y cómo puedo aportar desde el primer contexto técnico."
                : "Let’s talk about Java, Spring, integrations, and how I can contribute from the first technical context."}
            </p>
            <div className="relative mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <ButtonLink className="justify-center px-8 py-3.5 text-base" href={localizePath(locale, "/contact")} variant="primary">
                <Mail className="h-4.5 w-4.5 shrink-0 self-center text-white" />
                <span className="inline-flex items-center leading-none">{locale === "es" ? "Página de contacto" : "Contact Page"}</span>
              </ButtonLink>
              <CopyEmailButton className="justify-center px-8 py-3.5 text-base" locale={locale} variant="secondary" />
              <ButtonLink
                className="justify-center px-8 py-3.5 text-base"
                download={cvDownloadName}
                href={cvHref}
                target="_blank"
                variant="secondary"
              >
                <Download className="h-4.5 w-4.5 shrink-0 self-center text-slate-400" />
                <span className="inline-flex items-center leading-none">{copy.ctas.resume}</span>
              </ButtonLink>
            </div>

          </div>
        </Container>
      </section>

    </>
  );
}
