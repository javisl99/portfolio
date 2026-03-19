import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ExperienceSnapshotGrid } from "@/components/sections/experience-snapshot-grid";
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
          <p className="text-2xl font-semibold text-ink">
            {locale === "es" ? "3 etapas SAP clave" : "3 key SAP stages"}
          </p>
          <p className="text-sm leading-7 text-muted">
            {locale === "es"
              ? "Stratesys, Minsait y Accenture en proyectos SAP Commerce con soporte, evolutivo, customización del estándar y B2B back-end."
              : "Stratesys, Minsait, and Accenture across SAP Commerce support, evolutive work, standard customization, and B2B back-end delivery."}
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
        <div className="space-y-10">
          <ExperienceSnapshotGrid locale={locale} />

          <div className="border-t border-line pt-10">
            <div className="mb-8 max-w-3xl space-y-3">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">
                {locale === "es" ? "Ampliación progresiva" : "Progressive expansion"}
              </p>
              <h3 className="text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
                {locale === "es" ? "Detalle técnico y contexto por etapa" : "Technical detail and context by stage"}
              </h3>
              <p className="text-base leading-7 text-muted">
                {locale === "es"
                  ? "Este bloque parte del resumen que ya aparece en el CV y añade el contexto técnico que más tarde seguiremos ampliando: foco SAP Commerce, responsabilidad asumida, stack y señales de crecimiento profesional."
                  : "This block starts from the summary already reflected in the CV and adds the technical context we will expand later on: SAP Commerce focus, ownership level, stack, and professional growth signals."}
              </p>
            </div>

            <ExperienceTimeline locale={locale} />
          </div>
        </div>
      </Section>
    </>
  );
}
