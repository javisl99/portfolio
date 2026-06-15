# Portfolio Lovable Single-Page Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Apply the Lovable brand refresh to the portfolio and convert the main user experience into a single scrolling landing page per locale.

**Architecture:** Reuse the existing localized home route as the canonical experience, move section-level navigation fully to in-page anchors, and update the shared visual tokens plus high-visibility components to consume the new brand assets. Keep existing secondary routes only as compatibility surfaces while removing them from main navigation.

**Tech Stack:** Next.js App Router, React 19, TypeScript, Tailwind CSS v4, MDX content, SVG assets, ImageMagick for favicon fallback generation

---

### Task 1: Brand assets and global metadata

**Files:**
- Modify: `app/layout.tsx`
- Modify: `app/icon.svg`
- Modify: `app/opengraph-image.tsx`
- Modify: `lib/metadata.ts`
- Create: `public/favicon.svg`
- Create: `public/logo.svg`
- Create: `public/logo-dark.svg`
- Create: `public/logo-light.svg`
- Update: `public/favicon.ico`

- [ ] Copy/adapt Lovable SVG exports into stable public asset names.
- [ ] Point root metadata and OG/Twitter references at the new assets.
- [ ] Update the generated OG image to match the new palette and branding.
- [ ] Regenerate `public/favicon.ico` from the SVG mark if quality is acceptable; otherwise keep a safe fallback.

### Task 2: Single-page routing and section composition

**Files:**
- Modify: `app/[locale]/page.tsx`
- Modify: `app/[locale]/layout.tsx`
- Modify: `components/navigation/main-nav.tsx`
- Modify: `components/navigation/mobile-menu.tsx`
- Modify: `components/navigation/mobile-bottom-nav.tsx`
- Modify: `components/layout/header.tsx`
- Modify: `components/layout/footer.tsx`

- [ ] Make the localized home route the only primary experience.
- [ ] Add the missing `about` section content into the home flow.
- [ ] Ensure all main navigation and CTA links resolve to anchors.
- [ ] Remove page-style navigation patterns from desktop and mobile UI.

### Task 3: Visual system refresh

**Files:**
- Modify: `app/globals.css`
- Modify: `components/ui/button-link.tsx`
- Modify: `components/ui/section.tsx`
- Modify: `components/ui/profile-avatar.tsx`
- Modify: `components/sections/home-hero.tsx`
- Modify: `components/sections/strength-grid.tsx`
- Modify: `components/sections/project-grid.tsx`
- Modify: `components/sections/contact-panel.tsx`
- Modify: `components/sections/approach-grid.tsx`
- Modify: `components/sections/skills-section.tsx`
- Modify: `components/sections/experience-timeline.tsx`

- [ ] Refresh the global tokens and background treatments to the Lovable palette.
- [ ] Replace terminal-style branding with real logo treatments.
- [ ] Bring buttons, cards, borders, hovers, and featured panels into one coherent visual system.
- [ ] Preserve current content and responsive structure while updating presentation.

### Task 4: Validation and cleanup

**Files:**
- Review outputs only unless fixes are required

- [ ] Run `npm run lint`.
- [ ] Run `npm run build`.
- [ ] Capture the final list of modified files, created assets, commands run, and manual review notes.
