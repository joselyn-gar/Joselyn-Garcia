# Lock In case study: prompt for Claude

How to use this:
1. Open Claude Code in the **Joselyn-Garcia** portfolio repo (or attach the repo in Claude).
2. Fill in the three blanks in **Before you paste** below.
3. Paste everything under the line. The screenshots are already in `case-studies/lock-in/screenshots/`.

**Before you paste**
- `[LIVE_URL]` → your Vercel link, e.g. `https://lockinstudyapp.vercel.app`
- `[GITHUB_URL]` → the repo link, or delete that line if the repo is private
- `[TIMEFRAME]` → how long it took, e.g. "one weekend" or "about a week"

---

## Role
You are a product designer and front-end engineer who writes portfolio case studies. You work inside my existing Astro site and match it exactly.

## Context
This is my portfolio (Astro). It has four case studies under `/projects` and creative work under `/playground`. Read these before writing anything:
- `PORTFOLIO_PLAN.md`: site goals, board-game theme, visual system
- `src/data/projects.ts`: one entry per project (board tile, deed card, dice roll, search)
- `src/data/search.ts`: the "Ask me anything" index
- `src/layouts/CaseLayout.astro` and `src/layouts/ProductLayout.astro`: the case study templates
- `src/pages/projects/releaf.astro`: the closest model. Match its chapter structure, the `What I learned` boxes, `bigstats`, figures with captions and `<strong>` keywords
- `src/components/BeforeAfter.astro`: use it for the before/after
- `src/styles/global.css`: color tokens. The site is dark now

## Task
Add a new case study for **Lock In**, an AI study app I designed and built by directing AI tools. Do it in this order and pause for my review after each step:

1. **Plan.** Tell me where it goes (my pick is `/projects/lock-in` as a Case study), which template you'll use, and the section outline. Don't edit yet.
2. **Data.** Add the entry to `projects.ts` and `search.ts`, plus color tokens in `global.css`.
3. **Images.** Convert the screenshots to `.webp` in `public/images/lockin/`, with real alt text.
4. **Page.** Write `src/pages/projects/lock-in.astro`.
5. **Check.** Build it, check 390px and 1280px, AA contrast, and that search finds it.

## The story (facts only, don't invent any)

**One line:** A study app that turns your classes into 15-minute exam games. I designed it and built it by directing AI.

**The problem.** Studying for exams means re-prompting ChatGPT over and over. You paste notes, explain the class, ask for a quiz, and do it again tomorrow. I wanted to set it up once and just play.

**Who it's for.** College students, starting with me. They open it for about 15 minutes a day and need to know what to do next within 2 seconds.

**How it works.** Connect Canvas or upload slides and past exams. Lock In forecasts the topics most likely to be on your exam. It turns them into short games, inspired by Duolingo and Quizlet, aimed at what you haven't mastered.

**Process**
1. **v1 in Google AI Studio.** I vibe coded the first version with Gemini. The features worked. The interface felt generic and AI-made: an olive and lime theme, emoji everywhere, and a top bar with **12 controls** competing for attention.
2. **I designed it myself.** I made mockups for 5 screens (Connect, Today, Forecast, Game, Results) and a navigation map. The rule: every path ends back on Today, so there's always one clear next step.
3. **I wrote the brief, not the code.** I wrote a structured redesign prompt: role, context, audience, task, design spec, constraints. Key lines: "Keep every existing feature and all of the data logic." "Every screen has exactly one primary action." "Meet WCAG AA contrast." "Works at 390px and 1280px with no sideways scrolling." "Pause for my review after each step."
4. **Claude Code rebuilt it.** It read the code first and mapped every old screen to my mockups. Then it rebuilt the UI on design tokens, fixed bugs, made it installable on a phone and deployed it.
5. **My constraints became the test plan.** Every requirement in my prompt became a check: screenshots at phone and laptop widths, an automated accessibility audit, a production build test.

