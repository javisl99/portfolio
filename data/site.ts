import type { CopyCard, QuickFact, SkillCategory } from "@/data/types";
import type { Locale } from "@/lib/i18n";

export const siteSettings = {
  name: "Javier Sanchez Lancha",
  schemaRole: "Backend Software Engineer",
  email: "javier.sanchez.lancha99@gmail.com",
  linkedin: "https://www.linkedin.com/in/javiersanchezlancha",
  github: "https://github.com/javisl99",
  location: {
    es: "Sevilla, Espana",
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
      supportLinks: Array<{ href: string; label: string; external?: boolean }>;
    };
    strengths: { eyebrow: string; title: string; description: string; items: CopyCard[] };
    career: { eyebrow: string; title: string; description: string };
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
      channelsItems: Array<{ label: string; value: string }>;
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
    localeName: "Espanol",
    languageSwitch: "View in English",
    roleLabel: "Backend Software Engineer",
    navigation: [
      { href: pageSlugs.home, label: "Inicio" },
      { href: pageSlugs.experience, label: "Experiencia" },
      { href: pageSlugs.projects, label: "Proyectos" },
      { href: pageSlugs.about, label: "Sobre mi" },
      { href: pageSlugs.contact, label: "Contacto" },
    ],
    metadata: {
      defaultTitle: "Javier Sanchez Lancha | Backend Software Engineer",
      defaultDescription:
        "Portfolio de Javier Sanchez Lancha, Backend Software Engineer especializado en Java, Spring, plataformas enterprise, SAP Commerce Cloud, cloud solutions y AI-Assisted Engineering.",
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
            "Experiencia profesional en backend engineering, Java, Spring, SAP Commerce Cloud y plataformas enterprise con foco en impacto, estabilidad y colaboracion con negocio.",
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
            "Proyectos y casos reales explicados desde el problema, la solucion, el stack tecnico y el impacto sobre plataformas enterprise y e-commerce.",
          keywords: [
            "Java backend projects",
            "Enterprise platforms portfolio",
            "E-commerce platforms case studies",
            "SAP Commerce Cloud projects",
          ],
        },
        about: {
          title: "Sobre mi | Backend Engineering & AI-Assisted Development",
          description:
            "Perfil profesional orientado a backend engineering, plataformas enterprise, cloud solutions y AI-Assisted Development aplicado con criterio tecnico.",
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
            "Caso real explicado desde el problema, la solucion tecnica, el stack y el impacto profesional en plataformas enterprise y e-commerce.",
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
      about: "Sobre mi",
    },
    home: {
      hero: {
        eyebrow: "Java, Spring, Enterprise Platforms, AI-Assisted Engineering",
        title: "Backend Software Engineer construyendo plataformas enterprise escalables",
        summary:
          "Diseno, desarrollo y mejoro sistemas backend para plataformas enterprise, combinando Java, Spring, SAP Commerce Cloud y flujos de trabajo AI-assisted para entregar soluciones mas limpias, rapidas y fiables.",
        proof:
          "Experiencia real en plataformas criticas de e-commerce y negocio, trabajando con cliente, QA y equipos funcionales para convertir requisitos complejos en soluciones tecnicas mantenibles.",
        quickFacts: [
          {
            label: { es: "Foco", en: "Focus" },
            value: { es: "Backend, Java, Spring", en: "Backend, Java, Spring" },
          },
          {
            label: { es: "Entorno", en: "Environment" },
            value: { es: "Plataformas enterprise", en: "Enterprise platforms" },
          },
          {
            label: { es: "Especialidad", en: "Specialty" },
            value: { es: "SAP Commerce Cloud y e-commerce B2B/B2C", en: "SAP Commerce Cloud and B2B/B2C e-commerce" },
          },
          {
            label: { es: "Diferencial", en: "Differentiator" },
            value: { es: "AI-Assisted Engineering con criterio tecnico", en: "AI-Assisted Engineering with technical judgment" },
          },
        ],
        supportLinks: [
          { href: "/experience", label: "Ver experiencia" },
          { href: "/contact", label: "Contactar" },
          { href: "/cv", label: "Descargar CV", external: true },
        ],
      },
      strengths: {
        eyebrow: "Fortalezas clave",
        title: "Perfil backend con experiencia real en sistemas sensibles para negocio",
        description:
          "La propuesta de valor no se apoya en buzzwords. Se apoya en experiencia real entregando software en plataformas enterprise, resolviendo incidencias complejas y trabajando con impacto tecnico y de negocio.",
        items: [
          {
            title: { es: "Backend engineering con contexto real", en: "Backend engineering with real context" },
            body: {
              es: "Experiencia desarrollando logica de negocio, servicios, jobs, modelos de datos e integraciones en plataformas que ya estan en marcha.",
              en: "Experience building business logic, services, jobs, data models, and integrations in live platforms.",
            },
          },
          {
            title: { es: "Resolucion de problemas complejos", en: "Complex problem solving" },
            body: {
              es: "Analisis de incidencias productivas, debugging tecnico y mejora de estabilidad sobre sistemas criticos.",
              en: "Production issue analysis, technical debugging, and stability improvements on critical systems.",
            },
          },
          {
            title: { es: "Colaboracion con cliente y negocio", en: "Client and business collaboration" },
            body: {
              es: "Traduccion de requisitos funcionales en soluciones escalables junto a QA, negocio y equipos funcionales.",
              en: "Translating functional requirements into scalable solutions together with QA, business, and functional teams.",
            },
          },
          {
            title: { es: "Entrega acelerada con IA", en: "Faster delivery with AI" },
            body: {
              es: "Uso practico de herramientas generativas para acelerar analisis tecnico, automatizacion, documentacion y tareas repetitivas sin perder control sobre la implementacion.",
              en: "Practical use of generative tools to accelerate technical analysis, automation, documentation, and repetitive tasks without losing implementation control.",
            },
          },
        ],
      },
      career: {
        eyebrow: "Experience",
        title: "Evolucion profesional orientada a impacto",
        description:
          "De la base backend en proyectos SAP y B2B hasta ownership tecnico en plataformas enterprise vivas, con una identidad cada vez mas clara como Backend Software Engineer.",
      },
      projects: {
        eyebrow: "Featured work",
        title: "Casos donde problema, solucion e impacto quedan claros",
        description:
          "Proyectos y etapas contados desde lo que habia que resolver, la solucion tecnica aplicada y lo que demuestran sobre mi perfil en software engineering.",
      },
      ai: {
        eyebrow: "AI-Assisted Engineering",
        title: "IA como acelerador de productividad, no como sustituto del criterio tecnico",
        description:
          "Integro herramientas de AI-Assisted Development en mi flujo de ingenieria para trabajar mas rapido y mejor sin comprometer calidad. Las uso para explorar soluciones, generar boilerplate, depurar incidencias complejas, revisar codigo, documentar decisiones tecnicas y automatizar tareas repetitivas.",
        items: [
          {
            title: { es: "Analisis tecnico mas rapido", en: "Faster technical analysis" },
            body: {
              es: "Acelero exploracion de soluciones, lectura de contexto y primeras hipotesis tecnicas antes de implementar.",
              en: "I accelerate solution exploration, context reading, and early technical hypotheses before implementation.",
            },
          },
          {
            title: { es: "Debugging mas eficiente", en: "Better debugging workflows" },
            body: {
              es: "Las utilizo para aislar causas raiz, revisar caminos alternativos y ordenar investigacion tecnica.",
              en: "I use them to isolate root causes, review alternative paths, and structure technical investigation.",
            },
          },
          {
            title: { es: "Documentacion y automatizacion", en: "Documentation and automation" },
            body: {
              es: "Me ayudan a documentar mejor, generar scripts y automatizar trabajo repetitivo para centrarme en arquitectura y valor de negocio.",
              en: "They help me document better, generate scripts, and automate repetitive work so I can focus on architecture and business value.",
            },
          },
          {
            title: { es: "Soporte a calidad de codigo", en: "Code quality support" },
            body: {
              es: "Aporto mas velocidad sin renunciar a mantenibilidad, revision critica ni decisiones tecnicas finales propias.",
              en: "I move faster without giving up maintainability, critical review, or ownership of final technical decisions.",
            },
          },
        ],
      },
      skills: {
        eyebrow: "Skills",
        title: "Stack y capacidades organizadas por el tipo de valor que aporto",
        description:
          "Las tecnologias importan, pero tambien el contexto en el que las aplico: backend, plataformas enterprise, cloud solutions, AI-Assisted Development y colaboracion efectiva.",
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
        title: "Abierto a oportunidades con foco en backend, producto y plataformas enterprise",
        description:
          "Busco seguir creciendo como Backend Software Engineer en entornos product-driven y cloud-oriented, trabajando en sistemas escalables y de alto impacto.",
        fitTitle: "Encaje especialmente bien en equipos que buscan",
        fitBullets: [
          "Java Backend Developer o Spring Developer con experiencia real en plataformas enterprise",
          "Perfil capaz de moverse entre negocio, QA, cliente y desarrollo sin perder profundidad tecnica",
          "Ingenieria orientada a estabilidad, mantenibilidad y entrega efectiva",
          "Experiencia fuerte en SAP Commerce Cloud sin quedar limitado a una identidad de consultoria SAP",
        ],
      },
    },
    pages: {
      experience: {
        eyebrow: "Experience",
        title: "Experiencia construyendo y sosteniendo plataformas enterprise",
        intro:
          "Mi trayectoria combina base backend, profundidad en Java y Spring, experiencia fuerte en SAP Commerce Cloud y trabajo real sobre plataformas enterprise vivas.",
        scanTitle: "Recruiter scan",
        scanBody: "Backend Software Engineer con recorrido en e-commerce enterprise, incidencias productivas, integraciones y colaboracion directa con cliente y negocio.",
        scanBullets: [
          "Java, Spring, SQL y servicios backend sobre sistemas en produccion",
          "SAP Commerce Cloud como fortaleza tecnica, no como unica identidad profesional",
          "Experiencia resolviendo problemas complejos en entornos B2B/B2C y enterprise",
        ],
      },
      projects: {
        eyebrow: "Projects",
        title: "Featured work y casos reales",
        intro:
          "Cada proyecto se presenta desde el problema, la solucion tecnica, el stack utilizado y el impacto, para que se vea con claridad como trabajo y donde aporto valor.",
        scanTitle: "How to read these cases",
        scanBody: "No son descripciones genericas: cada caso explica el contexto, la solucion y la senal profesional que deja para recruiting tecnico.",
        scanBullets: [
          "Problemas reales de plataformas enterprise y e-commerce",
          "Soluciones backend con Java, Spring y SAP Commerce Cloud",
          "Impacto sobre estabilidad, entrega, mantenibilidad y colaboracion",
        ],
      },
      about: {
        eyebrow: "Sobre mi",
        title: "Backend engineering con experiencia enterprise y mentalidad de producto",
        intro:
          "Soy Software Engineer especializado en desarrollo backend con Java, Spring y SAP Commerce Cloud, con experiencia real en plataformas enterprise de gran escala y sistemas criticos para negocio.",
        summaryTitle: "Current positioning",
        summaryBody:
          "Trabajo sobre soluciones backend, integraciones, modelos de datos, jobs, servicios y automatizaciones. En paralelo, uso AI-Assisted Development para acelerar implementacion, debugging, analisis tecnico y tareas repetitivas sin perder foco en calidad, mantenibilidad e impacto de negocio.",
        principlesTitle: "Como trabajo",
        principlesIntro:
          "Mi forma de trabajar combina profundidad tecnica, claridad con negocio y una forma pragmatica de usar IA generativa para entregar mejor software.",
      },
      contact: {
        eyebrow: "Contact",
        title: "Hablemos",
        intro:
          "Si buscas un perfil backend con experiencia en enterprise platforms, Java, Spring, SAP Commerce Cloud y AI-Assisted Engineering, estare encantado de conversar.",
        availability:
          "Estoy abierto a oportunidades donde pueda seguir creciendo como Backend Software Engineer en entornos product-driven, cloud-oriented y con retos tecnicos reales.",
        heroCardEyebrow: "Best fit",
        heroCardTitle: "Donde puedo aportar mas valor desde el primer momento",
        heroCardBullets: [
          "Equipos backend sobre Java, Spring y sistemas enterprise",
          "Plataformas e-commerce B2B/B2C con complejidad real",
          "Contextos donde calidad, ownership y colaboracion importan",
        ],
        fitTitle: "Oportunidades especialmente alineadas",
        fitBullets: [
          "Backend Software Engineer o Java Backend Developer",
          "Spring Developer en plataformas enterprise o cloud solutions",
          "Equipos que valoren AI-Assisted Development con enfoque practico",
          "Entornos donde SAP Commerce Cloud sea una fortaleza, no un limite",
        ],
        channelsTitle: "Canales",
        channelsItems: [
          { label: "Email", value: siteSettings.email },
          { label: "LinkedIn", value: siteSettings.linkedin },
          { label: "Ubicacion", value: siteSettings.location.es },
        ],
        channelsNote:
          "Prefiero conversaciones claras sobre el reto tecnico, el contexto de producto y el tipo de equipo, mas que procesos vacios o descripciones genricas.",
        finalNote:
          "Tambien puedo compartir mas contexto sobre experiencia en SAP Commerce Cloud, backend enterprise o mi flujo de AI-Assisted Engineering si encaja con la posicion.",
      },
    },
    footer: {
      note: "Backend Software Engineer especializado en plataformas enterprise, Java, Spring y AI-Assisted Engineering.",
      availability:
        "Disponible para oportunidades donde backend engineering, cloud solutions y delivery pragmatica importen tanto como la tecnologia.",
      builtWith: "Built with Next.js, TypeScript and a practical engineering mindset.",
    },
  },
  en: {
    localeName: "English",
    languageSwitch: "Ver en Espanol",
    roleLabel: "Backend Software Engineer",
    navigation: [
      { href: pageSlugs.home, label: "Home" },
      { href: pageSlugs.experience, label: "Experience" },
      { href: pageSlugs.projects, label: "Projects" },
      { href: pageSlugs.about, label: "About" },
      { href: pageSlugs.contact, label: "Contact" },
    ],
    metadata: {
      defaultTitle: "Javier Sanchez Lancha | Backend Software Engineer",
      defaultDescription:
        "Portfolio of Javier Sanchez Lancha, Backend Software Engineer focused on Java, Spring, enterprise platforms, SAP Commerce Cloud, cloud solutions, and AI-Assisted Engineering.",
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
      resume: "Download CV",
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
          "I design, build, and improve backend systems for large-scale enterprise platforms, combining Java, Spring, SAP Commerce Cloud, and AI-assisted workflows to deliver cleaner, faster, and more reliable solutions.",
        proof:
          "Hands-on experience in business-critical e-commerce and enterprise environments, working with clients, QA, and functional teams to turn complex requirements into maintainable technical solutions.",
        quickFacts: [
          {
            label: { es: "Foco", en: "Focus" },
            value: { es: "Backend, Java, Spring", en: "Backend, Java, Spring" },
          },
          {
            label: { es: "Entorno", en: "Environment" },
            value: { es: "Plataformas enterprise", en: "Enterprise platforms" },
          },
          {
            label: { es: "Especialidad", en: "Specialty" },
            value: { es: "SAP Commerce Cloud y e-commerce B2B/B2C", en: "SAP Commerce Cloud and B2B/B2C e-commerce" },
          },
          {
            label: { es: "Diferencial", en: "Differentiator" },
            value: { es: "AI-Assisted Engineering con criterio tecnico", en: "AI-Assisted Engineering with technical judgment" },
          },
        ],
        supportLinks: [
          { href: "/experience", label: "View Experience" },
          { href: "/contact", label: "Contact Me" },
          { href: "/cv", label: "Download CV", external: true },
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
              es: "Experiencia desarrollando logica de negocio, servicios, jobs, modelos de datos e integraciones en plataformas que ya estan en marcha.",
              en: "Experience building business logic, services, jobs, data models, and integrations in live platforms.",
            },
          },
          {
            title: { es: "Resolucion de problemas complejos", en: "Complex problem solving" },
            body: {
              es: "Analisis de incidencias productivas, debugging tecnico y mejora de estabilidad sobre sistemas criticos.",
              en: "Production issue analysis, technical debugging, and stability improvements on critical systems.",
            },
          },
          {
            title: { es: "Colaboracion con cliente y negocio", en: "Client and business collaboration" },
            body: {
              es: "Traduccion de requisitos funcionales en soluciones escalables junto a QA, negocio y equipos funcionales.",
              en: "Translating functional requirements into scalable solutions together with QA, business, and functional teams.",
            },
          },
          {
            title: { es: "Entrega acelerada con IA", en: "Faster delivery with AI" },
            body: {
              es: "Uso practico de herramientas generativas para acelerar analisis tecnico, automatizacion, documentacion y tareas repetitivas sin perder control sobre la implementacion.",
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
      projects: {
        eyebrow: "Featured work",
        title: "Work presented through problem, solution, and impact",
        description:
          "Projects and career stages written to make the technical challenge, the chosen solution, and the professional signal clear to recruiters and engineering teams.",
      },
      ai: {
        eyebrow: "AI-Assisted Engineering",
        title: "AI as a productivity accelerator, not a replacement for technical judgment",
        description:
          "I integrate AI-assisted development tools into my engineering workflow to work faster and smarter without compromising quality. I use them to explore solutions, generate boilerplate, debug complex issues, review code, document technical decisions, and automate repetitive tasks.",
        items: [
          {
            title: { es: "Analisis tecnico mas rapido", en: "Faster technical analysis" },
            body: {
              es: "Acelero exploracion de soluciones, lectura de contexto y primeras hipotesis tecnicas antes de implementar.",
              en: "I accelerate solution exploration, context reading, and early technical hypotheses before implementation.",
            },
          },
          {
            title: { es: "Debugging mas eficiente", en: "Better debugging workflows" },
            body: {
              es: "Las utilizo para aislar causas raiz, revisar caminos alternativos y ordenar investigacion tecnica.",
              en: "I use them to isolate root causes, review alternative paths, and structure technical investigation.",
            },
          },
          {
            title: { es: "Documentacion y automatizacion", en: "Documentation and automation" },
            body: {
              es: "Me ayudan a documentar mejor, generar scripts y automatizar trabajo repetitivo para centrarme en arquitectura y valor de negocio.",
              en: "They help me document better, generate scripts, and automate repetitive work so I can focus on architecture and business value.",
            },
          },
          {
            title: { es: "Soporte a calidad de codigo", en: "Code quality support" },
            body: {
              es: "Aporto mas velocidad sin renunciar a mantenibilidad, revision critica ni decisiones tecnicas finales propias.",
              en: "I move faster without giving up maintainability, critical review, or ownership of final technical decisions.",
            },
          },
        ],
      },
      skills: {
        eyebrow: "Skills",
        title: "Technologies and capabilities grouped by the kind of value I bring",
        description:
          "The tools matter, but so does the context where I use them: backend engineering, enterprise platforms, cloud solutions, AI-Assisted Development, and collaborative delivery.",
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
        title: "Open to backend, product, and enterprise platform opportunities",
        description:
          "I want to keep growing as a Backend Software Engineer in product-driven and cloud-oriented environments, building scalable and high-impact software.",
        fitTitle: "Especially strong fit for teams looking for",
        fitBullets: [
          "A Java Backend Developer or Spring Developer with real enterprise-platform experience",
          "Someone able to work across business, QA, client communication, and engineering delivery",
          "An engineering profile focused on stability, maintainability, and practical execution",
          "Strong SAP Commerce Cloud experience without being boxed into a narrow SAP-consulting identity",
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
          "I am a Software Engineer specialized in backend development with Java, Spring, and SAP Commerce Cloud, with real experience in large-scale enterprise platforms and business-critical systems.",
        summaryTitle: "Current positioning",
        summaryBody:
          "I work on backend solutions, integrations, data models, jobs, services, and automation processes. In my daily workflow, I use AI-Assisted Development to accelerate implementation, debugging, technical analysis, and repetitive engineering tasks while keeping a strong focus on code quality, maintainability, and business impact.",
        principlesTitle: "How I work",
        principlesIntro:
          "My way of working combines technical depth, clear collaboration with business stakeholders, and a practical use of generative AI to ship better software.",
      },
      contact: {
        eyebrow: "Contact",
        title: "Let’s talk",
        intro:
          "If you are looking for a backend profile with experience in enterprise platforms, Java, Spring, SAP Commerce Cloud, and AI-Assisted Engineering, I would be glad to connect.",
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
          "Backend Software Engineer or Java Backend Developer roles",
          "Spring Developer positions in enterprise platforms or cloud solutions",
          "Teams that value practical AI-Assisted Development",
          "Environments where SAP Commerce Cloud is a strength, not a limitation",
        ],
        channelsTitle: "Channels",
        channelsItems: [
          { label: "Email", value: siteSettings.email },
          { label: "LinkedIn", value: siteSettings.linkedin },
          { label: "Location", value: siteSettings.location.en },
        ],
        channelsNote:
          "I prefer clear conversations about the technical challenge, the product context, and the kind of team involved rather than vague process-driven descriptions.",
        finalNote:
          "I can also share more detail about my SAP Commerce Cloud experience, enterprise backend work, or AI-assisted workflow if it is relevant for the role.",
      },
    },
    footer: {
      note: "Backend Software Engineer focused on enterprise platforms, Java, Spring, and AI-Assisted Engineering.",
      availability:
        "Available for opportunities where backend engineering, cloud solutions, and pragmatic delivery matter as much as the stack itself.",
      builtWith: "Built with Next.js, TypeScript, and a practical engineering mindset.",
    },
  },
};
