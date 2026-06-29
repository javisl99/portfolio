import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ProfessionalValueGrid } from "@/components/sections/professional-value-grid";
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
  const page = copy.pages.about;

  return (
    <>
      <PageHero eyebrow={page.eyebrow} intro={page.intro} title={page.title}>
        <div className="space-y-4">
          <p className="font-mono text-[0.7rem] font-bold uppercase tracking-[0.22em] text-[#9fbeff]">{page.summaryTitle}</p>
          <p className="text-sm leading-7 text-slate-300">{page.summaryBody}</p>
        </div>
      </PageHero>

      <Section
        align="center"
        description={page.principlesIntro}
        eyebrow={page.principlesTitle}
        title={locale === "es" ? "Cómo trabajo en backend y con equipos" : "How I work in backend and with teams"}
      >
        <ProfessionalValueGrid items={page.principlesItems} locale={locale} />
      </Section>

      <Section
        align="center"
        description={
          locale === "es"
            ? "Una vista compacta de las tecnologías y áreas en las que más trabajo."
            : "A compact view of the technologies and technical areas I work with most often."
        }
        eyebrow={copy.home.skills.eyebrow}
        title={locale === "es" ? "Áreas de trabajo frecuentes" : "Frequent work areas"}
      >
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {copy.home.skills.categories.slice(0, 3).map((category) => (
            <article
              className="rounded-[1.6rem] border border-line bg-[linear-gradient(180deg,rgba(11,18,32,0.94),rgba(7,12,24,0.98))] p-6 shadow-soft"
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
    </>
  );
}
