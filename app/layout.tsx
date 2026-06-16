import { SpeedInsights } from '@vercel/speed-insights/next';
import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";

// @ts-ignore: font packages may not have type declarations for side-effect imports
import "@fontsource-variable/manrope";
// @ts-ignore: font packages may not have type declarations for side-effect imports
import "@fontsource-variable/space-grotesk";

import "./globals.css";

import { siteCopy } from "@/data/site";
import { buildUrl } from "@/lib/metadata";

export const metadata: Metadata = {
  metadataBase: new URL(buildUrl()),
  title: {
    default: siteCopy.es.metadata.defaultTitle,
    template: `%s`,
  },
  description: siteCopy.es.metadata.defaultDescription,
  keywords: siteCopy.es.metadata.keywords,
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
    shortcut: "/favicon.ico",
    apple: "/favicon.svg",
  },
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
