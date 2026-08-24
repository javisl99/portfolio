"use client";

import { useEffect, useRef, useState } from "react";

interface MetricCounterProps {
  className?: string;
  delayMs?: number;
  durationMs?: number;
  randomMax?: number;
  target: number;
}

export function MetricCounter({ className, delayMs = 450, durationMs = 1500, randomMax, target }: MetricCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const [value, setValue] = useState(0);
  const randomLimit = randomMax ?? target;

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    let frameId = 0;
    let timeoutId = 0;
    let hasStarted = false;

    const start = () => {
      if (hasStarted) return;
      hasStarted = true;

      timeoutId = window.setTimeout(() => {
        const startedAt = performance.now();
        let lastValueUpdate = startedAt;

        const tick = (now: number) => {
          const progress = Math.min((now - startedAt) / durationMs, 1);

          if (progress >= 1) {
            setValue(target);
            return;
          }

          if (now - lastValueUpdate >= 90) {
            setValue(Math.floor(Math.random() * (randomLimit + 1)));
            lastValueUpdate = now;
          }
          frameId = window.requestAnimationFrame(tick);
        };

        frameId = window.requestAnimationFrame(tick);
      }, delayMs);
    };

    const revealRoot = element.closest<HTMLElement>("[data-reveal-on-scroll]");
    let revealObserver: MutationObserver | null = null;

    if (revealRoot) {
      revealObserver = new MutationObserver(() => {
          if (revealRoot.classList.contains("is-visible")) {
            start();
            revealObserver?.disconnect();
          }
        });
    }

    if (revealRoot?.classList.contains("is-visible")) {
      start();
    } else if (revealRoot && revealObserver) {
      revealObserver.observe(revealRoot, { attributes: true, attributeFilter: ["class"] });
    } else {
      start();
    }

    return () => {
      revealObserver?.disconnect();
      window.clearTimeout(timeoutId);
      window.cancelAnimationFrame(frameId);
    };
  }, [delayMs, durationMs, randomLimit, target]);

  return <span ref={ref} className={className}>{value}</span>;
}
