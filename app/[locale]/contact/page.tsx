import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ContactPanel } from "@/components/sections/contact-panel";
import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { PageHero } from "@/components/ui/page-hero";
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

  return (
    <>
      <PageHero eyebrow={copy.pages.contact.eyebrow} intro={copy.pages.contact.intro} title={copy.pages.contact.title}>
        <div className="space-y-3">
          <p className="text-sm text-muted">{locale === "es" ? "Canales" : "Channels"}</p>
          <p className="text-2xl font-semibold text-ink">Email + LinkedIn + PDF</p>
          <p className="text-sm leading-7 text-muted">{copy.pages.contact.note}</p>
        </div>
      </PageHero>

      <Container className="grid gap-6 pb-18 sm:pb-24 lg:grid-cols-[minmax(0,1fr)_22rem]">
        <ContactPanel locale={locale} />
        <aside className="rounded-[2rem] border border-line bg-panel/90 p-6 shadow-soft">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-accent">
            {locale === "es" ? "Siguientes pasos" : "Next step"}
          </p>
          <p className="mb-4 text-sm leading-7 text-muted">{copy.pages.contact.availability}</p>
          <div className="space-y-3 text-sm text-muted">
            <p>
              <span className="font-semibold text-ink">Email:</span> {siteSettings.email}
            </p>
            <p>
              <span className="font-semibold text-ink">LinkedIn:</span> {siteSettings.linkedin}
            </p>
          </div>
          <div className="mt-5 flex flex-wrap gap-3">
            <ButtonLink href={`mailto:${siteSettings.email}`} variant="primary">
              {copy.ctas.email}
            </ButtonLink>
            <ButtonLink href={`/${locale}/cv`} target="_blank" variant="secondary">
              {copy.ctas.resume}
            </ButtonLink>
          </div>
        </aside>
      </Container>
    </>
  );
}
