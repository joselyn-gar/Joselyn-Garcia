# Joselyn Garcia · Portfolio

A board-game-inspired portfolio built with [Astro](https://astro.build), plain CSS, and a little vanilla JS.

## Run it
```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # static site in dist/
npm run preview   # serve dist/
```

## Where to edit
| What | File |
|---|---|
| Email, LinkedIn, resume, Pinterest | `src/data/site.ts` |
| Projects (tiles, cards, stats, dice faces) | `src/data/projects.ts` |
| Search answers | `src/data/search.ts` |
| Colors + type | `src/styles/global.css` |
| Case study text | `src/pages/projects/*.astro`, `src/pages/playground/*.astro` |

## Adding images or video
Drop web-ready files into `public/images/...` or `public/media/...`, then run
`node scripts/optimize-media.mjs` (it refreshes `src/data/dims.json` so images keep their size while loading).
The script can also convert raw uploads: set `IMG_SRC`, `VID_SRC`, and `STL_SRC` to their folders.

The full plan and remaining to-dos are in `PORTFOLIO_PLAN.md`.