**Numbers you can use**
- Original export: about 8,700 lines of code
- About **400** one-off hardcoded colors → about **20** design tokens
- **12** top-bar controls → **6** nav items
- **9** screens redesigned (setup flow, Today, Exams, Forecast, Games, Mastery, Sources, Game, Results)
- **7** bugs found and fixed: npm install failed; mastery didn't save on reload; custom and uploaded classes couldn't start a game; the streak never passed 1 day; XP history piled every day into one entry; the settings modal saved stale data; the Vercel build failed on TypeScript 7
- **0** WCAG AA issues in an automated audit of every screen and modal
- Hosting cost: **$0** (Vercel free tier, Gemini free tier)

**Design system.** Black, white and gray, Inter type, 16px card corners, pill buttons. One accent: black. The star mascot (tan `#E3C8A2`) is the only color in the app.

**Status (say this clearly).** It's a **live demo you can play with**, not a published product. It's not in an app store, it runs on free tiers, and your data stays in your browser. Tapping "Try it with sample classes" shows everything right away.

**What's next (be honest).**
- PDF uploads only send the file name to the AI right now. Reading the text inside them is next.
- Canvas connects and pulls your course list, but doesn't create classes yet. Automatic sync is next.

**My role:** Product idea, UX and UI design, prompt writing, AI direction, review, deployment.
**Tools:** Google AI Studio (Gemini), Claude Code, React, Tailwind, Vercel, Figma (if I used it for the mockups, ask me).
**Timeframe:** [TIMEFRAME]

**Links**
- Live demo: [LIVE_URL]
- Code: [GITHUB_URL]

## Screenshots (`case-studies/lock-in/screenshots/`)
| File | Use |
|---|---|
| `before-02-dashboard.png` | Before, for the before/after slider |
| `desk-06-today.png` | After, for the before/after slider. Also the cover |
| `before-03-game.png` / `desk-08-game.png` | Second before/after: the game |
| `desk-02-source.png` | Setup: "Where should I study from?" |
| `desk-07-forecast.png` | Forecast screen |
| `desk-09-feedback.png` | Game feedback bar |
| `desk-10-results.png` | Results: readiness 78% → 80% |
| `desk-04-exams.png`, `desk-07-mastery.png`, `desk-01-welcome.png` | Extras, use if a section needs one |
| `phone-06-today.png`, `phone-08-game.png` | Phone views, side by side |
| `app-icon.png` | Home-screen icon, for the "install it" moment |

## Suggested outline (change it if the template fits better)
- **Hero:** eyebrow "AI build · Product design", title, tagline, a "Live demo" pill linking to [LIVE_URL], plus one short line: "Not a published app. A working demo."
- **Summary row:** The problem / What I did / The result
- **01 · The problem:** re-prompting AI every study session
- **02 · v1:** vibe coded in AI Studio. It worked, but looked generic. Before screenshot.
- **03 · Design:** my mockups and the "always back to Today" navigation rule
- **04 · The prompt:** pull quotes from my brief. This is the core of the story: I directed the AI with a spec, not vibes.
- **05 · The rebuild:** before/after slider, bigstats row, design system notes
- **06 · Proof:** how each constraint became a check. The 7 bugs as a short list.
- **07 · Try it:** live link, phone screenshots, how to add it to a home screen, and what's next
- Each chapter ends with a `What I learned` box. Offer me 2 options for each instead of picking one.

## Voice
- Short, punchy sentences. Vary the structure so it doesn't read like a list.
- No em dashes. Use periods, commas or colons.
- Few adjectives. No superlatives ("best", "most powerful", "seamless").
- A rhetorical question or two is fine, such as "Why re-prompt every night?"
- Bold 1 to 3 key phrases per paragraph with `<strong>`, like the other case studies.
- First person. Be honest that the AI wrote the code and I directed, designed and reviewed it. Don't claim I coded it by hand.
- No exclamation marks, except the app's own "Let's lock in today!"

## Constraints
- Don't change other case studies, the board layout or shared components unless you ask me first.
- Don't add new libraries.
- New color tokens: `--lockin`, `--lockin-tint`, `--lockin-text` for the dark theme, built around the star tan `#E3C8A2`. Check AA for any text that uses them.
- Pick a die `face` and confirm the board still lays out with one more tile. If it doesn't, stop and show me options.
- Every image needs real alt text. Don't use "screenshot of".
- If a fact isn't in this prompt, leave a clear `TODO` and tell me. Don't make it up.
