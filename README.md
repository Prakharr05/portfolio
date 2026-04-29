# prakhar.dev

Editorial dark portfolio — built with Next.js, TypeScript, Tailwind, and Framer Motion. Set in Fraunces and IBM Plex.

## Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS** with a custom warm-dark palette
- **Framer Motion** for orchestrated page-load animations, scroll reveals, magnetic card tilt, and the custom cursor
- **Fraunces** (display serif) + **IBM Plex Sans / Mono** (body + code)

## Quick start

```bash
npm install
npm run dev
# → http://localhost:3000
```

Build for production:

```bash
npm run build && npm start
```

## File structure

```
app/
  layout.tsx           # Root layout + metadata
  page.tsx             # Main page composition
  globals.css          # Theme tokens + grain texture + cursor styles
components/
  Cursor.tsx           # Custom cursor (rust dot + ring) — Framer Motion springs
  Header.tsx           # Top nav with scroll-aware backdrop blur
  Hero.tsx             # 12-col asymmetric grid, staggered name reveal
  SectionHeading.tsx   # Reusable index + eyebrow + title block
  Projects.tsx         # Stacked editorial project list with magnetic tilt
  About.tsx            # Bio with footnotes + side aside
  Stack.tsx            # Tech stack categories
  Contact.tsx          # Roman-numeral channel rows with hover slide
  Footer.tsx           # Editorial footer
  AIChat.tsx           # Floating AI chat placeholder (v0.1)
```

## Customization

| What | Where |
|------|-------|
| Hero name + tagline | `components/Hero.tsx` |
| Bio + facts | `components/About.tsx` (`facts` array, prose paragraphs) |
| Projects | `components/Projects.tsx` (`projects` array) |
| Stack categories | `components/Stack.tsx` (`stack` array) |
| Contact channels | `components/Contact.tsx` (`channels` array) |
| Resume PDF | drop file at `public/resume.pdf` |
| Theme colors | `tailwind.config.ts` and `app/globals.css` (CSS vars) |

### Palette

- `--ink` (#0e0e0c) — warm off-black background
- `--ink-deep` (#080806) — deepest layer
- `--ink-panel` (#161613) — elevated surfaces
- `--bone` (#e8e4d8) — primary text (cream)
- `--rust` (#d4663a) — single sharp accent

To shift the accent, change `--rust` in `globals.css` and the `rust` colors in `tailwind.config.ts`. Try sage green (`#7a8471`), oxblood (`#8b2e1f`), or cobalt (`#3a5fd4`) — all work with this base.

### Typography

- **Display**: Fraunces — variable font with `opsz` (optical size) and `SOFT` axes. The `SOFT` axis controls letterform softness; values around 50 feel sharp/editorial, 100 feel softer/handwritten.
- **Body**: IBM Plex Sans (light 300 weight)
- **Mono**: IBM Plex Mono for tags, metrics, file names

If you want to swap Fraunces for another serif, candidates that work with this aesthetic: Cormorant Garamond, Playfair Display, EB Garamond, or PP Editorial New (paid).

## Deploying

Push to GitHub → import at [vercel.com/new](https://vercel.com/new). Zero config.

## Roadmap: AI agent (v1.1)

`AIChat.tsx` is wired up as a placeholder. To make it real:

1. **Index your data** — dump CV + project descriptions, embed via `text-embedding-3-small`, store in a vector DB (Pinecone, Supabase pgvector, or a JSON file for prototype)
2. **API route** — `app/api/chat/route.ts` retrieves top-k chunks, calls GPT-4o or Gemini, streams back via the Vercel AI SDK
3. **Wire the input** — replace the disabled input with a form POSTing to `/api/chat`

For an agentic version (more interesting given your LangGraph experience), let visitors ask things like "is Prakhar a fit for [JD]?" — the agent runs intent detection, retrieves relevant project context, and produces a real skill-match analysis.

### Environment

Create `.env.local`:

```
OPENAI_API_KEY=sk-...
# or
GOOGLE_API_KEY=...
```

---

## Design notes

The aesthetic commits hard to **editorial × technical** — like a serious AI researcher's personal site rather than a dev-tool clone or terminal-game throwback.

- **No CRT effects, no neon, no "terminal" gimmicks**
- **Distinctive typography pairing** — Fraunces (variable serif) with IBM Plex (clean sans). The serif italic handling is the personality
- **Asymmetric 12-column grid** — name indented, headings split into number + content columns, contact channels with roman-numeral indices
- **SVG grain overlay + warm radial gradient** instead of solid black for atmosphere
- **Single sharp accent** (burnt orange `#d4663a`) used sparingly — italic words, link underlines, footnote markers, the cursor dot
- **Custom cursor with magnetic ring** — the ring lags behind the dot via `useSpring`, expands and turns rust on hover
- **Orchestrated page load** — meta strip fades in, name rises in two stages, italic accent appears, bottom cards stagger
- **Footnote markers in bio** (¹, ²) add a literary touch
- **Roman numerals** on contact channels (i, ii, iii, iv) instead of arabic — small detail, big mood shift

Things to avoid if you customize: Inter as a body font (it's the AI-default for a reason — too generic), purple gradients on white, glassmorphism, anything called "neumorphism," scattered micro-animations. Restraint > intensity.
