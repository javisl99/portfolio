import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { FileDown, Linkedin, Mail, MapPin } from "lucide-react";

import { ContactPanel } from "@/components/sections/contact-panel";
import { ButtonLink } from "@/components/ui/button-link";
import { PageHero } from "@/components/ui/page-hero";
import { Section } from "@/components/ui/section";
import { siteCopy } from "@/data/site";
import { getCvDownloadName, getCvFilePath } from "@/lib/cv";
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
  const pageMeta = siteCopy[locale].metadata.pages.contact;

  return createMetadata({
    locale,
    title: pageMeta.title,
    description: pageMeta.description,
    keywords: pageMeta.keywords,
    path: "/contact",
  });
}

export default async function ContactPage({
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
  const page = copy.pages.contact;
  const cvHref = getCvFilePath(locale);
  const cvDownloadName = getCvDownloadName(locale);

  return (
    <>
      <PageHero className="py-10 sm:py-16" eyebrow={page.eyebrow} intro={page.intro} title={page.title}>
        <div className="space-y-5">
          <div>
            <p className="font-mono text-[0.7rem] font-bold uppercase tracking-[0.22em] text-[#9fbeff]">{page.heroCardEyebrow}</p>
            <h2 className="mt-3 text-xl font-black tracking-tight text-white sm:text-2xl">{page.heroCardTitle}</h2>
            <p className="mt-3 text-sm leading-6 text-slate-300 sm:leading-7">{page.availability}</p>
          </div>

          <div className="grid gap-3">
            <div className="grid gap-3 sm:grid-cols-2">
              <ButtonLink className="w-full justify-center" href={`mailto:${copy.pages.contact.channelsItems[0]?.value}`} variant="primary">
                <Mail className="h-4 w-4" />
                Email
              </ButtonLink>
              <ButtonLink className="w-full justify-center" href={copy.pages.contact.channelsItems[1]?.href ?? "#"} target="_blank" variant="secondary">
                <Linkedin className="h-4 w-4" />
                LinkedIn
              </ButtonLink>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              <ButtonLink className="w-full justify-center" download={cvDownloadName} href={cvHref} target="_blank" variant="secondary">
                <FileDown className="h-4 w-4" />
                {copy.ctas.resume}
              </ButtonLink>
              <ButtonLink className="w-full justify-center" href={localizePath(locale, "/projects")} variant="secondary">
                {locale === "es" ? "Ver proyectos" : "View projects"}
              </ButtonLink>
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
            <p className="font-mono text-[0.66rem] uppercase tracking-[0.18em] text-slate-400">
              {locale === "es" ? "Ubicación y encaje" : "Location and fit"}
            </p>
            <div className="mt-3 space-y-2 text-sm leading-6 text-slate-200">
              <div className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#bcd1ff]" />
                <span>{copy.pages.contact.channelsItems[3]?.value}</span>
              </div>
              <p>{page.heroCardBullets[0]}</p>
            </div>
          </div>
        </div>
      </PageHero>

      <Section
        align="center"
        description={page.finalNote}
        eyebrow={locale === "es" ? "Siguiente paso" : "Next step"}
        title={locale === "es" ? "Canales claros y oportunidades alineadas" : "Clear channels and aligned opportunities"}
      >
        <ContactPanel fitBullets={page.fitBullets} fitTitle={page.fitTitle} locale={locale} />
      </Section>
    </>
  );
}
