import Image from "next/image";

import { cn } from "@/lib/utils";

interface BrandLogoProps {
  className?: string;
  imageClassName?: string;
  variant?: "full" | "full-dark" | "full-light" | "mark";
  priority?: boolean;
}

const variants = {
  full: { src: "/logo.svg", width: 240, height: 64, alt: "Javier Sanchez Lancha logo" },
  "full-dark": { src: "/logo-dark.svg", width: 240, height: 64, alt: "Javier Sanchez Lancha logo" },
  "full-light": { src: "/logo-light.svg", width: 240, height: 64, alt: "Javier Sanchez Lancha logo" },
  mark: { src: "/favicon.svg", width: 40, height: 40, alt: "Javier Sanchez Lancha mark" },
} as const;

export function BrandLogo({ className, imageClassName, variant = "full-light", priority = false }: BrandLogoProps) {
  const asset = variants[variant];

  return (
    <span className={cn("inline-flex shrink-0 items-center", className)}>
      <Image
        alt={asset.alt}
        className={cn("h-auto w-full", imageClassName)}
        height={asset.height}
        priority={priority}
        src={asset.src}
        width={asset.width}
      />
    </span>
  );
}
