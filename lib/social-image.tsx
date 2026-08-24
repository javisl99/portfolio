import { ImageResponse } from "next/og";
import type { ReactNode } from "react";

import { siteSettings } from "@/data/site";

export const socialImageAlt = "Javier Sánchez Lancha | Backend Software Engineer";
export const socialImageSize = {
  width: 1200,
  height: 630,
};
export const socialImageContentType = "image/png";

function BrandMark() {
  return (
    <svg fill="none" height="64" viewBox="0 0 40 40" width="64" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="social-brand-grad" gradientUnits="userSpaceOnUse" x1="0" x2="40" y1="0" y2="40">
          <stop offset="0%" stopColor="#818cf8" />
          <stop offset="50%" stopColor="#6366f1" />
          <stop offset="100%" stopColor="#38bdf8" />
        </linearGradient>
        <linearGradient id="social-badge-bg" gradientUnits="userSpaceOnUse" x1="0" x2="0" y1="0" y2="40">
          <stop offset="0%" stopColor="#161c30" />
          <stop offset="100%" stopColor="#0b0e18" />
        </linearGradient>
      </defs>
      <rect fill="url(#social-badge-bg)" height="40" rx="10" width="40" />
      <rect height="39" rx="9.5" stroke="rgba(255, 255, 255, 0.12)" strokeWidth="1" width="39" x="0.5" y="0.5" />
      <rect height="39" rx="9.5" stroke="rgba(99, 102, 241, 0.28)" strokeWidth="1" width="39" x="0.5" y="0.5" />
      <rect fill="url(#social-brand-grad)" height="3.5" rx="1.75" width="18" x="11" y="9.5" />
      <rect fill="url(#social-brand-grad)" height="14" rx="1.75" width="3.5" x="21" y="9.5" />
      <path
        d="M24.5 21.5V24C24.5 27.8 21.2 30.5 17 30.5C13.2 30.5 11 28.2 11 25.2H14.5C14.5 26.6 15.5 27.2 17 27.2C19.2 27.2 21 25.8 21 24V21.5H24.5Z"
        fill="url(#social-brand-grad)"
      />
      <circle cx="28" cy="28" fill="#38bdf8" r="2.25" />
    </svg>
  );
}

function DeliveryIcon() {
  return (
    <svg fill="none" height="28" viewBox="0 0 28 28" width="28" xmlns="http://www.w3.org/2000/svg">
      <path d="M14 2.5L24 8.25V19.75L14 25.5L4 19.75V8.25L14 2.5Z" stroke="#3b82f6" strokeWidth="1.8" />
      <path d="M4 8.25L14 14L24 8.25M14 14V25.5" stroke="#6366f1" strokeWidth="1.8" />
    </svg>
  );
}

function CodeLine({ children, number }: { children: ReactNode; number: string }) {
  return (
    <div style={{ display: "flex", alignItems: "center", whiteSpace: "nowrap" }}>
      <span style={{ width: 28, marginRight: 20, color: "#64748b", textAlign: "right" }}>{number}</span>
      <span>{children}</span>
    </div>
  );
}

function Token({ children, color }: { children: ReactNode; color: string }) {
  return <span style={{ color }}>{children}</span>;
}

