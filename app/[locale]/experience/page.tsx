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
  const pageCopy = copy.pages.experience;

  return (
    <>
      <PageHero eyebrow={pageCopy.eyebrow} intro={pageCopy.intro} title={pageCopy.title}>
        <div className="space-y-4">
          <p className="text-sm text-muted">{pageCopy.scanTitle}</p>
          <p className="text-2xl font-black tracking-tight text-ink">{pageCopy.scanBody}</p>
          <ul className="grid gap-3 text-sm leading-7 text-muted">
            {pageCopy.scanBullets.map((item) => (
              <li className="flex gap-3" key={item}>
                <span className="mt-2 h-2 w-2 rounded-full bg-accent" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </PageHero>

      <Section
        actions={
          <ButtonLink href={localizePath(locale, "/projects")} variant="secondary">
            {copy.ctas.projects}
          </ButtonLink>
        }
        description={pageCopy.intro}
        eyebrow={pageCopy.eyebrow}
        title={pageCopy.title}
      >
        <div className="space-y-12">
          <ExperienceSnapshotGrid locale={locale} />

          <div className="border-t border-line pt-10">
            <div className="mb-8 max-w-3xl space-y-3">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">
                {locale === "es" ? "Detalle por etapa" : "Stage detail"}
              </p>
              <h2 className="text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
                {locale === "es"
                  ? "Contexto, reto, intervención y señal profesional"
                  : "Context, challenge, intervention, and professional signal"}
              </h2>
              <p className="text-base leading-7 text-muted">
                {locale === "es"
                  ? "Cada etapa está contada para que se vea la evolución: qué tipo de proyecto era, qué parte de SAP Commerce toqué y qué demuestra sobre mi perfil técnico."
                  : "Each stage is written to show progression: what kind of project it was, which part of SAP Commerce I touched, and what it says about my technical profile."}
              </p>
            </div>

            <ExperienceTimeline locale={locale} />
          </div>
        </div>
      </Section>
    </>
  );
}
