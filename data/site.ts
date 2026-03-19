import type { CopyCard, QuickFact } from "@/data/types";
import type { Locale } from "@/lib/i18n";

export const siteSettings = {
  name: "Javier Sánchez Lancha",
  schemaRole: "SAP Commerce Cloud Developer / Consultant",
  email: "javier.sanchez.lancha99@gmail.com",
  linkedin: "https://www.linkedin.com/in/javiersanchezlancha",
  github: "https://github.com/javisl99",
  location: {
    es: "Sevilla, España",
    en: "Seville, Spain",
  },
};

export const pageSlugs = {
  home: "",
  experience: "/experience",
  projects: "/projects",
  about: "/about",
  contact: "/contact",
} as const;

type MetadataEntry = {
  title: string;
  description: string;
  keywords: string[];
};

type SiteLocaleCopy = {
  localeName: string;
  languageSwitch: string;
  roleLabel: string;
  navigation: Array<{ href: (typeof pageSlugs)[keyof typeof pageSlugs]; label: string }>;
  metadata: {
    defaultTitle: string;
    defaultDescription: string;
    keywords: string[];
    pages: Record<Exclude<keyof typeof pageSlugs, "home"> | "projectDetail", MetadataEntry>;
  };
  ctas: {
    resume: string;
    email: string;
    linkedin: string;
    contact: string;
    experience: string;
    projects: string;
    howIWork: string;
  };
  home: {
    hero: {
      eyebrow: string;
      title: string;
      summary: string;
      proof: string;
      quickFacts: QuickFact[];
      supportLinks: Array<{ href: string; label: string; external?: boolean }>;
    };
    strengths: { eyebrow: string; title: string; description: string; items: CopyCard[] };
    career: { eyebrow: string; title: string; description: string };
    projects: { eyebrow: string; title: string; description: string };
    approach: { eyebrow: string; title: string; description: string; items: CopyCard[] };
    contact: {
      eyebrow: string;
      title: string;
      description: string;
      fitTitle: string;
      fitBullets: string[];
    };
  };
  pages: {
    experience: {
      eyebrow: string;
      title: string;
      intro: string;
      scanTitle: string;
      scanBody: string;
      scanBullets: string[];
    };
    projects: {
      eyebrow: string;
      title: string;
      intro: string;
      scanTitle: string;
      scanBody: string;
      scanBullets: string[];
    };
    about: {
      eyebrow: string;
      title: string;
      intro: string;
      summaryTitle: string;
      summaryBody: string;
      principlesTitle: string;
      principlesIntro: string;
    };
    contact: {
      eyebrow: string;
      title: string;
      intro: string;
      availability: string;
      fitTitle: string;
      fitBullets: string[];
      finalNote: string;
    };
  };
  footer: {
    note: string;
    availability: string;
    builtWith: string;
  };
};

