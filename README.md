# Portfolio Website

A personal portfolio built in Next.js — Home, Skills, Work Experience, and Contact.

## Design concept — "Runtime"

The site is grounded in what a developer's world actually looks like: running systems, terminals, commit logs — dark and moody, not a drafting sheet. The hero features a **3D animated terminal card** (rendered via react-three-fiber, tilts with the mouse) that types out a small scripted session (`whoami`, `cat role.txt`, `ls skills/`, `cat status.txt`) sourced live from `data/content.ts`. Panels throughout use a **frosted glass** treatment with a mouse-tracked tilt on hover, section headings use a small lowercase mono eyebrow styled like a code comment (`// stack`), and Work Experience reads like a commit log. A soft ambient glow follows the cursor, the header shows a ticking local time, and a dark/light theme toggle persists to `localStorage` — small "alive" touches that stay subtle rather than flashy.

**Color tokens** (`app/globals.css`, driven by `data-theme` on `<html>`):
| Variable | Dark | Light | Use |
|---|---|---|---|
| `--canvas` | `#121218` | `#F3F3F6` | page background |
| `--surface` | `#1C1C25` | `#E8E8ED` | glass panel base (used with alpha) |
| `--line` | `#2C2C37` | `#D8D8E0` | hairlines, borders, dividers |
| `--ink` | `#EDEDF2` | `#1A1A21` | primary text |
| `--dim` | `#8B8B97` | `#6F6F7F` | secondary/muted text |
| `--accent` | `#7C5CFF` | `#7C5CFF` | primary interactive color — CTAs, links, active states, terminal prompt |
| `--flare` | `#FF8A4C` | `#FF8A4C` | secondary accent, used sparingly (status dot, diff marks) |

These are re-exposed as Tailwind color utilities (`bg-canvas`, `text-dim`, `border-accent/40`, etc.) via the `@theme inline` block right below them. Theme state lives in `ThemeProvider` (React context + `localStorage`, toggled from `Header`).

**Fonts** (`app/layout.tsx`, loaded with `next/font/google`):
- **Sora** → `font-display` — headlines, section titles
- **Inter** → `font-body` — body copy (applied globally on `<body>`)
- **JetBrains Mono** → `font-mono` — nav labels, eyebrows, tags, captions

## Structure

```
app/
  layout.tsx        fonts, metadata, ThemeProvider wrapper, root layout
  page.tsx           assembles the 4 sections
  globals.css        Tailwind import, dark/light color tokens, font tokens
components/
  FluidBackground.tsx   ambient drifting blurred gradient blobs
  CursorGlow.tsx          soft accent glow that follows the pointer
  Header.tsx               fixed nav pill, scroll-spy active section, live local time, theme toggle
  ThemeProvider.tsx         dark/light theme context, persisted to localStorage
  Terminal3D.tsx            react-three-fiber 3D terminal card (client-only, mouse parallax)
  StaticTerminal.tsx        non-3D fallback for the hero terminal (mobile / reduced-motion)
  terminal/
    TerminalBody.tsx          shared terminal chrome + rendered command/output blocks
    script.ts                  scripted commands (whoami, ls skills/, ...), sourced from data/content
    useTerminalPlayback.ts     typing/output playback animation state machine
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
- The hero's 3D terminal (`components/Terminal3D.tsx`) is loaded client-only via `next/dynamic` and swapped for a non-3D version (`components/StaticTerminal.tsx`) on small screens or when the OS "reduce motion" setting is on, to avoid unnecessary WebGL cost and respect accessibility preferences. Both render the same `terminal/TerminalBody.tsx` for the typed command/output content.
- The cursor glow and panel tilt are likewise disabled under `prefers-reduced-motion` and on touch/compact devices.
- All animated components check `prefers-reduced-motion` and skip/soften motion accordingly.

## Setup & run

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run start    # serve the production build
```
