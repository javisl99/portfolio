import type { Metadata } from "next";
import { notFound } from "next/navigation";

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
      <PageHero eyebrow={page.eyebrow} intro={page.intro} title={page.title}>
        <RecruiterScanCard bullets={page.scanBullets} description={page.scanBody} eyebrow={page.scanTitle} title={locale === "es" ? "Lectura rápida" : "Quick read"} />
      </PageHero>

      <Section
        align="center"
        description={copy.home.career.description}
        eyebrow={copy.home.career.eyebrow}
        title={locale === "es" ? "Recorrido profesional y contexto de trabajo" : "Professional path and working context"}
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
    </>
  );
}
