"use client";

import { useState } from "react";
import { Check, Copy, Mail } from "lucide-react";
import { siteSettings } from "@/data/site";
import { cn } from "@/lib/utils";
import type { Locale } from "@/lib/i18n";

interface CopyEmailButtonProps {
  locale?: Locale;
  className?: string;
  variant?: "primary" | "secondary" | "pill" | "icon";
  showToast?: boolean;
}

export function CopyEmailButton({
  locale = "es",
  className,
  variant = "secondary",
  showToast = true,
}: CopyEmailButtonProps) {
  const [copied, setCopied] = useState(false);
  const [toastVisible, setToastVisible] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(siteSettings.email);
      setCopied(true);
      if (showToast) {
        setToastVisible(true);
        setTimeout(() => {
          setToastVisible(false);
        }, 3200);
      }
      setTimeout(() => {
        setCopied(false);
      }, 2500);
    } catch {
      // Fallback to mailto
      window.location.href = `mailto:${siteSettings.email}`;
    }
  };

  return (
    <>
      <button
        aria-label={copied ? (locale === "es" ? "Email copiado" : "Email copied") : locale === "es" ? "Copiar email" : "Copy email"}
        className={cn(
          "group relative inline-flex cursor-pointer items-center justify-center gap-2 rounded-xl transition duration-200 focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-accent",
          variant === "primary" &&
            "border border-indigo-400/35 bg-gradient-to-r from-blue-600 via-indigo-600 to-indigo-500 px-5 py-3 text-sm font-semibold text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.25),0_16px_36px_-14px_rgba(99,102,241,0.6)] hover:brightness-110 hover:-translate-y-0.5",
          variant === "secondary" &&
            "border border-white/10 bg-gradient-to-b from-white/[0.08] to-white/[0.02] px-4 py-2.5 text-xs font-semibold text-ink shadow-[inset_0_1px_0_rgba(255,255,255,0.1),0_12px_28px_-16px_rgba(0,0,0,0.85)] hover:border-indigo-400/35 hover:bg-white/[0.09] hover:text-white hover:-translate-y-0.5",
          variant === "pill" &&
            "rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-1.5 text-xs font-mono font-semibold text-slate-300 hover:border-indigo-400/30 hover:bg-white/[0.08] hover:text-white",
          variant === "icon" &&
            "h-10 w-10 border border-white/10 bg-white/[0.04] p-0 text-slate-300 hover:border-indigo-400/30 hover:bg-white/[0.08] hover:text-white",
          className,
        )}
        onClick={handleCopy}
        type="button"
      >
        {copied ? (
          <Check className="h-4 w-4 text-emerald-400 transition-transform duration-200 scale-110" />
        ) : (
          <Copy className="h-4 w-4 text-indigo-400 transition-transform duration-200 group-hover:scale-110" />
        )}
        {variant !== "icon" && (
          <span>
            {copied
              ? locale === "es"
                ? "¡Copiado!"
                : "Copied!"
              : locale === "es"
                ? "Copiar email"
                : "Copy email"}
          </span>
        )}
      </button>

      {/* Floating Glassmorphic Toast Notification */}
      {showToast && (
        <div
          aria-live="polite"
          className={cn(
            "fixed bottom-6 right-6 z-50 flex items-center gap-3 rounded-2xl border border-white/12 bg-[#12172b]/95 px-5 py-4 text-sm shadow-[inset_0_1px_0_rgba(255,255,255,0.18),0_24px_60px_-15px_rgba(0,0,0,0.95)] backdrop-blur-2xl transition-all duration-300 ease-out",
            toastVisible
              ? "translate-y-0 opacity-100 scale-100"
              : "translate-y-4 opacity-0 scale-95 pointer-events-none",
          )}
        >
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl border border-emerald-500/30 bg-emerald-500/15 text-emerald-300">
            <Check className="h-4 w-4" />
          </div>
          <div className="flex flex-col text-left">
            <p className="font-semibold text-white">
              {locale === "es" ? "Email copiado al portapapeles" : "Email copied to clipboard"}
            </p>
            <p className="font-mono text-xs text-indigo-300">{siteSettings.email}</p>
          </div>
          <a
            className="ml-2 rounded-lg border border-white/10 bg-white/[0.06] p-2 text-slate-300 transition hover:bg-white/[0.12] hover:text-white"
            href={`mailto:${siteSettings.email}`}
            title={locale === "es" ? "Abrir cliente de correo" : "Open email client"}
          >
            <Mail className="h-4 w-4" />
          </a>
        </div>
      )}
    </>
  );
}
