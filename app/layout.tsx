import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import Script from "next/script";

import "./globals.css";

import { siteCopy, siteSettings } from "@/data/site";
import { buildUrl } from "@/lib/metadata";
import { themeScript } from "@/lib/theme";

export const metadata: Metadata = {
  metadataBase: new URL(buildUrl()),
  title: {
    default: siteCopy.es.metadata.defaultTitle,
    template: `%s | ${siteSettings.name}`,
  },
  description: siteCopy.es.metadata.defaultDescription,
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f3f6f8" },
    { media: "(prefers-color-scheme: dark)", color: "#08111f" },
  ],
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Script id="theme-script" strategy="beforeInteractive">
          {themeScript}
        </Script>
        {children}
      </body>
    </html>
  );
}
