import type { CopyCard, HighlightPill, QuickFact, SkillCategory } from "@/data/types";
import { getCvFilePath } from "@/lib/cv";
import type { Locale } from "@/lib/i18n";

export const siteSettings = {
  name: "Javier Sanchez Lancha",
  schemaRole: "Backend Software Engineer",
  email: "javier.sanchez.lancha99@gmail.com",
  linkedin: "https://www.linkedin.com/in/javiersanchezlancha",
  github: "https://github.com/javisl99",
  siteUrl:
    process.env.NEXT_PUBLIC_SITE_URL ??
    process.env.SITE_URL ??
    (process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : undefined) ??
    (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : undefined) ??
    "https://javisl99.github.io/portfolio",
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
    about: string;
  };
  home: {
    hero: {
      eyebrow: string;
      title: string;
      summary: string;
      proof: string;
      quickFacts: QuickFact[];
      highlights: HighlightPill[];
      supportLinks: Array<{ href: string; label: string; external?: boolean }>;
    };
    strengths: { eyebrow: string; title: string; description: string; items: CopyCard[] };
    career: { eyebrow: string; title: string; description: string };
    value: { eyebrow: string; title: string; description: string; items: CopyCard[] };
    projects: { eyebrow: string; title: string; description: string };
    ai: { eyebrow: string; title: string; description: string; items: CopyCard[] };
    skills: { eyebrow: string; title: string; description: string; categories: SkillCategory[] };
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
      valueEyebrow: string;
      valueTitle: string;
      valueDescription: string;
      valueItems: CopyCard[];
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
      principlesItems: CopyCard[];
    };
    contact: {
      eyebrow: string;
      title: string;
      intro: string;
      availability: string;
      heroCardEyebrow: string;
      heroCardTitle: string;
      heroCardBullets: string[];
      fitTitle: string;
      fitBullets: string[];
      channelsTitle: string;
      channelsItems: Array<{ label: string; value: string; href?: string }>;
      channelsNote: string;
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
    roleLabel: "Backend Software Engineer",
    navigation: [
      { href: pageSlugs.home, label: "Inicio" },
      { href: pageSlugs.experience, label: "Experiencia" },
      { href: pageSlugs.projects, label: "Proyectos" },
      { href: pageSlugs.about, label: "Sobre mí" },
      { href: pageSlugs.contact, label: "Contacto" },
    ],
    metadata: {
      defaultTitle: "Backend Software Engineer | Java, Spring, REST APIs & SAP Commerce Cloud",
      defaultDescription:
        "Backend Software Engineer con experiencia en Java, Spring, SAP Commerce Cloud, APIs REST, SQL e incidencias de producción sobre plataformas de negocio.",
      keywords: [
        "Backend Software Engineer",
        "Java Backend Developer",
        "Spring Developer",
        "SAP Commerce Cloud",
        "Java",
        "Spring",
        "REST APIs",
        "SQL",
        "Integraciones",
        "Backend de producción",
        "E-commerce B2B",
        "E-commerce B2C",
      ],
      pages: {
        experience: {
          title: "Experiencia | Backend Software Engineer | Javier Sanchez Lancha",
          description:
            "Experiencia profesional en Java backend, Spring, SAP Commerce Cloud, integraciones, soporte productivo y colaboración con negocio, QA y cliente.",
          keywords: [
            "Backend Software Engineer experience",
            "Java Spring experience",
            "SAP Commerce Cloud backend",
            "Enterprise platform engineering",
          ],
        },
        projects: {
          title: "Proyectos | Java Backend y plataformas de negocio",
          description:
            "Casos reales de backend Java y SAP Commerce Cloud explicados con contexto, problema, solución, stack técnico e impacto cualitativo.",
          keywords: [
            "Java backend projects",
            "Enterprise platforms portfolio",
            "E-commerce platforms case studies",
            "SAP Commerce Cloud projects",
          ],
        },
        about: {
          title: "Sobre mí | Java Backend, Spring y SAP Commerce Cloud",
          description:
            "Perfil backend centrado en Java, Spring, APIs REST, SQL, plataformas de negocio y colaboración técnica con producto, QA y cliente.",
          keywords: [
            "Backend engineering profile",
            "Java backend profile",
            "Java Spring software engineering",
            "Backend engineer for business platforms",
          ],
        },
        contact: {
          title: "Contacto | Javier Sanchez Lancha",
          description:
            "Contacto para oportunidades como Backend Software Engineer o Java Backend Developer con foco en Spring, APIs, SQL e integraciones.",
          keywords: [
            "Backend Software Engineer contact",
            "Java Backend Developer contact",
            "Spring Developer contact",
            "Enterprise platform engineer recruiter",
          ],
        },
        projectDetail: {
          title: "Detalle de proyecto | Javier Sanchez Lancha",
          description:
            "Caso real explicado desde el contexto, el problema, la solución técnica, el stack y lo que demuestra sobre mi perfil backend.",
          keywords: [
            "Software engineering case study",
            "Enterprise platform project",
            "Java backend case study",
            "SAP Commerce Cloud case study",
          ],
        },
      },
    },
    ctas: {
      resume: "Descargar CV",
      email: "Enviar email",
      linkedin: "Abrir LinkedIn",
      contact: "Contactar",
      experience: "Ver experiencia",
      projects: "Ver proyectos",
      about: "Sobre mí",
    },
    home: {
      hero: {
        eyebrow: "Backend Software Engineer · Java · Spring · REST APIs · SAP Commerce Cloud",
        title: "Backend Software Engineer | Java, Spring y SAP Commerce Cloud",
        summary:
          "Desarrollo backend con Java y Spring sobre plataformas en producción, con foco en SAP Commerce Cloud, integraciones, incidencias y evolución funcional.",
        proof:
          "Trabajo con APIs REST, SQL, jobs, interceptors, validators y colaboración diaria con QA, negocio y cliente.",
        quickFacts: [
          {
            label: { es: "Foco", en: "Focus" },
            value: { es: "Java backend, Spring, APIs REST y SQL", en: "Java backend, Spring, REST APIs, and SQL" },
          },
          {
            label: { es: "Especialidad", en: "Specialty" },
            value: {
              es: "SAP Commerce Cloud sobre e-commerce B2B/B2C y plataformas de negocio",
              en: "SAP Commerce Cloud across B2B/B2C commerce and business platforms",
            },
          },
          {
            label: { es: "Producción", en: "Production" },
            value: {
              es: "Integraciones, incidencias, soporte productivo y evolución funcional",
              en: "Integrations, incidents, production support, and product evolution",
            },
          },
          {
            label: { es: "Ubicación", en: "Location" },
            value: { es: siteSettings.location.es, en: siteSettings.location.en },
          },
        ],
        highlights: [
          {
            label: { es: "4+ años de experiencia profesional", en: "4+ years of professional experience" },
            shortLabel: { es: "4+ años", en: "4+ years" },
          },
          {
            label: { es: "Java & Spring Backend", en: "Java & Spring Backend" },
            shortLabel: { es: "Java & Spring", en: "Java & Spring" },
          },
          {
            label: { es: "Producción e incidencias reales", en: "Real production support" },
            shortLabel: { es: "Producción real", en: "Production support" },
          },
          { label: { es: "SAP Commerce como especialización", en: "SAP Commerce specialization" } },
        ],
        supportLinks: [
          { href: "/experience", label: "Ver experiencia" },
          { href: "/contact", label: "Contactar" },
          { href: getCvFilePath("es"), label: "Descargar CV", external: true },
        ],
      },
      strengths: {
        eyebrow: "Fortalezas clave",
        title: "Señales rápidas de encaje backend",
        description:
          "Una lectura corta para decidir si merece la pena entrar en experiencia y proyectos.",
        items: [
          {
            title: { es: "Java, Spring y SQL", en: "Java, Spring, and SQL" },
            body: {
              es: "Trabajo backend sobre servicios, APIs REST, modelos de datos, consultas y lógica de negocio.",
              en: "Backend work across services, REST APIs, data models, queries, and business logic.",
            },
          },
          {
            title: { es: "SAP Commerce Cloud", en: "SAP Commerce Cloud" },
            body: {
              es: "Especialización práctica en commerce, Backoffice, FlexibleSearch, jobs, interceptors y validators.",
              en: "Practical specialization across commerce, Backoffice, FlexibleSearch, jobs, interceptors, and validators.",
            },
          },
          {
            title: { es: "Producción e incidencias", en: "Production and incidents" },
            body: {
              es: "Acostumbrado a analizar causas, validar hipótesis y coordinar cambios con QA, negocio y cliente.",
              en: "Used to analyzing causes, validating hypotheses, and coordinating changes with QA, business teams, and clients.",
            },
          },
          {
            title: { es: "Integraciones", en: "Integrations" },
            body: {
              es: "Experiencia conectando sistemas, flujos de e-commerce y necesidades funcionales sin perder estabilidad.",
              en: "Experience connecting systems, commerce flows, and functional needs without losing stability.",
            },
          },
        ],
      },
      career: {
        eyebrow: "Experiencia",
        title: "Trayectoria backend sobre sistemas reales",
        description:
          "De una base en proyectos SAP y B2B a un perfil backend más sólido en Java, Spring, integraciones y soporte productivo.",
      },
      value: {
        eyebrow: "Valor profesional",
        title: "Lo que mejor representa mi valor",
        description: "Una síntesis breve del tipo de trabajo donde más aporto como backend.",
        items: [
          {
            title: { es: "Producción antes que teoría", en: "Production over theory" },
            body: {
              es: "Me interesa que el backend funcione bien cuando hay datos, integraciones, incidencias y usuarios dependiendo del sistema.",
              en: "I care about backend work that holds up when there is data, integrations, incidents, and users depending on the system.",
            },
          },
          {
            title: { es: "Colaboración operativa", en: "Operational collaboration" },
            body: {
              es: "Trabajo bien cerca de QA, negocio y cliente para convertir dudas funcionales en decisiones técnicas accionables.",
              en: "I work well with QA, business teams, and clients to turn functional uncertainty into actionable technical decisions.",
            },
          },
          {
            title: { es: "Ejecución con criterio", en: "Practical execution" },
            body: {
              es: "Priorizo entender el estándar, aislar el problema y entregar cambios que el equipo pueda mantener.",
              en: "I focus on understanding the standard, isolating the problem, and delivering changes the team can maintain.",
            },
          },
          {
            title: { es: "IA como apoyo puntual", en: "AI as selective support" },
            body: {
              es: "La uso para acelerar lectura, documentación y primeras hipótesis, manteniendo siempre la revisión técnica final.",
              en: "I use it to speed up reading, documentation, and early hypotheses while keeping final technical review with me.",
            },
          },
        ],
      },
      projects: {
        eyebrow: "Casos destacados",
        title: "Casos concretos de backend",
        description:
          "Una selección corta sobre producción, checkout, pricing, stock, integraciones y soporte técnico.",
      },
      ai: {
        eyebrow: "Trabajo asistido con IA",
        title: "IA como apoyo de productividad, no como protagonista",
        description:
          "La uso para acelerar lectura de contexto, documentación técnica, automatización puntual y primeras hipótesis. La decisión técnica final y la responsabilidad sobre el código siguen siendo mías.",
        items: [
          {
            title: { es: "Análisis técnico más rápido", en: "Faster technical analysis" },
            body: {
              es: "La utilizo para recorrer contexto, contrastar hipótesis y llegar antes a un plan técnico útil.",
              en: "I accelerate solution exploration, context reading, and early technical hypotheses before implementation.",
            },
          },
          {
            title: { es: "Debugging más eficiente", en: "Better debugging workflows" },
            body: {
              es: "Me ayuda a aislar causas raíz, comparar caminos alternativos y estructurar la investigación de incidencias complejas.",
              en: "I use them to isolate root causes, review alternative paths, and structure technical investigation.",
            },
          },
          {
            title: { es: "Documentación y automatización", en: "Documentation and automation" },
            body: {
              es: "La aprovecho para documentar decisiones, generar scripts y automatizar trabajo repetitivo para centrarme en arquitectura y valor de negocio.",
              en: "They help me document better, generate scripts, and automate repetitive work so I can focus on architecture and business value.",
            },
          },
          {
            title: { es: "Soporte a calidad de código", en: "Code quality support" },
            body: {
              es: "Aporto más velocidad sin renunciar a la revisión crítica ni a que la decisión técnica final y la responsabilidad del resultado sean mías.",
              en: "I move faster without giving up maintainability, critical review, or ownership of final technical decisions.",
            },
          },
        ],
      },
      skills: {
        eyebrow: "Áreas de trabajo",
        title: "Tecnologías y áreas en las que más aporto",
        description:
          "El stack importa, pero también el contexto donde lo aplico: backend Java, integraciones, plataformas de negocio, SQL y colaboración efectiva.",
        categories: [
          {
            title: { es: "Backend", en: "Backend" },
            items: ["Java", "Spring", "Spring Boot", "REST APIs", "SQL", "Software Engineering"],
          },
          {
            title: { es: "Plataformas de negocio", en: "Enterprise Platforms" },
            items: ["SAP Commerce Cloud", "Hybris", "Backoffice", "Impex", "FlexibleSearch", "B2B/B2C E-commerce"],
          },
          {
            title: { es: "Cloud y entrega", en: "Cloud & DevOps" },
            items: ["Docker", "Azure", "Git", "CI/CD"],
          },
          {
            title: { es: "IA aplicada al trabajo técnico", en: "AI-Assisted Development" },
            items: ["Codex", "ChatGPT", "Generative AI", "Technical Analysis", "Automation"],
          },
          {
            title: { es: "Colaboración y análisis", en: "Soft Skills" },
            items: ["Problem Solving", "Client Collaboration", "Requirements Analysis", "Teamwork", "Ownership"],
          },
        ],
      },
      contact: {
        eyebrow: "Contacto",
        title: "Hablemos",
        description: "Email, LinkedIn y CV para valorar rápido si mi perfil encaja con tu equipo.",
        fitTitle: "Encaje especialmente bien en equipos que buscan",
        fitBullets: [
          "Backend/Java Developer con experiencia en APIs, integraciones y lógica de producto",
          "Perfil con experiencia en producción, incidencias y evolución backend de producto",
          "Capacidad para resolver problemas complejos colaborando con producto, QA, negocio y cliente",
        ],
      },
    },
    pages: {
      experience: {
        eyebrow: "Experiencia",
        title: "Trayectoria backend: de SAP a Java, Spring y producción",
        intro:
          "Esta página resume cómo he pasado de una base SAP/ABAP y B2B a trabajar en backend Java/Spring sobre SAP Commerce Cloud, APIs, integraciones, incidencias y soporte productivo.",
        scanTitle: "Lectura rápida para recruiters",
        scanBody: "La progresión combina base funcional SAP, desarrollo backend commerce y trabajo actual sobre plataformas activas.",
        scanBullets: [
          "Base inicial en SAP/ABAP y proyectos B2B",
          "Backend con Java, Spring, SAP Commerce Cloud, APIs REST y SQL",
          "Evolución hacia producción, integraciones, incidencias y colaboración con QA/cliente/negocio",
        ],
        valueEyebrow: "Progresión",
        valueTitle: "Cómo ha evolucionado mi perfil backend",
        valueDescription: "No es una lista de tecnologías: es el camino desde base SAP hasta trabajo backend con responsabilidad operativa.",
        valueItems: [
          {
            title: { es: "Primera base técnica", en: "Technical foundation" },
            body: {
              es: "Comencé con SAP, ABAP y proyectos B2B, aprendiendo a moverme en entornos con procesos funcionales y equipos grandes.",
              en: "I started with SAP, ABAP, and B2B projects, learning how to work in functional environments with larger delivery teams.",
            },
          },
          {
            title: { es: "Backend commerce", en: "Commerce backend" },
            body: {
              es: "Después reforcé Java, Spring y SAP Commerce Cloud sobre checkout, pricing, stock, Backoffice, Integration Objects y APIs REST.",
              en: "I then strengthened Java, Spring, and SAP Commerce Cloud across checkout, pricing, stock, Backoffice, Integration Objects, and REST APIs.",
            },
          },
          {
            title: { es: "Producción e incidencias", en: "Production and incidents" },
            body: {
              es: "Mi etapa actual añade soporte productivo, análisis de causa raíz, jobs, interceptors, validators, SQL y coordinación con QA, negocio y cliente.",
              en: "My current stage adds production support, root cause analysis, jobs, interceptors, validators, SQL, and coordination with QA, business teams, and clients.",
            },
          },
          {
            title: { es: "Dirección actual", en: "Current direction" },
            body: {
              es: "Quiero seguir creciendo como Backend Software Engineer generalista, con SAP Commerce Cloud como especialización fuerte y no como límite.",
              en: "I want to keep growing as a broader Backend Software Engineer, with SAP Commerce Cloud as a strong specialization rather than a limitation.",
            },
          },
        ],
      },
      projects: {
        eyebrow: "Proyectos",
        title: "Casos donde se ve el trabajo técnico",
        intro:
          "Estos casos muestran zonas concretas donde he trabajado: producción, checkout, pricing, stock, integraciones, soporte e investigación de incidencias.",
        scanTitle: "Qué mirar en cada caso",
        scanBody: "La señal importante está en el problema, la contribución backend y el stack usado, no en un relato largo.",
        scanBullets: [
          "Qué parte del sistema estaba en juego",
          "Qué hice con Java, Spring, SAP Commerce Cloud, SQL o APIs",
          "Qué demuestra sobre análisis, soporte, integraciones o entrega",
        ],
      },
        about: {
          eyebrow: "Sobre mí",
          title: "Cómo trabajo cuando el backend tiene contexto",
          intro:
            "Más que repetir stack, aquí explico mi forma de analizar, colaborar y tomar decisiones cuando hay requisitos funcionales, incidencias o zonas sensibles del producto.",
          summaryTitle: "Forma de trabajo",
          summaryBody:
            "Antes de implementar intento entender el flujo, los datos, el estándar de la plataforma y quién necesita la respuesta. Esa base me ayuda a proponer cambios más seguros y a comunicar mejor con QA, negocio y cliente.",
          principlesTitle: "Cómo trabajo",
          principlesIntro:
            "Cuatro hábitos que se repiten en mi día a día cuando trabajo sobre backend, producción y equipos mixtos.",
          principlesItems: [
            {
              title: { es: "Antes de tocar código", en: "Before touching code" },
              body: {
                es: "Reviso el flujo, los datos afectados, el comportamiento estándar y los riesgos de romper algo que ya funciona.",
                en: "I review the flow, affected data, standard behavior, and the risk of breaking something that already works.",
              },
            },
            {
              title: { es: "Cuando hay una incidencia", en: "When there is an incident" },
              body: {
                es: "Ordeno síntomas, logs, consultas, hipótesis y validaciones para llegar a una causa probable sin saltar demasiado pronto a una solución.",
                en: "I organize symptoms, logs, queries, hypotheses, and validations to reach a likely cause before jumping into a fix.",
              },
            },
            {
              title: { es: "Cuando negocio necesita una respuesta", en: "When business needs an answer" },
              body: {
                es: "Traduzco el problema técnico a impacto funcional y próximos pasos claros para que QA, cliente y negocio puedan decidir.",
                en: "I translate the technical problem into functional impact and clear next steps so QA, client, and business stakeholders can decide.",
              },
            },
            {
              title: { es: "Cómo uso IA", en: "How I use AI" },
              body: {
                es: "La uso para acelerar lectura de contexto, documentación y alternativas, pero no para sustituir análisis, pruebas ni responsabilidad técnica.",
                en: "I use it to speed up context reading, documentation, and alternatives, but not to replace analysis, testing, or technical ownership.",
              },
            },
          ],
        },
        contact: {
          eyebrow: "Contacto",
          title: "Hablemos",
          intro: "Contacto directo para oportunidades Backend Software Engineer o Java Backend Developer.",
          availability: "Disponible para equipos que necesiten backend Java/Spring, SAP Commerce Cloud o experiencia en soporte productivo.",
          heroCardEyebrow: "Disponibilidad",
          heroCardTitle: "Disponible para valorar encaje",
          heroCardBullets: [
            "Equipos backend sobre Java, Spring, APIs y lógica de producto",
            "Plataformas e-commerce B2B/B2C con complejidad real",
            "Contextos donde calidad, responsabilidad técnica y colaboración importan",
          ],
          fitTitle: "Oportunidades especialmente alineadas",
          fitBullets: [
            "Backend/Java Developer con experiencia en lógica de producto, integraciones y APIs",
            "Experiencia en producción, incidencias y evolución backend junto a QA, negocio y cliente",
            "SAP Commerce Cloud como especialización fuerte, sin limitar mi perfil a consultoría SAP",
          ],
          channelsTitle: "Canales",
          channelsItems: [
            { label: "Email", value: siteSettings.email, href: `mailto:${siteSettings.email}` },
            { label: "LinkedIn", value: siteSettings.linkedin, href: siteSettings.linkedin },
            { label: "GitHub", value: siteSettings.github, href: siteSettings.github },
            { label: "Ubicación", value: siteSettings.location.es },
          ],
          channelsNote:
            "Si el rol encaja, lo más rápido es escribirme por email o LinkedIn y revisar el CV.",
          finalNote:
            "Encaje principal: backend Java/Spring, SAP Commerce Cloud, APIs, SQL, integraciones y soporte productivo.",
        },
    },
    footer: {
      note: "",
      availability:
        "Disponible para oportunidades donde la ingeniería backend, las integraciones y una entrega pragmática importen tanto como la tecnología.",
      builtWith: "Construido con Next.js, TypeScript y una mentalidad de ingeniería pragmática.",
    },
  },
  en: {
    localeName: "English",
    languageSwitch: "Ver en Español",
    roleLabel: "Backend Software Engineer",
    navigation: [
      { href: pageSlugs.home, label: "Home" },
      { href: pageSlugs.experience, label: "Experience" },
      { href: pageSlugs.projects, label: "Projects" },
      { href: pageSlugs.about, label: "About" },
      { href: pageSlugs.contact, label: "Contact" },
    ],
    metadata: {
      defaultTitle: "Backend Software Engineer | Java, Spring, REST APIs & SAP Commerce Cloud",
      defaultDescription:
        "Backend Software Engineer with experience in Java, Spring, SAP Commerce Cloud, REST APIs, SQL, integrations, and production-facing backend work.",
      keywords: [
        "Backend Software Engineer",
        "Java Backend Developer",
        "Spring Developer",
        "SAP Commerce Cloud",
        "Java",
        "Spring",
        "REST APIs",
        "SQL",
        "Integrations",
        "Production Support",
        "E-commerce B2B",
        "E-commerce B2C",
      ],
      pages: {
        experience: {
          title: "Experience | Backend Software Engineer | Javier Sanchez Lancha",
          description:
            "Professional experience across Java backend, Spring, SAP Commerce Cloud, integrations, production support, and collaboration with business, QA, and clients.",
          keywords: [
            "Backend Software Engineer experience",
            "Java Spring engineer",
            "Enterprise platform backend",
            "SAP Commerce Cloud backend engineer",
          ],
        },
        projects: {
          title: "Projects | Java Backend & Enterprise Platforms",
          description:
            "Real backend cases explained through context, problem, technical work, stack, and qualitative impact across SAP Commerce Cloud and business platforms.",
          keywords: [
            "Java backend portfolio",
            "Enterprise platform projects",
            "E-commerce platforms engineer",
            "SAP Commerce Cloud case studies",
          ],
        },
        about: {
          title: "About | Java Backend, Spring, and SAP Commerce Cloud",
          description:
            "Backend profile focused on Java, Spring, REST APIs, SQL, business platforms, and practical collaboration with product, QA, and clients.",
          keywords: [
            "Backend engineering profile",
            "AI-assisted workflows",
            "Java Spring software engineer",
            "Backend engineer for business platforms",
          ],
        },
        contact: {
          title: "Contact | Javier Sanchez Lancha",
          description:
            "Contact Javier for Backend Software Engineer or Java Backend Developer roles focused on Spring, APIs, SQL, integrations, and production systems.",
          keywords: [
            "Backend Software Engineer contact",
            "Java Backend Developer contact",
            "Spring Developer contact",
            "Enterprise platform engineer",
          ],
        },
        projectDetail: {
          title: "Project detail | Javier Sanchez Lancha",
          description:
            "A real project explained through context, problem, technical solution, stack, and what it shows about my backend profile.",
          keywords: [
            "Software engineering case study",
            "Enterprise platform project",
            "Java backend project",
            "SAP Commerce Cloud project",
          ],
        },
      },
    },
    ctas: {
      resume: "Download Resume",
      email: "Send email",
      linkedin: "Open LinkedIn",
      contact: "Contact Me",
      experience: "View Experience",
      projects: "View Projects",
      about: "About Me",
    },
    home: {
      hero: {
        eyebrow: "Java Backend, Spring, REST APIs, SQL, SAP Commerce Cloud",
        title: "Backend Software Engineer | Java, Spring, and SAP Commerce Cloud",
        summary:
          "I build Java and Spring backend systems for production business platforms, with SAP Commerce Cloud as a strong specialty across integrations, incidents, and product evolution.",
        proof:
          "My work combines REST APIs, SQL, jobs, interceptors, validators, production support, and close collaboration with QA, business teams, and clients.",
        quickFacts: [
          {
            label: { es: "Foco", en: "Focus" },
            value: { es: "Java backend, Spring, APIs REST y SQL", en: "Java backend, Spring, REST APIs, and SQL" },
          },
          {
            label: { es: "Especialidad", en: "Specialty" },
            value: {
              es: "SAP Commerce Cloud y e-commerce B2B/B2C, sin quedar limitado a consultoría SAP",
              en: "SAP Commerce Cloud across B2B/B2C commerce and business platforms",
            },
          },
          {
            label: { es: "Producción", en: "Production" },
            value: { es: "Integraciones, incidencias y soporte productivo", en: "Integrations, incidents, and production support" },
          },
          {
            label: { es: "Ubicación", en: "Location" },
            value: { es: siteSettings.location.es, en: siteSettings.location.en },
          },
        ],
        highlights: [
          {
            label: { es: "4+ años de experiencia profesional", en: "4+ years of professional experience" },
            shortLabel: { es: "4+ años", en: "4+ years" },
          },
          {
            label: { es: "Java & Spring Backend", en: "Java & Spring Backend" },
            shortLabel: { es: "Java & Spring", en: "Java & Spring" },
          },
          {
            label: { es: "Producción e incidencias reales", en: "Real production support" },
            shortLabel: { es: "Producción real", en: "Production support" },
          },
          { label: { es: "SAP Commerce como especialización", en: "SAP Commerce specialization" } },
        ],
        supportLinks: [
          { href: "/experience", label: "View Experience" },
          { href: "/contact", label: "Contact Me" },
          { href: getCvFilePath("en"), label: "Download Resume", external: true },
        ],
      },
      strengths: {
        eyebrow: "Core strengths",
        title: "Fast backend fit signals",
        description:
          "A short read to decide whether it is worth going deeper into experience and projects.",
        items: [
          {
            title: { es: "Java, Spring y SQL", en: "Java, Spring, and SQL" },
            body: {
              es: "Trabajo backend sobre servicios, APIs REST, modelos de datos, consultas y lógica de negocio.",
              en: "Backend work across services, REST APIs, data models, queries, and business logic.",
            },
          },
          {
            title: { es: "SAP Commerce Cloud", en: "SAP Commerce Cloud" },
            body: {
              es: "Especialización práctica en commerce, Backoffice, FlexibleSearch, jobs, interceptors y validators.",
              en: "Practical specialization across commerce, Backoffice, FlexibleSearch, jobs, interceptors, and validators.",
            },
          },
          {
            title: { es: "Producción e incidencias", en: "Production and incidents" },
            body: {
              es: "Acostumbrado a analizar causas, validar hipótesis y coordinar cambios con QA, negocio y cliente.",
              en: "Used to analyzing causes, validating hypotheses, and coordinating changes with QA, business teams, and clients.",
            },
          },
          {
            title: { es: "Integraciones", en: "Integrations" },
            body: {
              es: "Experiencia conectando sistemas, flujos de e-commerce y necesidades funcionales sin perder estabilidad.",
              en: "Experience connecting systems, commerce flows, and functional needs without losing stability.",
            },
          },
        ],
      },
      career: {
        eyebrow: "Experience",
        title: "Professional growth with a clear backend and production direction",
        description:
          "From SAP and B2B backend foundations to a stronger Java and Spring profile shaped by integrations, production work, and real system ownership.",
      },
      value: {
        eyebrow: "Professional value",
        title: "What best represents my value",
        description: "A brief synthesis of the kind of backend work where I bring the most value.",
        items: [
          {
            title: { es: "Producción antes que teoría", en: "Production over theory" },
            body: {
              es: "Me interesa que el backend funcione bien cuando hay datos, integraciones, incidencias y usuarios dependiendo del sistema.",
              en: "I care about backend work that holds up when there is data, integrations, incidents, and users depending on the system.",
            },
          },
          {
            title: { es: "Colaboración operativa", en: "Operational collaboration" },
            body: {
              es: "Trabajo bien cerca de QA, negocio y cliente para convertir dudas funcionales en decisiones técnicas accionables.",
              en: "I work well with QA, business teams, and clients to turn functional uncertainty into actionable technical decisions.",
            },
          },
          {
            title: { es: "Ejecución con criterio", en: "Practical execution" },
            body: {
              es: "Priorizo entender el estándar, aislar el problema y entregar cambios que el equipo pueda mantener.",
              en: "I focus on understanding the standard, isolating the problem, and delivering changes the team can maintain.",
            },
          },
          {
            title: { es: "IA como apoyo puntual", en: "AI as selective support" },
            body: {
              es: "La uso para acelerar lectura, documentación y primeras hipótesis, manteniendo siempre la revisión técnica final.",
              en: "I use it to speed up reading, documentation, and early hypotheses while keeping final technical review with me.",
            },
          },
        ],
      },
      projects: {
        eyebrow: "Featured work",
        title: "Work presented through problem, solution, and impact",
        description:
          "A short selection of concrete cases explained through the challenge, the technical response, and the professional signal they leave behind.",
      },
      ai: {
        eyebrow: "AI-assisted work",
        title: "AI as productivity support, not the main story",
        description:
          "I use it to speed up context reading, technical documentation, selective automation, and early hypotheses. Final technical decisions and responsibility for the code still stay with me.",
        items: [
          {
            title: { es: "Análisis técnico más rápido", en: "Faster technical analysis" },
            body: {
              es: "Acelero exploración de soluciones, lectura de contexto y primeras hipótesis técnicas antes de implementar.",
              en: "I use it to explore context, contrast hypotheses, and reach a useful technical plan sooner.",
            },
          },
          {
            title: { es: "Debugging más eficiente", en: "Better debugging workflows" },
            body: {
              es: "Las utilizo para aislar causas raíz, revisar caminos alternativos y ordenar investigación técnica.",
              en: "It helps me isolate root causes, compare alternative paths, and structure incident investigation more effectively.",
            },
          },
          {
            title: { es: "Documentación y automatización", en: "Documentation and automation" },
            body: {
              es: "Me ayudan a documentar mejor, generar scripts y automatizar trabajo repetitivo para centrarme en arquitectura y valor de negocio.",
              en: "I rely on it to document decisions, generate scripts, and automate repetitive work so I can focus on architecture and business value.",
            },
          },
          {
            title: { es: "Soporte a calidad de código", en: "Code quality support" },
            body: {
              es: "Aporto más velocidad sin renunciar a la revisión crítica ni a mis decisiones técnicas finales.",
              en: "I move faster without giving up maintainability, critical review, or the fact that the final technical decision and responsibility for the result stay with me.",
            },
          },
        ],
      },
      skills: {
        eyebrow: "Skills",
        title: "Technologies and areas where I bring the most value",
        description:
          "The stack matters, but so does the context where I use it: Java backend, integrations, business platforms, SQL, and collaborative execution.",
        categories: [
          {
            title: { es: "Backend", en: "Backend" },
            items: ["Java", "Spring", "Spring Boot", "REST APIs", "SQL", "Software Engineering"],
          },
          {
            title: { es: "Enterprise Platforms", en: "Enterprise Platforms" },
            items: ["SAP Commerce Cloud", "Hybris", "Backoffice", "Impex", "FlexibleSearch", "B2B/B2C E-commerce"],
          },
          {
            title: { es: "Cloud & DevOps", en: "Cloud & DevOps" },
            items: ["Docker", "Azure", "Git", "CI/CD"],
          },
          {
            title: { es: "AI-Assisted Development", en: "AI-Assisted Development" },
            items: ["Codex", "ChatGPT", "Generative AI", "Technical Analysis", "Automation"],
          },
          {
            title: { es: "Soft Skills", en: "Soft Skills" },
            items: ["Problem Solving", "Client Collaboration", "Requirements Analysis", "Teamwork", "Ownership"],
          },
        ],
      },
      contact: {
        eyebrow: "Contact",
        title: "Contact",
        description:
          "Email, LinkedIn, and resume for a quick fit check.",
        fitTitle: "Especially strong fit for teams looking for",
        fitBullets: [
          "A Backend/Java Developer with experience in APIs, integrations, and product logic",
          "Someone who uses generative AI to accelerate execution and analysis without sacrificing quality",
          "A profile with strong design and complex problem-solving skills across product, QA, business, and client collaboration",
          "SAP Commerce Cloud experience without being limited to SAP consulting work",
        ],
      },
    },
    pages: {
      experience: {
        eyebrow: "Experience",
        title: "Backend path: from SAP to Java, Spring, and production",
        intro:
          "This page summarizes how I moved from a SAP/ABAP and B2B foundation into Java/Spring backend work across SAP Commerce Cloud, APIs, integrations, incidents, and production support.",
        scanTitle: "Recruiter scan",
        scanBody: "The progression combines SAP functional foundations, commerce backend development, and current work on active platforms.",
        scanBullets: [
          "Initial foundation in SAP/ABAP and B2B projects",
          "Backend work with Java, Spring, SAP Commerce Cloud, REST APIs, and SQL",
          "Progression into production support, integrations, incidents, and collaboration with QA/client/business teams",
        ],
        valueEyebrow: "Progression",
        valueTitle: "How my backend profile has evolved",
        valueDescription: "This is not only a stack list: it is the path from SAP foundations to backend work with operational responsibility.",
        valueItems: [
          {
            title: { es: "Primera base técnica", en: "Technical foundation" },
            body: {
              es: "Comencé con SAP, ABAP y proyectos B2B, aprendiendo a moverme en entornos con procesos funcionales y equipos grandes.",
              en: "I started with SAP, ABAP, and B2B projects, learning how to work in functional environments with larger delivery teams.",
            },
          },
          {
            title: { es: "Backend commerce", en: "Commerce backend" },
            body: {
              es: "Después reforcé Java, Spring y SAP Commerce Cloud sobre checkout, pricing, stock, Backoffice, Integration Objects y APIs REST.",
              en: "I then strengthened Java, Spring, and SAP Commerce Cloud across checkout, pricing, stock, Backoffice, Integration Objects, and REST APIs.",
            },
          },
          {
            title: { es: "Producción e incidencias", en: "Production and incidents" },
            body: {
              es: "Mi etapa actual añade soporte productivo, análisis de causa raíz, jobs, interceptors, validators, SQL y coordinación con QA, negocio y cliente.",
              en: "My current stage adds production support, root cause analysis, jobs, interceptors, validators, SQL, and coordination with QA, business teams, and clients.",
            },
          },
          {
            title: { es: "Dirección actual", en: "Current direction" },
            body: {
              es: "Quiero seguir creciendo como Backend Software Engineer generalista, con SAP Commerce Cloud como especialización fuerte y no como límite.",
              en: "I want to keep growing as a broader Backend Software Engineer, with SAP Commerce Cloud as a strong specialization rather than a limitation.",
            },
          },
        ],
      },
      projects: {
        eyebrow: "Projects",
        title: "Cases where the technical work is visible",
        intro:
          "These cases show concrete areas where I have worked: production, checkout, pricing, stock, integrations, support, and incident investigation.",
        scanTitle: "What to look for in each case",
        scanBody: "The important signal is the problem, the backend contribution, and the stack used, not a long narrative.",
        scanBullets: [
          "Which part of the system was at stake",
          "What I did with Java, Spring, SAP Commerce Cloud, SQL, or APIs",
          "What it shows about analysis, support, integrations, or delivery",
        ],
      },
      about: {
        eyebrow: "About",
        title: "How I work when backend has context",
        intro:
          "Instead of repeating the stack, this page explains how I analyze, collaborate, and make decisions when there are functional requirements, incidents, or sensitive product areas.",
        summaryTitle: "Working style",
        summaryBody:
          "Before implementing, I try to understand the flow, the data, the platform standard, and who needs the answer. That foundation helps me propose safer changes and communicate better with QA, business teams, and clients.",
        principlesTitle: "How I work",
        principlesIntro:
          "Four habits that show up repeatedly in my day-to-day work across backend, production, and mixed teams.",
        principlesItems: [
          {
            title: { es: "Antes de tocar código", en: "Before touching code" },
            body: {
              es: "Reviso el flujo, los datos afectados, el comportamiento estándar y los riesgos de romper algo que ya funciona.",
              en: "I review the flow, affected data, standard behavior, and the risk of breaking something that already works.",
            },
          },
          {
            title: { es: "Cuando hay una incidencia", en: "When there is an incident" },
            body: {
              es: "Ordeno síntomas, logs, consultas, hipótesis y validaciones para llegar a una causa probable sin saltar demasiado pronto a una solución.",
              en: "I organize symptoms, logs, queries, hypotheses, and validations to reach a likely cause before jumping into a fix.",
            },
          },
          {
            title: { es: "Cuando negocio necesita una respuesta", en: "When business needs an answer" },
            body: {
              es: "Traduzco el problema técnico a impacto funcional y próximos pasos claros para que QA, cliente y negocio puedan decidir.",
              en: "I translate the technical problem into functional impact and clear next steps so QA, client, and business stakeholders can decide.",
            },
          },
          {
            title: { es: "Cómo uso IA", en: "How I use AI" },
            body: {
              es: "La uso para acelerar lectura de contexto, documentación y alternativas, pero no para sustituir análisis, pruebas ni responsabilidad técnica.",
              en: "I use it to speed up context reading, documentation, and alternatives, but not to replace analysis, testing, or technical ownership.",
            },
          },
        ],
      },
      contact: {
        eyebrow: "Contact",
        title: "Let’s talk",
        intro: "Direct contact for Backend Software Engineer or Java Backend Developer opportunities.",
        availability:
          "Open to teams that need Java/Spring backend, SAP Commerce Cloud, or production support experience.",
        heroCardEyebrow: "Availability",
        heroCardTitle: "Available to assess fit",
        heroCardBullets: [
          "Backend teams working with Java, Spring, APIs, and product logic",
          "B2B/B2C e-commerce platforms with real operational complexity",
          "Environments where quality, ownership, and collaboration matter",
        ],
        fitTitle: "Especially aligned opportunities",
        fitBullets: [
          "Backend/Java Developer roles involving product logic, integrations, and APIs",
          "Production-facing environments where incidents, integrations, and product evolution matter",
          "Work that involves collaboration with QA, business, and client stakeholders",
          "Opportunities where SAP Commerce Cloud is a strong specialization, not a limitation",
        ],
        channelsTitle: "Channels",
        channelsItems: [
          { label: "Email", value: siteSettings.email, href: `mailto:${siteSettings.email}` },
          { label: "LinkedIn", value: siteSettings.linkedin, href: siteSettings.linkedin },
          { label: "GitHub", value: siteSettings.github, href: siteSettings.github },
          { label: "Location", value: siteSettings.location.en },
        ],
        channelsNote:
          "If the role fits, the fastest path is to reach me by email or LinkedIn and review the resume.",
        finalNote:
          "Primary fit: Java/Spring backend, SAP Commerce Cloud, APIs, SQL, integrations, and production support.",
      },
    },
    footer: {
      note: "",
      availability:
        "Available for opportunities where backend engineering, integrations, and pragmatic delivery matter as much as the stack itself.",
      builtWith: "Built with Next.js, TypeScript, and a practical engineering mindset.",
    },
  },
};