export function renderSocialImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          position: "relative",
          width: "100%",
          height: "100%",
          backgroundColor: "#08090d",
          backgroundImage:
            "radial-gradient(ellipse 70% 60% at 50% -20%, rgba(99,102,241,0.17), transparent 70%), linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px)",
          backgroundSize: "auto, 48px 48px, 48px 48px",
          color: "#f3f7ff",
          fontFamily: "monospace",
        }}
      >
        <div
          style={{
            position: "absolute",
            left: 52,
            top: 42,
            display: "flex",
            width: 1096,
            height: 546,
            flexDirection: "column",
            overflow: "hidden",
            border: "1px solid rgba(255,255,255,0.14)",
            borderRadius: 28,
            background: "linear-gradient(180deg, rgba(21,26,46,0.96) 0%, rgba(9,12,22,0.99) 100%)",
            boxShadow: "inset 0 1px 0 rgba(255,255,255,0.12), 0 30px 70px -30px rgba(0,0,0,0.95)",
          }}
        >
          <div
            style={{
              display: "flex",
              height: 68,
              flexShrink: 0,
              alignItems: "center",
              justifyContent: "space-between",
              borderBottom: "1px solid rgba(255,255,255,0.08)",
              background: "rgba(255,255,255,0.03)",
              padding: "0 28px",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <span style={{ width: 14, height: 14, borderRadius: 999, backgroundColor: "rgba(239,68,68,0.9)" }} />
              <span style={{ width: 14, height: 14, borderRadius: 999, backgroundColor: "rgba(234,179,8,0.9)" }} />
              <span style={{ width: 14, height: 14, borderRadius: 999, backgroundColor: "rgba(34,197,94,0.9)" }} />
              <span style={{ marginLeft: 14, color: "#94a3b8", fontSize: 17, fontWeight: 600 }}>javisl99@core-backend:~</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, color: "#4ade80", fontSize: 15, fontWeight: 700, letterSpacing: "0.08em" }}>
              <span style={{ width: 12, height: 12, borderRadius: 999, backgroundColor: "#22c55e" }} />
              ACTIVIDAD
            </div>
          </div>

          <div style={{ display: "flex", height: 478 }}>
            <aside
              style={{
                display: "flex",
                width: 124,
                height: "100%",
                flexShrink: 0,
                alignItems: "flex-start",
                justifyContent: "center",
                borderRight: "1px solid rgba(255,255,255,0.08)",
                background: "rgba(0,0,0,0.12)",
                paddingTop: 24,
              }}
            >
              <BrandMark />
            </aside>

            <div style={{ display: "flex", width: 972, height: "100%", flexDirection: "column" }}>
              <div style={{ display: "flex", height: 60, flexShrink: 0, borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
                <div
                  style={{
                    display: "flex",
                    width: 260,
                    alignItems: "center",
                    justifyContent: "center",
                    borderBottom: "4px solid #818cf8",
                    background: "rgba(255,255,255,0.06)",
                    color: "#a78bfa",
                    fontSize: 17,
                    fontWeight: 700,
                  }}
                >
                  Profile.json
                </div>
                <div style={{ display: "flex", width: 220, alignItems: "center", justifyContent: "center", color: "#94a3b8", fontSize: 17 }}>
                  Telemetry
                </div>
                <div style={{ display: "flex", width: 220, alignItems: "center", justifyContent: "center", color: "#94a3b8", fontSize: 17 }}>
                  Live Logs
                </div>
              </div>

              <div style={{ display: "flex", height: 418, flexDirection: "column" }}>
                <div
                  style={{
                    display: "flex",
                    height: 316,
                    flexDirection: "column",
                    justifyContent: "space-between",
                    margin: "22px 24px 0",
                    border: "1px solid rgba(255,255,255,0.06)",
                    borderRadius: 12,
                    background: "rgba(0,0,0,0.36)",
                    padding: "18px 20px",
                    fontSize: 15,
                  }}
                >
                  <CodeLine number="1"><Token color="#64748b">{"// Backend profile + delivery evidence"}</Token></CodeLine>
                  <CodeLine number="2"><Token color="#f3f7ff">&#123;</Token></CodeLine>
                  <CodeLine number="3">
                    <Token color="#a78bfa">&quot;engineer&quot;</Token>: <Token color="#38bdf8">&quot;{siteSettings.name}&quot;</Token>,
                  </CodeLine>
                  <CodeLine number="4">
                    <Token color="#a78bfa">&quot;role&quot;</Token>: <Token color="#38bdf8">&quot;{siteSettings.schemaRole}&quot;</Token>,
                  </CodeLine>
                  <CodeLine number="5">
                    <Token color="#a78bfa">&quot;coreStack&quot;</Token>: [<Token color="#fbbf24">&quot;Java 17+&quot;, &quot;Spring Boot&quot;, &quot;SAP Commerce Cloud&quot;, &quot;REST APIs&quot;</Token>],
                  </CodeLine>
                  <CodeLine number="6">
                    <Token color="#a78bfa">&quot;architecture&quot;</Token>: <Token color="#fbbf24">&quot;Hexagonal &amp; Domain-Driven (DDD)&quot;</Token>,
                  </CodeLine>
                  <CodeLine number="7">
                    <Token color="#a78bfa">&quot;integration&quot;</Token>: <Token color="#fbbf24">&quot;OCC Extensions, Batch Jobs, Interceptors&quot;</Token>,
                  </CodeLine>
                  <CodeLine number="8">
                    <span style={{ display: "flex", alignItems: "center", gap: 8, color: "#4ade80" }}>
                      <svg fill="none" height="16" viewBox="0 0 16 16" width="16" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3 8.5L6.2 11.5L13 4.5" stroke="#4ade80" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
                      </svg>
                      <span>&quot;Listo para entornos de producción críticos&quot;</span>
                    </span>
                  </CodeLine>
                  <CodeLine number="9"><Token color="#f3f7ff">&#125;</Token></CodeLine>
                </div>

                <div
                  style={{
                    display: "flex",
                    height: 64,
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginTop: 16,
                    borderTop: "1px solid rgba(255,255,255,0.08)",
                    padding: "0 24px",
                    color: "#3b82f6",
                    fontSize: 17,
                    fontWeight: 700,
                    letterSpacing: "0.08em",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                    <DeliveryIcon />
                    <span>DELIVERY EVIDENCE</span>
                  </div>
                  <span style={{ color: "#818cf8", fontSize: 34, fontWeight: 400 }}>›</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
    {
      ...socialImageSize,
    },
  );
}
