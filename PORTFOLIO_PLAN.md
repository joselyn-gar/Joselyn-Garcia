# Joselyn Garcia Portfolio: Site Plan

Planning doc. No code yet. Everything here is a draft to react to.

---

## 1. Goals

**What should a recruiter feel in 10 seconds?**
"She thinks like a marketer, designs like a UX person, and has taste."

- Show range: strategy, UX, brand, making things by hand.
- Stay simple. Four nav items. No dead ends.
- Every page ends with a way to reach me.
- Audience: recruiters and hiring teams in beauty, consumer goods, and tech. The site should *feel* at home in that world without naming any company.

**Always visible:** Resume (PDF), LinkedIn, Email.

---

## 2. Sitemap

Matches the nav in the current mockup: **Home · About Me · Projects · Playground**

```
Home (/)
├── Hero: "Hi, I'm Joselyn" + rotating "I'm driven by..."
├── Featured work (3 cards)
├── Playground teaser
└── Contact strip

Projects (/projects)
├── Lyft Case Competition        /projects/lyft
├── ReLeaf Candles               /projects/releaf
├── WashU Website Redesign       /projects/washu-redesign
└── Circular STL: #WhatGoesAroundSTL   /projects/circular-stl

Playground (/playground)
├── Textiles + Designs           /playground/textiles
├── Social Content               /playground/social
└── Writing: "Raised on the Blur"      /playground/raised-on-the-blur

About Me (/about)
├── Quick gist
├── Toolbox
└── Away from the desk

Resume → opens PDF in new tab (lives in nav, top right)
```

**Why split Projects and Playground?**
Projects = structured case studies with problem, process, result.
Playground = creative output that speaks visually. Less reading, more looking.

The AI paper sits in Playground under "Writing." It could also be a Project. See open question #3.

---

## 3. Navigation (Apple-style)

Reference: the dark frosted pill in the current screenshot.

**Layout**
- Floating pill, centered, fixed to top. ~12px from the edge.
- Frosted glass: dark translucent fill, `backdrop-filter: blur(20px) saturate(180%)`.
- Left to right: `Home  About Me  Projects  Playground` then a divider, then `Resume ↗`.
- Small icon buttons for LinkedIn + Email can sit on the right of the pill, or live in the footer only. Keep the pill light.

**Hover effects** (pick one as primary)
1. **Sliding highlight.** A soft pill glides under whichever link you hover. Apple and Vercel both do a version of this. *Recommended.*
2. **Text roll.** The label slides up and a copy rolls in from below.
3. **Magnetic.** Links lean toward the cursor a few pixels.

