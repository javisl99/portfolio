import type { Metadata } from "next";

import { siteCopy, siteSettings } from "@/data/site";
import { defaultLocale, localizePath, locales, type Locale } from "@/lib/i18n";

const siteUrl = siteSettings.siteUrl;
const ogLocaleMap: Record<Locale, string> = {
  es: "es_ES",
  en: "en_US",
};
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
  const alternateLocales = locales.filter((currentLocale) => currentLocale !== locale);

  return {
    metadataBase: getMetadataBase(),
    title: {
      absolute: title,
    },
    description,
    keywords,
    authors: [{ name: siteSettings.name, url: buildUrl(localizePath(defaultLocale)) }],
    creator: siteSettings.name,
    publisher: siteSettings.name,
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
      alternateLocale: alternateLocales.map((currentLocale) => ogLocaleMap[currentLocale]),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

function getPersonEntity(locale: Locale) {
  return {
    "@type": "Person",
    "@id": `${buildUrl("/")}#person`,
    name: siteSettings.name,
    alternateName: ["Javier Sanchez Lancha"],
    jobTitle: siteSettings.schemaRole,
    url: buildUrl(localizePath(defaultLocale)),
    email: `mailto:${siteSettings.email}`,
    sameAs: [siteSettings.linkedin, siteSettings.github],
    address: {
      "@type": "PostalAddress",
      addressLocality: locale === "es" ? "Sevilla" : "Seville",
      addressCountry: "ES",
    },
    description: siteCopy[locale].metadata.defaultDescription,
    knowsAbout: [
      "Java",
      "Spring",
      "REST APIs",
      "SQL",
      "SAP Commerce Cloud",
      "Backend Engineering",
      "Integrations",
      "Production Support",
    ],
  };
}

export function getPersonStructuredData(locale: Locale) {
  return {
    "@context": "https://schema.org",
    ...getPersonEntity(locale),
  };
}

export function getProfilePageStructuredData(locale: Locale) {
  const profilePath = localizePath(locale, "/about");

  return {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "@id": `${buildUrl(profilePath)}#profile`,
    url: buildUrl(profilePath),
    name: siteCopy[locale].metadata.pages.about.title,
    isPartOf: {
      "@id": `${buildUrl("/")}#website`,
    },
    mainEntity: getPersonEntity(locale),
  };
}

export function getWebsiteStructuredData(locale: Locale) {
  const copy = siteCopy[locale];

  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${buildUrl("/")}#website`,
    name: siteSettings.name,
    url: buildUrl("/"),
    inLanguage: locale,
    description: copy.metadata.defaultDescription,
    publisher: {
      "@id": `${buildUrl("/")}#person`,
    },
  };
}
