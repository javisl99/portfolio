import type { Locale } from "@/lib/i18n";

export const siteSettings = {
  name: "Javier Sánchez Lancha",
  role: "SAP Commerce Cloud Developer",
  email: "hello@yourname.dev",
  linkedin: "https://www.linkedin.com/in/your-profile",
  github: "https://github.com/your-handle",
  location: "Madrid, Spain",
};

export const pageSlugs = {
  home: "",
  experience: "/experience",
  projects: "/projects",
  about: "/about",
  contact: "/contact",
} as const;

export const siteCopy: Record<
  Locale,
  {
    localeName: string;
    languageSwitch: string;
    navigation: Array<{ href: (typeof pageSlugs)[keyof typeof pageSlugs]; label: string }>;
    metadata: {
      defaultTitle: string;
      defaultDescription: string;
      pages: Record<Exclude<keyof typeof pageSlugs, "home"> | "projectDetail", { title: string; description: string }>;
    };
    ctas: {
      resume: string;
      email: string;
      linkedin: string;
      allProjects: string;
      allExperience: string;
      about: string;
    };
    home: {
      hero: {
        eyebrow: string;
        title: string;
        summary: string;
        availability: string;
      };
      focusCards: Array<{ title: string; body: string }>;
      experience: { eyebrow: string; title: string; description: string };
      milestones: { eyebrow: string; title: string; description: string };
      skills: { eyebrow: string; title: string; description: string };
      projects: { eyebrow: string; title: string; description: string };
      contact: { eyebrow: string; title: string; description: string };
    };
    pages: {
      experience: { eyebrow: string; title: string; intro: string };
      projects: { eyebrow: string; title: string; intro: string };
      about: {
        eyebrow: string;
        title: string;
        intro: string;
        narrativeTitle: string;
        narrative: string[];
        principlesTitle: string;
        principles: Array<{ title: string; body: string }>;
      };
      contact: {
        eyebrow: string;
        title: string;
        intro: string;
        availability: string;
        note: string;
      };
    };
    footer: {
      note: string;
      availability: string;
      builtWith: string;
    };
  }
