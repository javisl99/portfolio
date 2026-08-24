"use client";

import { useEffect, useRef, useState } from "react";
import { CornerDownLeft, Trash2 } from "lucide-react";
import { siteSettings } from "@/data/site";
import { getCvDownloadName, getCvFilePath } from "@/lib/cv";
import { cn } from "@/lib/utils";
import type { Locale } from "@/lib/i18n";

interface InteractiveTerminalConsoleProps {
  locale: Locale;
  className?: string;
}

interface CommandOutput {
  id: string;
  command: string;
  response: React.ReactNode;
  time: string;
}

function buildWelcome(locale: Locale): CommandOutput {
  return {
    id: "init-1",
    command: "status --system",
    time: "—",
    response: (
      <div className="space-y-1">
        <p className="font-bold text-emerald-400">
          ● {locale === "es" ? "SISTEMA OPERATIVO Y DISPONIBLE" : "SYSTEM OPERATIONAL & AVAILABLE"}
        </p>
        <p className="text-slate-400">
          {locale === "es"
            ? 'Escribe "help" o pulsa en los chips de abajo para empezar.'
            : 'Type "help" or tap the chips below to get started.'}
        </p>
      </div>
    ),
  };
}

export function InteractiveTerminalConsole({ locale, className }: InteractiveTerminalConsoleProps) {
  const [inputVal, setInputVal] = useState("");
  const [history, setHistory] = useState<CommandOutput[]>([buildWelcome(locale)]);

  const inputRef = useRef<HTMLInputElement | null>(null);
  const outputRef = useRef<HTMLDivElement | null>(null); // scroll ONLY the output box

  const cvHref = getCvFilePath(locale);
  const cvDownloadName = getCvDownloadName(locale);

  // Scroll output box to bottom on every new entry – never the page
  useEffect(() => {
    const el = outputRef.current;
    if (!el) return;
    el.scrollTop = el.scrollHeight;
  }, [history]);

  const executeCommand = (cmdStr: string) => {
    const trimmed = cmdStr.trim().toLowerCase();
    if (!trimmed) return;

    const time = new Date().toLocaleTimeString("en-US", {
      hour12: false,
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });

    let res: React.ReactNode;

    switch (trimmed) {
      case "help":
        res = (
          <div className="space-y-2">
            <p className="font-bold text-indigo-300">
              {locale === "es" ? "Comandos disponibles:" : "Available commands:"}
            </p>
            <div className="grid gap-1.5 sm:grid-cols-2">
              {[
                ["stack", locale === "es" ? "Stack técnico y especialidades" : "Technical stack & specialties"],
                ["email", locale === "es" ? "Copiar email al portapapeles" : "Copy email to clipboard"],
                ["cv", locale === "es" ? "Descargar currículum PDF" : "Download resume PDF"],
                ["status", locale === "es" ? "Disponibilidad actual" : "Current availability"],
                ["experience", locale === "es" ? "Resumen de trayectoria" : "Career snapshot"],
                ["clear", locale === "es" ? "Limpiar pantalla" : "Clear terminal"],
              ].map(([cmd, desc]) => (
                <div key={cmd}>
                  <span className="font-bold text-sky-300">{cmd}</span>
                  <span className="text-slate-400"> — {desc}</span>
                </div>
              ))}
            </div>
          </div>
        );
        break;

      case "stack":
        res = (
          <div className="space-y-2">
            <p className="font-bold text-indigo-300">
              {locale === "es" ? "⚡ Stack Backend:" : "⚡ Backend Stack:"}
            </p>
            <div className="grid gap-1.5 text-slate-300">
              {[
                ["Core & Frameworks", "Java 17+, Spring Boot, Spring Data, Spring Security, OCC REST APIs"],
                ["E-Commerce", "SAP Commerce Cloud (Hybris), Solr, FlexibleSearch, Interceptors"],
                ["Data & Storage", "Oracle DB, PostgreSQL, SQL optimizado, Redis Caching"],
                ["Architecture", "Clean Architecture, DDD, Hexagonal, Microservices, Event-Driven"],
              ].map(([label, val]) => (
                <div key={label}>
                  <span className="font-bold text-purple-300">[{label}]:</span> {val}
                </div>
              ))}
            </div>
          </div>
        );
        break;

      case "email":
      case "contact":
        try { navigator.clipboard.writeText(siteSettings.email); } catch { /* noop */ }
        res = (
          <div className="space-y-1.5 text-slate-300">
            <p className="font-bold text-emerald-400">✓ {siteSettings.email}</p>
            <p className="text-slate-400">
              {locale === "es" ? "Email copiado al portapapeles." : "Email copied to clipboard."}
            </p>
            <a
              className="inline-flex items-center gap-1.5 text-indigo-300 underline hover:text-white"
              href={`mailto:${siteSettings.email}`}
            >
              ➔ {locale === "es" ? "Abrir cliente de correo" : "Open email client"}
            </a>
          </div>
        );
        break;

      case "cv":
      case "resume":
        res = (
          <div className="space-y-1.5 text-slate-300">
            <p className="font-bold text-emerald-400">
              ✓ {locale === "es" ? "Descarga preparada:" : "Download ready:"}
            </p>
            <a
              className="inline-flex items-center gap-1.5 rounded-lg border border-indigo-400/30 bg-indigo-500/15 px-3 py-1.5 font-bold text-indigo-200 transition hover:bg-indigo-500/25 hover:text-white"
              download={cvDownloadName}
              href={cvHref}
              rel="noreferrer"
              target="_blank"
            >
              📥 {locale === "es" ? "Descargar PDF" : "Download PDF"} ({cvDownloadName})
            </a>
          </div>
        );
        break;

      case "status":
        res = (
          <div className="space-y-1 text-slate-300">
            <p className="font-bold text-emerald-400">● {locale === "es" ? "DISPONIBLE" : "AVAILABLE"}</p>
            <p>
              {locale === "es"
                ? "Abierto a oportunidades en Backend Engineering, Arquitectura e Integraciones Cloud."
                : "Open to Backend Engineering, System Architecture & Cloud Integration roles."}
            </p>
            <p className="text-slate-400">
              📍 {siteSettings.location[locale]} · {locale === "es" ? "Remoto / Híbrido" : "Remote / Hybrid"}
            </p>
          </div>
        );
        break;

      case "experience":
        res = (
          <div className="space-y-2 text-slate-300">
            <p className="font-bold text-indigo-300">{locale === "es" ? "Trayectoria profesional:" : "Career path:"}</p>
            <div className="grid gap-2">
              <div>
                <div className="flex flex-wrap items-baseline gap-x-2">
                  <span className="font-bold text-white">Stratesys</span>
                  <span className="text-slate-500 text-[0.65rem]">{locale === "es" ? "2024 – Actualidad" : "2024 – Present"}</span>
                  <span className="rounded-sm bg-emerald-500/20 px-1 py-0.5 text-[0.6rem] font-bold text-emerald-300">{locale === "es" ? "ACTUAL" : "CURRENT"}</span>
                </div>
                <p className="text-slate-400">{locale === "es" ? "Backend Software Engineer | SAP Commerce Cloud · Real Estate" : "Backend Software Engineer | SAP Commerce Cloud · Real Estate"}</p>
              </div>
              <div>
                <div className="flex flex-wrap items-baseline gap-x-2">
                  <span className="font-bold text-white">Minsait</span>
                  <span className="text-slate-500 text-[0.65rem]">{locale === "es" ? "Ene 2024 – Jun 2024" : "Jan 2024 – Jun 2024"}</span>
                </div>
                <p className="text-slate-400">{locale === "es" ? "Backend Software Engineer | SAP Commerce Cloud B2B · Claro Perú" : "Backend Software Engineer | SAP Commerce Cloud B2B · Claro Perú"}</p>
              </div>
              <div>
                <div className="flex flex-wrap items-baseline gap-x-2">
                  <span className="font-bold text-white">Stratesys</span>
                  <span className="text-slate-500 text-[0.65rem]">{locale === "es" ? "Mar 2023 – Dic 2023" : "Mar 2023 – Dec 2023"}</span>
                </div>
                <p className="text-slate-400">{locale === "es" ? "Junior Software Engineer | SAP Commerce Cloud" : "Junior Software Engineer | SAP Commerce Cloud"}</p>
              </div>
              <div>
                <div className="flex flex-wrap items-baseline gap-x-2">
                  <span className="font-bold text-white">Accenture</span>
                  <span className="text-slate-500 text-[0.65rem]">{locale === "es" ? "Jul 2022 – Mar 2023" : "Jul 2022 – Mar 2023"}</span>
                </div>
                <p className="text-slate-400">{locale === "es" ? "Application Development Associate | Airbus · SAP & SAP Commerce" : "Application Development Associate | Airbus · SAP & SAP Commerce"}</p>
              </div>
            </div>
          </div>
        );
        break;


      case "clear":
        setHistory([buildWelcome(locale)]);
        setInputVal("");
        inputRef.current?.focus();
        return;

      default:
        res = (
          <p className="text-rose-300">
            {locale === "es"
              ? `Comando "${trimmed}" no reconocido. Escribe "help" para ver los comandos válidos.`
              : `Command "${trimmed}" not recognized. Type "help" for valid commands.`}
          </p>
        );
    }

    setHistory((prev) => [
      ...prev,
      { id: `${Date.now()}-${Math.random()}`, command: cmdStr.trim(), response: res, time },
    ]);
    setInputVal("");
    inputRef.current?.focus();
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    executeCommand(inputVal);
  };

  const quickChips = ["help", "stack", "email", "cv", "status", "experience"];

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-[#14192b]/95 via-[#0f1322]/98 to-[#090c16] shadow-[inset_0_1px_0_rgba(255,255,255,0.12),0_30px_70px_-30px_rgba(0,0,0,0.95)]",
        className,
      )}
    >
      {/* Title Bar */}
      <div className="flex items-center justify-between border-b border-white/8 bg-white/[0.03] px-4 py-3 sm:px-5">
        <div className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-[#ef4444]/80 shadow-[0_0_8px_rgba(239,68,68,0.4)]" />
          <span className="h-3 w-3 rounded-full bg-[#eab308]/80 shadow-[0_0_8px_rgba(234,179,8,0.4)]" />
          <span className="h-3 w-3 rounded-full bg-[#22c55e]/80 shadow-[0_0_8px_rgba(34,197,94,0.4)]" />
          <span className="ml-3 font-mono text-[0.72rem] font-semibold text-slate-400">
            javisl99@interactive-cli:~
          </span>
        </div>
        <button
          aria-label={locale === "es" ? "Limpiar terminal" : "Clear terminal"}
          className="flex cursor-pointer items-center gap-1 rounded-md px-2 py-1 font-mono text-[0.68rem] text-slate-500 transition hover:bg-white/[0.06] hover:text-white"
          onClick={() => { setHistory([buildWelcome(locale)]); inputRef.current?.focus(); }}
          type="button"
        >
          <Trash2 className="h-3 w-3" />
          <span className="hidden sm:inline">clear</span>
        </button>
      </div>

      {/* Output — scroll is contained here, NOT on the page */}
      <div
        className="h-56 overflow-y-auto p-4 font-mono text-xs sm:p-5"
        ref={outputRef}
        style={{ overscrollBehavior: "contain" }}
      >
        <div className="flex flex-col gap-4">
          {history.map((item) => (
            <div className="space-y-1.5" key={item.id}>
              <div className="flex items-baseline gap-2 text-slate-400">
                <span className="shrink-0 font-bold text-emerald-400">❯</span>
                <span className="font-semibold text-white">{item.command}</span>
                {item.time !== "—" && (
                  <span className="ml-auto shrink-0 text-[0.6rem] text-slate-600">{item.time}</span>
                )}
              </div>
              <div className="border-l border-white/8 pl-4 py-0.5 leading-relaxed">{item.response}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Input */}
      <div className="space-y-3 border-t border-white/8 bg-black/30 p-3 font-mono sm:p-4">
        <form className="flex items-center gap-2" onSubmit={handleSubmit}>
          <span className="shrink-0 select-none text-xs font-bold text-emerald-400">❯</span>
          <input
            aria-label="Terminal command input"
            autoComplete="off"
            autoCorrect="off"
            autoCapitalize="off"
            className="flex-1 bg-transparent text-xs text-white placeholder:text-slate-600 focus:outline-none"
            onChange={(e) => setInputVal(e.target.value)}
            placeholder={locale === "es" ? "help, stack, email, cv…" : "help, stack, email, cv…"}
            ref={inputRef}
            spellCheck={false}
            type="text"
            value={inputVal}
          />
          <button
            aria-label="Run command"
            className="flex h-7 w-7 shrink-0 cursor-pointer items-center justify-center rounded-lg border border-indigo-400/30 bg-indigo-500/20 text-indigo-300 transition hover:bg-indigo-500/35 hover:text-white"
            type="submit"
          >
            <CornerDownLeft className="h-3.5 w-3.5" />
          </button>
        </form>

        {/* Quick Chips */}
        <div className="flex flex-wrap items-center gap-1.5">
          <span className="text-[0.63rem] text-slate-600">{locale === "es" ? "rápido:" : "quick:"}</span>
          {quickChips.map((chip) => (
            <button
              className="cursor-pointer rounded-md border border-white/8 bg-white/[0.03] px-2 py-0.5 text-[0.68rem] text-slate-400 transition hover:border-indigo-400/30 hover:bg-indigo-500/15 hover:text-indigo-200"
              key={chip}
              onClick={() => executeCommand(chip)}
              type="button"
            >
              &gt;_ {chip}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
