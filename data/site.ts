import type { Locale } from "@/lib/i18n";

export const siteSettings = {
  name: "Javier",
  role: "Product-minded software engineer",
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
      defaultTitle: "Portfolio profesional de Javier",
      defaultDescription:
        "Portfolio bilingüe orientado a reclutadores: experiencia, hitos, casos y forma de trabajar de un perfil de ingeniería de producto.",
      pages: {
        experience: {
          title: "Experiencia profesional",
          description:
            "Trayectoria, contexto, decisiones e impacto en equipos de producto, frontend y plataforma.",
        },
        projects: {
          title: "Casos y proyectos",
          description:
            "Selección de proyectos contados desde el problema, la contribución técnica y el resultado obtenido.",
        },
        about: {
          title: "Sobre mí",
          description:
            "Cómo pienso, colaboro y convierto ambigüedad en entregas claras, sostenibles y bien explicadas.",
        },
        contact: {
          title: "Contacto",
          description:
            "Canales directos para conectar, revisar el CV y continuar la conversación profesional.",
        },
        projectDetail: {
          title: "Caso de estudio",
          description:
            "Detalle de un proyecto con foco en contexto, decisiones, ejecución e impacto.",
        },
      },
    },
    ctas: {
      resume: "Ver CV en PDF",
      email: "Escribir un email",
      linkedin: "Abrir LinkedIn",
      allProjects: "Ver todos los casos",
      allExperience: "Ver la trayectoria completa",
      about: "Conocer cómo trabajo",
    },
    home: {
      hero: {
        eyebrow: "Ingeniería de producto con foco en claridad, impacto y ejecución",
        title: "Construyo experiencias digitales sólidas y explico el porqué detrás de cada decisión.",
        summary:
          "Este portfolio amplía el CV con contexto: cómo afronto productos complejos, cómo convierto necesidades ambiguas en entregas claras y cómo conecto frontend, plataforma y negocio sin perder calidad.",
        availability:
          "Disponible para conversaciones sobre roles senior donde importen criterio técnico, colaboración transversal y capacidad de aterrizar producto.",
      },
      focusCards: [
        {
          title: "Narrativa orientada a reclutadores",
          body: "Cada sección está diseñada para responder rápido quién soy, qué hago y qué tipo de impacto puedo asumir.",
        },
        {
          title: "Profundidad sin ruido",
          body: "Los casos y la experiencia priorizan contexto, decisiones, resultados y señales de seniority frente a listas genéricas de tareas.",
        },
        {
          title: "Base mantenible",
          body: "El contenido vive en datos tipados y MDX para que actualizar la web sea simple y no dependa de un CMS.",
        },
      ],
      experience: {
        eyebrow: "Trayectoria",
        title: "Experiencia explicada con contexto e impacto",
        description:
          "Una línea de tiempo clara para entender evolución, responsabilidad, entorno técnico y resultados relevantes.",
      },
      milestones: {
        eyebrow: "Hitos",
        title: "Señales de criterio y seniority",
        description:
          "Logros que muestran no solo ejecución, sino también capacidad para ordenar complejidad, alinear equipos y elevar la calidad.",
      },
      skills: {
        eyebrow: "Habilidades",
        title: "Fortalezas que conectan producto y tecnología",
        description:
          "Capacidades agrupadas por áreas de valor, evitando la clásica lista plana de herramientas sin contexto.",
      },
      projects: {
        eyebrow: "Casos",
        title: "Proyectos descritos desde el problema hasta el resultado",
        description:
          "Casos escritos en MDX para contar decisiones, tradeoffs, stack y efectos reales de forma más profunda que en un CV.",
      },
      contact: {
        eyebrow: "Contacto",
        title: "La siguiente conversación debería ser fácil",
        description:
          "Accesos directos a email, LinkedIn y CV para que el portfolio acompañe la decisión sin crear fricción.",
      },
    },
    pages: {
      experience: {
        eyebrow: "Experiencia profesional",
        title: "Trayectoria construida alrededor de producto, frontend y plataforma",
        intro:
          "Cada etapa resume contexto, foco, decisiones y señales de impacto. La estructura está pensada para que un reclutador entienda rápido la progresión del perfil y el tipo de problemas que sabe abordar.",
      },
      projects: {
        eyebrow: "Casos y proyectos",
        title: "Una selección de trabajo explicada como conversación profesional",
        intro:
          "Aquí no hay solo capturas o stacks. Cada caso explica qué había que resolver, cuál fue la contribución principal y qué cambió después.",
      },
      about: {
        eyebrow: "Sobre mí",
        title: "Combino criterio técnico con foco en claridad y colaboración",
        intro:
          "Me interesa trabajar en productos con ambición y complejidad, donde las decisiones técnicas importan tanto como la manera en la que se comunican, se priorizan y se sostienen en el tiempo.",
        narrativeTitle: "Cómo enfoco el trabajo",
        narrative: [
          "Suelo moverme bien en espacios ambiguos: ordenar información, detectar lo importante, bajar riesgos y convertir discusiones abstractas en un plan ejecutable.",
          "Me siento especialmente cómodo conectando producto, diseño y frontend con una capa suficiente de plataforma y delivery para que las decisiones no se rompan al llegar a producción.",
          "Valoro los sistemas que hacen más fácil que otros equipos trabajen mejor: componentes consistentes, criterios compartidos, documentación útil y herramientas que reducen fricción.",
        ],
        principlesTitle: "Principios de trabajo",
        principles: [
          {
            title: "Claridad antes que complejidad aparente",
            body: "Prefiero soluciones comprensibles, explicables y sostenibles a arquitecturas vistosas que encarecen el mantenimiento.",
          },
          {
            title: "Producto y tecnología no compiten",
            body: "Las mejores decisiones suelen aparecer cuando se consideran juntas la experiencia de usuario, el coste técnico y la velocidad futura.",
          },
          {
            title: "La calidad se diseña desde el principio",
            body: "Accesibilidad, rendimiento, consistencia visual y observabilidad no deberían ser una fase aparte ni un arreglo al final.",
          },
        ],
      },
      contact: {
        eyebrow: "Contacto",
        title: "Si encaja el contexto, continuamos la conversación",
        intro:
          "La v1 evita formularios para que el contacto sea directo. La idea es reducir fricción y dejar claro cuál es la mejor manera de seguir hablando.",
        availability:
          "Abierto a explorar oportunidades donde tenga sentido combinar ingeniería, producto y liderazgo técnico cercano a la ejecución.",
        note:
          "Las URLs y datos de contacto incluidos aquí son placeholders fáciles de sustituir por tus datos reales desde los ficheros de contenido.",
      },
    },
    footer: {
      note: "Portfolio profesional bilingüe diseñado para complementar el CV con más profundidad, contexto y criterio.",
      availability: "Base preparada para crecer con más casos, artículos o un CMS si algún día lo necesitas.",
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
      defaultTitle: "Javier's professional portfolio",
      defaultDescription:
        "Bilingual portfolio for recruiters: career path, milestones, project case studies, and the way Javier works across product and engineering.",
      pages: {
        experience: {
          title: "Professional experience",
          description:
            "Career progression, context, decision making, and impact across product, frontend, and platform work.",
        },
        projects: {
          title: "Projects and case studies",
          description:
            "A selected set of projects explained through problem framing, technical contribution, and outcomes.",
        },
        about: {
          title: "About",
          description:
            "How I think, collaborate, and turn ambiguity into durable, well-explained delivery.",
        },
        contact: {
          title: "Contact",
          description:
            "Direct ways to connect, review the resume, and continue the professional conversation.",
        },
        projectDetail: {
          title: "Case study",
          description:
            "A closer look at one project, focused on context, decisions, execution, and impact.",
        },
      },
    },
    ctas: {
      resume: "Open resume PDF",
      email: "Send an email",
      linkedin: "Open LinkedIn",
      allProjects: "Browse all case studies",
      allExperience: "View full experience",
      about: "See how I work",
    },
    home: {
      hero: {
        eyebrow: "Product engineering focused on clarity, impact, and delivery",
        title: "I build dependable digital experiences and make the reasoning behind them visible.",
        summary:
          "This portfolio expands the resume with context: how I approach complex products, how I turn ambiguous needs into clear delivery, and how I connect frontend, platform, and business priorities without losing quality.",
        availability:
          "Open to conversations about senior roles where technical judgment, cross-functional collaboration, and product-minded execution matter.",
      },
      focusCards: [
        {
          title: "Recruiter-friendly narrative",
          body: "Each section is shaped to answer quickly who I am, what I do, and the kind of impact I can own.",
        },
        {
          title: "Depth without clutter",
          body: "Projects and experience focus on context, decisions, outcomes, and senior signals instead of generic task lists.",
        },
        {
          title: "Maintainable foundation",
          body: "Content lives in typed data and MDX so the site stays easy to evolve without adding CMS complexity.",
        },
      ],
      experience: {
        eyebrow: "Career path",
        title: "Experience explained through context and impact",
        description:
          "A clear timeline that shows progression, responsibility, technical environment, and meaningful outcomes.",
      },
      milestones: {
        eyebrow: "Milestones",
        title: "Signals of judgment and seniority",
        description:
          "Highlights that show more than execution: structuring complexity, aligning teams, and raising the quality bar.",
      },
      skills: {
        eyebrow: "Capabilities",
        title: "Strengths that connect product and technology",
        description:
          "Skills grouped by value area, avoiding the usual flat list of tools with no context.",
      },
      projects: {
        eyebrow: "Case studies",
        title: "Projects described from problem to result",
        description:
          "MDX-based case studies to explain decisions, tradeoffs, stack choices, and outcomes more deeply than a resume can.",
      },
      contact: {
        eyebrow: "Contact",
        title: "The next conversation should feel easy",
        description:
          "Direct access to email, LinkedIn, and the resume so the portfolio supports the decision without adding friction.",
      },
    },
    pages: {
      experience: {
        eyebrow: "Professional experience",
        title: "A career built across product, frontend, and platform work",
        intro:
          "Each step summarizes context, focus, decisions, and impact signals. The structure is designed so a recruiter can quickly understand the progression and the kinds of problems this profile is built to solve.",
      },
      projects: {
        eyebrow: "Projects and case studies",
        title: "Selected work explained like a professional conversation",
        intro:
          "This is not just screenshots or a stack list. Each case explains what needed to be solved, what the core contribution was, and what changed afterwards.",
      },
      about: {
        eyebrow: "About",
        title: "I combine technical judgment with clarity and collaborative execution",
        intro:
          "I enjoy working on ambitious, complex products where technical decisions matter as much as the way they are communicated, prioritized, and sustained over time.",
        narrativeTitle: "How I approach the work",
        narrative: [
          "I tend to do well in ambiguous spaces: organizing information, identifying what matters, reducing risk, and turning abstract discussions into something executable.",
          "I am especially comfortable connecting product, design, and frontend with enough platform and delivery awareness to keep decisions intact all the way to production.",
          "I value systems that help other teams work better: consistent components, shared decision criteria, useful documentation, and tooling that reduces friction.",
        ],
        principlesTitle: "Working principles",
        principles: [
          {
            title: "Clarity beats performative complexity",
            body: "I prefer solutions that are understandable, explainable, and durable over architectures that look impressive but are costly to maintain.",
          },
          {
            title: "Product and technology should reinforce each other",
            body: "The best decisions usually appear when user experience, technical cost, and future delivery speed are considered together.",
          },
          {
            title: "Quality is designed in, not bolted on",
            body: "Accessibility, performance, visual consistency, and observability should not be treated as a separate phase or a late fix.",
          },
        ],
      },
      contact: {
        eyebrow: "Contact",
        title: "If the context makes sense, let's continue the conversation",
        intro:
          "The first version avoids forms on purpose so contact stays direct. The goal is to reduce friction and make the next step obvious.",
        availability:
          "Open to exploring roles where engineering, product thinking, and hands-on technical leadership need to work closely together.",
        note:
          "The URLs and contact details used here are starter placeholders that are easy to replace with your real information from the content files.",
      },
    },
    footer: {
      note: "Bilingual professional portfolio designed to extend the resume with more depth, context, and judgment.",
      availability: "The foundation is ready to grow into more case studies, articles, or a CMS later if you ever need it.",
      builtWith: "Built with Next.js, TypeScript, Tailwind, and MDX.",
    },
  },
};