export const siteCopy: Record<Locale, SiteLocaleCopy> = {
  es: {
    localeName: "Español",
    languageSwitch: "View in English",
    roleLabel: "SAP Commerce Cloud Developer / Consultant",
    navigation: [
      { href: pageSlugs.home, label: "Inicio" },
      { href: pageSlugs.experience, label: "Experiencia" },
      { href: pageSlugs.projects, label: "Casos" },
      { href: pageSlugs.about, label: "Cómo trabajo" },
      { href: pageSlugs.contact, label: "Contacto" },
    ],
    metadata: {
      defaultTitle: "Javier Sánchez Lancha | SAP Commerce Cloud Developer / Consultant",
      defaultDescription:
        "Portfolio de Javier Sánchez Lancha, SAP Commerce Cloud Developer orientado a backend, soporte productivo, customización del estándar y consultoría técnica en plataformas e-commerce reales.",
      keywords: [
        "SAP Commerce Cloud Developer",
        "Hybris Developer",
        "Java Backend Developer",
        "SAP Commerce Consultant",
      ],
      pages: {
        experience: {
          title: "Experiencia SAP Commerce Cloud | Javier Sánchez Lancha",
          description:
            "Trayectoria real en SAP Commerce Cloud: base B2B, customización del estándar y ownership en producción con cliente.",
          keywords: [
            "SAP Commerce experience",
            "Hybris consultant",
            "production support SAP Commerce",
            "Java Spring SAP Commerce",
          ],
        },
        projects: {
          title: "Casos SAP Commerce Cloud | Javier Sánchez Lancha",
          description:
            "Casos reales sobre SAP Commerce Cloud con contexto, qué estaba en juego, qué hice y qué demuestra cada etapa.",
          keywords: [
            "SAP Commerce case studies",
            "Hybris projects",
            "checkout pricing stock SAP Commerce",
            "integration objects SAP Commerce",
          ],
        },
        about: {
          title: "Cómo trabajo en SAP Commerce Cloud | Javier Sánchez Lancha",
          description:
            "Principios técnicos, debugging, respeto al estándar y criterio para mantener y evolucionar SAP Commerce Cloud.",
          keywords: [
            "SAP Commerce technical approach",
            "Hybris debugging",
            "standard customization SAP Commerce",
            "Java Spring ecommerce consultant",
          ],
        },
        contact: {
          title: "Contacto | Javier Sánchez Lancha",
          description:
            "Contacto directo para oportunidades SAP Commerce Cloud, Hybris, Java backend y consultoría técnica.",
          keywords: [
            "contact SAP Commerce developer",
            "Hybris developer contact",
            "Java backend consultant",
            "SAP Commerce recruiter",
          ],
        },
        projectDetail: {
          title: "Caso SAP Commerce Cloud | Javier Sánchez Lancha",
          description:
            "Detalle de un caso real en SAP Commerce Cloud explicado para recruiters y perfiles técnicos: contexto, stakes, intervención y señal profesional.",
          keywords: [
            "SAP Commerce case study",
            "Hybris case study",
            "SAP Commerce consultant project",
            "Java backend ecommerce project",
          ],
        },
      },
    },
    ctas: {
      resume: "Descargar CV",
      email: "Escribir email",
      linkedin: "Abrir LinkedIn",
      contact: "Contactar",
      experience: "Ver experiencia",
      projects: "Ver casos",
      howIWork: "Cómo trabajo",
    },
    home: {
      hero: {
        eyebrow: "SAP Commerce Cloud / Hybris / Java Backend",
        title: "SAP Commerce Cloud Developer / Consultant",
        summary:
          "Perfil backend-oriented con experiencia real en plataformas SAP Commerce Cloud vivas: incidencias, soporte productivo, evolutivos y customización segura del estándar.",
        proof:
          "Experiencia real en BuildingCenter con CaixaBank Tech, Claro Perú y Airbus, con foco en checkout, precios, stock, integration objects y mantenimiento de negocio en marcha.",
        quickFacts: [
          {
            label: { es: "Especialización", en: "Specialization" },
            value: { es: "SAP Commerce Cloud / Hybris", en: "SAP Commerce Cloud / Hybris" },
          },
          {
            label: { es: "Base técnica", en: "Technical base" },
            value: { es: "Java, Spring, FlexibleSearch, SQL", en: "Java, Spring, FlexibleSearch, SQL" },
          },
          {
            label: { es: "Producción", en: "Production" },
            value: { es: "Incidencias, soporte y evolutivo", en: "Incidents, support, and enhancements" },
          },
          {
            label: { es: "Áreas core", en: "Core flows" },
            value: {
              es: "Checkout, pricing, stock e integration objects",
              en: "Checkout, pricing, stock, and integration objects",
            },
          },
        ],
        supportLinks: [
          { href: "/projects", label: "Ver casos" },
          { href: "/cv", label: "Descargar CV", external: true },
          { href: siteSettings.linkedin, label: "LinkedIn", external: true },
        ],
      },
      strengths: {
        eyebrow: "Why hire me",
        title: "Señales claras de valor para recruiting técnico",
        description:
          "No vendo una experiencia genérica. Estas son las razones concretas por las que mi perfil encaja bien en equipos que trabajan de verdad con SAP Commerce Cloud.",
        items: [
          {
            title: {
              es: "Experiencia SAP Commerce en producción",
              en: "Real SAP Commerce production experience",
            },
            body: {
              es: "He trabajado sobre plataformas vivas, no sobre demos: soporte productivo, incidencias, mantenimiento y evolución continua.",
              en: "I have worked on live platforms, not demos: production support, incidents, maintenance, and ongoing evolution.",
            },
          },
          {
            title: {
              es: "Ownership en soporte e incidencias",
              en: "Incident ownership and production support",
            },
            body: {
              es: "He pasado de resolver incidencias a asumir ownership del incidental y su seguimiento técnico con cliente.",
              en: "I grew from resolving incidents to owning the incident stream and the technical follow-up with the client.",
            },
          },
          {
            title: {
              es: "Criterio al tocar el estándar",
              en: "Standard-aware customization judgment",
            },
            body: {
              es: "He trabajado sobre checkout, precios, stock e integration objects entendiendo cuándo extender SAP Commerce y cuándo no.",
              en: "I have worked on checkout, pricing, stock, and integration objects with a clear view of when to extend SAP Commerce and when not to.",
            },
          },
          {
            title: {
              es: "Base back-end útil para proyecto real",
              en: "Back-end foundation that matters on real projects",
            },
            body: {
              es: "Mi perfil está apoyado en Java, Spring, debugging, análisis funcional y continuidad técnica dentro del ecosistema SAP.",
              en: "My profile is grounded in Java, Spring, debugging, functional analysis, and technical continuity inside the SAP ecosystem.",
            },
          },
          {
            title: {
              es: "Comunicación técnica con cliente",
              en: "Client-facing technical communication",
            },
            body: {
              es: "No me limito al código: también explico estado, riesgos y siguientes pasos cuando el contexto lo exige.",
              en: "I do not stay only in the code: I also explain status, risks, and next steps when the context demands it.",
            },
          },
        ],
      },
      career: {
        eyebrow: "Career progression",
        title: "Una trayectoria que muestra evolución real, no solo puestos",
        description:
          "De base B2B y primer contacto con SAP Commerce, a profundidad sobre el estándar y después a ownership en producción con relación directa con cliente.",
      },
      projects: {
        eyebrow: "Selected case studies",
        title: "Casos SAP Commerce Cloud que un recruiter puede leer rápido",
        description:
          "Cada caso explica el contexto, qué estaba en juego, qué hice y qué demuestra sobre mi perfil, sin métricas inventadas ni storytelling vacío.",
      },
      approach: {
        eyebrow: "How I work",
        title: "Cómo pienso cuando toco SAP Commerce Cloud",
        description:
          "Mi enfoque técnico parte de mantener la plataforma entendible, estable y alineada con negocio, especialmente en flujos sensibles y producción.",
        items: [
          {
            title: {
              es: "Entender el estándar antes de personalizar",
              en: "Understand the standard before customizing",
            },
            body: {
              es: "Una customización útil en SAP Commerce es la que resuelve el problema sin romper innecesariamente el comportamiento base.",
              en: "A useful SAP Commerce customization solves the problem without unnecessarily breaking the baseline behavior.",
            },
          },
          {
            title: {
              es: "Debugging y root cause analysis antes de parchear",
              en: "Debugging and root cause analysis before patching",
            },
            body: {
              es: "En soporte productivo me importa entender la causa del problema, no solo cerrar el ticket rápido.",
              en: "In production support I care about understanding the root cause, not only closing the ticket quickly.",
            },
          },
          {
            title: {
              es: "Mantenibilidad como criterio real",
              en: "Maintainability as a real criterion",
            },
            body: {
              es: "Tocar checkout, pricing o stock exige pensar también en el impacto futuro sobre la plataforma y el equipo.",
              en: "Working on checkout, pricing, or stock also means thinking about the future impact on the platform and the team.",
            },
          },
          {
            title: {
              es: "Comprensión funcional además del código",
              en: "Functional understanding beyond the code",
            },
            body: {
              es: "Me interesa conectar negocio, riesgo y decisión técnica para no trabajar a ciegas en un e-commerce vivo.",
              en: "I care about connecting business context, risk, and technical decisions so I am not working blindly on a live e-commerce platform.",
            },
          },
        ],
      },
      contact: {
        eyebrow: "Contact",
        title: "Si buscas un perfil SAP Commerce Cloud técnico y aterrizado, hablemos",
        description:
          "La siguiente conversación debería ser directa: experiencia real, foco backend, producción y criterio para trabajar sobre el estándar sin humo.",
        fitTitle: "Puedo aportar especialmente si buscas",
        fitBullets: [
          "Soporte productivo e incidencias complejas en SAP Commerce",
          "Backend Java / Spring dentro del ecosistema Hybris",
          "Customización de checkout, pricing, stock e integration objects",
          "Comunicación técnica clara con cliente y equipo",
        ],
      },
    },
    pages: {
      experience: {
        eyebrow: "Experiencia",
        title: "Trayectoria en SAP Commerce Cloud: de base B2B a ownership en producción",
        intro:
          "Mi recorrido no es una lista de tareas. Explica cómo pasé de construir base back-end en un B2B nuevo a trabajar con más criterio sobre el estándar y después a sostener una plataforma real en producción con cliente.",
        scanTitle: "Lectura rápida para recruiters",
        scanBody:
          "Tres etapas, tres señales: base técnica, profundidad sobre el estándar y autonomía en producción.",
        scanBullets: [
          "Airbus: punto de partida back-end sobre SAP Commerce",
          "Claro Perú: trabajo sobre procesos core y estándar",
          "BuildingCenter: soporte, ownership y trato directo con cliente",
        ],
      },
      projects: {
        eyebrow: "Casos",
        title: "Casos SAP Commerce Cloud contados desde impacto y señal profesional",
        intro:
          "Aquí no hay demos genéricas. Son casos reales donde se ve qué contexto había, qué parte del sistema estaba en juego y qué deja ver cada etapa sobre mi forma de trabajar.",
        scanTitle: "Qué encontrarás aquí",
        scanBody:
          "Cada caso está escrito para que tanto un recruiter como un tech lead entiendan rápido el tipo de proyecto, la intervención y la señal técnica que deja.",
        scanBullets: [
          "Contexto real de negocio y plataforma",
          "Qué estaba en juego y qué hice",
          "Qué demuestra del perfil técnico",
        ],
      },
      about: {
        eyebrow: "Cómo trabajo",
        title: "Trabajo SAP Commerce con criterio técnico, foco backend y sentido de plataforma",
        intro:
          "Me interesa aportar en proyectos donde el trabajo técnico no sea ejecutar tareas sin contexto, sino entender el estándar, diagnosticar problemas reales y ayudar a que la plataforma evolucione sin perder estabilidad.",
        summaryTitle: "Resumen técnico",
        summaryBody:
          "Backend Java/Spring, producción, debugging, comprensión funcional y criterio para tocar el estándar SAP Commerce sin convertir cada necesidad en una ruptura innecesaria.",
        principlesTitle: "Principios técnicos",
        principlesIntro:
          "Son las ideas que más guían mi trabajo cuando participo en soporte, evolutivo o customizaciones sobre áreas sensibles del negocio.",
      },
      contact: {
        eyebrow: "Contacto",
        title: "Hablemos si buscas un perfil SAP Commerce Cloud con experiencia real",
        intro:
          "Estoy abierto a conversaciones sobre posiciones SAP Commerce Cloud / Hybris donde se valore backend, producción, relación con cliente y criterio al evolucionar plataformas vivas.",
        availability:
          "La forma más directa de contactarme es por email. LinkedIn y CV están también a un clic para una validación rápida.",
        fitTitle: "Encajo especialmente bien en equipos que necesitan",
        fitBullets: [
          "Soporte productivo y resolución de incidencias con contexto",
          "Participación en evolutivos sobre una base SAP Commerce ya viva",
          "Customizaciones con respeto al estándar y foco en mantenibilidad",
          "Un perfil técnico que también pueda hablar claro con cliente",
        ],
        finalNote:
          "Si estás evaluando perfiles para SAP Commerce Cloud, Hybris o Java backend en consultoría técnica, el siguiente paso natural es una conversación corta y directa.",
      },
    },
    footer: {
      note:
        "Portfolio técnico orientado a recruiters y leads: SAP Commerce Cloud, backend Java, soporte productivo y criterio de customización.",
      availability:
        "Disponible para conversaciones sobre SAP Commerce Cloud / Hybris, Java backend y consultoría técnica orientada a plataformas reales.",
      builtWith: "Next.js, TypeScript, Tailwind y MDX.",
    },
  },
  en: {
    localeName: "English",
    languageSwitch: "Ver en Español",
    roleLabel: "SAP Commerce Cloud Developer / Consultant",
    navigation: [
      { href: pageSlugs.home, label: "Home" },
      { href: pageSlugs.experience, label: "Experience" },
      { href: pageSlugs.projects, label: "Case Studies" },
      { href: pageSlugs.about, label: "How I work" },
      { href: pageSlugs.contact, label: "Contact" },
    ],
    metadata: {
      defaultTitle: "Javier Sánchez Lancha | SAP Commerce Cloud Developer / Consultant",
      defaultDescription:
        "Portfolio of Javier Sánchez Lancha, a SAP Commerce Cloud Developer focused on back-end delivery, production support, standard-aware customization, and technical consulting for real e-commerce platforms.",
      keywords: [
        "SAP Commerce Cloud Developer",
        "Hybris Developer",
        "Java Backend Developer",
        "SAP Commerce Consultant",
      ],
      pages: {
        experience: {
          title: "SAP Commerce Cloud Experience | Javier Sánchez Lancha",
          description:
            "Real SAP Commerce Cloud experience across B2B foundations, standard customization, and production ownership with direct client exposure.",
          keywords: [
            "SAP Commerce experience",
            "Hybris consultant",
            "production support SAP Commerce",
            "Java Spring SAP Commerce",
          ],
        },
        projects: {
          title: "SAP Commerce Cloud Case Studies | Javier Sánchez Lancha",
          description:
            "Real SAP Commerce Cloud case studies explained through context, what was at stake, what I did, and what each stage proves.",
          keywords: [
            "SAP Commerce case studies",
            "Hybris projects",
            "checkout pricing stock SAP Commerce",
            "integration objects SAP Commerce",
          ],
        },
        about: {
          title: "How I work in SAP Commerce Cloud | Javier Sánchez Lancha",
          description:
            "Technical principles, debugging mindset, respect for the standard, and judgment for maintaining and evolving SAP Commerce Cloud.",
          keywords: [
            "SAP Commerce technical approach",
            "Hybris debugging",
            "standard customization SAP Commerce",
            "Java Spring ecommerce consultant",
          ],
        },
        contact: {
          title: "Contact | Javier Sánchez Lancha",
          description:
            "Direct contact for SAP Commerce Cloud, Hybris, Java back-end, and technical consulting opportunities.",
          keywords: [
            "contact SAP Commerce developer",
            "Hybris developer contact",
            "Java backend consultant",
            "SAP Commerce recruiter",
          ],
        },
        projectDetail: {
          title: "SAP Commerce Cloud Case Study | Javier Sánchez Lancha",
          description:
            "A real SAP Commerce Cloud case study for recruiters and technical reviewers: context, stakes, intervention, and professional signal.",
          keywords: [
            "SAP Commerce case study",
            "Hybris case study",
            "SAP Commerce consultant project",
            "Java backend ecommerce project",
          ],
        },
      },
    },
    ctas: {
      resume: "Download CV",
      email: "Send email",
      linkedin: "Open LinkedIn",
      contact: "Contact",
      experience: "View experience",
      projects: "View case studies",
      howIWork: "How I work",
    },
    home: {
      hero: {
        eyebrow: "SAP Commerce Cloud / Hybris / Java Back End",
        title: "SAP Commerce Cloud Developer / Consultant",
        summary:
          "Backend-oriented profile with real experience in live SAP Commerce Cloud platforms: production incidents, support work, enhancements, and standard-aware customization.",
        proof:
          "Real project experience across BuildingCenter with CaixaBank Tech, Claro Perú, and Airbus, with hands-on exposure to checkout, pricing, stock, integration objects, and business-critical platform maintenance.",
        quickFacts: [
          {
            label: { es: "Especialización", en: "Specialization" },
            value: { es: "SAP Commerce Cloud / Hybris", en: "SAP Commerce Cloud / Hybris" },
          },
          {
            label: { es: "Base técnica", en: "Technical base" },
            value: { es: "Java, Spring, FlexibleSearch, SQL", en: "Java, Spring, FlexibleSearch, SQL" },
          },
          {
            label: { es: "Producción", en: "Production" },
            value: { es: "Incidencias, soporte y evolutivo", en: "Incidents, support, and enhancements" },
          },
          {
            label: { es: "Áreas core", en: "Core flows" },
            value: {
              es: "Checkout, pricing, stock e integration objects",
              en: "Checkout, pricing, stock, and integration objects",
            },
          },
        ],
        supportLinks: [
          { href: "/projects", label: "View case studies" },
          { href: "/cv", label: "Download CV", external: true },
          { href: siteSettings.linkedin, label: "LinkedIn", external: true },
        ],
      },
      strengths: {
        eyebrow: "Why hire me",
        title: "Clear signals for recruiters and technical hiring teams",
        description:
          "I am not positioning myself as a generic developer. These are the concrete reasons why my profile fits teams working seriously with SAP Commerce Cloud.",
        items: [
          {
            title: {
              es: "Experiencia SAP Commerce en producción",
              en: "Real SAP Commerce production experience",
            },
            body: {
              es: "He trabajado sobre plataformas vivas, no sobre demos: soporte productivo, incidencias, mantenimiento y evolución continua.",
              en: "I have worked on live platforms, not demos: production support, incidents, maintenance, and continuous platform evolution.",
            },
          },
          {
            title: {
              es: "Ownership en soporte e incidencias",
              en: "Incident ownership and production support",
            },
            body: {
              es: "He pasado de resolver incidencias a asumir ownership del incidental y su seguimiento técnico con cliente.",
              en: "I grew from resolving incidents to owning the incident stream and the technical follow-up with the client.",
            },
          },
          {
            title: {
              es: "Criterio al tocar el estándar",
              en: "Standard-aware customization judgment",
            },
            body: {
              es: "He trabajado sobre checkout, precios, stock e integration objects entendiendo cuándo extender SAP Commerce y cuándo no.",
              en: "I have worked on checkout, pricing, stock, and integration objects with a clear sense of when to extend SAP Commerce and when not to.",
            },
          },
          {
            title: {
              es: "Base back-end útil para proyecto real",
              en: "Back-end foundation that matters on real projects",
            },
            body: {
              es: "Mi perfil está apoyado en Java, Spring, debugging, análisis funcional y continuidad técnica dentro del ecosistema SAP.",
              en: "My profile is grounded in Java, Spring, debugging, functional analysis, and technical continuity inside the SAP ecosystem.",
            },
          },
          {
            title: {
              es: "Comunicación técnica con cliente",
              en: "Client-facing technical communication",
            },
            body: {
              es: "No me limito al código: también explico estado, riesgos y siguientes pasos cuando el contexto lo exige.",
              en: "I do not stay only in the code: I also explain status, risks, and next steps when the context requires it.",
            },
          },
        ],
      },
      career: {
        eyebrow: "Career progression",
        title: "A path that shows real growth, not just job titles",
        description:
          "From a greenfield B2B foundation and first SAP Commerce exposure, to deeper work on the standard, and then to production ownership with direct client communication.",
      },
      projects: {
        eyebrow: "Selected case studies",
        title: "SAP Commerce Cloud case studies recruiters can scan quickly",
        description:
          "Each case explains the context, what was at stake, what I did, and what it proves about my profile, without invented metrics or empty storytelling.",
      },
      approach: {
        eyebrow: "How I work",
        title: "How I think when I work on SAP Commerce Cloud",
        description:
          "My technical approach starts from keeping the platform understandable, stable, and aligned with business needs, especially in sensitive flows and production contexts.",
        items: [
          {
            title: {
              es: "Entender el estándar antes de personalizar",
              en: "Understand the standard before customizing",
            },
            body: {
              es: "Una customización útil en SAP Commerce es la que resuelve el problema sin romper innecesariamente el comportamiento base.",
              en: "A useful SAP Commerce customization solves the problem without unnecessarily breaking the baseline behavior.",
            },
          },
          {
            title: {
              es: "Debugging y root cause analysis antes de parchear",
              en: "Debugging and root cause analysis before patching",
            },
            body: {
              es: "En soporte productivo me importa entender la causa del problema, no solo cerrar el ticket rápido.",
              en: "In production support, I care about understanding the root cause, not just closing the ticket quickly.",
            },
          },
          {
            title: {
              es: "Mantenibilidad como criterio real",
              en: "Maintainability as a real criterion",
            },
            body: {
              es: "Tocar checkout, pricing o stock exige pensar también en el impacto futuro sobre la plataforma y el equipo.",
              en: "Working on checkout, pricing, or stock also means thinking about the future impact on the platform and the team.",
            },
          },
          {
            title: {
              es: "Comprensión funcional además del código",
              en: "Functional understanding beyond the code",
            },
            body: {
              es: "Me interesa conectar negocio, riesgo y decisión técnica para no trabajar a ciegas en un e-commerce vivo.",
              en: "I care about connecting business context, risk, and technical decisions so I am not working blindly on a live e-commerce platform.",
            },
          },
        ],
      },
      contact: {
        eyebrow: "Contact",
        title: "If you need a grounded SAP Commerce Cloud profile, let’s talk",
        description:
          "The next conversation should be direct: real experience, back-end focus, production work, and sound judgment for working on the standard without hype.",
        fitTitle: "I can add value especially if you need",
        fitBullets: [
          "Production support and complex incident handling in SAP Commerce",
          "Java / Spring back-end work inside the Hybris ecosystem",
          "Customization around checkout, pricing, stock, and integration objects",
          "Clear technical communication with both client and team",
        ],
      },
    },
    pages: {
      experience: {
        eyebrow: "Experience",
        title: "SAP Commerce Cloud experience: from B2B foundation to production ownership",
        intro:
          "This is not a list of tasks. It explains how I moved from building back-end foundations in a new B2B project to deeper work on the standard and then to sustaining a real platform in production with client exposure.",
        scanTitle: "Quick recruiter scan",
        scanBody:
          "Three stages, three signals: technical foundation, standard depth, and production autonomy.",
        scanBullets: [
          "Airbus: back-end starting point on SAP Commerce",
          "Claro Perú: work on core flows and the platform standard",
          "BuildingCenter: support, ownership, and direct client communication",
        ],
      },
      projects: {
        eyebrow: "Case studies",
        title: "SAP Commerce Cloud case studies told through impact and technical signal",
        intro:
          "These are not generic demos. They are real cases showing the business context, what part of the platform was at stake, and what each stage says about how I work.",
        scanTitle: "What you will find here",
        scanBody:
          "Each case is written so that both a recruiter and a tech lead can quickly understand the project type, my intervention, and the technical signal it leaves behind.",
        scanBullets: [
          "Real business and platform context",
          "What was at stake and what I did",
          "What the case proves about the profile",
        ],
      },
      about: {
        eyebrow: "How I work",
        title: "I work on SAP Commerce with technical judgment, back-end focus, and platform thinking",
        intro:
          "I want to contribute in projects where the technical role is not just task execution, but understanding the standard, diagnosing real issues, and helping the platform evolve without losing stability.",
        summaryTitle: "Technical summary",
        summaryBody:
          "Back-end Java/Spring, production work, debugging, functional understanding, and judgment for touching the SAP Commerce standard without turning every requirement into an unnecessary divergence.",
        principlesTitle: "Technical principles",
        principlesIntro:
          "These are the ideas that most guide my work when I contribute to support, change delivery, or customizations over business-sensitive areas.",
      },
      contact: {
        eyebrow: "Contact",
        title: "Let’s talk if you need a SAP Commerce Cloud profile with real project experience",
        intro:
          "I am open to conversations about SAP Commerce Cloud / Hybris roles where back-end depth, production work, client communication, and sound judgment for evolving live platforms all matter.",
        availability:
          "The fastest way to reach me is email. LinkedIn and the CV are also one click away for a quick profile check.",
        fitTitle: "I fit especially well in teams that need",
        fitBullets: [
          "Production support and incident resolution with context",
          "Enhancement work on an already-live SAP Commerce platform",
          "Standard-aware customization with maintainability in mind",
          "A technical profile that can also communicate clearly with clients",
        ],
        finalNote:
          "If you are reviewing profiles for SAP Commerce Cloud, Hybris, or Java back-end roles in technical consulting, the natural next step is a short direct conversation.",
      },
    },
    footer: {
      note:
        "Technical portfolio built for recruiters and leads: SAP Commerce Cloud, Java back-end, production support, and sound customization judgment.",
      availability:
        "Open to conversations around SAP Commerce Cloud / Hybris, Java back-end, and technical consulting for real platforms.",
      builtWith: "Built with Next.js, TypeScript, Tailwind, and MDX.",
    },
  },
};
