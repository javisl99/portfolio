import type { MetadataRoute } from "next";

import { buildUrl } from "@/lib/metadata";
import { locales } from "@/lib/i18n";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const pages = locales.map((locale) => ({
    url: buildUrl(`/${locale}`),
  }));

  return [
    { url: buildUrl("/") },
    ...pages,
  ];
}