**Behavior**
- Active page keeps the highlight.
- Scroll down: pill shrinks slightly. Scroll up: returns to full size.
- Projects hover can open a small dropdown listing the four cases (Apple's mega-menu, but tiny).
- Mobile: pill collapses to `Joselyn` + menu icon. Tap opens a full-screen sheet with big links.

---

## 4. Page by page

### Home

**Hero**
```
Hi, I'm Joselyn.
I'm driven by [people.]
```
Rotating words, typed then deleted, one at a time:
`people.` → `innovation.` → `curiosity.` → `good stories.` → `design that feels human.` → `beauty in the details.`

Sub-line (draft):
> Marketing + Entrepreneurship at WashU, minoring in Human-Computer Interaction. I research how people think, then design what they'll love.

Buttons: `See my work` (scrolls) · `Resume ↗`

Background idea: your textile/floral pattern from the screenshot, darkened, slow parallax. Ties the hero to your handmade side.

**Featured work:** 3 large cards. Suggest Lyft, Circular STL, WashU Redesign. Hover: image zooms slightly, tag pills fade in (e.g. `UX` `Gamification` `Pitch`).

**Playground teaser:** horizontal scroll strip of textile shots + social posts. "More from the playground →"

**Contact strip:** "Let's make something." + Email · LinkedIn · Resume.

---

### Projects index
Clean grid, 2 columns desktop, 1 mobile. Each card: cover, title, one-line summary, role, tags. Filter chips optional (`Marketing` `UX` `Brand`). Four projects may not need filters.

### Case study template
Same skeleton for every case so readers learn the pattern once.

| Section | What goes here |
|---|---|
| Hero | Title, cover mockup, one-sentence summary |
| Snapshot | Role · Team · Timeline · Tools |
| The problem | 2 to 3 sentences |
| Research | Methods, key data, quotes |
| Insight | The "aha" in one bold line |
| Solution | Mockups, flows, visuals |
| Results | Numbers, feedback, placement |
| Reflection | What I'd do next |
| Next project → | Keeps people moving |

Sticky mini table of contents on desktop for longer cases.

---

### Case: Lyft Case Competition
What I can see from the mockups:
- Gamified micromobility. Riders collect **gems** (100 / 300 / 500 pts) placed on the map to steer rides.
- **Leaderboard** with podium (1, 2, 3) and ranked list.
- **Brand-sponsored leaderboards** (Nike example) as a revenue stream.
- Surfaces: Lyft app (dark map), bike dock kiosk screen, handlebar display.

Suggested story: *How might Lyft increase scooter/bike ridership and open a brand partnership channel?*
Hero visual: the pink gradient 3-up (Nike board, pink board, map).

**Need from you:** the prompt, your team + role, how it placed, any metrics or rebalancing logic behind gem placement.

### Case: ReLeaf Candles
**Need from you:** everything. Is this a venture you started, a class brand, or a client? Brand visuals, packaging, pricing, sales numbers.

### Case: WashU Website Redesign
**Need from you:** which site, original screenshots, research (interviews, usability tests), Figma files, before/after.
A before/after slider would be a strong visual here.

### Case: Circular STL (#WhatGoesAroundSTL)
Pulled from your report:
- **Client:** CircularSTL + Circularity District Task Force
- **Team:** Joselyn Garcia, Maddie Elhaik, Gia Grillo
- **Problem:** People don't understand what a Circularity District is. CircularSTL's own symposium named messaging as a barrier.
- **Research:** Compared posters, email, social. Picked Instagram for reach and geo-targeting. Studied Patagonia and Nike Move to Zero.
- **Solution:** 4-post carousel. Hook → Math ($3,100 in unused household items) → What the District does → Call to action. Tagline: *"What goes around should come back around."*
- **Testing:** 16-question survey, 31 respondents, April 17 to 21, 2026.
- **Results:** 3.70/5 compellingness. 4.15/5 favorability. ~80% said the tagline conveyed circularity.
- **Honest finding:** only 10% felt it was rooted in St. Louis. Some confused it with Goodwill.
- **Recommendations:** lead with money, go more local, differentiate, cut text per slide, clearer CTA.

That "what didn't work" section is a strength. It shows you test and iterate.
Visuals: the 4 carousel slides side by side, then a small stat row.

---

### Playground: Textiles + Designs
Masonry grid. Click opens a lightbox with a short caption (material, technique, inspiration). Upcycled tops can live here too, linking to the About hobbies.

### Playground: Social Content
Grid styled like a phone feed. Embed or screenshot posts/reels. Label each: platform, goal, result (views, saves).
**Need from you:** handles, top posts, any numbers.

### Playground: Writing, "Raised on the Blur"
*AI-Generated Media, the Attachment Economy, and Gen Z's Challenge.*
Treat it like an editorial feature, not a PDF dump.
- Big title, short abstract.
- 3 pull stats:
  - People spot AI content only **~55%** of the time.
  - Deepfakes grew **3,000%** from 2019 to 2023.
  - Projected **$40B** in US generative-AI fraud losses by 2027.
- Framing lens: *Don't Look Up* (2021).
- The HCI angle: design mitigation around how people actually use platforms.
- Buttons: `Read the full paper (PDF)` · `View the presentation`.

This piece quietly proves you can connect tech, consumer behavior, and ethics. Useful for tech and beauty brands alike.

---

### About Me

**Quick gist (draft)**
> I'm Joselyn, a second-year at WashU studying Marketing and Entrepreneurship with a minor in Human-Computer Interaction. I like the space where brand meets product: figuring out what people want, then designing and pitching it. I'm happiest working with clients and turning messy research into something clear.

Photo on the side. Keep it casual.

**Toolbox** (logo tiles, hover shows what you use it for)
Claude · Canva · Figma · Framer · Excel · Adobe Illustrator · Blender · Procreate

**Away from the desk**
Three cards, each with a photo:
- ⚾ **Watching baseball.** Dodgers rule.
- 🧵 **Upcycling.** Turning thrifted pieces into cute tops. → links to Textiles
- 📌 **Pinterest boards.** Aesthetic hunting and idea collecting. → link to your board

---

### Footer (every page)
`Email` · `LinkedIn` · `Resume` · "Designed and built by Joselyn Garcia, 2026"

---

## 5. Visual system

**Color** (pulled from your mockups)
| Role | Suggestion |
|---|---|
| Base dark | `#0E0E10` near-black |
| Surface | `#1A1A1F` |
| Light text | `#F5F3F0` warm white |
| Accent | `#E6197D` hot magenta (from the gems + leaderboard) |
| Accent 2 | `#FF8FC7` soft pink |
| Warm tone | `#C2372F` red from the Lyft gradient, used sparingly |

Dark site with pink accents? Or light site with dark nav? See open question #1.

**Type**
- Headlines: a clean grotesk like *Inter Display* or *SF Pro Display* feel, tight tracking.
- Optional editorial serif for pull quotes and the writing page (e.g. *Instrument Serif*). Gives a beauty-brand touch.

**Motion**
- Soft fades and rises on scroll. Nothing bouncy.
- Respect `prefers-reduced-motion`. Turn off the typing loop and parallax.

**Imagery**
- Mockups on gradient backgrounds, like your Lyft slides. Consistent across all cases.

---

## 6. Build approach (recommendation)

**Option A: Code it in this repo.** Astro + plain CSS, deployed free on Vercel or GitHub Pages. Full control over the nav and hover effects. Case studies written as Markdown, so adding one later is easy.

**Option B: Framer.** Fastest visually. You already know it. Harder to version and extend here.

**Recommendation: A.** It shows off the dev side you mentioned, and I can build and iterate with you directly in this repo.

Accessibility basics baked in: alt text, keyboard nav, contrast checks, focus rings on the nav.

---

## 7. Content checklist (what I need from you)

- [ ] Resume PDF
- [ ] LinkedIn URL and preferred email
- [ ] Headshot + 3 hobby photos
- [ ] Lyft: prompt, team, role, result, full mockup set
- [ ] ReLeaf Candles: all of it
- [ ] WashU Redesign: before/after, research, Figma
- [ ] Circular STL: the 4 carousel images at full size
- [ ] Textile photos with short captions
- [ ] Social content: handles, top posts, metrics
- [ ] "Raised on the Blur" presentation slides as images (have the PDF)
- [ ] Pinterest board link
- [ ] Domain name? (e.g. joselyngarcia.com)

---

## 8. Open questions

1. **Dark or light?** Mockups lean dark with pink. Beauty sites often go light and airy. Could do dark home, light case studies.
2. **Hero background:** textile pattern, a gradient, or clean solid?
3. **AI paper placement:** Playground "Writing," or a 5th Project?
4. **Resume:** download PDF, or a web page with a download button?
5. **Rotating words:** keep my list or swap in your own?
