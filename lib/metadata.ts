import type { Metadata } from "next";

import { siteCopy, siteSettings } from "@/data/site";
import { defaultLocale, localizePath, locales, type Locale } from "@/lib/i18n";

const siteUrl = siteSettings.siteUrl;
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
  "REST APIs",
  "SQL",
  "FlexibleSearch",
  "Integration Objects",
  "Jobs",
  "Interceptors",
  "Validators",
  "Backoffice",
  "Root Cause Analysis",
  "Production Support",
  "Business Integrations",
];

export function buildUrl(pathname = "/") {
  const baseUrl = getMetadataBase();
  const normalizedPath = pathname === "/" ? "" : pathname.replace(/^\/+/, "");
  const resolved = new URL(normalizedPath, baseUrl.pathname.endsWith("/") ? baseUrl : new URL(`${baseUrl.pathname}/`, baseUrl));

  return resolved.toString();
}

export function getMetadataBase() {
  return new URL(siteUrl);
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

  return {
    metadataBase: getMetadataBase(),
    title: {
      absolute: title,
    },
    description,
    keywords,
    alternates: {
      canonical: buildUrl(localizedPath),
      languages: {
        ...Object.fromEntries(locales.map((currentLocale) => [currentLocale, buildUrl(localizePath(currentLocale, path))])),
        "x-default": buildUrl(localizePath(defaultLocale, path)),
      },
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
  };
}
