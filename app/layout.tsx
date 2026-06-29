import { SpeedInsights } from '@vercel/speed-insights/next';
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import type { ReactNode } from "react";

import "./globals.css";

import { siteCopy, siteSettings } from "@/data/site";
import { buildUrl } from "@/lib/metadata";

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
  themeColor: "#f6f8f8",
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html className={inter.variable} lang="en">
      <body>
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
