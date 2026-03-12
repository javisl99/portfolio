import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";

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
};

export const viewport: Viewport = {
  themeColor: "#f3f6f8",
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
