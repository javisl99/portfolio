# Portfolio Positioning Refresh Design

## Objetivo

Actualizar el portfolio profesional para alinearlo con un posicionamiento más claro como `Backend Software Engineer`, reforzando la especialización en `Java`, `Spring`, plataformas enterprise y `AI-Assisted Engineering`, sin alterar el diseño visual base ni la estructura principal de navegación.

## Alcance

- Actualizar copy del hero, recruiter snapshot, contacto y secciones de valor.
- Reposicionar la experiencia profesional para reducir la percepción de perfil exclusivamente SAP y reforzar backend engineering enterprise.
- Reescribir los casos de éxito principales para reflejar mejor debugging asistido por IA, criterio técnico y resolución de problemas complejos.
- Mejorar metadata SEO, favicons y consistencia semántica.
- Aplicar una limpieza semántica pequeña y enfocada si detectamos headings, textos o enlaces que resten claridad.
- Verificar que el proyecto siga compilando con el script de build, pero sin levantar el entorno de desarrollo por nuestra parte.

## Objetivos No Incluidos

- No rediseñar layout, tipografía, estructura de secciones ni navegación principal.
- No introducir nuevas páginas complejas ni rehacer la arquitectura de contenido.
- No cambiar el stack tecnológico ni el flujo de internacionalización existente.
- No lanzar ni operar el servidor de desarrollo; la validación visual interactiva la hará el usuario levantando el proyecto localmente.

## Estado Actual Observado

- El contenido principal del home y muchas piezas SEO están centralizadas en `data/site.ts`.
- La experiencia profesional está modelada en `data/experience.ts`.
- Los casos de éxito viven en archivos MDX por idioma dentro de `content/projects/es` y `content/projects/en`.
- La metadata general se define desde `app/layout.tsx` y se complementa con `lib/metadata.ts`.
- El contacto y el CTA del footer usan copy centralizado y enlaces de `siteSettings`.

## Enfoque Recomendado

Aplicar un cambio editorial completo, manteniendo intacto el lenguaje visual existente y aprovechando la centralización actual de textos. Esto minimiza riesgo de regresión visual y nos permite conseguir consistencia de mensaje entre home, experiencia, proyectos, metadata y contacto.

La pequeña limpieza semántica se limitará a:

- Revisar jerarquía de headings en componentes tocados.
- Confirmar `alt` útil en imágenes e iconos relevantes.
- Ajustar alguna frase o referencia en inglés que rompa la consistencia del español, salvo keywords estratégicas.
- Añadir o reforzar acceso visible a GitHub o Proyectos desde contacto si el contenido actual no lo deja suficientemente claro.

## Diseño De Cambios

### 1. Hero y metadata

Actualizaremos el subtítulo principal del hero para destacar explícitamente diseño, desarrollo y mejora de sistemas backend enterprise con `Java`, `Spring` y flujos `AI-Assisted`.

La metadata global se ajustará para reforzar el posicionamiento SEO:

- `title`: `Backend Software Engineer | Java, Spring & AI-Assisted Engineering`
- `description`: orientada a plataformas enterprise con `Java`, `Spring`, `SAP Commerce Cloud` y herramientas de IA generativa

También sustituiremos el favicon actual por una versión oscura del logo `<JS/>`, incorporando:

- `public/favicon-js-dark.svg`
- `public/favicon.ico`
- actualización de referencias de iconos en la metadata o layout raíz

### 2. Resumen para recruiters

Mantendremos la tarjeta lateral del hero y su estructura actual, pero reescribiremos el contenido para que el resumen sea más preciso:

- Foco: `Java Backend`, `Spring`, `AI-Assisted Engineering`
- Entorno: plataformas enterprise y sistemas distribuidos
- Especialidad: `SAP Commerce Cloud` y e-commerce `B2B/B2C`, dejando claro que no define todo el perfil
- Diferencial: uso práctico de `Codex` y `ChatGPT` para acelerar trabajo backend con criterio técnico propio

También se ajustará el bloque descriptivo de esa tarjeta para que el mensaje sea coherente con el nuevo posicionamiento.

### 3. Experiencia profesional

Se renombrarán roles y se actualizarán overview, contexto, problema, intervención, resultado y signal cuando sea necesario:

- Airbus:
  - Nuevo rol: `Backend Software Engineer (SAP/ABAP & B2B e-Commerce)`
  - Nuevo enfoque: base sólida en backend y arquitecturas enterprise, incluyendo trabajo en Airbus con mezcla de `ABAP` y `SAP Commerce`
- Claro Perú:
  - Nuevo rol: `Backend Software Engineer / SAP Commerce Cloud`
  - Nuevo enfoque: trabajo en checkout, pricing, stock e integraciones; consolidación de criterio en `Java`, `Spring` y decisión sobre cuándo extender el estándar
- BuildingCenter:
  - Nuevo rol: `Backend Software Engineer | Enterprise Platforms`
  - Nuevo enfoque: ownership end-to-end, soporte productivo, implementación de funcionalidades críticas y uso de IA para análisis, debugging y documentación

