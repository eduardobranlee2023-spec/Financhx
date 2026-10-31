# Third-party notices

The landing reuses and adapts components from the following repositories.
Their source repositories remain unchanged.

## UI Layouts — StatsBanner

- Source: `packages/blocks/src/stats-section/stats-banner.tsx`
- Landing copy: `src/components/vendor/ui-layouts/stats-banner.tsx`
- Copyright: Copyright (c) 2024 UI LAYOUT
- License: MIT; the complete notice is in
  `src/components/vendor/ui-layouts/LICENSE`.
- Adaptations: Financhx copy and illustrative metrics, neutral colors, and
  removal of the remote stock image.

## Interior — Accordion

- Source: `components/interior/accordion.tsx`
- Landing copy: `src/components/vendor/interior/accordion.tsx`
- Copyright: Copyright (c) 2026 ozzy
- License: MIT; the complete notice is in
  `src/components/vendor/interior/LICENSE`.
- Adaptations: focus and surface colors for the Financhx palette.

## Interior — SortableTable, ProgressBar, LogoMarquee, PressDepth, and ValueFlash

- Sources: `components/interior/sortable-table.tsx`,
  `components/interior/progress-bar.tsx`, and
  `components/interior/logo-marquee.tsx`,
  `components/interior/press-depth.tsx`, and
  `components/interior/value-flash.tsx`
- Landing copies: `src/components/vendor/interior/sortable-table.tsx`,
  `src/components/vendor/interior/progress-bar.tsx`, and
  `src/components/vendor/interior/logo-marquee.tsx`,
  `src/components/vendor/interior/press-depth.tsx`, and
  `src/components/vendor/interior/value-flash.tsx`
- Copyright: Copyright (c) 2026 ozzy
- License: MIT; the complete notice is in
  `src/components/vendor/interior/LICENSE`.
- Adaptations: focus and progress accents use neutral Financhx colors. The
  marquee labels workflow stages rather than external companies or partners.
  The press-depth wrapper exposes `aria-pressed` for case selection, and the
  selected case's example score uses `ValueFlash`.

## Spectrum UI — NumberTicker

- Source: `components/motion/number-ticker.tsx`
- Landing copy: `src/components/NumberTicker.tsx`
- Upstream attribution retained in the source: `beui.dev/components/motion/number`
- License: Apache License 2.0; the complete notice is in
  `src/components/vendor/spectrum-ui/LICENSE`.
- The easing helper is in `src/lib/ease.ts`.

## Spectrum UI — FAQTabsCard and TransferFundsCard

- Sources: `components/spectrumui/faq-tabs-card.tsx` and
  `components/spectrumui/transfer-funds-card.tsx`
- Landing copies: `src/components/vendor/spectrum-ui/faq-tabs-card.tsx` and
  `src/components/vendor/spectrum-ui/transfer-funds-card.tsx`
- License: Apache License 2.0; the complete notice is in
  `src/components/vendor/spectrum-ui/LICENSE`.
- Adaptations: Spanish Financhx copy replaces the original product claims;
  FAQ content describes the current prototype, and the transfer card is shown
  with illustrative data and its confirm action disabled.

## Spectrum UI — DynamicIsland, AnimatedToastStack, NotificationBell,
## TaskCheckbox, and QuantityStepper

- Sources: `components/motion/dynamic-island.tsx`,
  `components/motion/animated-toast-stack.tsx`,
  `components/spectrumui/notification-bell.tsx`,
  `components/spectrumui/task-checkbox.tsx`, and
  `components/spectrumui/quantity-stepper.tsx`
- Landing copies: the matching files under `src/components/vendor/spectrum-ui/`
- License: Apache License 2.0; the complete notice is in
  `src/components/vendor/spectrum-ui/LICENSE`.
- Adaptations: Motion imports use the installed `motion/react` package,
  accent colors are adapted to the Financhx monochrome palette, and all sample
  interactions are local presentation-only controls.

## Interior — TextReveal, TaskSteps, LiveActivity, SkeletonSwap, and WizardSteps

- Sources: `components/interior/text-reveal.tsx`,
  `components/interior/task-steps.tsx`,
  `components/interior/live-activity.tsx`,
  `components/interior/skeleton-swap.tsx`, and
  `components/interior/wizard-steps.tsx`
- Landing copies: the matching files under `src/components/vendor/interior/`
- Copyright: Copyright (c) 2026 ozzy
- License: MIT; the complete notice is in
  `src/components/vendor/interior/LICENSE`.
- Adaptations: interface copy describes illustrative scenarios, progress and
  focus accents use neutral Financhx colors, and controls affect only the
  visual prototype.

## Financhx integration wrappers

- `src/components/WorkflowMarquee.tsx` supplies demonstrative Financhx
  workflow labels to Interior's `LogoMarquee`.
- `src/components/TransactionTableDemo.tsx` supplies explicitly illustrative
  rows and finance-specific cells to Interior's `SortableTable`.
- `src/components/ReconcileDemo.tsx` uses Interior's `ProgressBar`,
  `PressDepth`, and `ValueFlash` for the interactive scenario walkthrough.

## UI Layouts — StickyHeroScroll and ImageReveal2

- Sources: `apps/ui-layout/registry/components/scroll-animation/sticky-hero-scroll.tsx`
  and `apps/ui-layout/registry/components/image-reveal/image-reveal.tsx`
- Landing copies: `src/components/vendor/ui-layouts/sticky-hero-scroll.tsx`
  and `src/components/vendor/ui-layouts/image-reveal.tsx`
- Copyright: Copyright (c) 2024 UI LAYOUT
- License: MIT; the complete notice is in
  `src/components/vendor/ui-layouts/LICENSE`.
- Adaptations: English demo copy and unrelated external stock-image URLs were
  replaced with Spanish Financhx illustrative copy and local UI content;
  scroll-linked transforms and pointer-follow spring motion are retained.
- `src/components/UILayoutsMotionSection.tsx` composes both patterns for the
  landing page.

## 21st.dev — Spline Scene + Aceternity Spotlight

- Sources: https://21st.dev/@serafimcloud/components/splite and
  https://ui.aceternity.com/components/spotlight
- Landing copies: `src/components/ui/splite.tsx` and
  `src/components/ui/spotlight.tsx`
- License: MIT
- Adaptations: the split Card layout is unused; the Spline scene and spotlight
  run as a full-bleed Hero background. Spline loads client-only via
  `next/dynamic`. The scene is skipped when `prefers-reduced-motion` is set.
