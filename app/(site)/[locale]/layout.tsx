import type { Metadata, Viewport } from "next";
import { notFound } from "next/navigation";
import type { ReactNode } from "react";

// @ts-ignore: font packages may not have type declarations for side-effect imports
import "@fontsource-variable/manrope";
// @ts-ignore: font packages may not have type declarations for side-effect imports
import "@fontsource-variable/space-grotesk";

import "../../globals.css";

import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { siteCopy } from "@/data/site";
import { createMetadata } from "@/lib/metadata";
import { isLocale, locales, type Locale } from "@/lib/i18n";

export const viewport: Viewport = {
  themeColor: "#030712",
};

const shouldRenderSpeedInsights = process.env.VERCEL === "1";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

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
  const copy = siteCopy[locale];

  return createMetadata({
    locale,
    title: copy.metadata.defaultTitle,
    description: copy.metadata.defaultDescription,
    keywords: copy.metadata.keywords,
  });
}

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale: rawLocale } = await params;

  if (!isLocale(rawLocale)) {
    notFound();
  }

  const locale = rawLocale as Locale;
  return (
    <html lang={locale}>
      <body>
        <Header locale={locale} />
        <div className="content-shell pt-[4.25rem] sm:pt-20">
          <main className="pb-24 md:pb-0">{children}</main>
          <Footer locale={locale} />
        </div>
        <Analytics />
        {shouldRenderSpeedInsights ? <SpeedInsights /> : null}
      </body>
    </html>
  );
}
