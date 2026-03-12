import type { Metadata } from "next";

import { skillCategories } from "@/data/skills";
import { siteCopy, siteSettings } from "@/data/site";
import { localizePath, locales, type Locale } from "@/lib/i18n";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
const ogLocaleMap: Record<Locale, string> = {
  es: "es_ES",
  en: "en_US",
};

export function buildUrl(pathname = "/") {
  return new URL(pathname, siteUrl).toString();
}

export function createMetadata({
  locale,
  title,
  description,
  path = "",
}: {
  locale: Locale;
  title: string;
  description: string;
  path?: string;
}): Metadata {
  const localizedPath = localizePath(locale, path);

  return {
    metadataBase: new URL(siteUrl),
    title,
    description,
    alternates: {
      canonical: buildUrl(localizedPath),
      languages: Object.fromEntries(
        locales.map((currentLocale) => [currentLocale, buildUrl(localizePath(currentLocale, path))]),
      ),
    },
    openGraph: {
      type: "website",
      title,
      description,
      url: buildUrl(localizedPath),
      siteName: siteSettings.name,
      locale: ogLocaleMap[locale],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export function getPersonStructuredData(locale: Locale) {
  const copy = siteCopy[locale];

  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteSettings.name,
    jobTitle: siteSettings.role,
    url: buildUrl(localizePath(locale)),
    email: `mailto:${siteSettings.email}`,
    sameAs: [siteSettings.linkedin, siteSettings.github],
    address: {
      "@type": "PostalAddress",
      addressLocality: siteSettings.location,
    },
    description: copy.metadata.defaultDescription,
    knowsAbout: skillCategories.flatMap((category) => category.skills),
  };
}

