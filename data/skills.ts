import type { SkillCategory } from "@/data/types";

export const skillCategories: SkillCategory[] = [
  {
    title: {
      es: "Ingeniería de producto",
      en: "Product engineering",
    },
    description: {
      es: "Capacidad para conectar necesidades de negocio, experiencia de usuario y decisiones técnicas.",
      en: "Ability to connect business needs, user experience, and technical decisions.",
    },
    skills: ["Problem framing", "Discovery support", "Tradeoff mapping", "Roadmap translation"],
  },
  {
    title: {
      es: "Arquitectura frontend",
      en: "Frontend architecture",
    },
    description: {
      es: "Sistemas UI, escalabilidad de componentes, consistencia y rendimiento como base de entrega.",
      en: "UI systems, component scalability, consistency, and performance as delivery foundations.",
    },
    skills: ["Next.js", "React", "TypeScript", "Design systems", "Accessibility", "Performance"],
  },
  {
    title: {
      es: "Plataforma y colaboración",
      en: "Platform and collaboration",
    },
    description: {
      es: "Trabajo efectivo entre diseño, producto, plataforma y stakeholders con distinto nivel técnico.",
      en: "Effective work across design, product, platform, and stakeholders with different technical depth.",
    },
    skills: ["Cross-functional delivery", "Documentation", "Technical leadership", "Quality criteria"],
  },
  {
    title: {
      es: "Entrega sostenible",
      en: "Sustainable delivery",
    },
    description: {
      es: "Prácticas que ayudan a entregar con fiabilidad sin hipotecar la velocidad futura.",
      en: "Practices that help deliver reliably without sacrificing future speed.",
    },
    skills: ["Incremental rollout", "Operational thinking", "Observability", "Refactoring strategy"],
  },
];

