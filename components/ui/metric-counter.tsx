"use client";

import { useEffect, useRef, useState } from "react";

import type { Locale } from "@/lib/i18n";

interface MetricCounterProps {
  className?: string;
  decimals?: number;
  delayMs?: number;
  durationMs?: number;
  locale: Locale;
  target: number;
}

/**
 * Renders the final value on the server and on the first client render.
 * The count-up only starts after the containing reveal enters the viewport.
 */
export function MetricCounter({ className, decimals = 0, delayMs = 450, durationMs = 1400, locale, target }: MetricCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const [value, setValue] = useState(target);
  const formatter = new Intl.NumberFormat(locale === "es" ? "es-ES" : "en-GB", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    let frameId = 0;
    let timeoutId = 0;
    let hasStarted = false;

    const start = () => {
      if (hasStarted) return;
      hasStarted = true;

      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        setValue(target);
        return;
      }

      timeoutId = window.setTimeout(() => {
        const startedAt = performance.now();
        const precision = 10 ** decimals;
        setValue(0);

        const tick = (now: number) => {
          const progress = Math.min((now - startedAt) / durationMs, 1);
          const easedProgress = 1 - (1 - progress) ** 3;
          const nextValue = Math.round(target * easedProgress * precision) / precision;

          setValue(progress >= 1 ? target : nextValue);
          if (progress < 1) frameId = window.requestAnimationFrame(tick);
        };

        frameId = window.requestAnimationFrame(tick);
      }, delayMs);
    };

    const revealRoot = element.closest<HTMLElement>("[data-reveal-on-scroll]");
    let revealObserver: MutationObserver | null = null;

    if (revealRoot?.classList.contains("is-visible")) {
      start();
    } else if (revealRoot) {
      revealObserver = new MutationObserver(() => {
        if (revealRoot.classList.contains("is-visible")) {
          start();
          revealObserver?.disconnect();
        }
      });
      revealObserver.observe(revealRoot, { attributes: true, attributeFilter: ["class"] });
    } else {
      start();
    }

    return () => {
      revealObserver?.disconnect();
      window.clearTimeout(timeoutId);
      window.cancelAnimationFrame(frameId);
    };
  }, [decimals, delayMs, durationMs, target]);

  const percentLabel = locale === "es" ? "por ciento" : "percent";
  const suffix = locale === "es" ? " %" : "%";

  return (
    <span ref={ref} className={className} aria-label={`${formatter.format(target)} ${percentLabel}`}>
      {formatter.format(value)}{suffix}
    </span>
  );
}
