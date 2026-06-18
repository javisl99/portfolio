import type { CopyCard, HighlightPill, QuickFact, SkillCategory } from "@/data/types";
import { getCvFilePath } from "@/lib/cv";
import type { Locale } from "@/lib/i18n";

export const siteSettings = {
  name: "Javier Sanchez Lancha",
  schemaRole: "Backend Software Engineer",
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
      defaultTitle: "Backend Software Engineer | Java, Spring & AI-Assisted Engineering",
      defaultDescription:
        "Backend Software Engineer desarrollando plataformas enterprise con Java, Spring, SAP Commerce Cloud y herramientas de IA generativa para entregar soluciones más limpias, rápidas y fiables.",
      keywords: [
        "Backend Software Engineer",
        "Java Backend Developer",
        "Spring Developer",
        "SAP Commerce Cloud",
        "Enterprise Platforms",
        "AI-Assisted Engineering",
        "AI-Assisted Development",
        "Cloud Solutions",
        "Scalable Systems",
        "Software Engineering",
        "E-commerce Platforms",
        "REST APIs",
        "SQL",
        "Docker",
        "Azure",
      ],
      pages: {
        experience: {
          title: "Experiencia | Backend Software Engineer | Javier Sanchez Lancha",
          description:
            "Experiencia profesional en backend engineering, Java, Spring, SAP Commerce Cloud y plataformas enterprise con foco en impacto, estabilidad y colaboración con negocio.",
          keywords: [
            "Backend Software Engineer experience",
            "Java Spring experience",
            "SAP Commerce Cloud backend",
            "Enterprise platform engineering",
          ],
        },
        projects: {
          title: "Proyectos | Enterprise Platforms & Java Backend",
          description:
            "Proyectos y casos reales explicados desde el problema, la solución, el stack técnico y el impacto sobre plataformas enterprise y e-commerce.",
          keywords: [
            "Java backend projects",
            "Enterprise platforms portfolio",
            "E-commerce platforms case studies",
            "SAP Commerce Cloud projects",
          ],
        },
        about: {
          title: "Sobre mí | Backend Engineering & AI-Assisted Development",
          description:
            "Perfil profesional orientado a backend engineering, plataformas enterprise, cloud solutions y AI-Assisted Development aplicado con criterio técnico.",
          keywords: [
            "Backend engineering profile",
            "AI-Assisted Development engineer",
            "Java Spring software engineering",
            "Cloud-oriented backend engineer",
          ],
        },
        contact: {
          title: "Contacto | Javier Sanchez Lancha",
          description:
            "Contacto para oportunidades como Backend Software Engineer, Java Backend Developer, Spring Developer o roles en plataformas enterprise y cloud solutions.",
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
            "Caso real explicado desde el problema, la solución técnica, el stack y el impacto profesional en plataformas enterprise y e-commerce.",
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
        eyebrow: "Java, Spring, Enterprise Platforms, AI-Assisted Engineering",
        title: "Backend Software Engineer construyendo plataformas enterprise escalables",
        summary:
          "Diseño, desarrollo y evoluciono sistemas backend para plataformas enterprise con Java y Spring, buscando soluciones mantenibles, claras y fiables en contextos reales.",
        proof:
          "Experiencia profesional en plataformas críticas de negocio, incidencias reales de producción e integraciones complejas, colaborando con cliente, QA y negocio para convertir requisitos en soluciones técnicas sostenibles.",
        quickFacts: [
          {
            label: { es: "Foco", en: "Focus" },
            value: { es: "Java Backend, Spring, AI-Assisted Engineering", en: "Java Backend, Spring, AI-Assisted Engineering" },
          },
          {
            label: { es: "Entorno", en: "Environment" },
            value: { es: "Plataformas enterprise y sistemas distribuidos", en: "Enterprise platforms and distributed systems" },
          },
          {
            label: { es: "Especialidad", en: "Specialty" },
            value: {
              es: "SAP Commerce Cloud y e-commerce B2B/B2C, sin quedar limitado a consultoría SAP",
              en: "SAP Commerce Cloud and B2B/B2C e-commerce, without being limited to SAP consulting",
            },
          },
          {
            label: { es: "Diferencial", en: "Differentiator" },
            value: { es: "IA aplicada a ingeniería backend con criterio técnico propio", en: "AI applied to backend engineering with independent technical judgment" },
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
          { label: { es: "Plataformas enterprise", en: "Enterprise platforms" } },
          {
            label: { es: "Producción e incidencias reales", en: "Real production support" },
            shortLabel: { es: "Producción real", en: "Production support" },
          },
          { label: { es: "AI-Assisted Engineering", en: "AI-Assisted Engineering" } },
        ],
        supportLinks: [
          { href: "/experience", label: "Ver experiencia" },
          { href: "/contact", label: "Contactar" },
          { href: getCvFilePath("es"), label: "Descargar CV", external: true },
        ],
      },
      strengths: {
        eyebrow: "Fortalezas clave",
        title: "Perfil backend con experiencia real en sistemas sensibles para negocio",
        description:
          "La propuesta de valor no se apoya en buzzwords. Se apoya en experiencia real entregando software en plataformas enterprise, resolviendo incidencias complejas y trabajando con impacto técnico y de negocio.",
        items: [
          {
            title: { es: "Backend engineering con contexto real", en: "Backend engineering with real context" },
            body: {
              es: "Experiencia desarrollando lógica de negocio, servicios, jobs, modelos de datos e integraciones en plataformas que ya están en marcha.",
              en: "Experience building business logic, services, jobs, data models, and integrations in live platforms.",
            },
          },
          {
            title: { es: "Resolución de problemas complejos", en: "Complex problem solving" },
            body: {
              es: "Análisis de incidencias productivas, debugging técnico y mejora de estabilidad sobre sistemas críticos.",
              en: "Production issue analysis, technical debugging, and stability improvements on critical systems.",
            },
          },
          {
            title: { es: "Colaboración con cliente y negocio", en: "Client and business collaboration" },
            body: {
              es: "Traducción de requisitos funcionales en soluciones escalables junto a QA, negocio y equipos funcionales.",
              en: "Translating functional requirements into scalable solutions together with QA, business, and functional teams.",
            },
          },
          {
            title: { es: "Entrega acelerada con IA", en: "Faster delivery with AI" },
            body: {
              es: "Uso práctico de herramientas generativas para acelerar análisis técnico, automatización, documentación y tareas repetitivas sin perder control sobre la implementación.",
              en: "Practical use of generative tools to accelerate technical analysis, automation, documentation, and repetitive tasks without losing implementation control.",
            },
          },
        ],
      },
      career: {
        eyebrow: "Experiencia",
        title: "Evolución profesional orientada a impacto",
        description:
          "De la base backend en proyectos SAP y B2B hasta ownership técnico en plataformas enterprise vivas, con una identidad cada vez más clara como Backend Software Engineer.",
      },
      value: {
        eyebrow: "Valor profesional",
        title: "Valor Profesional",
        description: "La combinación de backend, contexto de negocio y criterio de ejecución que aporto en entornos enterprise.",
        items: [
          {
            title: { es: "Backend Engineering", en: "Backend Engineering" },
            body: {
              es: "Diseño y desarrollo soluciones backend mantenibles para plataformas enterprise con foco en claridad, estabilidad y evolución sostenible.",
              en: "Design and development of scalable and maintainable backend solutions for enterprise platforms.",
            },
          },
          {
            title: { es: "Enterprise Systems", en: "Enterprise Systems" },
            body: {
              es: "Experiencia trabajando sobre sistemas críticos con procesos complejos, integraciones y operaciones de negocio reales.",
              en: "Experience working on critical systems with complex business processes and integrations.",
            },
          },
          {
            title: { es: "AI-Assisted Engineering", en: "AI-Assisted Engineering" },
            body: {
              es: "Integro IA generativa para acelerar análisis, ejecución y automatización sin delegar el criterio técnico ni la responsabilidad final.",
              en: "Leveraging generative AI to accelerate analysis, implementation, and automation without outsourcing technical judgment.",
            },
          },
          {
            title: { es: "Business Understanding", en: "Business Understanding" },
            body: {
              es: "Capacidad para traducir requisitos funcionales complejos en soluciones técnicas robustas y mantenibles.",
              en: "Ability to translate complex business requirements into robust and maintainable technical solutions.",
            },
          },
        ],
      },
      projects: {
        eyebrow: "Casos destacados",
        title: "Casos donde problema, solución e impacto quedan claros",
        description:
          "Una selección breve de casos concretos explicados desde el reto, la respuesta técnica y la señal profesional que dejan.",
      },
      ai: {
        eyebrow: "AI-Assisted Engineering",
        title: "IA como acelerador de ingeniería, no como sustituto del criterio técnico",
        description:
          "Integro IA generativa en mi flujo de ingeniería para acelerar análisis, implementación y automatización. Me ayuda a avanzar más rápido, pero el criterio técnico final, la decisión de arquitectura y la responsabilidad sobre el código siguen siendo míos.",
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
              es: "Aporto más velocidad sin renunciar a mantenibilidad, revisión crítica ni a que la decisión técnica final y la responsabilidad del resultado sean mías.",
              en: "I move faster without giving up maintainability, critical review, or ownership of final technical decisions.",
            },
          },
        ],
      },
      skills: {
        eyebrow: "Skills",
        title: "Stack y capacidades organizadas por el tipo de valor que aporto",
        description:
          "Las tecnologías importan, pero también el contexto en el que las aplico: backend, plataformas enterprise, cloud y colaboración efectiva.",
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
            items: ["Docker", "Azure", "Git", "CI/CD", "Cloud Solutions"],
          },
          {
            title: { es: "AI-Assisted Development", en: "AI-Assisted Development" },
            items: ["Codex", "ChatGPT", "Generative AI", "AI-Assisted Development", "Technical Analysis", "Automation"],
          },
          {
            title: { es: "Soft Skills", en: "Soft Skills" },
            items: ["Problem Solving", "Client Collaboration", "Requirements Analysis", "Teamwork", "Ownership", "Business Impact"],
          },
        ],
      },
      contact: {
        eyebrow: "Contacto",
        title: "Contacto",
        description:
          "Si ves encaje con tu equipo o proyecto, estaré encantado de conversar sobre backend, producto y plataformas enterprise.",
        fitTitle: "Encaje especialmente bien en equipos que buscan",
        fitBullets: [
          "Backend/Java Developer con experiencia en plataformas enterprise y microservicios",
          "Perfil que utiliza IA generativa para acelerar ejecución y análisis sin sacrificar calidad",
          "Capacidad de diseño y resolución de problemas complejos colaborando con producto, QA, negocio y cliente",
          "Experiencia en SAP Commerce Cloud, pero sin quedar limitado a consultoría SAP",
        ],
      },
    },
    pages: {
      experience: {
        eyebrow: "Experiencia",
        title: "Experiencia construyendo y sosteniendo plataformas enterprise",
        intro:
          "Mi trayectoria combina base backend, profundidad en Java y Spring, experiencia fuerte en SAP Commerce Cloud y trabajo real sobre plataformas enterprise vivas.",
        scanTitle: "Lectura rápida para recruiters",
        scanBody: "Backend Software Engineer con recorrido en e-commerce enterprise, incidencias productivas, integraciones y colaboración directa con cliente y negocio.",
        scanBullets: [
          "Java, Spring, SQL y servicios backend sobre sistemas en producción",
          "SAP Commerce Cloud como fortaleza técnica, no como única identidad profesional",
          "Experiencia resolviendo problemas complejos en entornos B2B/B2C y enterprise",
        ],
      },
      projects: {
        eyebrow: "Proyectos",
        title: "Proyectos destacados y casos reales",
        intro:
          "Cada proyecto se presenta desde el problema, la solución técnica, el stack utilizado y el impacto, para que se vea con claridad cómo trabajo y dónde aporto valor.",
        scanTitle: "Cómo leer estos casos",
        scanBody: "No son descripciones genéricas: cada caso explica el contexto, la solución y la señal profesional que deja para recruiting técnico.",
        scanBullets: [
          "Problemas reales de plataformas enterprise y e-commerce",
          "Soluciones backend con Java, Spring y SAP Commerce Cloud",
          "Impacto sobre estabilidad, entrega, mantenibilidad y colaboración",
        ],
      },
        about: {
          eyebrow: "Sobre mí",
          title: "Ingeniería backend con experiencia enterprise y mentalidad de producto",
          intro:
            "Soy Backend Software Engineer con foco en Java, Spring y plataformas enterprise, acostumbrado a trabajar cerca del producto y del contexto real del negocio.",
          summaryTitle: "Posicionamiento actual",
          summaryBody:
            "Disfruto entender cómo funciona un sistema de verdad: sus integraciones, sus puntos frágiles, el impacto en negocio y lo que hace falta para mantenerlo sano con el tiempo. Mi trabajo diario se mueve entre backend, incidencias, conversación con equipos y decisiones técnicas que priorizan mantenibilidad.",
          principlesTitle: "Cómo trabajo",
          principlesIntro:
            "Trabajo con calma en el análisis, claridad en la comunicación y una ejecución pragmática orientada a resolver bien antes que a complicar más el sistema.",
        },
        contact: {
          eyebrow: "Contacto",
          title: "Hablemos",
          intro:
            "Si buscas un perfil backend con experiencia en plataformas enterprise, Java, Spring, SAP Commerce Cloud y AI-Assisted Engineering, estaré encantado de conversar.",
          availability:
            "Estoy abierto a oportunidades donde pueda seguir creciendo como Backend Software Engineer en entornos orientados a producto, cloud y con retos técnicos reales.",
          heroCardEyebrow: "Encaje",
          heroCardTitle: "Dónde puedo aportar más valor desde el primer momento",
          heroCardBullets: [
            "Equipos backend sobre Java, Spring, microservicios y sistemas enterprise",
            "Plataformas e-commerce B2B/B2C con complejidad real",
            "Contextos donde calidad, ownership y colaboración importan",
          ],
          fitTitle: "Oportunidades especialmente alineadas",
          fitBullets: [
            "Backend/Java Developer con experiencia en plataformas enterprise y microservicios",
            "Perfil que usa IA generativa para acelerar análisis y ejecución sin sacrificar calidad",
            "Capacidad de diseño y resolución de problemas complejos junto a producto, QA, negocio y cliente",
            "Experiencia en SAP Commerce Cloud sin quedar limitado a consultoría SAP",
          ],
          channelsTitle: "Canales",
          channelsItems: [
            { label: "Email", value: siteSettings.email, href: `mailto:${siteSettings.email}` },
            { label: "LinkedIn", value: siteSettings.linkedin, href: siteSettings.linkedin },
            { label: "GitHub", value: siteSettings.github, href: siteSettings.github },
            { label: "Ubicación", value: siteSettings.location.es },
          ],
          channelsNote:
            "Me interesa colaborar en equipos donde pueda aportar criterio backend, comprensión de negocio y capacidad para construir soluciones mantenibles en entornos reales.",
          finalNote:
            "También puedo compartir más contexto sobre experiencia en SAP Commerce Cloud, backend enterprise o mi forma de trabajar si encaja con la posición.",
        },
    },
    footer: {
      note: "",
      availability:
        "Disponible para oportunidades donde la ingeniería backend, el contexto cloud y una entrega pragmática importen tanto como la tecnología.",
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
      defaultTitle: "Backend Software Engineer | Java, Spring & AI-Assisted Engineering",
      defaultDescription:
        "Backend Software Engineer building enterprise platforms with Java, Spring, SAP Commerce Cloud, and generative AI tools to deliver cleaner, faster, and more reliable solutions.",
      keywords: [
        "Backend Software Engineer",
        "Java Backend Developer",
        "Spring Developer",
        "SAP Commerce Cloud",
        "Enterprise Platforms",
        "AI-Assisted Engineering",
        "AI-Assisted Development",
        "Cloud Solutions",
        "Scalable Systems",
        "Software Engineering",
        "E-commerce Platforms",
        "REST APIs",
        "SQL",
        "Docker",
        "Azure",
      ],
      pages: {
        experience: {
          title: "Experience | Backend Software Engineer | Javier Sanchez Lancha",
          description:
            "Professional experience across backend engineering, Java, Spring, SAP Commerce Cloud, and enterprise platforms with a focus on impact, stability, and business collaboration.",
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
            "Selected work explained through problem, solution, tech stack, and impact across enterprise platforms and e-commerce systems.",
          keywords: [
            "Java backend portfolio",
            "Enterprise platform projects",
            "E-commerce platforms engineer",
            "SAP Commerce Cloud case studies",
          ],
        },
        about: {
          title: "About | Backend Engineering & AI-Assisted Development",
          description:
            "Backend engineering profile focused on Java, Spring, enterprise platforms, cloud-oriented environments, and practical AI-Assisted Development.",
          keywords: [
            "Backend engineering profile",
            "AI-Assisted Development",
            "Java Spring software engineer",
            "Cloud-oriented backend engineer",
          ],
        },
        contact: {
          title: "Contact | Javier Sanchez Lancha",
          description:
            "Contact Javier for Backend Software Engineer, Java Backend Developer, Spring Developer, enterprise platform, or cloud-oriented opportunities.",
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
            "A real project explained through problem, technical solution, stack, and impact in enterprise and e-commerce environments.",
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
        eyebrow: "Java, Spring, Enterprise Platforms, AI-Assisted Engineering",
        title: "Backend Software Engineer building scalable enterprise platforms",
        summary:
          "I design, build, and evolve backend systems for enterprise platforms with Java and Spring, aiming for maintainable, clear, and reliable solutions in real-world contexts.",
        proof:
          "Professional experience across business-critical platforms, real production support, and complex integrations, working with clients, QA, and business teams to turn requirements into sustainable technical solutions.",
        quickFacts: [
          {
            label: { es: "Foco", en: "Focus" },
            value: { es: "Java Backend, Spring, AI-Assisted Engineering", en: "Java Backend, Spring, AI-Assisted Engineering" },
          },
          {
            label: { es: "Entorno", en: "Environment" },
            value: { es: "Plataformas enterprise y sistemas distribuidos", en: "Enterprise platforms and distributed systems" },
          },
          {
            label: { es: "Especialidad", en: "Specialty" },
            value: {
              es: "SAP Commerce Cloud y e-commerce B2B/B2C, sin quedar limitado a consultoría SAP",
              en: "SAP Commerce Cloud and B2B/B2C e-commerce, without being limited to SAP consulting",
            },
          },
          {
            label: { es: "Diferencial", en: "Differentiator" },
            value: { es: "IA aplicada a ingeniería backend con criterio técnico propio", en: "AI applied to backend engineering with independent technical judgment" },
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
          { label: { es: "Plataformas enterprise", en: "Enterprise platforms" } },
          {
            label: { es: "Producción e incidencias reales", en: "Real production support" },
            shortLabel: { es: "Producción real", en: "Production support" },
          },
          { label: { es: "AI-Assisted Engineering", en: "AI-Assisted Engineering" } },
        ],
        supportLinks: [
          { href: "/experience", label: "View Experience" },
          { href: "/contact", label: "Contact Me" },
          { href: getCvFilePath("en"), label: "Download Resume", external: true },
        ],
      },
      strengths: {
        eyebrow: "Core strengths",
        title: "A backend profile shaped by real work in business-critical systems",
        description:
          "The value proposition is not based on buzzwords. It comes from real experience shipping software on enterprise platforms, solving complex incidents, and working with technical and business impact in mind.",
        items: [
          {
            title: { es: "Backend engineering con contexto real", en: "Backend engineering with real context" },
            body: {
              es: "Experiencia desarrollando lógica de negocio, servicios, jobs, modelos de datos e integraciones en plataformas que ya están en marcha.",
              en: "Experience building business logic, services, jobs, data models, and integrations in live platforms.",
            },
          },
          {
            title: { es: "Resolución de problemas complejos", en: "Complex problem solving" },
            body: {
              es: "Análisis de incidencias productivas, debugging técnico y mejora de estabilidad sobre sistemas críticos.",
              en: "Production issue analysis, technical debugging, and stability improvements on critical systems.",
            },
          },
          {
            title: { es: "Colaboracion con cliente y negocio", en: "Client and business collaboration" },
            body: {
              es: "Traducción de requisitos funcionales en soluciones escalables junto a QA, negocio y equipos funcionales.",
              en: "Translating functional requirements into scalable solutions together with QA, business, and functional teams.",
            },
          },
          {
            title: { es: "Entrega acelerada con IA", en: "Faster delivery with AI" },
            body: {
              es: "Uso práctico de herramientas generativas para acelerar análisis técnico, automatización, documentación y tareas repetitivas sin perder control sobre la implementación.",
              en: "Practical use of generative tools to accelerate technical analysis, automation, documentation, and repetitive tasks without losing implementation control.",
            },
          },
        ],
      },
      career: {
        eyebrow: "Experience",
        title: "Professional growth with a clear backend and enterprise direction",
        description:
          "From backend foundations in SAP and B2B environments to stronger technical ownership in live enterprise platforms, with an increasingly clear identity as a Backend Software Engineer.",
      },
      value: {
        eyebrow: "Professional value",
        title: "Professional Value",
        description: "The mix of backend depth, business context, and execution judgment I bring to enterprise environments.",
        items: [
          {
            title: { es: "Backend Engineering", en: "Backend Engineering" },
            body: {
              es: "Diseño y desarrollo de soluciones backend mantenibles y escalables para plataformas enterprise.",
              en: "Design and development of maintainable backend solutions for enterprise platforms, with a strong focus on clarity, stability, and sustainable evolution.",
            },
          },
          {
            title: { es: "Enterprise Systems", en: "Enterprise Systems" },
            body: {
              es: "Experiencia trabajando sobre sistemas críticos con procesos complejos, integraciones y operaciones de negocio reales.",
              en: "Experience working on critical systems with complex business processes and integrations.",
            },
          },
          {
            title: { es: "AI-Assisted Engineering", en: "AI-Assisted Engineering" },
            body: {
              es: "Uso de Codex, ChatGPT y Claude para acelerar análisis técnico, debugging, documentación y desarrollo.",
              en: "Using generative AI to accelerate analysis, implementation, and automation without outsourcing technical judgment.",
            },
          },
          {
            title: { es: "Business Understanding", en: "Business Understanding" },
            body: {
              es: "Capacidad para traducir requisitos funcionales complejos en soluciones técnicas robustas y mantenibles.",
              en: "Ability to translate complex business requirements into robust and maintainable technical solutions.",
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
        eyebrow: "AI-Assisted Engineering",
        title: "AI as a productivity accelerator, not a replacement for technical judgment",
        description:
          "I integrate generative AI into my engineering workflow to accelerate analysis, implementation, and automation. It helps me move faster, but the final technical judgment, architecture choices, and responsibility for the code remain mine.",
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
              es: "Aporto más velocidad sin renunciar a mantenibilidad, revisión crítica ni decisiones técnicas finales propias.",
              en: "I move faster without giving up maintainability, critical review, or the fact that the final technical decision and responsibility for the result stay with me.",
            },
          },
        ],
      },
      skills: {
        eyebrow: "Skills",
        title: "Technologies and capabilities grouped by the kind of value I bring",
        description:
          "The tools matter, but so does the context where I use them: backend engineering, enterprise platforms, cloud-oriented delivery, and collaborative execution.",
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
            items: ["Docker", "Azure", "Git", "CI/CD", "Cloud Solutions"],
          },
          {
            title: { es: "AI-Assisted Development", en: "AI-Assisted Development" },
            items: ["Codex", "ChatGPT", "Generative AI", "AI-Assisted Development", "Technical Analysis", "Automation"],
          },
          {
            title: { es: "Soft Skills", en: "Soft Skills" },
            items: ["Problem Solving", "Client Collaboration", "Requirements Analysis", "Teamwork", "Ownership", "Business Impact"],
          },
        ],
      },
      contact: {
        eyebrow: "Contact",
        title: "Contact",
        description:
          "If there is a strong match with your team or product, I would be glad to talk about backend, product, and enterprise platforms.",
        fitTitle: "Especially strong fit for teams looking for",
        fitBullets: [
          "A Backend/Java Developer with experience in enterprise platforms and microservices",
          "Someone who uses generative AI to accelerate execution and analysis without sacrificing quality",
          "A profile with strong design and complex problem-solving skills across product, QA, business, and client collaboration",
          "SAP Commerce Cloud experience without being limited to SAP consulting work",
        ],
      },
    },
    pages: {
      experience: {
        eyebrow: "Experience",
        title: "Experience building and sustaining enterprise platforms",
        intro:
          "My background combines backend foundations, strong Java and Spring experience, deep SAP Commerce Cloud exposure, and real work on live enterprise systems.",
        scanTitle: "Recruiter scan",
        scanBody: "Backend Software Engineer with experience in enterprise e-commerce, production issues, integrations, and direct collaboration with clients and business teams.",
        scanBullets: [
          "Java, Spring, SQL, and backend services in production environments",
          "SAP Commerce Cloud as a strong specialization, not my only professional identity",
          "Complex problem solving in B2B, B2C, and enterprise platform contexts",
        ],
      },
      projects: {
        eyebrow: "Projects",
        title: "Featured work and real cases",
        intro:
          "Each project is presented through the problem, the technical solution, the stack involved, and the impact, so the way I work becomes immediately clear.",
        scanTitle: "How to read these cases",
        scanBody: "These are not generic summaries. Each case explains the context, the solution, and the professional signal it leaves for technical recruiting.",
        scanBullets: [
          "Real problems in enterprise and e-commerce platforms",
          "Backend solutions using Java, Spring, and SAP Commerce Cloud",
          "Impact on stability, maintainability, delivery speed, and collaboration",
        ],
      },
      about: {
        eyebrow: "About",
        title: "Backend engineering with enterprise experience and product mindset",
        intro:
          "I am a Backend Software Engineer focused on Java, Spring, and enterprise platforms, used to working close to product and real business context.",
        summaryTitle: "Current positioning",
        summaryBody:
          "I enjoy understanding how a system really works: its integrations, its fragile points, its business impact, and what it takes to keep it healthy over time. My daily work moves across backend delivery, incident analysis, team conversations, and technical decisions that prioritize maintainability.",
        principlesTitle: "How I work",
        principlesIntro:
          "My way of working combines calm analysis, clear communication, and pragmatic execution aimed at solving problems well instead of making the system more complex.",
      },
      contact: {
        eyebrow: "Contact",
        title: "Let’s talk",
        intro:
          "If you are looking for a backend profile with experience in enterprise platforms, Java, Spring, and real production contexts, I would be glad to connect.",
        availability:
          "I am open to opportunities where I can keep growing as a Backend Software Engineer in product-driven, cloud-oriented environments with real technical challenges.",
        heroCardEyebrow: "Best fit",
        heroCardTitle: "Where I can add value quickly",
        heroCardBullets: [
          "Backend teams working with Java, Spring, and enterprise systems",
          "B2B/B2C e-commerce platforms with real operational complexity",
          "Environments where quality, ownership, and collaboration matter",
        ],
        fitTitle: "Especially aligned opportunities",
        fitBullets: [
          "Backend/Java Developer roles in enterprise platforms and microservices",
          "Teams that use generative AI to accelerate analysis and execution without sacrificing quality",
          "Environments where complex problem solving happens across product, QA, business, and client collaboration",
          "Opportunities where SAP Commerce Cloud is a strength, not a limitation",
        ],
        channelsTitle: "Channels",
        channelsItems: [
          { label: "Email", value: siteSettings.email, href: `mailto:${siteSettings.email}` },
          { label: "LinkedIn", value: siteSettings.linkedin, href: siteSettings.linkedin },
          { label: "GitHub", value: siteSettings.github, href: siteSettings.github },
          { label: "Location", value: siteSettings.location.en },
        ],
        channelsNote:
          "I’m interested in teams where I can contribute backend expertise, business understanding and the ability to build maintainable solutions in real-world environments.",
        finalNote:
          "I can also share more detail about my SAP Commerce Cloud experience, enterprise backend work, or how I approach engineering if it is relevant for the role.",
      },
    },
    footer: {
      note: "",
      availability:
        "Available for opportunities where backend engineering, cloud solutions, and pragmatic delivery matter as much as the stack itself.",
      builtWith: "Built with Next.js, TypeScript, and a practical engineering mindset.",
    },
  },
};
