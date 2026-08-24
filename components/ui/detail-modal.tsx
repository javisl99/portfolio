"use client";

import { useEffect, useId, useRef } from "react";
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
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);
  const dialogRef = useRef<HTMLElement | null>(null);
  const lastActiveElementRef = useRef<HTMLElement | null>(null);
  const titleId = useId();
  const summaryId = useId();

  useEffect(() => {
    if (!open) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    lastActiveElementRef.current = document.activeElement instanceof HTMLElement ? document.activeElement : null;

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };
    const handleTab = (event: KeyboardEvent) => {
      if (event.key !== "Tab" || !dialogRef.current) {
        return;
      }

      const focusableElements = dialogRef.current.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])',
      );

      if (focusableElements.length === 0) {
        return;
      }

      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault();
        lastElement.focus();
      } else if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault();
        firstElement.focus();
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleEscape);
    window.addEventListener("keydown", handleTab);
    window.requestAnimationFrame(() => {
      closeButtonRef.current?.focus();
    });

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleEscape);
      window.removeEventListener("keydown", handleTab);
      lastActiveElementRef.current?.focus();
    };
  }, [onClose, open]);

  if (!open) {
    return null;
  }

  return (
    <div
      aria-hidden={false}
      aria-modal="true"
      aria-labelledby={titleId}
      aria-describedby={summary ? summaryId : undefined}
      className={cn(
        "pointer-events-auto fixed inset-0 z-[70] overflow-y-auto bg-[rgba(2,6,23,0.72)] px-4 py-6 backdrop-blur-xl transition-opacity duration-300 ease-out motion-reduce:transition-none sm:px-5 sm:py-8 lg:px-6 lg:py-16",
        visible ? "opacity-100" : "opacity-0",
      )}
      onClick={onClose}
      role="dialog"
    >
      <article
        className={cn(
          "relative z-[1] mx-auto w-full overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-b from-[#14192b] to-[#0a0d18] shadow-[inset_0_1px_0_rgba(255,255,255,0.12),0_48px_120px_-40px_rgba(0,0,0,0.98)] ring-1 ring-white/6 transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transform-none motion-reduce:transition-none",
          widthClassName ?? "max-w-5xl",
          visible ? "translate-y-0 scale-100 opacity-100" : "translate-y-4 scale-[0.985] opacity-0",
        )}
        onClick={(event) => event.stopPropagation()}
        ref={dialogRef}
      >
        <div className="pointer-events-none absolute inset-0 rounded-[inherit] bg-[radial-gradient(circle_at_top_right,rgba(99,102,241,0.14),transparent_30%),radial-gradient(circle_at_top_left,rgba(59,130,246,0.1),transparent_25%)]" />

        <div className="relative border-b border-white/10 px-5 py-5 sm:px-6 sm:py-5 lg:px-7">
          <button
            aria-label={ariaLabel}
            className="absolute right-4 top-4 z-10 inline-flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-slate-300 transition hover:border-indigo-400/35 hover:bg-white/[0.08] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-accent sm:right-5 sm:top-5 lg:right-6 lg:top-6"
            onClick={onClose}
            ref={closeButtonRef}
            type="button"
          >
            <X className="h-4 w-4" />
          </button>

          <div className="max-w-3xl pr-14 sm:pr-16">
            <p className="font-mono text-[0.7rem] font-bold uppercase tracking-[0.2em] text-indigo-400">{eyebrow}</p>
            <h3 className="mt-3 font-display text-2xl font-black leading-[1.04] tracking-tight text-white sm:text-3xl lg:text-[2.35rem]" id={titleId}>
              {title}
            </h3>
            {subtitle ? <p className="mt-3 text-sm font-semibold leading-6 text-slate-200 sm:text-[0.96rem]">{subtitle}</p> : null}
            {headerExtras ? <div className="mt-3">{headerExtras}</div> : null}
            {summary ? (
              <p className="mt-3 max-w-3xl text-sm leading-relaxed text-slate-300 sm:text-base" id={summaryId}>
                {summary}
              </p>
            ) : null}
          </div>
        </div>

        <div className="relative px-5 py-5 sm:px-6 sm:py-6 lg:px-7">{children}</div>
      </article>
    </div>
  );
}
