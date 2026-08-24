"use client";

import { useState } from "react";
import { Activity, CheckCircle2, Code2, Database, Play, Server, Terminal } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Locale } from "@/lib/i18n";
import { deliveryCompletion, deliveryInsights } from "@/data/delivery-insights";

interface BackendTelemetryWidgetProps {
  locale: Locale;
}

type TabType = "architecture" | "telemetry" | "logs";

const initialLogs = [
  { time: "DATA", level: "INFO", message: `${deliveryInsights.totalItems} work items included in this snapshot` },
  { time: "MIX", level: "METRIC", message: `${deliveryInsights.tasks} tasks · ${deliveryInsights.incidents} incidents · ${deliveryInsights.stories} stories` },
  { time: "FLOW", level: "INFO", message: `${deliveryInsights.finalizedItems} work items marked as finalized` },
  { time: "SCOPE", level: "EVENT", message: `${deliveryInsights.highPriority} work items with high or highest priority` },
];

export function BackendTelemetryWidget({ locale }: BackendTelemetryWidgetProps) {
  const [activeTab, setActiveTab] = useState<TabType>("architecture");
  const [logs, setLogs] = useState(initialLogs);

  const triggerTestRequest = () => {
    const timestamp = new Date().toLocaleTimeString("en-US", {
      hour12: false,
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    }) + ".042";

    setLogs((prev) => [...prev.slice(-7), { time: timestamp, level: "INFO", message: `Snapshot rechecked: ${deliveryInsights.totalItems} work items · ${deliveryCompletion}% finalized` }]);
  };

  return (
    <aside
      aria-label="Backend Profile & Activity Inspector"
      className="relative min-w-0 overflow-hidden rounded-[1.6rem] border border-white/10 bg-gradient-to-b from-[#14192b]/95 via-[#0f1322]/98 to-[#090c16] shadow-[inset_0_1px_0_rgba(255,255,255,0.12),0_30px_70px_-30px_rgba(0,0,0,0.95)]"
    >
      {/* Top Window Bar */}
      <div className="flex items-center justify-between border-b border-white/8 bg-white/[0.03] px-4 py-3 sm:px-5">
        <div className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-[#ef4444]/80 shadow-[0_0_8px_rgba(239,68,68,0.4)]" />
          <span className="h-3 w-3 rounded-full bg-[#eab308]/80 shadow-[0_0_8px_rgba(234,179,8,0.4)]" />
          <span className="h-3 w-3 rounded-full bg-[#22c55e]/80 shadow-[0_0_8px_rgba(34,197,94,0.4)]" />
          <span className="ml-2 font-mono text-[0.72rem] font-semibold text-slate-400">
            javisl99@core-backend:~
          </span>
        </div>

        <div className="flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
          </span>
          <span className="font-mono text-[0.68rem] font-bold uppercase tracking-wider text-emerald-400">
            {locale === "es" ? "Actividad" : "Activity"}
          </span>
        </div>
      </div>

      {/* Tabs Navigation */}
      <div aria-label={locale === "es" ? "Vistas del perfil" : "Profile views"} className="overflow-hidden border-b border-white/8 bg-white/[0.015] px-2 pt-2 sm:px-4" role="tablist">
        <div className="flex w-full gap-1">
          <button
            aria-controls="profile-panel"
            aria-selected={activeTab === "architecture"}
            id="profile-tab"
            className={cn(
              "flex min-w-0 flex-1 items-center justify-center gap-1.5 rounded-t-lg px-2 py-2 font-mono text-[0.68rem] font-semibold transition sm:gap-2 sm:px-3 sm:text-xs",
              activeTab === "architecture"
                ? "border-b-2 border-indigo-400 bg-white/[0.06] text-white"
                : "text-slate-400 hover:bg-white/[0.03] hover:text-slate-200",
            )}
            onClick={() => setActiveTab("architecture")}
            role="tab"
            type="button"
          >
            <Code2 className="h-3.5 w-3.5 text-indigo-400" />
                <span className="whitespace-nowrap">Profile.json</span>
          </button>

          <button
            aria-controls="telemetry-panel"
            aria-selected={activeTab === "telemetry"}
            id="telemetry-tab"
            className={cn(
              "flex min-w-0 flex-1 items-center justify-center gap-1.5 rounded-t-lg px-2 py-2 font-mono text-[0.68rem] font-semibold transition sm:gap-2 sm:px-3 sm:text-xs",
              activeTab === "telemetry"
                ? "border-b-2 border-indigo-400 bg-white/[0.06] text-white"
                : "text-slate-400 hover:bg-white/[0.03] hover:text-slate-200",
            )}
            onClick={() => setActiveTab("telemetry")}
            role="tab"
            type="button"
          >
            <Activity className="h-3.5 w-3.5 text-indigo-400" />
            <span className="whitespace-nowrap">Telemetry</span>
          </button>

          <button
            aria-controls="logs-panel"
            aria-selected={activeTab === "logs"}
            id="logs-tab"
            className={cn(
              "flex min-w-0 flex-1 items-center justify-center gap-1.5 rounded-t-lg px-2 py-2 font-mono text-[0.68rem] font-semibold transition sm:gap-2 sm:px-3 sm:text-xs",
              activeTab === "logs"
                ? "border-b-2 border-indigo-400 bg-white/[0.06] text-white"
                : "text-slate-400 hover:bg-white/[0.03] hover:text-slate-200",
            )}
            onClick={() => setActiveTab("logs")}
            role="tab"
            type="button"
          >
            <Terminal className="h-3.5 w-3.5 text-indigo-400" />
            <span className="whitespace-nowrap">Live Logs</span>
          </button>
        </div>
      </div>

      {/* Tab Content Panels */}
      <div
        className={cn(
          "min-w-0 overflow-x-hidden p-4 sm:p-5",
          activeTab === "architecture" ? "overflow-y-hidden" : "h-[18rem] overflow-y-auto sm:h-[20.5rem]",
        )}
      >
        {activeTab === "architecture" && (
          <div aria-labelledby="profile-tab" className="space-y-3 font-mono text-[0.76rem] leading-relaxed" id="profile-panel" role="tabpanel" tabIndex={0}>
            <div className="rounded-xl border border-white/6 bg-black/40 p-3.5 text-slate-300">
              <p className="text-slate-500">{"// Backend profile + delivery evidence"}</p>
              <p>
                <span className="text-indigo-400">&quot;engineer&quot;</span>: <span className="text-emerald-300">&quot;Javier Sánchez Lancha&quot;</span>,
              </p>
              <p>
                <span className="text-indigo-400">&quot;role&quot;</span>: <span className="text-emerald-300">&quot;Backend Software Engineer&quot;</span>,
              </p>
              <p>
                <span className="text-indigo-400">&quot;coreStack&quot;</span>: [
                <span className="text-sky-300">&quot;Java 17+&quot;</span>,{" "}
                <span className="text-sky-300">&quot;Spring Boot&quot;</span>,{" "}
                <span className="text-sky-300">&quot;SAP Commerce Cloud&quot;</span>,{" "}
                <span className="text-sky-300">&quot;REST APIs&quot;</span>
                ],
              </p>
              <p>
                <span className="text-indigo-400">&quot;architecture&quot;</span>: &#123;
              </p>
              <p className="pl-4">
                <span className="text-purple-300">&quot;pattern&quot;</span>: <span className="text-emerald-300">&quot;Hexagonal &amp; Domain-Driven (DDD)&quot;</span>,
              </p>
              <p className="pl-4">
                <span className="text-purple-300">&quot;integration&quot;</span>: <span className="text-emerald-300">&quot;OCC Extensions, Batch Jobs, Interceptors&quot;</span>,
              </p>
              <p className="pl-4">
                <span className="text-purple-300">&quot;database&quot;</span>: <span className="text-emerald-300">&quot;Oracle, SQL, FlexibleSearch, Redis&quot;</span>
              </p>
              <p>&#125;,</p>
              <p>
                <span className="text-indigo-400">&quot;aiAssistance&quot;</span>: <span className="text-amber-300">&quot;Tactical accelerator (human-validated)&quot;</span>,
              </p>
              <p>
                <span className="text-indigo-400">&quot;deliveryEvidence&quot;</span>: &#123;
              </p>
              <p className="pl-4">
                <span className="text-purple-300">&quot;workItems&quot;</span>: <span className="text-sky-300">{deliveryInsights.totalItems}</span>, <span className="text-purple-300">&quot;finalized&quot;</span>: <span className="text-sky-300">{deliveryInsights.finalizedItems}</span>
              </p>
              <p className="pl-4">
                <span className="text-purple-300">&quot;context&quot;</span>: <span className="text-emerald-300">&quot;Enterprise commerce platform&quot;</span>
              </p>
              <p>
                &#125;
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-2 pt-1">
              <span className="text-[0.7rem] text-slate-400">
                {locale === "es" ? "✓ Listo para entornos de producción críticos" : "✓ Production-ready for enterprise platforms"}
              </span>
                <span className="rounded-md border border-indigo-500/30 bg-indigo-500/10 px-2 py-0.5 text-[0.66rem] font-bold text-indigo-300">
                {deliveryInsights.sourceLabel}
              </span>
            </div>
          </div>
        )}

        {activeTab === "telemetry" && (
          <div aria-labelledby="telemetry-tab" className="space-y-3" id="telemetry-panel" role="tabpanel" tabIndex={0}>
            <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3">
              <div className="rounded-xl border border-white/6 bg-black/40 p-3">
                <div className="flex items-center gap-1.5 text-slate-400">
                  <Activity className="h-3.5 w-3.5 text-indigo-400" />
                  <span className="font-mono text-[0.68rem] uppercase">{locale === "es" ? "Finalizadas" : "Finalized"}</span>
                </div>
                <p className="mt-2 font-mono text-xl font-black text-white">{deliveryInsights.finalizedItems}</p>
                <p className="mt-0.5 text-[0.65rem] text-emerald-400">✓ {deliveryCompletion}% del snapshot</p>
              </div>

              <div className="rounded-xl border border-white/6 bg-black/40 p-3">
                <div className="flex items-center gap-1.5 text-slate-400">
                  <Server className="h-3.5 w-3.5 text-indigo-400" />
                  <span className="font-mono text-[0.68rem] uppercase">{locale === "es" ? "Tareas" : "Tasks"}</span>
                </div>
                <p className="mt-2 font-mono text-xl font-black text-white">{deliveryInsights.tasks}</p>
                <p className="mt-0.5 text-[0.65rem] text-slate-400">Activity snapshot</p>
              </div>

              <div className="col-span-2 rounded-xl border border-white/6 bg-black/40 p-3 sm:col-span-1">
                <div className="flex items-center gap-1.5 text-slate-400">
                  <Database className="h-3.5 w-3.5 text-indigo-400" />
                  <span className="font-mono text-[0.68rem] uppercase">{locale === "es" ? "Errores" : "Errors"}</span>
                </div>
                <p className="mt-2 font-mono text-xl font-black text-white">{deliveryInsights.incidents}</p>
                <p className="mt-0.5 text-[0.65rem] text-amber-300">Incidencias atendidas</p>
              </div>
            </div>

            <div className="rounded-xl border border-white/6 bg-black/40 p-3">
              <p className="mb-2 font-mono text-[0.68rem] font-bold uppercase tracking-wider text-slate-400">
                {locale === "es" ? "Capacidades Arquitectónicas" : "Architectural Capabilities"}
              </p>
              <div className="grid gap-2 text-xs text-slate-300">
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-2">
                    <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />
                    {locale === "es" ? "Resolución de incidencias en producción" : "Production incident triage & resolution"}
                  </span>
                  <span className="font-mono text-[0.68rem] text-indigo-300">{deliveryInsights.stories} historias</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-2">
                    <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />
                    {locale === "es" ? "Integraciones REST & Jobs asíncronos" : "REST integrations & async batch jobs"}
                  </span>
                  <span className="font-mono text-[0.68rem] text-indigo-300">{deliveryInsights.tasks} tareas</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-2">
                    <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />
                    {locale === "es" ? "Optimización de consultas SQL / FlexibleSearch" : "SQL / FlexibleSearch query optimization"}
                  </span>
                  <span className="font-mono text-[0.68rem] text-indigo-300">{deliveryInsights.highPriority} high+</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "logs" && (
          <div aria-labelledby="logs-tab" className="space-y-3 font-mono" id="logs-panel" role="tabpanel" tabIndex={0}>
            <div className="h-44 overflow-x-hidden overflow-y-auto rounded-xl border border-white/6 bg-black/60 p-3 text-[0.72rem] leading-relaxed text-slate-300">
              {logs.map((item, idx) => (
                <div className="grid min-w-0 grid-cols-[auto_auto_minmax(0,1fr)] items-start gap-2 py-0.5" key={idx}>
                  <span className="shrink-0 text-slate-500">{item.time}</span>
                  <span
                    className={cn(
                      "shrink-0 rounded px-1 text-[0.62rem] font-bold leading-tight",
                      item.level === "INFO" && "bg-sky-500/20 text-sky-300",
                      item.level === "METRIC" && "bg-emerald-500/20 text-emerald-300",
                      item.level === "EVENT" && "bg-purple-500/20 text-purple-300",
                    )}
                  >
                    {item.level}
                  </span>
                  <span className="min-w-0 break-words whitespace-normal text-slate-200">{item.message}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:justify-between">
              <span className="text-[0.68rem] text-slate-400">
                {locale === "es" ? "Event stream en tiempo real" : "Real-time event stream active"}
              </span>
              <button
                className="flex cursor-pointer items-center justify-center gap-1.5 rounded-lg border border-indigo-400/30 bg-indigo-500/15 px-2.5 py-1 text-[0.7rem] font-bold text-indigo-300 transition hover:bg-indigo-500/25 hover:text-white sm:shrink-0"
                onClick={triggerTestRequest}
                type="button"
              >
                <Play className="h-3 w-3" />
                <span>{locale === "es" ? "Revisar actividad" : "Refresh activity"}</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </aside>
  );
}
