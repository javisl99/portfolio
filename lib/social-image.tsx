import { ImageResponse } from "next/og";

import { siteSettings } from "@/data/site";

export const socialImageAlt = "Javier Sánchez Lancha | Backend Software Engineer";
export const socialImageSize = {
  width: 1200,
  height: 630,
};
export const socialImageContentType = "image/png";

export function renderSocialImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          height: "100%",
          width: "100%",
          flexDirection: "column",
          justifyContent: "space-between",
          background:
            "radial-gradient(circle at 12% 8%, rgba(96,165,250,0.28), transparent 24%), radial-gradient(circle at 84% 12%, rgba(37,99,235,0.26), transparent 26%), linear-gradient(180deg, #030712, #08111f 62%, #0b1220)",
          padding: "56px",
          fontFamily: "sans-serif",
          color: "#eef4ff",
        }}
      >
        <div
          style={{
            position: "absolute",
            right: 56,
            top: 56,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 88,
            height: 88,
            borderRadius: 20,
            background: "#0b1220",
            boxShadow: "0 24px 48px -30px rgba(37,99,235,0.5)",
          }}
        >
          <svg fill="none" viewBox="0 0 64 64" width="56" height="56" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="og-mark" x1="0" y1="0" x2="64" y2="64" gradientUnits="userSpaceOnUse">
                <stop offset="0" stopColor="#60a5fa" />
                <stop offset="1" stopColor="#2563eb" />
              </linearGradient>
            </defs>
            <rect width="64" height="64" rx="14" fill="#0b1220" />
            <rect x="18" y="14" width="28" height="6" rx="1" fill="url(#og-mark)" />
            <rect x="34" y="14" width="6" height="28" rx="1" fill="url(#og-mark)" />
            <path d="M40 36 L40 42 Q40 50 32 50 L24 50 Q18 50 18 44 L18 40 L24 40 L24 42 Q24 44 26 44 L32 44 Q34 44 34 42 L34 36 Z" fill="url(#og-mark)" />
            <rect x="44" y="44" width="6" height="6" fill="#60a5fa" />
          </svg>
        </div>

        <div
          style={{
            display: "flex",
            alignSelf: "flex-start",
            border: "1px solid rgba(96,165,250,0.26)",
            borderRadius: "999px",
            padding: "12px 18px",
            fontSize: 22,
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: "#9fbeff",
            background: "rgba(11,18,32,0.76)",
          }}
        >
          Backend Software Engineer / Java / Spring / SAP Commerce Cloud
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "18px", maxWidth: "920px" }}>
          <div style={{ fontSize: 80, lineHeight: 1.02, fontWeight: 700 }}>{siteSettings.name}</div>
          <div style={{ fontSize: 36, lineHeight: 1.28, color: "#cbd5e1" }}>
            Backend Software Engineer focused on Java, Spring, REST APIs, SQL, integrations, and production-facing
            systems, with AI used as support rather than the main story.
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 24, color: "#94a3b8" }}>
          <span>Backend portfolio for recruiters and hiring teams</span>
          <span>Java / Spring / SAP Commerce Cloud / REST APIs</span>
        </div>
      </div>
    ),
    {
      ...socialImageSize,
    },
  );
}
