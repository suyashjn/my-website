# Portfolio Website

A personal portfolio built in Next.js — Home, Skills, Work Experience, and Contact.

## Design concept — "Runtime"

The site is grounded in what a developer's world actually looks like: running systems, dependency graphs, commit logs — dark and moody, not a drafting sheet, not a terminal cliché. The hero features an **interactive 3D node graph** (glowing nodes, connecting edges, small "packet" pulses traveling along them, rotates continuously and tilts with the mouse) rendered as a live dependency graph. Panels throughout use a **frosted glass** treatment with a mouse-tracked tilt on hover, section headings use a small lowercase mono eyebrow styled like a code comment (`// stack`), and Work Experience reads like a commit log. A soft ambient glow follows the cursor and the header shows a ticking local time — small "alive" touches that stay subtle rather than flashy.

**Color tokens** (`app/globals.css`, `:root`):
| Variable | Hex | Use |
|---|---|---|
| `--canvas` | `#0A0A0F` | page background |
| `--surface` | `#14141C` | glass panel base (used with alpha) |
| `--line` | `#26262F` | hairlines, borders, dividers |
| `--ink` | `#EDEDF2` | primary text |
| `--dim` | `#83838F` | secondary/muted text |
| `--accent` | `#7C5CFF` | primary interactive color — CTAs, links, active states, node graph |
| `--flare` | `#FF8A4C` | secondary accent, used sparingly (status dot, packet pulses, diff marks) |

These are re-exposed as Tailwind color utilities (`bg-canvas`, `text-dim`, `border-accent/40`, etc.) via the `@theme inline` block right below them.

**Fonts** (`app/layout.tsx`, loaded with `next/font/google`):
- **Sora** → `font-display` — headlines, section titles
- **Inter** → `font-body` — body copy (applied globally on `<body>`)
- **JetBrains Mono** → `font-mono` — nav labels, eyebrows, tags, captions

## Structure

```
app/
  layout.tsx        fonts, metadata, root layout
  page.tsx           assembles the 4 sections
  globals.css        Tailwind import, color/font tokens, .glass-panel utility
components/
  FluidBackground.tsx  ambient drifting blurred gradient blobs
  CursorGlow.tsx        soft accent glow that follows the pointer
  Header.tsx             fixed nav pill, scroll-spy active section, live local time
  Scene3D.tsx             react-three-fiber node graph (client-only, mouse parallax)
  StaticNodeGraph.tsx     SVG fallback for the hero graph (mobile / reduced-motion)
  sections/
    Hero.tsx, Skills.tsx, Experience.tsx, Contact.tsx   the 4 page sections
  ui/
    GlassPanel.tsx        shared frosted-glass wrapper with tilt-on-hover
    SectionHeading.tsx     "// eyebrow" + title section heading
    CredentialChip.tsx      certification credential chip
lib/
  motion.ts    shared Framer Motion variants (fade/rise, stagger, path-draw)
  hooks.ts      usePrefersReducedMotion / useIsCompact media-query hooks
data/
  content.ts    all placeholder content (name, skills, certifications, experience, contact)
```

## Editing content

Everything text-based lives in **`data/content.ts`** — edit that file to put in your real name, skills, certifications, companies, and contact details. Nothing else needs to change; every section reads from this file.

## Motion & 3D behavior

- Section reveals (`whileInView`) and the panel tilt-on-hover use Framer Motion (`lib/motion.ts`, `components/ui/GlassPanel.tsx`).
- The hero's 3D node graph (`components/Scene3D.tsx`) is loaded client-only via `next/dynamic` and swapped for a static SVG (`components/StaticNodeGraph.tsx`) on small screens or when the OS "reduce motion" setting is on, to avoid unnecessary WebGL cost and respect accessibility preferences.
- The cursor glow and panel tilt are likewise disabled under `prefers-reduced-motion` and on touch/compact devices.
- All animated components check `prefers-reduced-motion` and skip/soften motion accordingly.

## Setup & run

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run start    # serve the production build
```