El cambio se aplicará tanto a cronología como a tarjetas o referencias derivadas desde los datos.

### 4. Casos de éxito

Se actualizarán los MDX de `BuildingCenter` y `Claro Perú` en español e inglés para mantener coherencia entre idiomas.

`BuildingCenter`:

- Problema: plataforma viva con presión operativa, incidencias y necesidad de estabilidad sostenida
- Solución: combinación de `Java`, `Spring`, `SQL`, investigación técnica y debugging asistido por IA
- Impacto: mejora de estabilidad, mejor criterio de resolución y posicionamiento claro como backend engineer en entorno enterprise

`Claro Perú`:

- Problema: tocar flujos sensibles de checkout, pricing y stock sin comprometer mantenibilidad
- Solución: customizaciones backend apoyadas por workflows `AI-assisted` para acelerar análisis y ejecución
- Impacto: fortalecimiento del criterio para extender flujos core de e-commerce con seguridad técnica

### 5. Sección AI-Assisted Engineering

Mantendremos la sección y sus cuatro tarjetas, pero reescribiremos el texto para nombrar explícitamente:

- `Codex`
- `ChatGPT`
- `GitHub Copilot`

El mensaje central dejará claro que estas herramientas aceleran análisis, debugging, documentación y automatización, pero que el criterio técnico final, la selección de solución y la responsabilidad de la implementación siguen siendo propios.

### 6. Contacto

Se actualizará la lista de encaje para atraer oportunidades alineadas con backend enterprise:

- `Backend/Java Developer` con experiencia en plataformas enterprise y microservicios
- Perfil que usa IA generativa para acelerar desarrollo y documentación sin sacrificar calidad
- Capacidad de diseño y resolución de problemas complejos junto a producto, QA, negocio y cliente
- Experiencia en `SAP Commerce Cloud` sin quedar encerrado en consultoría SAP

También comprobaremos:

- que el CTA `Listo para hablar...` siga operativo
- que email y LinkedIn sean correctos
- que exista una salida clara hacia GitHub o hacia la página de Proyectos

### 7. Consistencia de idioma

El contenido en español será el dominante en la experiencia principal, manteniendo en inglés solo las keywords de posicionamiento decididas, como `Backend Software Engineer` o `AI-Assisted Engineering`.

Se revisarán frases mezcladas accidentalmente, especialmente en:

- experience data
- recruiter snapshot
- copy de skills
- descripciones de proyectos

### 8. Accesibilidad y SEO

Se hará una validación ligera pero dirigida:

- comprobar `alt` en imágenes renderizadas
- confirmar que iconos decorativos no generen ruido de accesibilidad
- revisar jerarquía `h1/h2/h3` en home y componentes tocados
- preservar legibilidad móvil tras el aumento de longitud en algunos textos

## Archivos Previos Afectados

- `data/site.ts`
- `data/experience.ts`
- `lib/metadata.ts`
- `app/layout.tsx`
- `components/sections/home-hero.tsx`
- `components/sections/ai-assisted-section.tsx`
- `components/sections/contact-panel.tsx`
- `components/layout/footer.tsx`
- `content/projects/es/buildingcenter-incidental-evolutivo.mdx`
- `content/projects/es/claro-peru-standard-customizations.mdx`
- `content/projects/es/airbus-b2b-foundation.mdx`
- `content/projects/en/buildingcenter-incidental-evolutivo.mdx`
- `content/projects/en/claro-peru-standard-customizations.mdx`
- `content/projects/en/airbus-b2b-foundation.mdx`
- `public/favicon-js-dark.svg`
- `public/favicon.ico`

La lista final podrá variar ligeramente si encontramos que algún ajuste menor de semántica vive en otro componente de presentación.

## Riesgos y Mitigaciones

- Riesgo: textos más largos rompan equilibrio visual en mobile.
  - Mitigación: revisar clases tipográficas y espaciados solo donde haga falta, sin rediseño.

- Riesgo: inconsistencias entre ES y EN en proyectos.
  - Mitigación: actualizar ambos idiomas en el mismo pase.

- Riesgo: duplicar mensajes y generar exceso de buzzwords.
  - Mitigación: priorizar precisión editorial y repetir solo keywords con valor SEO o de posicionamiento real.

- Riesgo: favicon nuevo no quede correctamente referenciado por Next.
  - Mitigación: validar naming, ubicación y referencias de metadata durante el build.

## Verificación Prevista

- Ejecutar `npm run build` o el script de build disponible.
- Verificar que no haya errores de TypeScript, Next o contenido MDX.
- Dejar la validación visual para que el usuario levante el proyecto y revisemos juntos los cambios resultantes.

## Criterio De Finalización

Consideraremos el trabajo completo cuando:

- el mensaje profesional del portfolio esté alineado con `Backend Software Engineer`
- la experiencia y los proyectos reflejen mejor backend enterprise y uso responsable de IA
- metadata y favicon estén actualizados
- build pase correctamente
- el usuario pueda levantar el proyecto y revisar visualmente los cambios con nosotros
