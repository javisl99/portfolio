import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { AIImpactSection } from "@/components/sections/ai-impact-section";
import { ExperienceSnapshotGrid } from "@/components/sections/experience-snapshot-grid";
import { ProfessionalValueGrid } from "@/components/sections/professional-value-grid";
import { PageHero } from "@/components/ui/page-hero";
import { RecruiterScanCard } from "@/components/ui/recruiter-scan-card";
import { Section } from "@/components/ui/section";
import { siteCopy } from "@/data/site";
import { createMetadata } from "@/lib/metadata";
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
  const pageMeta = siteCopy[locale].metadata.pages.experience;

  return createMetadata({
    locale,
    title: pageMeta.title,
    description: pageMeta.description,
    keywords: pageMeta.keywords,
    path: "/experience",
  });
}

export default async function ExperiencePage({
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
  const page = copy.pages.experience;

  return (
    <>
      <PageHero
        eyebrow={page.eyebrow}
        intro={page.intro}
        introClassName="max-w-2xl sm:text-[1.1rem] sm:leading-8"
        panelClassName="border-white/8 bg-[linear-gradient(180deg,rgba(11,18,32,0.82),rgba(7,12,24,0.9))]"
        title={page.title}
      >
        <RecruiterScanCard bullets={page.scanBullets} description={page.scanBody} eyebrow={page.scanTitle} title={locale === "es" ? "Lectura rápida" : "Quick read"} />
      </PageHero>

      <Section
        align="center"
        description={
          locale === "es"
            ? "Cada etapa añade un tipo de responsabilidad distinto: base funcional, backend commerce y trabajo más cercano a producción."
            : "Each stage adds a different layer of responsibility: functional foundations, commerce backend work, and a stronger production-facing stage."
        }
        eyebrow={locale === "es" ? "Etapas" : "Stages"}
        title={locale === "es" ? "Recorrido profesional y responsabilidades por etapa" : "Professional path and responsibilities by stage"}
      >
        <ExperienceSnapshotGrid locale={locale} />
      </Section>

      <Section
        align="center"
        description={page.valueDescription}
        eyebrow={page.valueEyebrow}
        title={page.valueTitle}
      >
        <ProfessionalValueGrid items={page.valueItems} locale={locale} />
      </Section>

      <Section
        align="center"
        description={copy.home.ai.description}
        eyebrow={copy.home.ai.eyebrow}
        title={locale === "es" ? "Qué ha cambiado desde 2026 en mi forma de trabajar" : "What changed in my workflow from 2026 onward"}
      >
        <AIImpactSection
          context={copy.home.ai.context}
          description={copy.home.ai.description}
          eyebrow={copy.home.ai.eyebrow}
          items={copy.home.ai.items}
          locale={locale}
          metrics={copy.home.ai.metrics}
          metricsNote={copy.home.ai.metricsNote}
          note={copy.home.ai.note}
          showLead={false}
          title={copy.home.ai.title}
          variant="full"
        />
      </Section>
    </>
  );
}
