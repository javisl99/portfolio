import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ArchitectureFlowDiagram } from "@/components/ui/architecture-flow-diagram";
import { Container } from "@/components/ui/container";
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
      <PageHero
        eyebrow={page.eyebrow}
        intro={page.intro}
        introClassName="max-w-3xl sm:text-[1.08rem] sm:leading-8"
        panelClassName="border-white/8 bg-gradient-to-b from-[#14192b]/85 to-[#0b0e1a]/98"
        panelLayout="below"
        titleClassName="max-w-4xl"
        title={page.title}
      >
        <RecruiterScanCard bullets={page.scanBullets} description={page.scanBody} eyebrow={page.scanTitle} title={locale === "es" ? "Qué vas a encontrar" : "What you will find"} />
      </PageHero>

      <section className="py-8 sm:py-12">
        <Container>
          <ArchitectureFlowDiagram locale={locale} />
        </Container>
      </section>

      <Section
        align="center"
        description={
          locale === "es"
            ? "Cada caso deja visible el problema, la contribución backend y la señal técnica que un recruiter puede evaluar rápido."
            : "Each case keeps the problem, backend contribution, and technical signal visible enough to evaluate quickly."
        }
        eyebrow={locale === "es" ? "Casos reales" : "Real cases"}
        title={locale === "es" ? "Problema, contribución y señal backend" : "Problem, contribution, and backend signal"}
      >
        <ProjectGrid locale={locale} projects={projects} />
      </Section>
    </>
  );
}

