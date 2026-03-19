import { ImageResponse } from "next/og";

import { siteSettings } from "@/data/site";

export const alt = "Javier Sánchez Lancha | SAP Commerce Cloud Developer / Consultant";
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
            "radial-gradient(circle at top left, rgba(19,218,236,0.14), transparent 34%), linear-gradient(180deg, #f8fafb, #f1f5f9)",
          padding: "56px",
          fontFamily: "sans-serif",
          color: "#0f172a",
        }}
      >
        <div
          style={{
            display: "flex",
            alignSelf: "flex-start",
            border: "1px solid rgba(19,218,236,0.28)",
            borderRadius: "999px",
            padding: "12px 18px",
            fontSize: 22,
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: "#0891b2",
          }}
        >
          SAP Commerce Cloud / Hybris / Java Back End
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "18px", maxWidth: "920px" }}>
          <div style={{ fontSize: 80, lineHeight: 1.02, fontWeight: 700 }}>{siteSettings.name}</div>
          <div style={{ fontSize: 36, lineHeight: 1.28, color: "#475569" }}>
            SAP Commerce Cloud Developer focused on production support, standard-aware customization, and back-end delivery in
            real e-commerce platforms.
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 24, color: "#64748b" }}>
          <span>Contact-first portfolio for recruiters and tech leads</span>
          <span>SAP Commerce / Java / Spring</span>
        </div>
      </div>
    ),
    {
      ...size,
    },
  );
}
