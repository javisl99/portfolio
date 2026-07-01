# Portfolio Premium/Minimal Polish Design

## Objective

Raise the portfolio from a strong recruiter-first site to a more premium/minimal experience without weakening clarity, bilingual support, or backend positioning.

Primary audience:
- Recruiters first

Positioning:
- Backend generalist first
- SAP Commerce Cloud as a strong specialization
- Generative AI as a secondary differentiator connected to the recent Stratesys stage and the BuildingCenter context

## Scope

This round is intentionally constrained to visual composition, hierarchy, spacing, and microcopy polish.

In scope:
- Home hero visual simplification
- Lighter recruiter snapshot treatment
- More differentiated page hero composition between Experience and Projects
- More editorial treatment for the AI section
- Cleaner Project Detail top area and sidebar feel
- Minor CTA and supporting-copy refinement where it improves recruiter conversion

Out of scope:
- Route changes
- Data model redesign beyond small presentational needs already introduced
- New libraries
- New sections unrelated to recruiter conversion
- Rewriting the site into a wholly new visual system

## Goals

1. Make the site feel more senior, intentional, and premium/minimal.
2. Reduce visual noise from repeated borders, nested cards, and overly dense panels.
3. Preserve quick recruiter scanning:
   - target role
   - Java / Spring / backend
   - SAP Commerce Cloud specialization
   - production / integrations / incidents
   - clear next action
4. Avoid reinforcing the impression of “SAP-only profile.”
5. Keep AI visible, but clearly secondary and grounded in recent, real usage.

## Design Direction

Chosen direction:
- Premium/minimal with recruiter signals

This means:
- More whitespace
- Fewer simultaneous visual containers
- Stronger reliance on typography and layout rhythm
- Accent color used more selectively
- Clear CTAs, but less UI clutter

## Page-by-Page Plan

### Home

#### Hero
- Keep the H1 as the dominant visual element.
- Reduce competition from the right-hand summary panel.
- Make CTA hierarchy cleaner:
  - primary: projects
  - secondary: contact / CV / LinkedIn
- Keep recruiter relevance visible in first fold.

#### Recruiter Snapshot
- Keep the content structure, but visually soften it:
  - less “stacked dashboard” feel
  - less dense spacing
  - fewer hard boundaries competing at once
- Preserve the quick-read utility.

#### AI Section
- Keep it after Experience and Projects.
- Present it as editorial evidence of a recent workflow shift, not as a general identity claim.
- Maintain the real metrics and contextual disclaimer.
- Lean on cleaner spacing and less panel heaviness.

### Experience

- Keep the page focused on progression.
- Make the hero feel more sober and linear than Projects.
- Keep recruiter-scan support, but avoid mirroring the exact same visual rhythm as Projects.
- Preserve backend signals while reducing card heaviness where possible.

### Projects

- Differentiate the hero from Experience.
- Keep the page strongly case-oriented.
- Project cards should feel slightly cleaner and less ficha-heavy.
- Prioritize:
  - title
  - problem
  - contribution
  - backend signal

### Project Detail

- Move the top area further toward a premium editorial case-study feel.
- Compact the first mobile viewport.
- Reduce the “dashboard sidebar” feeling while keeping utility.
- Keep:
  - metadata
  - recruiter signal
  - stack
  - CTA block

## Visual Principles

1. Fewer borders at once
- Avoid box-inside-box-inside-box when possible.

2. More breathing room
- Use space to create hierarchy instead of only borders and backgrounds.

3. Typography first
- Let headings and paragraph rhythm carry more of the premium feel.

4. Selective accent usage
- Blue should guide attention, not decorate every block equally.

5. Cleaner scanning
- Strong signals remain visible, but the page should feel less busy.

## Content Rules

- Stay aggressive only where the claim is true and supportable.
- Keep recruiter-friendly clarity over narrative flourish.
- Avoid repeated phrasing that reinforces “too SAP-only” or “same message everywhere.”
- Keep AI tied to:
  - current Stratesys stage
  - recent workflow improvements
  - analysis / debugging / preparation
  - not final technical ownership

## Implementation Notes

- Prefer class-level Tailwind adjustments inside existing components.
- Reuse the current route and data structure.
- Avoid introducing new component families unless a very small helper improves consistency.
- Preserve ES/EN coherence.

## Risk Management

Risk:
- Over-minimal treatment could reduce recruiter scanability.

Mitigation:
- Keep the key recruiter signals explicit even while reducing container noise.

Risk:
- Projects and Experience could still feel too similar if only spacing changes.

Mitigation:
- Differentiate hero composition and visual rhythm between both pages.

Risk:
- AI section could become visually important enough to distort positioning.

Mitigation:
- Keep it below Experience and Projects and frame it as a secondary workflow differentiator.

## Verification

Required verification after implementation:
- `pnpm lint`
- `pnpm typecheck`
- `pnpm build`

Manual review:
- `/es`
- `/es/experience`
- `/es/projects`
- `/es/about`
- `/es/contact`
- `/es/projects/buildingcenter-incidental-evolutivo`
- mobile and desktop spot-check on home, contact, and project detail

## Success Criteria

The round is successful if:
- the site feels more premium/minimal at first glance
- recruiter clarity is preserved or improved
- Experience and Projects feel more differentiated
- Project Detail feels less dashboard-like
- AI remains visible but clearly secondary
- no regressions are introduced in routing, build, or bilingual behavior
