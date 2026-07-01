import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Activity, ArrowRight, BrainCircuit, BriefcaseBusiness, Handshake, LifeBuoy, Workflow } from "lucide-react";

import { ProfessionalValueGrid } from "@/components/sections/professional-value-grid";
import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { PageHero } from "@/components/ui/page-hero";
import { Section } from "@/components/ui/section";
import { siteCopy } from "@/data/site";
import { createMetadata } from "@/lib/metadata";
import { isLocale, localizePath, type Locale } from "@/lib/i18n";

const valueIcons = [LifeBuoy, Workflow, BriefcaseBusiness, ArrowRight, BrainCircuit, Handshake] as const;

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
  const pageMeta = siteCopy[locale].metadata.pages.about;

  return createMetadata({
    locale,
    title: pageMeta.title,
    description: pageMeta.description,
    keywords: pageMeta.keywords,
    path: "/about",
  });
}

export default async function AboutPage({
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
  const page = copy.pages.about;

  return (
    <>
      <PageHero eyebrow={page.eyebrow} intro={page.intro} title={page.title}>
        <div className="space-y-4">
          <p className="font-mono text-[0.7rem] font-bold uppercase tracking-[0.22em] text-[#9fbeff]">{page.focusTitle}</p>
          <p className="text-sm leading-7 text-slate-300">{page.focusBody}</p>
        </div>
      </PageHero>

      <Section align="center" className="py-16 sm:py-20" description={page.trajectoryIntro} eyebrow={page.eyebrow} title={page.trajectoryTitle}>
        <ProfessionalValueGrid items={page.trajectoryItems} locale={locale} />
      </Section>

      <Section
        align="center"
        className="py-16 sm:py-20"
        description={page.valueIntro}
        eyebrow={locale === "es" ? "Encaje profesional" : "Professional fit"}
        title={page.valueTitle}
      >
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {page.valueItems.map((item, index) => {
            const Icon = valueIcons[index % valueIcons.length];

            return (
              <article
                className="group flex items-center gap-3 rounded-[1.35rem] border border-white/8 bg-[linear-gradient(180deg,rgba(11,18,32,0.92),rgba(7,12,24,0.97))] px-4 py-4 shadow-soft transition duration-300 hover:-translate-y-1 hover:border-[#60a5fa]/35 hover:shadow-[0_0_30px_rgba(59,130,246,0.08)] motion-reduce:transform-none motion-reduce:transition-none"
                key={item}
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#60a5fa]/18 bg-[#60a5fa]/10 text-[#c8d2ff] transition duration-300 group-hover:border-[#93c5fd]/30 group-hover:bg-[#60a5fa]/14 group-hover:text-[#dbeafe] motion-reduce:transition-none">
                  <Icon className="h-4 w-4" />
                </div>
                <p className="text-sm font-semibold leading-6 text-ink transition duration-300 group-hover:text-white motion-reduce:transition-none">{item}</p>
              </article>
            );
          })}
        </div>
      </Section>

      <Section
        align="center"
        className="py-16 sm:py-20"
        description={page.learningIntro}
        eyebrow={locale === "es" ? "Evolución" : "Growth"}
        title={page.learningTitle}
      >
        <ProfessionalValueGrid items={page.learningItems} locale={locale} />
      </Section>

      <section className="py-16 sm:py-20">
        <Container>
          <div className="mx-auto max-w-4xl rounded-[1.8rem] border border-white/8 bg-[linear-gradient(180deg,rgba(11,18,32,0.94),rgba(7,12,24,0.98))] p-6 shadow-soft sm:p-8">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#60a5fa]/18 bg-[#60a5fa]/10 text-[#c8d2ff]">
              <Activity className="h-4 w-4" />
            </div>
            <p className="mt-4 font-mono text-[0.7rem] font-semibold uppercase tracking-[0.24em] text-[#9fbeff]">{page.outsideTitle}</p>
            <div className="mt-4 space-y-4 text-base leading-8 text-slate-300">
              <p>{page.outsideBody}</p>
              {page.outsideSecondaryBody ? <p>{page.outsideSecondaryBody}</p> : null}
            </div>
          </div>
        </Container>
      </section>

      <Section
        align="center"
        className="py-16 sm:py-20"
        description={page.technicalIntro}
        eyebrow={locale === "es" ? "Áreas frecuentes" : "Frequent areas"}
        title={page.technicalTitle}
      >
        <div className="grid gap-5 md:grid-cols-2">
          {copy.home.skills.categories.slice(0, 2).map((category) => (
            <article
              className="rounded-[1.6rem] border border-white/8 bg-[linear-gradient(180deg,rgba(11,18,32,0.94),rgba(7,12,24,0.98))] p-6 shadow-soft"
              key={category.title.en}
            >
              <h3 className="mb-4 text-lg font-black tracking-tight text-ink">{category.title[locale]}</h3>
              <div className="flex flex-wrap gap-2">
                {category.items.map((item) => (
                  <span
                    className="rounded-md border border-white/10 bg-white/[0.04] px-3 py-1.5 font-mono text-[0.7rem] font-medium tracking-[0.03em] text-ink"
                    key={item}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </Section>

      <section className="pb-8 pt-2 sm:pb-12 sm:pt-1">
        <Container>
          <div className="mx-auto max-w-[56.25rem] rounded-[2rem] border border-white/8 bg-[linear-gradient(180deg,rgba(11,18,32,0.94),rgba(7,12,24,0.98))] px-6 py-8 text-center shadow-soft sm:px-8 sm:py-10">
            <p className="font-mono text-[0.7rem] font-semibold uppercase tracking-[0.24em] text-[#9fbeff]">
              {locale === "es" ? "Cierre" : "Next step"}
            </p>
            <h2 className="mt-3 font-display text-[2rem] font-black tracking-tight text-ink sm:text-4xl">{page.ctaTitle}</h2>
            <p className="mx-auto mt-4 max-w-2xl text-[1rem] leading-7 text-muted sm:text-lg sm:leading-8">{page.ctaBody}</p>
            <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
              <ButtonLink href={localizePath(locale, "/contact")} variant="primary">
                {locale === "es" ? "Contactar" : "Contact"}
              </ButtonLink>
              <ButtonLink href={localizePath(locale, "/projects")} variant="secondary">
                {locale === "es" ? "Ver proyectos" : "View projects"}
              </ButtonLink>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
