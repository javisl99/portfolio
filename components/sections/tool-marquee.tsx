"use client";

import { useEffect, useRef, useState, type PointerEvent } from "react";

interface Tool {
  name: string;
  slug: string;
  color: string;
  iconUrl: string;
}

const tools = [
  { name: "Java", slug: "java", color: "#f89820", iconUrl: "/tools/java.svg" },
  { name: "Spring", slug: "spring", color: "#6db33f", iconUrl: "/tools/spring.svg" },
  { name: "SAP Commerce", slug: "sap", color: "#0faaff", iconUrl: "/tools/sap.svg" },
  { name: "Docker", slug: "docker", color: "#2496ed", iconUrl: "/tools/docker.svg" },
  { name: "GitHub", slug: "github", color: "#f5f7fa", iconUrl: "/tools/github.svg" },
  { name: "Postman", slug: "postman", color: "#ff6c37", iconUrl: "/tools/postman.svg" },
  { name: "Jira", slug: "jira", color: "#2684ff", iconUrl: "/tools/jira.svg" },
  { name: "Codex", slug: "codex", color: "#f5f7fa", iconUrl: "/tools/codex.svg" },
  { name: "Notion", slug: "notion", color: "#f5f7fa", iconUrl: "/tools/notion.svg" },
] satisfies readonly Tool[];

function ToolItem({ name, color, iconUrl }: Tool) {
  return (
    <div className="group flex shrink-0 items-center gap-3 px-5 text-slate-300 sm:px-7">
      <span
        aria-hidden="true"
        className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] p-2 transition duration-300 group-hover:border-white/20 group-hover:bg-white/[0.08]"
        style={{ color }}
      >
        <>
          {/* External brand SVGs are intentionally used as lightweight tool marks. */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            alt=""
            className="h-full w-full object-contain opacity-90 transition duration-300 group-hover:opacity-100"
            height="28"
            loading="lazy"
            decoding="async"
            src={iconUrl}
            width="28"
          />
        </>
      </span>
      <span className="whitespace-nowrap font-mono text-xs font-semibold tracking-[0.12em] text-slate-400 transition duration-300 group-hover:text-white sm:text-sm">
        {name}
      </span>
    </div>
  );
}

export function ToolMarquee({ locale }: { locale: "es" | "en" }) {
  const trackRef = useRef<HTMLUListElement>(null);
  const offsetRef = useRef(0);
  const setWidthRef = useRef(0);
  const dragRef = useRef<{ pointerId: number; startX: number; startOffset: number } | null>(null);
  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
    const track = trackRef.current;

    if (!track) {
      return;
    }

    const applyOffset = () => {
      track.style.transform = `translate3d(${offsetRef.current}px, 0, 0)`;
    };

    const normalizeOffset = () => {
      const setWidth = setWidthRef.current;

      if (!setWidth) {
        return;
      }

      while (offsetRef.current <= -setWidth) {
        offsetRef.current += setWidth;
      }

      while (offsetRef.current > 0) {
        offsetRef.current -= setWidth;
      }
    };

    const measure = () => {
      setWidthRef.current = track.scrollWidth / 4;
      normalizeOffset();
      applyOffset();
    };

    const resizeObserver = new ResizeObserver(measure);
    resizeObserver.observe(track);
    measure();

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let animationFrame = 0;
    let lastTime = performance.now();

    const animate = (time: number) => {
      const elapsed = time - lastTime;
      lastTime = time;

      if (!dragRef.current && !reducedMotion.matches && setWidthRef.current) {
        offsetRef.current -= (elapsed * setWidthRef.current) / 34000;
        normalizeOffset();
        applyOffset();
      }

      animationFrame = requestAnimationFrame(animate);
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrame);
      resizeObserver.disconnect();
    };
  }, []);

  const handlePointerDown = (event: PointerEvent<HTMLUListElement>) => {
    if (event.pointerType === "mouse" && event.button !== 0) {
      return;
    }

    dragRef.current = {
      pointerId: event.pointerId,
      startX: event.clientX,
      startOffset: offsetRef.current,
    };
    setIsDragging(true);
    event.currentTarget.setPointerCapture(event.pointerId);
  };

  const handlePointerMove = (event: PointerEvent<HTMLUListElement>) => {
    const drag = dragRef.current;

    if (!drag || drag.pointerId !== event.pointerId || !setWidthRef.current) {
      return;
    }

    offsetRef.current = drag.startOffset + event.clientX - drag.startX;

    while (offsetRef.current <= -setWidthRef.current) {
      offsetRef.current += setWidthRef.current;
    }

    while (offsetRef.current > 0) {
      offsetRef.current -= setWidthRef.current;
    }

    event.currentTarget.style.transform = `translate3d(${offsetRef.current}px, 0, 0)`;
  };

  const handlePointerUp = (event: PointerEvent<HTMLUListElement>) => {
    if (dragRef.current?.pointerId === event.pointerId) {
      dragRef.current = null;
      setIsDragging(false);
      event.currentTarget.releasePointerCapture(event.pointerId);
    }
  };

  return (
    <section aria-labelledby="tool-marquee-title" className="overflow-hidden border-y border-white/8 bg-black/20 py-4">
      <h2 className="sr-only" id="tool-marquee-title">
        {locale === "es" ? "Herramientas y tecnologías" : "Tools and technologies"}
      </h2>
      <p className="sr-only">
        {locale === "es" ? `Tecnologías utilizadas: ${tools.map((tool) => tool.name).join(", ")}.` : `Technologies used: ${tools.map((tool) => tool.name).join(", ")}.`}
      </p>
      <ul
        aria-hidden="true"
        className={`tool-marquee-track m-0 flex w-max list-none items-center p-0 ${isDragging ? "cursor-grabbing" : "cursor-grab"}`}
        onPointerCancel={handlePointerUp}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        ref={trackRef}
      >
        {[...tools, ...tools, ...tools, ...tools].map((tool, index) => (
          <li key={`${tool.slug}-${index}`}>
            <ToolItem {...tool} />
          </li>
        ))}
      </ul>
    </section>
  );
}
