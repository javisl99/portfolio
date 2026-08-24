"use client";

import { useState } from "react";
import { ArrowRight, Bug, FileSearch, ShieldCheck, Wrench } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Locale } from "@/lib/i18n";

interface ArchitectureFlowDiagramProps {
  locale: Locale;
  className?: string;
}

interface ArchNode {
  id: string;
  name: { es: string; en: string };
  category: { es: string; en: string };
  icon: typeof FileSearch;
  tech: string[];
  patterns: string[];
  description: { es: string; en: string };
  metrics: { es: string; en: string };
  accent: string;
}

const archNodes: ArchNode[] = [
  {
    id: "context",
    name: { es: "Entender el flujo y el impacto", en: "Understand the flow and impact" },
    category: { es: "Contexto", en: "Context" },
    icon: FileSearch,
    tech: ["Logs y trazas", "Reglas de negocio", "Datos afectados", "Criterios funcionales"],
    patterns: ["Context mapping", "Impact analysis", "Functional alignment"],
    description: {
      es: "Antes de tocar código, acoto el flujo, los datos afectados y el riesgo funcional para entender qué necesita realmente el sistema.",
      en: "Before touching code, I map the flow, affected data, and functional risk to understand what the system actually needs.",
    },
    metrics: { es: "Contexto acotado · Riesgo visible", en: "Bounded context · Visible risk" },
    accent: "border-sky-400/35 bg-sky-500/15 text-sky-300",
  },
  {
    id: "investigate",
    name: { es: "Analizar síntomas e hipótesis", en: "Analyze symptoms and hypotheses" },
    category: { es: "Investigación técnica", en: "Technical investigation" },
    icon: Bug,
    tech: ["Logs", "SQL / FlexibleSearch", "Debugger", "Comparativa estándar"],
    patterns: ["Root cause analysis", "Evidence-first debugging", "Hypothesis contrast"],
    description: {
      es: "Comparo síntomas, evidencias y comportamiento esperado antes de elegir una causa raíz o proponer un cambio.",
      en: "I compare symptoms, evidence, and expected behavior before choosing a root cause or proposing a change.",
    },
    metrics: { es: "Hipótesis contrastadas", en: "Hypotheses contrasted" },
    accent: "border-purple-400/35 bg-purple-500/15 text-purple-300",
  },
  {
    id: "decide",
    name: { es: "Elegir la solución más segura", en: "Choose the safest solution" },
    category: { es: "Decisión e implementación", en: "Decision and implementation" },
    icon: Wrench,
    tech: ["Java", "Spring", "SAP Commerce", "APIs REST"],
    patterns: ["Standard before customization", "Small safe changes", "Separation of concerns"],
    description: {
      es: "Implemento el cambio con el menor acoplamiento posible, respetando el estándar y dejando una solución que el equipo pueda mantener.",
      en: "I implement the change with as little coupling as possible, respecting the standard and leaving a maintainable solution.",
    },
    metrics: { es: "Cambio acotado · Decisión trazable", en: "Bounded change · Traceable decision" },
    accent: "border-amber-400/35 bg-amber-500/15 text-amber-300",
  },
  {
    id: "validate",
    name: { es: "Validar y entregar con confianza", en: "Validate and deliver with confidence" },
    category: { es: "Validación y entrega", en: "Validation and delivery" },
    icon: ShieldCheck,
    tech: ["Pruebas locales", "QA", "Documentación", "Seguimiento"],
    patterns: ["Regression checks", "QA handoff", "Production readiness"],
    description: {
      es: "Reviso pruebas locales, edge cases e impacto antes de pasar el cambio a QA o coordinar su entrega.",
      en: "I review local tests, edge cases, and impact before handing the change to QA or coordinating delivery.",
    },
    metrics: { es: "Cambio validado · Entrega trazable", en: "Validated change · Traceable delivery" },
    accent: "border-emerald-400/35 bg-emerald-500/15 text-emerald-300",
  },
];

