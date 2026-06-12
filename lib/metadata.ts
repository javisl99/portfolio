import type { Metadata } from "next";

import { siteCopy, siteSettings } from "@/data/site";
import { localizePath, locales, type Locale } from "@/lib/i18n";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
const defaultOgImage = "/opengraph-image";
const ogLocaleMap: Record<Locale, string> = {
  es: "es_ES",
  en: "en_US",
};
const commonExpertise = [
  "Backend Software Engineer",
  "Java",
  "Spring",
  "Spring Boot",
  "SAP Commerce Cloud",
  "Enterprise Platforms",
  "Cloud Solutions",
  "AI-Assisted Engineering",
  "AI-Assisted Development",
  "REST APIs",
  "SQL",
  "Docker",
  "Azure",
];

export function buildUrl(pathname = "/") {
  return new URL(pathname, siteUrl).toString();
}

export function createMetadata({
  locale,
  title,
  description,
  keywords = [],
  path = "",
}: {
  locale: Locale;
  title: string;
  description: string;
  keywords?: string[];
  path?: string;
}): Metadata {
  const localizedPath = localizePath(locale, path);
  const imageUrl = buildUrl(defaultOgImage);

  return {
    metadataBase: new URL(siteUrl),
    title: {
      absolute: title,
    },
    description,
    keywords,
    alternates: {
      canonical: buildUrl(localizedPath),
      languages: Object.fromEntries(locales.map((currentLocale) => [currentLocale, buildUrl(localizePath(currentLocale, path))])),
    },
    openGraph: {
      type: "website",
      title,
      description,
      url: buildUrl(localizedPath),
      siteName: siteSettings.name,
      locale: ogLocaleMap[locale],
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: `${siteSettings.name} portfolio`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
    },
  };
}

export function getPersonStructuredData(locale: Locale) {
  const copy = siteCopy[locale];

  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteSettings.name,
    jobTitle: siteSettings.schemaRole,
    url: buildUrl(localizePath(locale)),
    email: `mailto:${siteSettings.email}`,
    sameAs: [siteSettings.linkedin, siteSettings.github],
    address: {
      "@type": "PostalAddress",
      addressLocality: siteSettings.location[locale],
    },
    description: copy.metadata.defaultDescription,
    knowsAbout: [...copy.metadata.keywords, ...commonExpertise],
  };
}

export function getWebsiteStructuredData(locale: Locale) {
  const copy = siteCopy[locale];

  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteSettings.name,
    url: buildUrl(localizePath(locale)),
    inLanguage: locale,
    description: copy.metadata.defaultDescription,
    potentialAction: {
      "@type": "SearchAction",
      target: buildUrl(localizePath(locale, "/projects")),
      "query-input": "required name=project",
    },
  };
}
