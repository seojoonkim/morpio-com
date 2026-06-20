# morpio — "Kinetic Stage" Design System Spec

> Dark, motion-first re-concept for morpio.com. Media-studio stage energy, oversized
> sans display, lime acid accent. Replaces the current editorial/brutalist cream look.

---

## 1. Concept (1 sentence)

A pure-black kinetic stage where oversized sans words reveal one-by-one, lime light
hits a single accent, and every section behaves like a scene cue — a media studio reel,
not an editorial.

---

## 2. Palette

| Token | Hex | Role / Usage |
|---|---|---|
| `bg-base` | `#0A0A0A` | Pure-ish black canvas, full-page background. |
| `bg-surface` | `#121214` | Raised panels: service cards, process well, CTA frame, mobile drawer. |
| `bg-surface-2` | `#1A1A1E` | Inset/hover surface, stat tiles, footer shelf. |
| `ink-primary` | `#F4F4F2` | Off-white display + body text (warmer than pure #FFF). |
| `ink-secondary` | `#9A9A9E` | Muted body, descriptions, captions. |
| `ink-muted` | `#5A5A60` | Meta labels, footer micro-copy, scroll cue. |
| `accent-lime` | `#C5FF3D` | The one acid accent. H1 single word, CTA border/glow, index numerals, hover state, active nav dot. Use sparingly — max ~3 hits per viewport. |
| `accent-lime-dim` | `rgba(197,255,61,0.18)` | Glow halos, card hover washes, focus rings. |
| `line` | `rgba(244,244,242,0.08)` | Hairline borders, dividers, nav bottom border. |
| `line-strong` | `rgba(244,244,242,0.16)` | Emphasized borders (CTA, hovered cards). |
| `grain` | `rgba(255,255,255,0.022)` | Full-screen film grain overlay (fixed, pointer-events-none). |

**Accent rule:** lime is the *only* chroma. No magenta, no violet, no rainbow. The old
HeroArt neon orb is retired — the "orb" energy is re-expressed as a lime glow stage spot
behind the H1.

---

## 3. Typography

Fonts (Google Fonts, **not** Space Grotesk — explicit ban honored):

- **Display:** `Bricolage Grotesque` (700/800). Character: wide, slightly quirky
  apertures, strong corners — distinct from Inter/Geist family. Reads as a *studio*
  display, not a SaaS body face.
- **Body:** `Hanken Grotesk` (400/500/600). Clean, open, high x-height — pairs with
  Bricolage without competing. More personality than Geist, less rigid than Schibsted.
- **Mono / Eyebrow:** `Geist Mono` (500). For index numerals, section markers, meta.

### Type scale (clamp-based, responsive)

| Token | Family | Size (clamp) | Line | Tracking | Use |
|---|---|---|---|---|---|
| `hero-h1` | Display 800 | `clamp(48px, 13vw, 168px)` | 0.92 | -0.03em | Hero headline, word-stagger reveal. |
| `h2` | Display 800 | `clamp(36px, 8vw, 96px)` | 0.95 | -0.025em | Section headlines (Services, About, CTA). |
| `h3` | Display 700 | `clamp(22px, 5.5vw, 30px)` | 1.1 | -0.01em | Card titles, step titles. |
| `body-lg` | Body 400 | `clamp(15px, 3.8vw, 18px)` | 1.65 | 0 | Hero sub, section intros. |
| `body` | Body 400 | `clamp(14px, 3.4vw, 15px)` | 1.6 | 0 | Card body, descriptions. |
| `caption` | Body 500 | `clamp(12px, 3vw, 13px)` | 1.5 | 0 | Stat body, secondary. |
| `eyebrow` | Mono 500 | `clamp(10px, 2.4vw, 11px)` | 1.2 | 0.3em uppercase | Section markers `[ 02 — PRACTICE ]`, card indices. |

**Word-reveal treatment:** display headlines split into per-word `<span>`s; each word
animates `clip-path: inset(100% 0 0 0) → inset(0)` with staggered delay. No per-letter
split (keeps it punchy, not fussy).

---

## 4. Grid / Layout

- **Container:** `max-width: 1320px`, `padding-inline: clamp(20px, 5vw, 80px)`.
- **Grid:** 12-column at `lg`, 6 at `md`, 1 at base. Gap `clamp(20px, 4vw, 64px)`.
- **Section padding:** `padding-block: clamp(96px, 14vh, 200px)` — tighter than current
  to build stage rhythm. Hero gets `clamp(120px,18vh,220px)` top.
- **Breakpoints:** `sm 640 / md 768 / lg 1024 / xl 1280`. (Aligns with existing Tailwind
  config — no new breakpoints needed.)
- **Max content width** for long-form copy: `max-width: 60ch`.

---

## 5. Motion Principles

| Token | Value | Use |
|---|---|---|
| `ease-stage` | `cubic-bezier(0.16, 1, 0.3, 1)` | Primary reveal easing (gentle overshoot settle). |
| `ease-snap` | `cubic-bezier(0.4, 0, 0.2, 1)` | Hover/snap transitions. |
| `dur-reveal` | `0.9s` | Word reveal, section fade-in. |
| `dur-hover` | `0.3s` | Magnetic hover, color swap. |
| `stagger-word` | `0.08s` | Delay between successive word reveals. |
| `stagger-card` | `0.12s` | Delay between service/stat cards. |

**Core motions:**

1. **Word reveal (stagger):** Display headline words animate in via clip-path + translateY
   on `IntersectionObserver` enter. One-time, no replay on scroll-up.
2. **Magnetic hover:** CTA buttons, nav CTA, and card "Learn More" arrows translate toward
   cursor by up to ~12px on `mousemove`. Spring-back on leave. Desktop only (pointer:fine).
3. **Scroll-triggered fade/rise:** Section blocks fade from `opacity:0; translateY:24px`
   to visible on enter, threshold ~0.15. Easing `ease-stage`, duration `dur-reveal`.
4. **Lime glow stage spot:** Fixed radial gradient `accent-lime-dim` that subtly tracks
   scroll position behind hero/CTA — gives "spotlight following the scene" feel.
5. **Grain:** Static SVG noise overlay, `mix-blend-mode: overlay`, opacity ~0.04. No
   animation (perf).
6. **Scroll cue:** Hero bottom-left vertical line that scales Y on loop (subtle, 2.4s).

`prefers-reduced-motion: reduce` → disable reveals, magnetic, glow tracking. Keep only
instant opacity swaps.

---

## 6. Component Treatments

**Nav**
Fixed, transparent → on scroll (`>12px`) becomes `bg-base/80` + `backdrop-blur` + bottom
`line` hairline. Logo `morpio` in Display 800, lime dot after it. Links in Body 500,
`ink-secondary → ink-primary` on hover. Right-side CTA: pill with `1px solid accent-lime`,
lime glow on hover (magnetic). Mobile: full-width drawer from top, oversized links.

**Hero (+HeroArt)**
Full-stage. Left 7-col copy: eyebrow `[ 01 — STAGE ]`, H1 "We Turn IP Into **Intelligent
Media.**" with `Intelligent` (or `Media.`) as the lime word, word-stagger reveal. Sub in
`body-lg`. Two CTAs: primary = filled lime pill (magnetic), secondary = ghost border.
Right 5-col: replace neon orb with a **lime stage spot** — large soft radial glow, a single
rotating thin ring (1px lime, 20s), and a gridded "frame" placeholder block suggesting a
media viewport. Scroll cue bottom-left.

**Services (3 cards)**
Eyebrow `[ 02 — PRACTICE ]`. Oversized H2 "Three Core Businesses." Grid 3-up at `lg`,
stack at base. Each card: `bg-surface`, `line` border, large mono index `01/02/03` in
lime at top-left, title in `h3`, body, tag chips (mono, `line` border). Hover: border →
`line-strong`, subtle lime wash `accent-lime-dim` top-corner glow, card lifts `-8px`,
index numeral scales 1.05. Stagger reveal `stagger-card`.

**Process (Method, 4 steps)**
Eyebrow `[ 03 — METHOD ]`. 4-column horizontal at `lg` inside a single `bg-surface`
well with `line` border. Each step: mono index `01–04` in lime, `h3` title (Discover /
Design / Generate / Launch), body, tag chips. Thin connector line between steps
(`1px line`, lime gradient segment under active/hovered). Step icons removed — replaced
by the oversized index numeral as the visual anchor.

**About**
Eyebrow `[ 04 — STUDIO ]`. Left 5-col: H2 with one lime word ("morpio is a
**new-generation** AI media company..."), body, ghost CTA. Right 7-col: 2×2 stat grid
(Story-First 100% / AI-Native 100% / Global-Ready 50+ / Fast Production 10×). Stat tiles
`bg-surface`, oversized value in Display 800 `ink-primary`, label in mono lime.

**CtaBanner**
Eyebrow `[ 05 — CONTACT ]`. Full-width `bg-surface` panel, `line-strong` border, lime
glow halo behind. H2 "Build the Next **Media Universe**" (`Media Universe` lime),
word-reveal. Sub. Two CTAs: primary filled lime (magnetic, glow), secondary ghost
`mailto:hello@morpio.com`. Sparkle dots replaced by 3 static lime pinpoints.

**Footer**
`bg-base`, top `line` hairline. Left: `morpio` Display 800 + lime dot + tagline body-sm.
4 link columns (Studio / Services / Company / Legal), headers in mono lime eyebrow.
Socials as `line`-bordered circles, hover border → lime. Bottom bar: © 2025 morpio ·
"Made in Seoul · Sent to the world" in mono `ink-muted`.

---

## 7. Tailwind Implementation Notes (`tailwind.config.ts`)

```ts
extend: {
  colors: {
    'bg-base': '#0A0A0A',
    'bg-surface': '#121214',
    'bg-surface-2': '#1A1A1E',
    'ink-primary': '#F4F4F2',
    'ink-secondary': '#9A9A9E',
    'ink-muted': '#5A5A60',
    'accent-lime': '#C5FF3D',
    'accent-lime-dim': 'rgba(197,255,61,0.18)',
    'line': 'rgba(244,244,242,0.08)',
    'line-strong': 'rgba(244,244,242,0.16)',
  },
  fontFamily: {
    display: ['"Bricolage Grotesque"', 'system-ui', 'sans-serif'],
    body: ['"Hanken Grotesk"', 'system-ui', 'sans-serif'],
    mono: ['"Geist Mono"', 'ui-monospace', 'monospace'],
  },
  transitionTimingFunction: {
    stage: 'cubic-bezier(0.16, 1, 0.3, 1)',
    snap: 'cubic-bezier(0.4, 0, 0.2, 1)',
  },
  transitionDuration: {
    reveal: '900ms',
    hover: '300ms',
  },
  animation: {
    'word-reveal': 'word-reveal 0.9s var(--ease-stage) both',
    'section-rise': 'section-rise 0.9s var(--ease-stage) both',
    'glow-track': 'glow-track 12s ease-in-out infinite alternate',
    'scroll-cue': 'scroll-cue 2.4s ease-in-out infinite',
    'ring-spin': 'ring-spin 20s linear infinite',
  },
  keyframes: {
    'word-reveal': {
      '0%': { 'clip-path': 'inset(100% 0 0 0)', transform: 'translateY(0.1em)' },
      '100%': { 'clip-path': 'inset(0 0 0 0)', transform: 'translateY(0)' },
    },
    'section-rise': {
      '0%': { opacity: '0', transform: 'translateY(24px)' },
      '100%': { opacity: '1', transform: 'translateY(0)' },
    },
    'glow-track': {
      '0%': { transform: 'translate3d(0,0,0)', opacity: '0.5' },
      '100%': { transform: 'translate3d(20%,10%,0)', opacity: '0.8' },
    },
    'scroll-cue': {
      '0%,100%': { transform: 'scaleY(0.4)', transformOrigin: 'top' },
      '50%': { transform: 'scaleY(1)' },
    },
    'ring-spin': {
      to: { transform: 'rotate(360deg)' },
    },
  },
}
```

**Notes:** add `@import` for Bricolage Grotesque + Hanken Grotesk + Geist Mono in
`globals.css`. Set `--ease-stage` / `--ease-snap` CSS vars from the timing functions.
Apply grain via a fixed `.grain::after` pseudo on `<body>`. Magnetic hover via a small
`useMagneticHover` hook (pointer:fine only). IntersectionObserver via a `Reveal`
wrapper component toggling `.is-visible`.

---
*Spec v1 · Kinetic Stage re-concept · morpio.com*
