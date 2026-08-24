"use client";

import { useEffect, useRef, type ReactNode } from "react";

interface RevealOnScrollProps {
  className?: string;
  children: ReactNode;
  /** pixels before the element edge that trigger reveal (default 80) */
  rootMargin?: string;
}

/**
 * Wraps children in a container that adds the `is-visible` class once the
 * element enters the viewport. CSS animations keyed off `.is-visible` will
 * only fire at that point, not on page load.
 */
export function RevealOnScroll({ children, className, rootMargin = "0px 0px -80px 0px" }: RevealOnScrollProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("is-visible");
          observer.disconnect(); // fire once
        }
      },
      { rootMargin },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [rootMargin]);

  return (
    <div ref={ref} className={className} data-reveal-on-scroll>
      {children}
    </div>
  );
}
