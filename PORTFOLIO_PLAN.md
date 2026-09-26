# Joselyn Garcia Portfolio: Site Plan (final)

This replaces the first draft. The dark/floral direction is retired. The site is built (see README.md).

## Goals
- Simple and work-first. Let the case studies talk.
- A quiet board-game theme, because I love board games.
- Always one click from Email, LinkedIn, and Resume.
- Feels at home for beauty, consumer goods, and tech teams, without naming any company.

## Sitemap
```
Home (/)                   the board: hero + search in the center, a property tile per project
About Me (/about)          bio, Clifton Strengths flip cards, toolbox, Chance cards (hobbies)
Projects (/projects)       title-deed cards
  Lyft Explore             /projects/lyft
  ReLeaf Candles           /projects/releaf
  SKATE for Girls × WashUX /projects/skate-for-girls
  Circular STL #AroundSTL  /projects/circular-stl
Playground (/playground)   curved card carousel
  Textiles + Print Design  /playground/textiles
  Design + Social          /playground/design-social
  JDel Fragrance           /playground/jdel
  Raised on the Blur       /playground/raised-on-the-blur
Resume (/resume)           opens the PDF once it's added
```

## The board-game layer (Home + cards only)
- **Board:** a line-drawn board. Corners: GO = About, Free Parking = Playground, Take a card = Resume, Just visiting = Say hi. Each project is a property tile with its own color band. On phones it stacks.
- **Title-deed cards:** color band, serif title, real stats in place of rent (Lyft 720% ROI, SKATE 45% couldn't find Donate, Circular STL 4.15/5).
- **Roll the dice:** rolls a 3D die and jumps to a random project.
- **Dice cursor:** a small 3D die trails the mouse, tumbles as it moves, lands on a tile's number on hover, and rolls on click. A precise dot marks the real pointer. It's off on touch screens and with reduced motion, and there's a toggle in the footer.
- **Chance cards:** hobbies and Clifton Strengths flip over on About.
- Case studies stay minimal: one reading column, a sticky contents list, big images.
- Board-game inspired, fully original art. No Monopoly name, logo, or card layouts.

## Search: "Ask me anything…"
A large pill in the hero, plus chips, a nav icon, and ⌘K or /. It searches a local index of projects, pages, and quick answers (tools, contact, UX work, marketing work, beauty + fashion, fun facts). There's no backend.

## Visual system
| Token | Value |
|---|---|
| Paper + dot grid | #F8F6F1 · #E2DDD2 |
| Ink | #1A1A1A |
| Glass nav | rgba(20,20,20,.72) + blur |
| Lyft | #FF00BF (official pink) · tint #FFD6F2 · small text #B8008A |
| ReLeaf | #6B7A4F · #DDE6CF |
| SKATE | #9B3FD1 · #E6DDF6 |
| Circular STL | #2E7D5B · #D7EDE2 |
| JDel | #8A5A2B · #F1E1CF |
| Textiles | #DD6031 · #FBE3D2 |
| Design + Social | #A67C00 · #FFF1C7 |
| Writing | #2F5AA8 · #DCE7F7 |

- Type: Instrument Serif for headlines, Inter for body.
- Every text/background pair checked for AA contrast. Lyft pink carries large text only, and small pink text uses #B8008A.
- Motion is soft. `prefers-reduced-motion` turns off the typing loop, the dice, autoplay, and floats.

Inspiration: Stefan's "Ask me anything" hero, Pratibha's pastel project cards, Catalist's glass pills, Uniqia's dots and tool cloud, Voyager's curved carousel, and Apple's nav.

## Still to add (placeholders are in place)
- [ ] Resume PDF → `public/files/resume.pdf`, then set `resume` in `src/data/site.ts`
- [ ] LinkedIn URL → `src/data/site.ts` (the link stays hidden until set)
- [ ] Confirm the email shown (currently Joselyng485@gmail.com)
- [ ] Original headshot (About uses a crop from the Figma frame)
- [ ] Pinterest board link
- [ ] Review the video captions and toolbox one-liners
- [ ] Optional: textile project titles + course name, JDel prompt iterations
- [ ] Domain + deploy (Vercel or GitHub Pages)
