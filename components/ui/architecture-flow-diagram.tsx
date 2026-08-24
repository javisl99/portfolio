"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle2, Cpu, Database, Globe, Layers, Radio, ShieldCheck, Zap } from "lucide-react";
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
  icon: typeof Globe;
  tech: string[];
  patterns: string[];
  description: { es: string; en: string };
  metrics: { es: string; en: string };
}

const archNodes: ArchNode[] = [
  {
    id: "gateway",
    name: { es: "OCC API Gateway & Ingress", en: "OCC API Gateway & Ingress" },
    category: { es: "Capa de Entrada", en: "Ingress Layer" },
    icon: Globe,
    tech: ["Spring Security", "OAuth2 / JWT", "Rate Limiting", "OCC REST"],
    patterns: ["API Gateway Pattern", "Token Validation", "Reverse Proxy"],
    description: {
      es: "Enruta el tráfico entrante de clientes web/móviles, valida tokens de autorización y aplica políticas de rate limiting.",
      en: "Routes inbound traffic from web/mobile clients, verifies auth tokens, and enforces rate limiting policies.",
    },
    metrics: { es: "Latencia ~12ms · 99.99% Uptime", en: "~12ms Latency · 99.99% Uptime" },
  },
  {
    id: "core-domain",
    name: { es: "Lógica de Dominio & Interceptors", en: "Domain Core & Interceptors" },
    category: { es: "Lógica de Negocio", en: "Business Logic" },
    icon: Layers,
    tech: ["Java 17+", "Spring Boot", "SAP Commerce Extensions", "Custom Validators"],
    patterns: ["Domain-Driven Design (DDD)", "Interceptor Pattern", "Hexagonal Architecture"],
    description: {
      es: "Ejecuta las reglas de negocio críticas: cálculo de precios, motor de checkout, validaciones de stock y enriquecimiento de pedidos.",
      en: "Executes mission-critical business rules: pricing engines, checkout flows, inventory validation, and order enrichment.",
    },
    metrics: { es: "Zero-Downtime · SLA óptimo", en: "Zero-Downtime · Optimal SLA" },
  },
  {
    id: "persistence",
    name: { es: "Capa de Datos & FlexibleSearch", en: "Data Layer & FlexibleSearch" },
    category: { es: "Persistencia", en: "Persistence" },
    icon: Database,
    tech: ["Oracle DB", "FlexibleSearch", "Redis L2 Cache", "Solr Indexer"],
    patterns: ["CQRS", "L2 Distributed Caching", "Optimistic Locking"],
    description: {
      es: "Gestión de persistencia relacional optimizada con consultas SQL indexadas, caché de segundo nivel y sincronización de catálogos.",
      en: "Optimized relational persistence with indexed SQL queries, second-level caching, and catalog synchronization.",
    },
    metrics: { es: "99.4% Cache Hit · Consultas sub-5ms", en: "99.4% Cache Hit · Sub-5ms Queries" },
  },
  {
    id: "async-jobs",
    name: { es: "Event Streams & Batch Jobs", en: "Event Streams & Batch Jobs" },
    category: { es: "Integraciones Asíncronas", en: "Async Integrations" },
    icon: Zap,
    tech: ["CronJobs", "Spring Events", "Kafka / Webhooks", "ERP Connectors"],
    patterns: ["Event-Driven Architecture", "Publish-Subscribe", "Idempotent Consumers"],
    description: {
      es: "Procesa sincronizaciones masivas de productos, exportación de pedidos hacia ERPs y procesamiento asíncrono desacoplado.",
      en: "Handles bulk product syncs, outbound ERP order exports, and decoupled event processing.",
    },
    metrics: { es: "Procesamiento en segundo plano tolerante a fallos", en: "Fault-tolerant background processing" },
  },
];

export function ArchitectureFlowDiagram({ locale, className }: ArchitectureFlowDiagramProps) {
  const [selectedNodeId, setSelectedNodeId] = useState<string>("core-domain");
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
            {locale === "es" ? "Diagrama Interactivo de Arquitectura" : "Interactive Architecture Blueprint"}
          </p>
          <h3 className="text-xl font-black tracking-tight text-white sm:text-2xl">
            {locale === "es" ? "Pipeline Backend Distribuido" : "Distributed Backend Pipeline"}
          </h3>
        </div>
        <div className="flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-indigo-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-indigo-500" />
          </span>
          <span className="font-mono text-xs text-slate-400">
            {locale === "es" ? "Pulsa en un nodo para inspeccionar" : "Click node to inspect"}
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
                        ? "border-indigo-400/40 bg-indigo-500/30 text-white"
                        : "border-white/10 bg-white/[0.04] text-slate-300 group-hover:text-white",
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
            <span className="font-mono text-xs text-indigo-400">Node Inspector // {selectedNode.category[locale]}</span>
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
