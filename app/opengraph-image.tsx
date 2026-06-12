import { ImageResponse } from "next/og";

import { siteSettings } from "@/data/site";

export const alt = "Javier Sanchez Lancha | Backend Software Engineer";
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
            "radial-gradient(circle at top left, rgba(37,99,235,0.2), transparent 34%), radial-gradient(circle at 85% 10%, rgba(129,140,248,0.18), transparent 28%), linear-gradient(180deg, #030712, #0b1220)",
          padding: "56px",
          fontFamily: "sans-serif",
          color: "#eef4ff",
        }}
      >
        <div
          style={{
            display: "flex",
            alignSelf: "flex-start",
            border: "1px solid rgba(94,231,255,0.28)",
            borderRadius: "999px",
            padding: "12px 18px",
            fontSize: 22,
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: "#7dd3fc",
          }}
        >
          Backend Software Engineer / Java / Spring / Enterprise Platforms
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "18px", maxWidth: "920px" }}>
          <div style={{ fontSize: 80, lineHeight: 1.02, fontWeight: 700 }}>{siteSettings.name}</div>
          <div style={{ fontSize: 36, lineHeight: 1.28, color: "#cbd5e1" }}>
            Backend Software Engineer focused on scalable systems, enterprise platforms, cloud-oriented delivery, and
            AI-assisted workflows.
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 24, color: "#94a3b8" }}>
          <span>Contact-first portfolio for recruiters and hiring teams</span>
          <span>Java / Spring / SAP Commerce Cloud / AI-Assisted Engineering</span>
        </div>
      </div>
    ),
    {
      ...size,
    },
  );
}
