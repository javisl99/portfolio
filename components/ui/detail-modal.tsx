"use client";

import { useEffect } from "react";
import type { ReactNode } from "react";
import { X } from "lucide-react";

import { cn } from "@/lib/utils";

interface DetailModalProps {
  open: boolean;
  visible: boolean;
  onClose: () => void;
  ariaLabel: string;
  eyebrow: string;
  title: string;
  subtitle?: string;
  summary?: string;
  headerExtras?: ReactNode;
  children: ReactNode;
  widthClassName?: string;
}

export function DetailModal({
  open,
  visible,
  onClose,
  ariaLabel,
  eyebrow,
  title,
  subtitle,
  summary,
  headerExtras,
  children,
  widthClassName,
}: DetailModalProps) {
  useEffect(() => {
    if (!open) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleEscape);
    };
  }, [onClose, open]);

  if (!open) {
    return null;
  }

  return (
    <div
      aria-hidden={false}
      className={cn(
        "pointer-events-auto fixed inset-0 z-[70] overflow-y-auto bg-[rgba(2,6,23,0.72)] px-4 py-6 backdrop-blur-xl transition-opacity duration-300 ease-out sm:px-5 sm:py-8 lg:px-6 lg:py-16",
        visible ? "opacity-100" : "opacity-0",
      )}
      onClick={onClose}
    >
      <article
        className={cn(
          "relative z-[1] mx-auto w-full overflow-hidden rounded-3xl border border-white/10 bg-[#050814] shadow-[0_48px_120px_-42px_rgba(2,6,23,1)] ring-1 ring-white/6 transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]",
          widthClassName ?? "max-w-5xl",
          visible ? "translate-y-0 scale-100 opacity-100" : "translate-y-4 scale-[0.985] opacity-0",
        )}
        onClick={(event) => event.stopPropagation()}
      >
        <div className="pointer-events-none absolute inset-0 rounded-[inherit] bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.12),transparent_24%),radial-gradient(circle_at_top_left,rgba(129,140,248,0.08),transparent_22%)]" />

        <div className="relative border-b border-white/10 px-5 py-5 sm:px-6 sm:py-5 lg:px-7">
          <button
            aria-label={ariaLabel}
            className="absolute right-4 top-4 z-10 inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-white/10 bg-[rgba(9,14,28,0.94)] text-slate-200 transition hover:border-accent-soft/35 hover:bg-[rgba(16,24,44,0.98)] hover:text-white sm:right-5 sm:top-5 lg:right-6 lg:top-6"
            onClick={onClose}
            type="button"
          >
            <X className="h-4 w-4" />
          </button>

          <div className="max-w-3xl pr-14 sm:pr-16">
            <p className="font-mono text-[0.7rem] font-bold uppercase tracking-[0.22em] text-[#bcd1ff]">{eyebrow}</p>
            <h3 className="mt-3 font-display text-2xl font-black leading-[1.04] tracking-tight text-white sm:text-3xl lg:text-[2.35rem]">{title}</h3>
            {subtitle ? <p className="mt-3 text-sm font-semibold leading-6 text-slate-200 sm:text-[0.96rem]">{subtitle}</p> : null}
            {headerExtras ? <div className="mt-3">{headerExtras}</div> : null}
            {summary ? <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-300 sm:text-base sm:leading-7">{summary}</p> : null}
          </div>
        </div>

        <div className="relative px-5 py-5 sm:px-6 sm:py-6 lg:px-7">{children}</div>
      </article>
    </div>
  );
}