export function ArchitectureFlowDiagram({ locale, className }: ArchitectureFlowDiagramProps) {
  const [selectedNodeId, setSelectedNodeId] = useState<string>("context");
  const selectedNode = archNodes.find((n) => n.id === selectedNodeId) ?? archNodes[0];

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-[#14192b]/90 to-[#0b0e18]/98 p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.1),0_24px_60px_-25px_rgba(0,0,0,0.9)] sm:p-8",
        className,
      )}
    >
      {/* Header */}
      <div className="mb-6 flex flex-col justify-between gap-2 sm:flex-row sm:items-center border-b border-white/8 pb-4">
        <div>
          <p className="font-mono text-[0.68rem] font-bold uppercase tracking-widest text-indigo-400">
            {locale === "es" ? "Flujo interactivo de trabajo backend" : "Interactive backend workflow"}
          </p>
          <h3 className="text-xl font-black tracking-tight text-white sm:text-2xl">
            {locale === "es" ? "Del contexto a una entrega segura" : "From context to a safe delivery"}
          </h3>
        </div>
        <div className="flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-indigo-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-indigo-500" />
          </span>
          <span className="font-mono text-xs text-slate-400">
            {locale === "es" ? "Pulsa en una etapa para inspeccionarla" : "Click a stage to inspect it"}
          </span>
        </div>
      </div>

      {/* Nodes Interactive Grid */}
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {archNodes.map((node, index) => {
          const Icon = node.icon;
          const isSelected = node.id === selectedNodeId;

          return (
            <button
              className={cn(
                "group relative flex cursor-pointer flex-col justify-between rounded-xl border p-4 text-left transition duration-200",
                isSelected
                  ? "border-indigo-400/60 bg-indigo-500/15 shadow-[inset_0_1px_0_rgba(255,255,255,0.15),0_0_30px_rgba(99,102,241,0.25)]"
                  : "border-white/8 bg-white/[0.02] hover:border-white/20 hover:bg-white/[0.04]",
              )}
              key={node.id}
              onClick={() => setSelectedNodeId(node.id)}
              type="button"
            >
              <div>
                <div className="flex items-center justify-between">
                  <div
                    className={cn(
                      "flex h-9 w-9 items-center justify-center rounded-lg border",
                      isSelected
                        ? node.accent
                        : "border-white/10 bg-white/[0.04] text-slate-300 group-hover:border-white/20 group-hover:text-white",
                    )}
                  >
                    <Icon className="h-4.5 w-4.5" />
                  </div>
                  <span className="font-mono text-[0.62rem] text-slate-500">0{index + 1}</span>
                </div>
                <p className="mt-3 font-mono text-[0.65rem] uppercase tracking-wider text-indigo-300">
                  {node.category[locale]}
                </p>
                <h4 className="mt-0.5 text-sm font-bold text-white group-hover:text-indigo-200">
                  {node.name[locale]}
                </h4>
              </div>

              <div className="mt-3 flex items-center gap-1.5 text-[0.68rem] font-semibold text-slate-400">
                <span>{locale === "es" ? "Inspeccionar" : "Inspect"}</span>
                <ArrowRight className="h-3 w-3" />
              </div>
            </button>
          );
        })}
      </div>

      {/* Selected Node Detailed Inspector */}
      <div className="mt-6 rounded-xl border border-white/8 bg-black/40 p-5 sm:p-6 space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/8 pb-3">
          <div>
          <span className="font-mono text-xs text-indigo-400">Workflow Inspector // {selectedNode.category[locale]}</span>
            <h4 className="text-lg font-bold text-white">{selectedNode.name[locale]}</h4>
          </div>
          <span className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 font-mono text-xs font-semibold text-emerald-300">
            {selectedNode.metrics[locale]}
          </span>
        </div>

        <p className="text-sm leading-relaxed text-slate-300">{selectedNode.description[locale]}</p>

        <div className="grid gap-4 sm:grid-cols-2 pt-1">
          <div>
            <p className="font-mono text-[0.68rem] font-bold uppercase tracking-wider text-slate-400 mb-2">
              {locale === "es" ? "Tecnologías Clave" : "Key Technologies"}
            </p>
            <div className="flex flex-wrap gap-1.5">
              {selectedNode.tech.map((t) => (
                <span
                  className="rounded-md border border-white/8 bg-white/[0.04] px-2.5 py-1 font-mono text-[0.68rem] text-slate-200"
                  key={t}
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div>
            <p className="font-mono text-[0.68rem] font-bold uppercase tracking-wider text-slate-400 mb-2">
              {locale === "es" ? "Patrones Aplicados" : "Applied Patterns"}
            </p>
            <div className="flex flex-wrap gap-1.5">
              {selectedNode.patterns.map((p) => (
                <span
                  className="rounded-md border border-indigo-400/20 bg-indigo-500/10 px-2.5 py-1 font-mono text-[0.68rem] text-indigo-200"
                  key={p}
                >
                  {p}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
