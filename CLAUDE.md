# Brent Portfolio — Claude Code Guide

## Stack
- Vite + React 19, Tailwind CSS v4, deployed on Vercel
- EmailJS for the contact form
- `npm run dev` to start locally, push to `main` to deploy

## File Map
```
src/
  App.jsx              — root, renders all sections in order
  index.css            — global styles + custom animation classes
  section/
    home.jsx           — hero: Brent|photo|Orgen layout + CTA buttons
    toolkit.jsx        — grouped tech pills with float animation
    projects.jsx       — project data array + renders ProjectCard
    contact.jsx        — EmailJS contact form + social icons
    footer.jsx         — short bio blurb + nav links + social icons
  components/
    navbar.jsx         — exists but is NOT rendered in App.jsx (unused)
    projectcard.jsx    — image overlay card with title/description/stack/link
    toolcard.jsx       — unused since toolkit was rewritten inline
    rebuilding.jsx     — "Rebuilding..." placeholder (swap into App.jsx when hiding the site)
public/images/
  profile_pic.webp
  project/             — elitecraft.png, Magymbo.JPG, AP.JPG, ENAR.JPG, n8n.png
  (tool logos)         — next.png, python.png, react.png, etc.
```

## Critical CSS Gotchas
These global rules in `index.css` override Tailwind utilities — always check here first when styles don't apply:

- `a { padding: 5px; color: white; border-bottom: 2px dashed ... }` — overrides px/py on any `<a>` tag. Use inline styles or a named CSS class to override.
- `h1-h5 { font-family: Major Mono Display }` — headings use the monospace font.
- `button { bg-white text-[#1a1a1a] }` — all buttons are white by default.
- `body { background: linear-gradient(...dark teal...) }` — don't add bg colors to section wrappers unless intentional, it'll cover the gradient.

## Custom Animation Classes (index.css)
| Class | Effect |
|---|---|
| `.squish-letter` | Sponge squish every 3s — used on B and O in hero name |
| `.spin-t` | Full rotation every 2s — used on T in Toolkit |
| `.jump-p` | Double bounce jump every 2s — used on P in Projects |
| `.toolkit-pill` | Gentle float bob — used on all toolkit pills |
| `.cta-border` | Clean teal border, brightens on hover — used on CTA buttons |

## Section Spacing Convention
All sections use `py-20 lg:py-28` for vertical rhythm. Don't mix `mt`/`mb` between sections.

## Deploying
Push to `main` — Vercel auto-deploys. No build step needed locally.

## To Hide the Site
In `App.jsx`, replace all section imports/renders with:
```jsx
import { Rebuilding } from "./components/rebuilding";
// <Rebuilding /> inside the div
```
`rebuilding.jsx` already exists and is ready.
