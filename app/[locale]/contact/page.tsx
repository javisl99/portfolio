import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ContactPanel } from "@/components/sections/contact-panel";
import { PageHero } from "@/components/ui/page-hero";
import { Container } from "@/components/ui/container";
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
  const pageCopy = copy.pages.contact;

  return (
    <>
      <PageHero eyebrow={pageCopy.eyebrow} intro={pageCopy.intro} title={pageCopy.title}>
        <div className="space-y-3">
          <p className="text-sm text-muted">{locale === "es" ? "Canales directos" : "Direct channels"}</p>
          <p className="text-2xl font-black tracking-tight text-ink">{siteSettings.email}</p>
          <p className="text-sm leading-7 text-muted">{pageCopy.finalNote}</p>
        </div>
      </PageHero>

      <Container className="pb-18 sm:pb-24">
        <ContactPanel
          description={pageCopy.availability}
          fitBullets={pageCopy.fitBullets}
          fitTitle={pageCopy.fitTitle}
          locale={locale}
        />
      </Container>
    </>
  );
}
