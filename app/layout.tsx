import { SpeedInsights } from '@vercel/speed-insights/next';
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import type { ReactNode } from "react";
import Script from "next/script";

import "./globals.css";

import { siteCopy, siteSettings } from "@/data/site";
import { buildUrl } from "@/lib/metadata";
import { defaultTheme, themeScript } from "@/lib/theme";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

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
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f6f8f8" },
    { media: "(prefers-color-scheme: dark)", color: "#121212" },
  ],
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html className={inter.variable} data-theme={defaultTheme} lang="en" suppressHydrationWarning>
      <body>
        <Script id="theme-script" strategy="beforeInteractive">
          {themeScript}
        </Script>
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
