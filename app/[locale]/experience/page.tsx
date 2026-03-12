import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ExperienceTimeline } from "@/components/sections/experience-timeline";
import { ButtonLink } from "@/components/ui/button-link";
import { PageHero } from "@/components/ui/page-hero";
import { Section } from "@/components/ui/section";
import { siteCopy } from "@/data/site";
import { createMetadata } from "@/lib/metadata";
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
  const pageMeta = siteCopy[locale].metadata.pages.experience;

  return createMetadata({
    locale,
    title: pageMeta.title,
    description: pageMeta.description,
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

  return (
    <>
      <PageHero
        eyebrow={copy.pages.experience.eyebrow}
        intro={copy.pages.experience.intro}
        title={copy.pages.experience.title}
      >
        <div className="space-y-3">
          <p className="text-sm text-muted">{locale === "es" ? "Lectura rápida" : "Fast scan"}</p>
          <p className="text-2xl font-semibold text-ink">3 roles clave</p>
          <p className="text-sm leading-7 text-muted">
            {locale === "es"
              ? "Producto, frontend y plataforma conectados desde una narrativa profesional clara."
              : "Product, frontend, and platform work connected through a clear professional narrative."}
          </p>
        </div>
      </PageHero>

      <Section
        actions={
          <ButtonLink href={localizePath(locale, "/projects")} variant="secondary">
            {copy.ctas.allProjects}
          </ButtonLink>
        }
        description={copy.pages.experience.intro}
        eyebrow={copy.pages.experience.eyebrow}
        title={copy.pages.experience.title}
      >
        <ExperienceTimeline locale={locale} />
      </Section>
    </>
  );
}

