import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { Analytics } from "@vercel/analytics/next"

// @ts-ignore: font packages may not have type declarations for side-effect imports
import "@fontsource-variable/manrope";
// @ts-ignore: font packages may not have type declarations for side-effect imports
import "@fontsource-variable/space-grotesk";

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
    <html lang={defaultLocale}>
      <body>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
