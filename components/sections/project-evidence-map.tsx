import { Bug, Layers3, Network, ShieldCheck } from "lucide-react";

import { Container } from "@/components/ui/container";
import type { Locale } from "@/lib/i18n";

const evidenceItems = [
  {
    icon: Layers3,
    accent: "border-sky-400/25 bg-sky-500/10 text-sky-300",
    title: { es: "Sistemas vivos", en: "Live systems" },
    body: {
      es: "Evolutivos y soporte sobre plataformas donde cada cambio tiene impacto operativo.",
      en: "Feature work and support on platforms where every change has operational impact.",
    },
  },
  {
    icon: Network,
    accent: "border-purple-400/25 bg-purple-500/10 text-purple-300",
    title: { es: "Flujos de negocio", en: "Business flows" },
    body: {
      es: "Checkout, pricing, stock y lógica de producto conectada con necesidades reales.",
      en: "Checkout, pricing, stock, and product logic connected to real business needs.",
    },
  },
  {
    icon: Bug,
    accent: "border-amber-400/25 bg-amber-500/10 text-amber-300",
    title: { es: "Investigación técnica", en: "Technical investigation" },
    body: {
      es: "Síntomas, logs, SQL e hipótesis contrastadas para llegar a causas accionables.",
      en: "Symptoms, logs, SQL, and contrasted hypotheses leading to actionable causes.",
    },
  },
  {
    icon: ShieldCheck,
    accent: "border-emerald-400/25 bg-emerald-500/10 text-emerald-300",
    title: { es: "Entrega segura", en: "Safe delivery" },
    body: {
      es: "Pruebas locales, revisión del estándar y validación antes de pasar a QA.",
      en: "Local testing, standard review, and validation before handing work to QA.",
    },
  },
] as const;

export function ProjectEvidenceMap({ locale }: { locale: Locale }) {
  return (
    <section aria-labelledby="project-evidence-map-title" className="py-8 sm:py-12">
      <Container>
        <div className="mx-auto max-w-6xl rounded-[2rem] border border-white/8 bg-gradient-to-b from-[#14192b]/85 to-[#0b0e1a]/98 p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_24px_60px_-25px_rgba(0,0,0,0.9)] sm:p-8">
          <div className="mb-6 max-w-2xl">
            <p className="font-mono text-[0.68rem] font-bold uppercase tracking-[0.22em] text-indigo-300">
              {locale === "es" ? "Mapa de casos" : "Case map"}
            </p>
            <h2 id="project-evidence-map-title" className="mt-2 font-display text-2xl font-black tracking-tight text-white sm:text-3xl">
              {locale === "es" ? "Dónde se ve el trabajo técnico" : "Where the technical work is visible"}
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-300 sm:text-base">
              {locale === "es"
                ? "Cada caso combina una zona del sistema, una decisión backend y una forma concreta de proteger la entrega."
                : "Each case combines a system area, a backend decision, and a concrete way to protect delivery."}
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {evidenceItems.map((item, index) => {
              const Icon = item.icon;

              return (
                <article className="rounded-[1.35rem] border border-white/8 bg-white/[0.025] p-4 transition duration-300 hover:-translate-y-1 hover:border-white/20 motion-reduce:transform-none motion-reduce:transition-none" key={item.title.en}>
                  <div className="flex items-start justify-between gap-3">
                    <div className={`flex h-10 w-10 items-center justify-center rounded-xl border ${item.accent}`}>
                      <Icon className="h-4.5 w-4.5" />
                    </div>
                    <span className="rounded-full border border-indigo-400/20 bg-indigo-500/10 px-2 py-0.5 font-mono text-[0.62rem] font-bold text-indigo-300">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="mt-4 text-base font-black tracking-tight text-white">{item.title[locale]}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-300">{item.body[locale]}</p>
                </article>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
