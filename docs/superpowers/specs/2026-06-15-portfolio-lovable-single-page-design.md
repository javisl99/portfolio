# Portfolio Lovable Single-Page Design

## Objetivo

Aplicar al portfolio la identidad visual generada por Lovable de forma fiel, manteniendo el contenido profesional actual y convirtiendo la experiencia en una única landing page navegable por scroll, sin navegación por páginas internas.

## Alcance

- Integrar los assets de marca exportados por Lovable en el portfolio.
- Actualizar favicon, logos, metadata visual, `theme-color` y referencias OpenGraph/Twitter.
- Rehacer el sistema visual global para alinearlo con la paleta navy + blue definida por Lovable.
- Convertir la experiencia en una única landing page por idioma, navegable mediante anclas.
- Eliminar la navegación funcional entre páginas internas para experiencia, proyectos, about y contacto.
- Mantener el contenido profesional existente salvo ajustes mínimos en CTAs o labels que dejen de tener sentido tras el paso a single-page.
- Validar el resultado con `npm run lint` y `npm run build`.

## Objetivos No Incluidos

- No rehacer el contenido profesional desde cero.
- No introducir nuevas secciones complejas ni nuevas funcionalidades de producto.
- No cambiar la combinación tipográfica actual de `Manrope` y `Space Grotesk`.
- No introducir routing avanzado, transiciones entre páginas ni un sistema híbrido de landing + subpáginas.
- No inventar assets raster nuevos si Lovable no los exportó; en esos casos se priorizará SVG o generación dinámica fiel.

## Estado Actual Observado

- El proyecto es una app Next.js con estilos globales centralizados en `app/globals.css`.
- La metadata raíz y los iconos están definidos en `app/layout.tsx`.
- La lógica de metadata compartida y OpenGraph/Twitter vive en `lib/metadata.ts`.
- Existe una OG image dinámica en `app/opengraph-image.tsx`.
- El header y el footer usan actualmente una marca basada en `TerminalSquare` en lugar de un logo SVG real.
- La navegación principal, el menú móvil y varios CTAs enlazan a rutas de páginas internas.
- Los assets públicos actuales son mínimos y ya existe un `favicon.ico`.
- Lovable ha exportado cuatro assets relevantes en `/Users/javi/Downloads/lovable`:
  - `favicon.svg`
  - `mark.svg`
  - `primary.svg`
  - `secondary.svg`

## Enfoque Recomendado

Aplicar un `refresh fiel equilibrado`: trasladar la identidad de Lovable de forma muy visible en marca, paleta, superficies, botones y cards, pero reutilizando la estructura de secciones ya existente para minimizar regresiones. En paralelo, simplificar la arquitectura de navegación hacia una única landing por idioma, donde toda la exploración del sitio suceda por scroll con anclas internas.

Este enfoque permite que el sitio:

- se vea claramente alineado con la nueva marca
- mantenga su contenido y jerarquía editorial
- reduzca fricción de navegación
- conserve un riesgo razonable a nivel responsive y de build

## Diseño De Cambios

### 1. Arquitectura Single-Page

El portfolio pasará a funcionar como una única landing page por idioma.

- La home seguirá siendo el punto de entrada principal.
- Las secciones principales (`experience`, `projects`, `about`, `contact`) se renderizarán dentro de la misma página.
- La navegación de desktop y mobile apuntará exclusivamente a anclas como `#experience`, `#projects`, `#about` y `#contact`.
- Los CTAs internos se migrarán a scroll targets equivalentes.
- Las páginas internas dejarán de ser parte de la experiencia principal.

Decisión de implementación:

- Mantendremos las rutas existentes solo si son necesarias para evitar errores de compilación o referencias colgantes.
- Si se mantienen, se simplificarán para redirigir o dejarán de usarse desde la UI principal.
- La experiencia visible para el usuario será estrictamente de una sola página, tanto en desktop como en responsive.

### 2. Sistema De Marca

La marca de Lovable sustituirá los recursos actuales del sitio.

- `favicon.svg` se usará como icono principal.
- `mark.svg` servirá como base para una versión compacta del logo.
- `primary.svg` se usará como wordmark principal en contextos amplios.
- `secondary.svg` se podrá reutilizar como variante compacta secundaria si encaja mejor en algunos espacios.

Assets objetivo en `public`:

- `favicon.svg`
- `favicon.ico` como fallback si el existente sigue siendo válido
- `logo.svg`
- `logo-dark.svg`
- `logo-light.svg`
- `og-image.png` solo si Lovable ya lo hubiera generado o si existiera una exportación fiable

Si no existe `og-image.png`, mantendremos una OG dinámica en código, pero adaptada fielmente al nuevo sistema visual.

### 3. Header, Footer y Navegación

El header y el footer dejarán de usar iconografía de terminal como identidad principal.

- El header desktop usará un logo real de marca y una navegación por anclas.
- El header mobile usará una variante compacta del logo y un menú simplificado de secciones.
- El switch de idioma se preservará si no complica la navegación single-page.
- El footer reutilizará la nueva marca y sus enlaces apuntarán a secciones o salidas externas válidas.

El objetivo es que la marca sea visible, limpia y consistente en ambos extremos del scroll.

### 4. Paleta Visual Global

El sistema actual se moverá hacia una paleta más fiel a Lovable:

- `background`: navy profundo
- `surface`: paneles oscuros limpios
- `primary`: azul brillante del gradiente de marca
- `secondary`: azul suave para highlights y estados
- `borders`: más definidos, con menos ruido y mejor consistencia
- `hover states`: más coherentes con el color primario
- `glows`: más controlados y centrados en la identidad azul

