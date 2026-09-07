import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";

import { manrope, spaceGrotesk } from "@/lib/fonts";

import "../globals.css";

import { SpeedInsights } from "@vercel/speed-insights/next";
import { getMetadataBase } from "@/lib/metadata";
import { defaultLocale } from "@/lib/i18n";

export const metadata: Metadata = {
  metadataBase: getMetadataBase(),
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
    shortcut: "/favicon.ico",
    apple: "/favicon.svg",
  },
};

export const viewport: Viewport = {
  themeColor: "#030712",
};

export default function RedirectRootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html className={`${manrope.variable} ${spaceGrotesk.variable}`} lang={defaultLocale}>
      <body>
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
