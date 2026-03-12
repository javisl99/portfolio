import { ImageResponse } from "next/og";

import { siteSettings } from "@/data/site";

export const alt = "Javier professional portfolio";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
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
            "radial-gradient(circle at top left, rgba(15,118,110,0.22), transparent 36%), linear-gradient(180deg, #f8fafc, #dcecf0)",
          padding: "56px",
          fontFamily: "sans-serif",
          color: "#0f172a",
        }}
      >
        <div
          style={{
            display: "flex",
            alignSelf: "flex-start",
            border: "1px solid rgba(148,163,184,0.45)",
            borderRadius: "999px",
            padding: "12px 18px",
            fontSize: 24,
            letterSpacing: "0.26em",
            textTransform: "uppercase",
          }}
        >
          Bilingual portfolio
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "18px", maxWidth: "840px" }}>
          <div style={{ fontSize: 82, lineHeight: 1.02, fontWeight: 700 }}>{siteSettings.name}</div>
          <div style={{ fontSize: 34, lineHeight: 1.3, color: "#334155" }}>
            Product-minded software engineer focused on clarity, impact, and dependable delivery.
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 24, color: "#475569" }}>
          <span>{siteSettings.location}</span>
          <span>Next.js / TypeScript / MDX</span>
        </div>
      </div>
    ),
    {
      ...size,
    },
  );
}
