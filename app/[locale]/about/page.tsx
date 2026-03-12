import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ContactPanel } from "@/components/sections/contact-panel";
import { SkillGrid } from "@/components/sections/skill-grid";
import { Container } from "@/components/ui/container";
import { PageHero } from "@/components/ui/page-hero";
import { Section } from "@/components/ui/section";
import { siteCopy, siteSettings } from "@/data/site";
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
  const pageMeta = siteCopy[locale].metadata.pages.about;

  return createMetadata({
    locale,
    title: pageMeta.title,
    description: pageMeta.description,
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
  const aboutPage = copy.pages.about;

  return (
    <>
      <PageHero eyebrow={aboutPage.eyebrow} intro={aboutPage.intro} title={aboutPage.title}>
        <div className="space-y-3">
          <p className="text-sm text-muted">{locale === "es" ? "Base" : "Base"}</p>
          <p className="text-2xl font-semibold text-ink">{siteSettings.location}</p>
          <p className="text-sm leading-7 text-muted">
            {locale === "es"
              ? "Perfil con enfoque en producto, calidad de experiencia y claridad técnica."
              : "Profile centered on product thinking, experience quality, and technical clarity."}
          </p>
        </div>
      </PageHero>

      <Container className="grid gap-6 pb-14 sm:pb-18 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)]">
        <section className="rounded-[2rem] border border-line bg-white/82 p-6 shadow-soft sm:p-8">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-accent">{aboutPage.narrativeTitle}</p>
          <div className="grid gap-5">
            {aboutPage.narrative.map((paragraph) => (
              <p className="text-base leading-8 text-muted" key={paragraph}>
                {paragraph}
              </p>
            ))}
          </div>
        </section>

        <section className="rounded-[2rem] border border-line bg-white/82 p-6 shadow-soft sm:p-8">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-accent">{aboutPage.principlesTitle}</p>
          <div className="grid gap-4">
            {aboutPage.principles.map((principle) => (
              <article className="rounded-[1.5rem] bg-surface/65 p-5" key={principle.title}>
                <h2 className="mb-2 text-lg font-semibold text-ink">{principle.title}</h2>
                <p className="text-sm leading-7 text-muted">{principle.body}</p>
              </article>
            ))}
          </div>
        </section>
      </Container>

      <Section
        description={copy.home.skills.description}
        eyebrow={copy.home.skills.eyebrow}
        title={copy.home.skills.title}
      >
        <SkillGrid locale={locale} />
      </Section>

      <Section
        description={copy.home.contact.description}
        eyebrow={copy.pages.contact.eyebrow}
        title={copy.pages.contact.title}
      >
        <ContactPanel locale={locale} />
      </Section>
    </>
  );
}

