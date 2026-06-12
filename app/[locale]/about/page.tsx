import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ApproachGrid } from "@/components/sections/approach-grid";
import { ContactPanel } from "@/components/sections/contact-panel";
import { SkillsSection } from "@/components/sections/skills-section";
import { PageHero } from "@/components/ui/page-hero";
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
  const aboutPage = copy.pages.about;

  return (
    <>
      <PageHero eyebrow={aboutPage.eyebrow} intro={aboutPage.intro} title={aboutPage.title}>
        <div className="space-y-3">
          <p className="text-sm text-muted">{aboutPage.summaryTitle}</p>
          <p className="text-2xl font-black tracking-tight text-ink">{copy.roleLabel}</p>
          <p className="text-sm leading-7 text-muted">{aboutPage.summaryBody}</p>
        </div>
      </PageHero>

      <Section description={aboutPage.principlesIntro} eyebrow={aboutPage.eyebrow} title={aboutPage.principlesTitle}>
        <ApproachGrid items={copy.home.ai.items} locale={locale} />
      </Section>

      <SkillsSection
        aiDescription={copy.home.ai.description}
        aiItems={copy.home.ai.items}
        aiTitle={copy.home.ai.title}
        categories={copy.home.skills.categories}
        description={copy.home.skills.description}
        eyebrow={copy.home.skills.eyebrow}
        locale={locale}
        title={copy.home.skills.title}
      />

      <Section description={copy.pages.contact.intro} eyebrow={copy.pages.contact.eyebrow} title={copy.pages.contact.title}>
        <ContactPanel fitBullets={copy.pages.contact.fitBullets} fitTitle={copy.pages.contact.fitTitle} locale={locale} />
      </Section>
    </>
  );
}
