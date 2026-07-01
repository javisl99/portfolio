import type { AiImpactMetric, CopyCard, HighlightPill, QuickFact, SkillCategory } from "@/data/types";
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
    ai: {
      eyebrow: string;
      title: string;
      description: string;
      context: string;
      metricsNote: string;
      note: string;
      items: CopyCard[];
      metrics: AiImpactMetric[];
    };
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
      defaultTitle: "Backend Software Engineer Java, Spring, REST APIs & SAP Commerce Cloud",
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
          "Backend Software Engineer centrado en Java y Spring sobre plataformas en producción, con SAP Commerce Cloud como especialización fuerte.",
        proof:
          "Trabajo con APIs REST, SQL, integraciones e incidencias, coordinando cambios con QA, negocio y cliente.",
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
            label: { es: "Integraciones y soporte productivo", en: "Real production support" },
            shortLabel: { es: "Soporte productivo", en: "Production support" },
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
          "De una base en SAP y B2B a un perfil backend más sólido en Java, Spring, integraciones, incidencias y soporte productivo.",
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
          "Tres casos para ver trabajo real sobre producción, checkout, pricing, stock, integraciones y soporte técnico.",
      },
      ai: {
        eyebrow: "IA aplicada al trabajo técnico",
        title: "IA como acelerador de análisis, no como sustituto del criterio técnico",
        description:
          "Desde mi etapa actual en Stratesys utilizo IA generativa para acelerar análisis técnico, debugging y preparación de cambios, manteniendo siempre la decisión técnica, las pruebas locales y la validación previa a QA bajo mi responsabilidad.",
        context:
          "La utilizo como herramienta de apoyo en análisis técnico, debugging, documentación y preparación de cambios sobre SAP Commerce Cloud.",
        metricsNote:
          "Estimaciones basadas en métricas propias de tareas comparables realizadas antes y después de incorporar IA generativa a mi flujo de trabajo. No representan benchmarks universales, sino impacto observado en mi contexto profesional.",
        note:
          "La IA no sustituye experiencia ni criterio técnico. Su mayor valor está en llegar antes al contexto útil, reducir trabajo repetitivo y dedicar más tiempo a resolver problemas complejos y tomar mejores decisiones de ingeniería.",
        items: [
          {
            title: { es: "Dónde aporta más valor", en: "Where it adds the most value" },
            body: {
              es: "Lectura rápida de contexto complejo\nContraste de hipótesis técnicas\nLocalización de código afectado\nPreparación inicial de cambios\nGeneración de scripts, documentación y tareas repetitivas",
              en: "Fast reading of complex context\nTechnical hypothesis contrast\nAffected code localization\nInitial change preparation\nScript generation, documentation, and repetitive tasks",
            },
          },
          {
            title: { es: "Qué sigo validando yo", en: "What I still validate myself" },
            body: {
              es: "Decisiones técnicas y de arquitectura\nValidación del estándar SAP Commerce\nPruebas locales\nValidación previa a QA\nResponsabilidad final del código",
              en: "Technical and architectural decisions\nSAP Commerce standard validation\nLocal testing\nPre-QA validation\nFinal responsibility for the code",
            },
          },
        ],
        metrics: [
          {
            title: { es: "Preparación y análisis de cambios complejos", en: "Preparation and analysis of complex changes" },
            highlight: { es: "Hasta ~70% menos tiempo en tareas comparables", en: "Up to ~70% less time in comparable tasks" },
            beforeLabel: { es: "Antes", en: "Before" },
            beforeValue: {
              es: "Lectura manual completa del contexto, identificación del código afectado y preparación inicial del cambio.",
              en: "Full manual context reading, identification of the affected code, and initial change preparation.",
            },
            afterLabel: { es: "Ahora", en: "Now" },
            afterValue: {
              es: "Hipótesis iniciales, localización del código afectado y preparación del cambio en menos tiempo, manteniendo revisión técnica propia.",
              en: "Initial hypotheses, affected code localization, and change preparation in less time while keeping my own technical review.",
            },
            note: {
              es: "Especialmente útil en evolutivos con lógica de negocio compleja, integraciones o impacto en varios módulos.",
              en: "Especially useful in evolutions involving complex business logic, integrations, or impact across multiple modules.",
            },
            beforeRatio: 100,
            afterRatio: 35,
          },
          {
            title: { es: "Implementación de tareas de 1 a 2 jornadas", en: "Implementation of 1- to 2-day tasks" },
            highlight: { es: "Ahora en menos de 1 jornada cuando el contexto está acotado", en: "Now in less than 1 day when the context is bounded" },
            beforeLabel: { es: "Antes", en: "Before" },
            beforeValue: {
              es: "Implementación manual completa, pruebas locales y repaso previo a QA.",
              en: "Full manual implementation, local testing, and final review before QA.",
            },
            afterLabel: { es: "Ahora", en: "Now" },
            afterValue: {
              es: "Generación inicial de estructura, apoyo en edge cases y documentación técnica, con revisión y pruebas locales propias.",
              en: "Initial structure generation, support on edge cases, and technical documentation, with my own review and local testing.",
            },
            note: {
              es: "La IA acelera partes repetitivas y de análisis, pero la implementación final, validación y responsabilidad siguen siendo mías.",
              en: "AI accelerates repetitive and analysis-heavy parts, but final implementation, validation, and responsibility remain mine.",
            },
            beforeRatio: 100,
            afterRatio: 45,
          },
          {
            title: { es: "Investigación inicial de incidencias", en: "Initial incident investigation" },
            highlight: { es: "De horas o hasta 1 jornada a una primera hipótesis en minutos", en: "From hours or up to a full day to a first hypothesis in minutes" },
            beforeLabel: { es: "Antes", en: "Before" },
            beforeValue: {
              es: "Lectura manual de logs, trazas, código afectado y posibles caminos de ejecución.",
              en: "Manual reading of logs, traces, affected code, and possible execution paths.",
            },
            afterLabel: { es: "Ahora", en: "Now" },
            afterValue: {
              es: "Resumen de contexto, comparación de hipótesis y localización inicial de posibles causas raíz.",
              en: "Context summary, hypothesis comparison, and initial localization of possible root causes.",
            },
            note: {
              es: "La resolución final sigue dependiendo de depuración real, pruebas, revisión del estándar y validación funcional.",
              en: "Final resolution still depends on real debugging, testing, standard review, and functional validation.",
            },
            beforeRatio: 100,
            afterRatio: 6,
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
          "Aquí se ve la progresión completa: base SAP/ABAP, backend commerce sobre SAP Commerce Cloud y una etapa actual más cercana a producción, integraciones e incidencias.",
        scanTitle: "Lectura rápida para recruiters",
        scanBody: "Más que una lista de tecnologías, esta página muestra cómo ha evolucionado el tipo de problemas que he ido resolviendo.",
        scanBullets: [
          "Inicio en SAP/ABAP y proyectos B2B con peso funcional",
          "Paso a Java, Spring, SAP Commerce Cloud, APIs REST, SQL y lógica de negocio",
          "Trabajo actual más cerca de producción, integraciones, soporte e investigación de incidencias",
        ],
        valueEyebrow: "Progresión",
        valueTitle: "Cómo ha evolucionado mi perfil backend",
        valueDescription: "La evolución no va solo de stack: va de asumir más contexto técnico, más responsabilidad operativa y mejor capacidad de análisis.",
        valueItems: [
          {
            title: { es: "Primera base técnica", en: "Technical foundation" },
            body: {
              es: "Comencé con SAP, ABAP y proyectos B2B, entendiendo procesos funcionales, datos de negocio y cómo moverse en entornos con más complejidad organizativa.",
              en: "I started with SAP, ABAP, and B2B projects, learning how to work in functional environments with larger delivery teams.",
            },
          },
          {
            title: { es: "Backend commerce", en: "Commerce backend" },
            body: {
              es: "Después reforcé Java, Spring y SAP Commerce Cloud sobre checkout, pricing, stock, Backoffice, Integration Objects, modelos de datos y APIs REST.",
              en: "I then strengthened Java, Spring, and SAP Commerce Cloud across checkout, pricing, stock, Backoffice, Integration Objects, and REST APIs.",
            },
          },
          {
            title: { es: "Producción e incidencias", en: "Production and incidents" },
            body: {
              es: "Mi etapa actual añade soporte productivo, análisis de causa raíz, jobs, interceptors, validators, SQL y coordinación con QA, negocio y cliente cuando hay que decidir y actuar rápido.",
              en: "My current stage adds production support, root cause analysis, jobs, interceptors, validators, SQL, and coordination with QA, business teams, and clients.",
            },
          },
          {
            title: { es: "Dirección actual", en: "Current direction" },
            body: {
              es: "La dirección es seguir creciendo como Backend Software Engineer generalista, con SAP Commerce Cloud como una especialización fuerte y experiencia útil también fuera de ese nicho.",
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
        scanBody: "La clave no es el relato general, sino qué parte del sistema estaba en juego, qué decisión backend tomé y qué señal técnica deja cada caso.",
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
            "Esta página no va de repetir tecnologías. Va de cómo analizo, colaboro y tomo decisiones cuando el backend afecta a producto, negocio o producción.",
          summaryTitle: "Forma de trabajo",
          summaryBody:
            "Antes de implementar intento entender el flujo, los datos afectados, el comportamiento estándar y quién necesita una respuesta útil. Esa base me ayuda a proponer cambios más seguros y a comunicar mejor con QA, negocio y cliente.",
          principlesTitle: "Cómo trabajo",
          principlesIntro:
            "Cuatro hábitos que explican mejor mi forma de trabajar que una lista larga de herramientas.",
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
                es: "La uso para acelerar lectura de contexto, documentación y alternativas, pero nunca como sustituto de análisis, pruebas o responsabilidad técnica.",
                en: "I use it to speed up context reading, documentation, and alternatives, but not to replace analysis, testing, or technical ownership.",
              },
            },
          ],
        },
        contact: {
          eyebrow: "Contacto",
        title: "Hablemos",
        intro: "Contacto directo para oportunidades Backend Software Engineer o Java Backend Developer.",
        availability: "Disponible para valorar oportunidades backend con Java, Spring, SAP Commerce Cloud, integraciones y soporte productivo.",
          heroCardEyebrow: "Disponibilidad",
          heroCardTitle: "Disponible para valorar encaje",
          heroCardBullets: [
            "Java, Spring, APIs REST y lógica de producto",
            "E-commerce B2B/B2C, integraciones y zonas sensibles del negocio",
            "Equipos donde QA, negocio y cliente forman parte del trabajo real",
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
            "La vía más rápida es email o LinkedIn; el CV está listo para revisión inmediata.",
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
      defaultTitle: "Backend Software Engineer Java, Spring, REST APIs & SAP Commerce Cloud",
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
        title: "Backend Software Engineer Java, Spring, and SAP Commerce Cloud",
        summary:
          "Backend Software Engineer focused on Java and Spring across production platforms, with SAP Commerce Cloud as a strong specialization.",
        proof:
          "My work combines REST APIs, SQL, integrations, incidents, and close collaboration with QA, business teams, and clients.",
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
            label: { es: "Integraciones y soporte productivo", en: "Real production support" },
            shortLabel: { es: "Soporte productivo", en: "Production support" },
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
          "From SAP and B2B foundations to a stronger Java and Spring backend profile shaped by integrations, incidents, and production ownership.",
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
          "Three concrete cases covering production, checkout, pricing, stock, integrations, and support work.",
      },
      ai: {
        eyebrow: "AI applied to technical work",
        title: "AI as an analysis accelerator, not a substitute for technical judgment",
        description:
          "Since my current stage at Stratesys, I use generative AI to accelerate technical analysis, debugging, and change preparation while keeping technical decisions, local testing, and pre-QA validation under my own responsibility.",
        context:
          "I use it as a support tool for technical analysis, debugging, documentation, and change preparation on SAP Commerce Cloud.",
        metricsNote:
          "Estimates based on my own metrics from comparable tasks completed before and after introducing generative AI into my workflow. They are not universal benchmarks, but observed impact in my professional context.",
        note:
          "AI does not replace experience or technical judgment. Its greatest value is getting to useful context sooner, reducing repetitive work, and leaving more time to solve complex problems and make better engineering decisions.",
        items: [
          {
            title: { es: "Dónde aporta más valor", en: "Where it adds the most value" },
            body: {
              es: "Lectura rápida de contexto complejo\nContraste de hipótesis técnicas\nLocalización de código afectado\nPreparación inicial de cambios\nGeneración de scripts, documentación y tareas repetitivas",
              en: "Fast reading of complex context\nTechnical hypothesis contrast\nAffected code localization\nInitial change preparation\nScript generation, documentation, and repetitive tasks",
            },
          },
          {
            title: { es: "Qué sigo validando yo", en: "What I still validate myself" },
            body: {
              es: "Decisiones técnicas y de arquitectura\nValidación del estándar SAP Commerce\nPruebas locales\nValidación previa a QA\nResponsabilidad final del código",
              en: "Technical and architectural decisions\nSAP Commerce standard validation\nLocal testing\nPre-QA validation\nFinal responsibility for the code",
            },
          },
        ],
        metrics: [
          {
            title: { es: "Preparación y análisis de cambios complejos", en: "Preparation and analysis of complex changes" },
            highlight: { es: "Hasta ~70% menos tiempo en tareas comparables", en: "Up to ~70% less time in comparable tasks" },
            beforeLabel: { es: "Antes", en: "Before" },
            beforeValue: {
              es: "Lectura manual completa del contexto, identificación del código afectado y preparación inicial del cambio.",
              en: "Full manual context reading, identification of the affected code, and initial change preparation.",
            },
            afterLabel: { es: "Ahora", en: "Now" },
            afterValue: {
              es: "Hipótesis iniciales, localización del código afectado y preparación del cambio en menos tiempo, manteniendo revisión técnica propia.",
              en: "Initial hypotheses, affected code localization, and change preparation in less time while keeping my own technical review.",
            },
            note: {
              es: "Especialmente útil en evolutivos con lógica de negocio compleja, integraciones o impacto en varios módulos.",
              en: "Especially useful in evolutions involving complex business logic, integrations, or impact across multiple modules.",
            },
            beforeRatio: 100,
            afterRatio: 35,
          },
          {
            title: { es: "Implementación de tareas de 1 a 2 jornadas", en: "Implementation of 1- to 2-day tasks" },
            highlight: { es: "Ahora en menos de 1 jornada cuando el contexto está acotado", en: "Now in less than 1 day when the context is bounded" },
            beforeLabel: { es: "Antes", en: "Before" },
            beforeValue: {
              es: "Implementación manual completa, pruebas locales y repaso previo a QA.",
              en: "Full manual implementation, local testing, and final review before QA.",
            },
            afterLabel: { es: "Ahora", en: "Now" },
            afterValue: {
              es: "Generación inicial de estructura, apoyo en edge cases y documentación técnica, con revisión y pruebas locales propias.",
              en: "Initial structure generation, support on edge cases, and technical documentation, with my own review and local testing.",
            },
            note: {
              es: "La IA acelera partes repetitivas y de análisis, pero la implementación final, validación y responsabilidad siguen siendo mías.",
              en: "AI accelerates repetitive and analysis-heavy parts, but final implementation, validation, and responsibility remain mine.",
            },
            beforeRatio: 100,
            afterRatio: 45,
          },
          {
            title: { es: "Investigación inicial de incidencias", en: "Initial incident investigation" },
            highlight: { es: "De horas o hasta 1 jornada a una primera hipótesis en minutos", en: "From hours or up to a full day to a first hypothesis in minutes" },
            beforeLabel: { es: "Antes", en: "Before" },
            beforeValue: {
              es: "Lectura manual de logs, trazas, código afectado y posibles caminos de ejecución.",
              en: "Manual reading of logs, traces, affected code, and possible execution paths.",
            },
            afterLabel: { es: "Ahora", en: "Now" },
            afterValue: {
              es: "Resumen de contexto, comparación de hipótesis y localización inicial de posibles causas raíz.",
              en: "Context summary, hypothesis comparison, and initial localization of possible root causes.",
            },
            note: {
              es: "La resolución final sigue dependiendo de depuración real, pruebas, revisión del estándar y validación funcional.",
              en: "Final resolution still depends on real debugging, testing, standard review, and functional validation.",
            },
            beforeRatio: 100,
            afterRatio: 6,
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
        title: "Let’s talk",
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
          "This page shows the full progression: SAP/ABAP foundations, commerce backend work on SAP Commerce Cloud, and a current stage closer to production, integrations, and incidents.",
        scanTitle: "Recruiter scan",
        scanBody: "Rather than repeating the stack, this page shows how the kind of problems I solve has evolved over time.",
        scanBullets: [
          "Start in SAP/ABAP and B2B work with strong functional context",
          "Move into Java, Spring, SAP Commerce Cloud, REST APIs, SQL, and business logic",
          "Current work closer to production support, integrations, and incident investigation",
        ],
        valueEyebrow: "Progression",
        valueTitle: "How my backend profile has evolved",
        valueDescription: "The progression is not only about the stack. It is about taking on more technical context, operational responsibility, and analysis depth.",
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
          "These cases show the concrete zones where I have worked: production, checkout, pricing, stock, integrations, support, and incident investigation.",
        scanTitle: "What to look for in each case",
        scanBody: "The value is not the broad narrative, but which system area was at stake, which backend decision I made, and what technical signal each case leaves behind.",
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
          "This page is not about repeating the stack. It is about how I analyze, collaborate, and make decisions when backend work affects product, business, or production.",
        summaryTitle: "Working style",
        summaryBody:
          "Before implementing, I try to understand the flow, the affected data, the platform standard, and who needs a useful answer. That foundation helps me propose safer changes and communicate better with QA, business teams, and clients.",
        principlesTitle: "How I work",
        principlesIntro:
          "Four habits that explain my way of working better than a long tools list.",
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
          "Open to backend opportunities involving Java, Spring, SAP Commerce Cloud, integrations, and production support.",
        heroCardEyebrow: "Availability",
        heroCardTitle: "Available to assess fit",
        heroCardBullets: [
          "Java, Spring, REST APIs, and product logic",
          "B2B/B2C commerce, integrations, and sensitive business flows",
          "Teams where QA, business, and client collaboration are part of the real work",
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
          "The fastest path is email or LinkedIn, with the resume ready for immediate review.",
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
