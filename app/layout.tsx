import { SpeedInsights } from '@vercel/speed-insights/next';
import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";

import "@fontsource-variable/manrope";
import "@fontsource-variable/space-grotesk";

import "./globals.css";

import { siteCopy, siteSettings } from "@/data/site";
import { buildUrl } from "@/lib/metadata";

export const metadata: Metadata = {
  metadataBase: new URL(buildUrl()),
  title: {
    default: siteCopy.es.metadata.defaultTitle,
    template: `%s | ${siteSettings.name}`,
  },
  description: siteCopy.es.metadata.defaultDescription,
  keywords: siteCopy.es.metadata.keywords,
};

export const viewport: Viewport = {
  themeColor: "#030712",
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body>
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