> = {
  es: {
    localeName: "Español",
    languageSwitch: "View in English",
    navigation: [
      { href: pageSlugs.home, label: "Inicio" },
      { href: pageSlugs.experience, label: "Experiencia" },
      { href: pageSlugs.projects, label: "Proyectos" },
      { href: pageSlugs.about, label: "Sobre mí" },
      { href: pageSlugs.contact, label: "Contacto" },
    ],
    metadata: {
      defaultTitle: "Portfolio profesional de Javier Sánchez Lancha",
      defaultDescription:
        "Portfolio bilingüe orientado a reclutadores SAP: experiencia, casos y contexto técnico real de Javier Sánchez Lancha como SAP Commerce Cloud Developer.",
      pages: {
        experience: {
          title: "Experiencia profesional en SAP Commerce Cloud",
          description:
            "Trayectoria técnica y consultiva en SAP Commerce Cloud a través de Stratesys, Minsait y Accenture.",
        },
        projects: {
          title: "Casos SAP Commerce Cloud",
          description:
            "Tres casos reales centrados en incidental, evolutivo, customización del estándar e integraciones dentro de SAP Commerce Cloud.",
        },
        about: {
          title: "Sobre mí",
          description:
            "Cómo trabajo como SAP Commerce Cloud Developer: debugging, evolución técnica, comprensión del estándar y comunicación clara con cliente.",
        },
        contact: {
          title: "Contacto",
          description:
            "Canales directos para conectar y seguir una conversación profesional sobre oportunidades SAP Commerce Cloud.",
        },
        projectDetail: {
          title: "Caso SAP Commerce",
          description:
            "Detalle de un proyecto SAP Commerce Cloud con foco en contexto, responsabilidad, decisiones técnicas e impacto profesional.",
        },
      },
    },
    ctas: {
      resume: "Ver CV en PDF",
      email: "Escribir un email",
      linkedin: "Abrir LinkedIn",
      allProjects: "Ver todos los casos SAP",
      allExperience: "Ver la trayectoria completa",
      about: "Conocer cómo trabajo",
    },
    home: {
      hero: {
        eyebrow: "SAP Commerce Cloud, Java y consultoría técnica para e-commerce",
        title: "Desarrollo soluciones sobre SAP Commerce Cloud con foco en soporte, evolutivo e integraciones de negocio.",
        summary:
          "Este portfolio amplía mi CV con contexto técnico real: mantenimiento e incidental, customización del estándar SAP Commerce, checkout, precios, stock, integration objects y trabajo directo con cliente en entornos de consultoría.",
        availability:
          "Abierto a oportunidades SAP Commerce Cloud donde se valore autonomía técnica, conocimiento del estándar, capacidad para resolver incidencias y criterio para participar en evolutivos con impacto real.",
      },
      focusCards: [
        {
          title: "Experiencia SAP real",
          body: "La narrativa está construida a partir de proyectos y clientes reales: BuildingCenter con CaixaBank Tech, Claro Perú y Airbus.",
        },
        {
          title: "Profundidad técnica útil",
          body: "La web prioriza señales que interesan a recruiting SAP: customizaciones del estándar, checkout, precios, stock, integration objects y soporte productivo.",
        },
        {
          title: "Consultoría con ownership",
          body: "Además del desarrollo, ya he trabajado con cliente, seguimiento de incidencias y responsabilidad directa sobre el incidental.",
        },
      ],
      experience: {
        eyebrow: "Trayectoria",
        title: "Experiencia SAP reflejada en el CV y preparada para ampliar",
        description:
          "Un resumen claro de Stratesys, Minsait y Accenture para que recruiting entienda rápido el recorrido del CV antes de entrar en más detalle técnico.",
      },
      milestones: {
        eyebrow: "Hitos",
        title: "Señales de crecimiento técnico y ownership",
        description:
          "Momentos que muestran dominio del estándar, autonomía en soporte e interacción directa con cliente dentro de entornos de consultoría.",
      },
      skills: {
        eyebrow: "Habilidades",
        title: "Capacidades clave en SAP Commerce Cloud",
        description:
          "Competencias agrupadas alrededor de SAP Commerce, base back-end, flujos core de e-commerce y trabajo consultivo.",
      },
      projects: {
        eyebrow: "Casos SAP",
        title: "Casos reales de SAP Commerce Cloud con contexto técnico reconocible",
        description:
          "Tres casos escritos en MDX para explicar qué se hizo, qué parte de SAP Commerce estaba en juego y qué señal profesional deja cada etapa.",
      },
      contact: {
        eyebrow: "Contacto",
        title: "La siguiente conversación debería ser directa y técnica",
        description:
          "Email, LinkedIn y CV accesibles para seguir una conversación profesional sobre posiciones SAP Commerce Cloud.",
      },
    },
    pages: {
      experience: {
        eyebrow: "Experiencia profesional",
        title: "Trayectoria en SAP Commerce Cloud entre consultoría, soporte y evolutivo",
        intro:
          "Esta página parte de la experiencia tal y como aparece en mi CV y añade una primera capa de contexto técnico. Sirve para ver de un vistazo las etapas de Stratesys, Minsait y Accenture, dejando la estructura preparada para profundizar más adelante.",
      },
      projects: {
        eyebrow: "Casos SAP Commerce",
        title: "Tres casos reales explicados con contexto, rol y decisiones técnicas",
        intro:
          "Aquí no hay proyectos ficticios ni demos genéricas. Cada caso resume qué tipo de proyecto era, qué parte de SAP Commerce tocaba, cuál fue mi papel y por qué esa experiencia aporta señales valiosas para recruiting y evaluación técnica.",
      },
      about: {
        eyebrow: "Sobre mí",
        title: "Combino desarrollo SAP Commerce con criterio técnico y comunicación clara",
        intro:
          "Me interesa trabajar en proyectos SAP Commerce Cloud donde el trabajo técnico no se limite a implementar tareas, sino también a entender el estándar, diagnosticar incidencias, explicar decisiones y acompañar la evolución del producto con criterio.",
        narrativeTitle: "Cómo enfoco el trabajo",
        narrative: [
          "Mi trayectoria se ha construido alrededor de SAP Commerce Cloud en contextos reales de consultoría, soporte y desarrollo. Eso me ha dado una base práctica sobre cómo mantener, extender y estabilizar una plataforma que ya está en producción.",
          "Me interesa especialmente el punto en el que hay que entender bien el estándar antes de personalizar. Creo que una buena solución en SAP Commerce no es la que más cambia, sino la que resuelve el problema sin romper innecesariamente la base de la plataforma.",
          "También me siento cómodo en el lado más consultivo del trabajo: seguimiento de incidencias, comunicación con cliente, explicación de bloqueos y coordinación para que el contexto técnico no se convierta en ruido.",
        ],
        principlesTitle: "Principios de trabajo",
        principles: [
          {
            title: "Entender el estándar antes de extenderlo",
            body: "Cuanto mejor se conoce el comportamiento base de SAP Commerce, mejores decisiones se toman al personalizar checkout, precios, stock o integraciones.",
          },
          {
            title: "Las incidencias se resuelven con contexto, no solo con parches",
            body: "Soporte productivo significa diagnosticar bien, comunicar estado, priorizar con criterio y dejar el sistema más entendible después de cada incidencia.",
          },
          {
            title: "La comunicación técnica también forma parte del delivery",
            body: "Explicar con claridad qué pasa, qué riesgo existe y qué camino tiene más sentido ayuda tanto al cliente como al equipo a decidir mejor.",
          },
        ],
      },
      contact: {
        eyebrow: "Contacto",
        title: "Si buscas un perfil SAP Commerce Cloud con base técnica real, hablemos",
        intro:
          "La web evita formularios a propósito. Prefiero que el siguiente paso sea directo y que la conversación empiece con contexto claro sobre experiencia, stack y tipo de proyecto.",
        availability:
          "Interesado en oportunidades SAP Commerce Cloud donde tengan peso el conocimiento técnico, la capacidad de resolver incidencias complejas y la evolución progresiva de una plataforma viva.",
        note:
          "Los datos de contacto siguen siendo placeholders fáciles de sustituir, pero la estructura ya está preparada para un portfolio técnico enfocado a recruiting SAP.",
      },
    },
    footer: {
      note: "Portfolio técnico bilingüe centrado en experiencia real con SAP Commerce Cloud, consultoría y desarrollo e-commerce.",
      availability: "La base queda preparada para incorporar más adelante proyectos personales y nuevos casos técnicos sin rehacer la estructura.",
      builtWith: "Next.js, TypeScript, Tailwind y MDX.",
    },
  },
  en: {
    localeName: "English",
    languageSwitch: "Ver en Español",
    navigation: [
      { href: pageSlugs.home, label: "Home" },
      { href: pageSlugs.experience, label: "Experience" },
      { href: pageSlugs.projects, label: "Projects" },
      { href: pageSlugs.about, label: "About" },
      { href: pageSlugs.contact, label: "Contact" },
    ],
    metadata: {
      defaultTitle: "Javier Sánchez Lancha's professional portfolio",
      defaultDescription:
        "Bilingual portfolio for SAP recruiters: real experience, case studies, and technical context around Javier Sánchez Lancha as a SAP Commerce Cloud Developer.",
      pages: {
        experience: {
          title: "Professional experience in SAP Commerce Cloud",
          description:
            "Technical and consulting experience in SAP Commerce Cloud across Stratesys, Minsait, and Accenture.",
        },
        projects: {
          title: "SAP Commerce Cloud case studies",
          description:
            "Three real cases focused on incident handling, evolutive delivery, standard customization, and integrations in SAP Commerce Cloud.",
        },
        about: {
          title: "About",
          description:
            "How I work as a SAP Commerce Cloud Developer: debugging, platform evolution, standard knowledge, and clear communication with clients.",
        },
        contact: {
          title: "Contact",
          description:
            "Direct ways to connect and continue a professional conversation about SAP Commerce Cloud opportunities.",
        },
        projectDetail: {
          title: "SAP Commerce case study",
          description:
            "A SAP Commerce Cloud project explained through context, responsibility, technical decisions, and professional impact.",
        },
      },
    },
    ctas: {
      resume: "Open resume PDF",
      email: "Send an email",
      linkedin: "Open LinkedIn",
      allProjects: "Browse all SAP cases",
      allExperience: "View full experience",
      about: "See how I work",
    },
    home: {
      hero: {
        eyebrow: "SAP Commerce Cloud, Java, and technical consulting for e-commerce",
        title: "I build SAP Commerce Cloud solutions focused on support, evolutive work, and business integrations.",
        summary:
          "This portfolio expands my resume with real technical context: support and incident handling, SAP Commerce standard customization, checkout, pricing, stock, integration objects, and direct client-facing work inside consulting environments.",
        availability:
          "Open to SAP Commerce Cloud opportunities where technical autonomy, platform knowledge, incident ownership, and good judgment on evolutive delivery are valued.",
      },
      focusCards: [
        {
          title: "Real SAP experience",
          body: "The narrative is built around real projects and clients: BuildingCenter with CaixaBank Tech, Claro Perú, and Airbus.",
        },
        {
          title: "Useful technical depth",
          body: "The site prioritizes signals that matter in SAP recruiting: standard customization, checkout, pricing, stock, integration objects, and production support.",
        },
        {
          title: "Consulting with ownership",
          body: "Beyond development, I have already worked directly with clients, incident follow-up, and ownership over the incident stream.",
        },
      ],
      experience: {
        eyebrow: "Career path",
        title: "SAP experience reflected in the CV and ready to expand",
        description:
          "A clear snapshot of Stratesys, Minsait, and Accenture so recruiters can understand the CV journey before diving into deeper technical detail.",
      },
      milestones: {
        eyebrow: "Highlights",
        title: "Signals of technical growth and ownership",
        description:
          "Moments that show standard knowledge, support autonomy, and direct client interaction inside consulting environments.",
      },
      skills: {
        eyebrow: "Capabilities",
        title: "Key capabilities in SAP Commerce Cloud",
        description:
          "Skills grouped around SAP Commerce, back-end foundations, core e-commerce flows, and consulting work.",
      },
      projects: {
        eyebrow: "SAP cases",
        title: "Real SAP Commerce Cloud cases with recognizable technical context",
        description:
          "Three case studies explaining what was done, which SAP Commerce area mattered, and what professional signal each stage leaves behind.",
      },
      contact: {
        eyebrow: "Contact",
        title: "The next conversation should be direct and technical",
        description:
          "Email, LinkedIn, and resume access to continue a professional conversation about SAP Commerce Cloud roles.",
      },
    },
    pages: {
      experience: {
        eyebrow: "Professional experience",
        title: "A SAP Commerce Cloud path across consulting, support, and evolutive delivery",
        intro:
          "This page starts from the experience exactly as it appears in my CV and adds an initial layer of technical context. It gives a quick view of the Stratesys, Minsait, and Accenture stages, while leaving the structure ready for deeper expansion later on.",
      },
      projects: {
        eyebrow: "SAP Commerce cases",
        title: "Three real cases explained through context, role, and technical decisions",
        intro:
          "These are not fictional projects or generic demos. Each case explains what kind of project it was, which SAP Commerce area it touched, what my role was, and why that experience matters for recruiting and technical evaluation.",
      },
      about: {
        eyebrow: "About",
        title: "I combine SAP Commerce development with technical judgment and clear communication",
        intro:
          "I want to work on SAP Commerce Cloud projects where the technical role goes beyond implementing tasks and includes understanding the standard, diagnosing incidents, explaining decisions, and supporting platform evolution with sound judgment.",
        narrativeTitle: "How I approach the work",
        narrative: [
          "My path has been built around SAP Commerce Cloud in real consulting, support, and delivery contexts. That has given me a practical foundation for maintaining, extending, and stabilizing a platform that is already live.",
          "I care especially about the point where you need to understand the standard before customizing it. In SAP Commerce, the best solution is rarely the one that changes the most, but the one that solves the problem without unnecessarily breaking the platform baseline.",
          "I am also comfortable with the consulting side of the work: incident follow-up, client communication, explaining blockers, and keeping technical context understandable instead of turning it into noise.",
        ],
        principlesTitle: "Working principles",
        principles: [
          {
            title: "Understand the standard before extending it",
            body: "The better you know the SAP Commerce baseline, the better your decisions will be when customizing checkout, pricing, stock, or integrations.",
          },
          {
            title: "Incidents should be solved with context, not only patches",
            body: "Production support means diagnosing well, communicating status, prioritizing with judgment, and leaving the system more understandable after each issue.",
          },
          {
            title: "Technical communication is part of delivery",
            body: "Explaining what is happening, what the risk is, and which path makes more sense helps both the client and the team make better decisions.",
          },
        ],
      },
      contact: {
        eyebrow: "Contact",
        title: "If you are looking for a SAP Commerce Cloud profile with a real technical base, let's talk",
        intro:
          "The site avoids forms on purpose. I prefer the next step to be direct and to start the conversation with clear context around experience, stack, and project type.",
        availability:
          "Interested in SAP Commerce Cloud opportunities where technical depth, the ability to resolve complex incidents, and steady platform evolution all matter.",
        note:
          "Contact details are still easy-to-replace placeholders, but the structure is now prepared for a portfolio aimed at SAP recruiting and technical review.",
      },
    },
    footer: {
      note: "Bilingual technical portfolio centered on real SAP Commerce Cloud experience, consulting, and e-commerce delivery.",
      availability: "The foundation is ready to include personal projects and additional technical case studies later without reworking the structure.",
      builtWith: "Built with Next.js, TypeScript, Tailwind, and MDX.",
    },
  },
};
