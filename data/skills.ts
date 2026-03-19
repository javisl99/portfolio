import type { SkillCategory } from "@/data/types";

export const skillCategories: SkillCategory[] = [
  {
    title: {
      es: "Desarrollo SAP Commerce Cloud",
      en: "SAP Commerce Cloud development",
    },
    description: {
      es: "Trabajo práctico sobre proyectos SAP Commerce reales, desde mantenimiento correctivo hasta participación en evolutivos.",
      en: "Hands-on work across real SAP Commerce projects, from corrective maintenance to evolutive delivery.",
    },
    skills: ["SAP Commerce Cloud", "Incident management", "Evolutive delivery", "Standard customization"],
  },
  {
    title: {
      es: "Base back-end y plataforma",
      en: "Back-end and platform foundations",
    },
    description: {
      es: "Tecnologías que sostienen el trabajo diario dentro del ecosistema SAP Commerce y sus extensiones.",
      en: "Technologies that support day-to-day delivery inside the SAP Commerce ecosystem and its extensions.",
    },
    skills: ["Java", "Spring", "SQL", "FlexibleSearch", "SAP ABAP", "PostgreSQL"],
  },
  {
    title: {
      es: "Flujos core de e-commerce",
      en: "Core commerce flows",
    },
    description: {
      es: "Áreas funcionales en las que ya he trabajado con customizaciones y resolución de problemas reales.",
      en: "Functional areas where I have already worked on customizations and real production issues.",
    },
    skills: ["Checkout", "Pricing", "Stock", "Integration Objects", "B2B commerce"],
  },
  {
    title: {
      es: "Soporte, mantenimiento y evolutivo",
      en: "Support, maintenance, and evolutive work",
    },
    description: {
      es: "Capacidad para moverme bien entre incidencias, diagnóstico técnico, seguimiento y cambios progresivos sobre la plataforma.",
      en: "Ability to move comfortably between incident resolution, technical diagnosis, follow-up, and incremental platform changes.",
    },
    skills: ["Production support", "Debugging", "Root cause analysis", "Requirement follow-up"],
  },
  {
    title: {
      es: "Consultoría técnica y cliente",
      en: "Technical consulting and client work",
    },
    description: {
      es: "Experiencia comunicando estado, riesgos y evolución del trabajo técnico en contextos de consultoría.",
      en: "Experience communicating status, risk, and technical progress in consulting environments.",
    },
    skills: ["Client communication", "Incident reporting", "Technical follow-up", "Delivery ownership"],
  },
];
