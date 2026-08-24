import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";

interface BrandLogoProps extends ComponentPropsWithoutRef<"div"> {
  variant?: "full" | "full-dark" | "full-light" | "mark";
  imageClassName?: string;
  priority?: boolean;
}

export function BrandMarkIcon({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={cn("h-10 w-10 shrink-0", className)}
      fill="none"
      viewBox="0 0 40 40"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="brand-grad" gradientUnits="userSpaceOnUse" x1="0" x2="40" y1="0" y2="40">
          <stop offset="0%" stopColor="#818cf8" />
          <stop offset="50%" stopColor="#6366f1" />
          <stop offset="100%" stopColor="#38bdf8" />
        </linearGradient>
        <linearGradient id="badge-bg" gradientUnits="userSpaceOnUse" x1="0" x2="0" y1="0" y2="40">
          <stop offset="0%" stopColor="#161c30" />
          <stop offset="100%" stopColor="#0b0e18" />
        </linearGradient>
      </defs>

      {/* Background squircle with inner glow */}
      <rect fill="url(#badge-bg)" height="40" rx="10" width="40" />
      <rect
        height="39"
        rx="9.5"
        stroke="rgba(255, 255, 255, 0.12)"
        strokeWidth="1"
        width="39"
        x="0.5"
        y="0.5"
      />
      <rect
        height="39"
        rx="9.5"
        stroke="rgba(99, 102, 241, 0.28)"
        strokeWidth="1"
        width="39"
        x="0.5"
        y="0.5"
      />

      {/* Geometric J Monogram & Terminal Elements */}
      {/* Top Bar */}
      <rect fill="url(#brand-grad)" height="3.5" rx="1.75" width="18" x="11" y="9.5" />
      {/* Vertical Stem */}
      <rect fill="url(#brand-grad)" height="14" rx="1.75" width="3.5" x="21" y="9.5" />
      {/* Hook Curve */}
      <path
        d="M24.5 21.5V24C24.5 27.8 21.2 30.5 17 30.5C13.2 30.5 11 28.2 11 25.2H14.5C14.5 26.6 15.5 27.2 17 27.2C19.2 27.2 21 25.8 21 24V21.5H24.5Z"
        fill="url(#brand-grad)"
      />
      {/* Glowing Terminal Cursor Dot */}
      <circle cx="28" cy="28" fill="#38bdf8" r="2.25" />
    </svg>
  );
}

export function BrandLogo({ className, imageClassName, variant = "full-light" }: BrandLogoProps) {
  if (variant === "mark") {
    return (
      <span className={cn("inline-flex shrink-0 items-center", className)}>
        <BrandMarkIcon className={imageClassName} />
      </span>
    );
  }

  return (
    <div className={cn("group inline-flex shrink-0 items-center gap-3", className)}>
      <BrandMarkIcon className={cn("h-9 w-9", imageClassName)} />
      <div className="flex flex-col text-left">
        <span className="font-display text-sm font-bold tracking-tight text-white transition group-hover:text-indigo-200">
          Javier Sánchez Lancha
        </span>
        <span className="font-mono text-[0.62rem] font-semibold uppercase tracking-widest text-indigo-300/80">
          Backend Software Engineer
        </span>
      </div>
    </div>
  );
}
