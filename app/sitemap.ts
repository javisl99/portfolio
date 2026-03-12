import type { MetadataRoute } from "next";

import { getAllProjectPaths } from "@/lib/projects";
import { buildUrl } from "@/lib/metadata";
import { locales } from "@/lib/i18n";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const pages = locales.flatMap((locale) => [
    "",
    "/experience",
    "/projects",
    "/about",
    "/contact",
  ].map((path) => ({
    url: buildUrl(`/${locale}${path}`),
  })));

  const projectPages = (await getAllProjectPaths()).map(({ locale, slug }) => ({
    url: buildUrl(`/${locale}/projects/${slug}`),
  }));

  return [
    { url: buildUrl("/") },
    ...pages,
    ...projectPages,
  ];
}