La intención es una estética:

- premium
- dark
- técnica
- moderna
- menos violeta
- más compacta y sobria

### 5. Fondos, Gradientes y Superficies

Se actualizarán los fondos globales y los tratamientos de superficie:

- fondo principal con atmósfera oscura y halos azules más cercanos al branding de Lovable
- gradientes de botones y elementos destacados alineados con los SVG exportados
- cards y paneles con un lenguaje más uniforme
- menor sensación de mezcla entre familias visuales distintas

No se buscará un fondo plano. Se mantendrá profundidad, pero con más control y consistencia.

### 6. Componentes Visuales Prioritarios

Los componentes con mayor impacto visual se ajustarán al nuevo sistema:

- `components/layout/header.tsx`
- `components/layout/footer.tsx`
- `components/navigation/main-nav.tsx`
- `components/navigation/mobile-menu.tsx`
- `components/ui/button-link.tsx`
- `components/sections/home-hero.tsx`
- `components/sections/strength-grid.tsx`
- `components/sections/project-grid.tsx`
- paneles destacados de contacto o recruiter snapshot

Cambios previstos:

- botones primarios con gradiente de marca
- secundarios con superficies oscuras más limpias
- cards con bordes y sombras más Lovable
- hover states más consistentes
- mejor integración del logo en mobile y desktop

### 7. Metadata, OpenGraph y Assets Públicos

Se actualizarán las referencias globales del proyecto:

- iconos en `app/layout.tsx`
- `themeColor`
- imágenes de OpenGraph/Twitter en `lib/metadata.ts`
- `app/opengraph-image.tsx` si no hay PNG exportado
- cualquier `manifest` existente si realmente referencia iconos o colores obsoletos

No se creará un `manifest` nuevo salvo necesidad real. Si no existe, no se añadirá solo por completismo.

### 8. Contenido y Copy

El contenido profesional actual se mantendrá.

Solo se permitirán cambios mínimos cuando sean necesarios para adaptar la experiencia de navegación:

- CTAs que hoy digan "ver experiencia" y apunten a páginas podrán seguir existiendo, pero enlazarán a anclas
- labels que presupongan una página separada se ajustarán ligeramente
- no se reescribirá el mensaje profesional ni las narrativas de proyectos salvo necesidad funcional

### 9. Responsive y Calidad Visual

Se verificará que:

- el favicon mantenga legibilidad razonable en `16x16` y `32x32`
- el logo funcione en mobile y desktop
- el layout responsive no se rompa tras el cambio de navegación
- el hero, cards y footer mantengan proporción visual con la nueva marca

La experiencia final debe sentirse como una landing técnica y premium, no como una suma de parches visuales.

## Archivos Previos Afectados

- `app/layout.tsx`
- `app/globals.css`
- `app/opengraph-image.tsx`
- `app/page.tsx`
- `lib/metadata.ts`
- `components/layout/header.tsx`
- `components/layout/footer.tsx`
- `components/navigation/main-nav.tsx`
- `components/navigation/mobile-menu.tsx`
- `components/navigation/mobile-bottom-nav.tsx` si sigue participando en la navegación principal
- `components/ui/button-link.tsx`
- `components/sections/home-hero.tsx`
- `components/sections/strength-grid.tsx`
- `components/sections/project-grid.tsx`
- componentes adicionales de secciones que dependan de rutas internas
- `public/favicon.svg`
- `public/favicon.ico`
- `public/logo.svg`
- `public/logo-dark.svg`
- `public/logo-light.svg`
- `public/og-image.png` solo si finalmente existe una versión utilizable

La lista final puede variar ligeramente al resolver la conversión completa a landing única.

## Riesgos y Mitigaciones

- Riesgo: que la conversión a single-page deje enlaces internos rotos.
  - Mitigación: revisar header, menú móvil, footer y CTAs principales en un mismo pase.

- Riesgo: que al mantener páginas existentes por compatibilidad aparezcan duplicidades o rutas no deseadas.
  - Mitigación: desacoplar completamente la UI principal de esas rutas y simplificarlas si hace falta.

- Riesgo: que el rediseño visual quede desigual entre secciones.
  - Mitigación: mover primero tokens globales y después ajustar los componentes más visibles.

- Riesgo: que el favicon SVG sea correcto pero el `.ico` no refleje bien la nueva marca.
  - Mitigación: priorizar SVG como fuente principal y conservar `.ico` solo como fallback si mantiene calidad aceptable.

- Riesgo: que algunos textos o CTAs queden semánticamente ligados a páginas separadas.
  - Mitigación: hacer una revisión enfocada de labels y enlaces internos tras el cambio a anclas.

## Verificación Prevista

- Confirmar la estructura de secciones y navegación interna antes de editar rutas.
- Integrar assets en `public` y revisar referencias rotas.
- Ejecutar `npm install` solo si es necesario.
- Ejecutar `npm run lint`.
- Ejecutar `npm run build`.
- Revisar que no haya errores de Next, TypeScript o referencias a assets inexistentes.

## Criterio De Finalización

Consideraremos el trabajo completo cuando:

- el portfolio use de forma visible la identidad visual de Lovable
- la navegación principal funcione como una única landing page con scroll
- favicon, logos, metadata visual y referencias OG/Twitter estén actualizados
- la UI mantenga estética premium, dark, técnica y moderna
- `npm run lint` y `npm run build` pasen correctamente
- el usuario reciba un resumen final con archivos modificados, assets creados, comandos ejecutados y puntos de revisión manual
