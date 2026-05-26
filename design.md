# Design Preferences — Brent Orgen Portfolio

## Aesthetic
Dark, techy, subtle. The site has a dark teal-to-navy gradient body background — everything should feel at home in it, not fight it. Sections should breathe. Nothing cramped.

## Color Palette
- Body gradient: `#1A1A1A → #092f3b → #026383 → #092f3b → #1A1A1A`
- Primary accent: `#8FD0E3` (icy teal-blue) — used on borders, CTA, text accents
- Text: white / gray-300 / gray-400 for hierarchy

## Typography
- Headings: Major Mono Display (monospace) — set globally on h1-h5
- Body/UI: Inter
- Brent dislikes bold text on interactive elements — use `font-light` or `font-normal`
- No em dashes (—) anywhere in visible text. They read as AI-generated.

## Layout
- Everything is centered. Sections use `px-[5%] lg:px-[20%]` for consistent content width.
- Vertical rhythm: `py-20 lg:py-28` per section.
- Hero (home): `Brent | photo | Orgen` as a row on PC. Photo on top, "Brent Orgen" on one line below on mobile.
- Toolkit: grouped by category (Frontend / Backend / Automation & AI / DevOps & Tools), centered, pills with logo + name.
- Projects: full-width image cards with dark overlay and text on top.

## Animations — Keep Them Subtle
Brent likes small playful touches on specific letters, not heavy motion:
- Letters: squish (B, O in name), spin (T in Toolkit), jump (P in Projects)
- Toolkit pills: gentle float bob with staggered delays
- Animations should feel cute and light, not distracting

**Avoid:** marquees (client can't see all content at once), heavy transitions that lag, anything that moves the whole layout.

## Buttons / CTAs
- Large padding — the global `a { padding: 5px }` overrides Tailwind, so padding must be set in a CSS class (`.cta-border`)
- `font-light`, wide letter spacing
- Style: clean border that brightens on hover (no glow, no box-shadow pulse)
- Multiple CTAs are fine side by side (See my work + Contact me)

## Project Cards
- Full image background with semi-transparent dark overlay
- Text (title, description, stack, link) overlaid on the image
- Image scales slightly on hover
- No raw URLs — use a "View Project →" text link

## Things Brent Dislikes
- Em dashes in copy
- Bold/heavy text on buttons
- Low padding on CTAs (always go bigger than you think)
- Laggy layout transitions (avoid animating `margin-left` — use `transform` or in-flow width changes)
- Self-deprecating project descriptions ("practice project", "unfinished")
- Logo walls with no grouping or context
- Two navbars

## Copy Voice
Direct, confident, no filler. No corporate phrases like "passionate", "self-driven", "strong problem-solving skills". Lead with what was built and for whom, not how you felt building it.
