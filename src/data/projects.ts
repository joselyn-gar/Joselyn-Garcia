// Single source for the board tiles, deed cards, dice roll, and search.
export type Item = {
  slug: string;
  href: string;
  title: string;
  short: string; // tile label
  kind: 'Case study' | 'Playground';
  color: string; // CSS var prefix, e.g. 'lyft' -> --lyft, --lyft-tint, --lyft-text
  face: 1 | 2 | 3 | 4 | 5 | 6; // die face shown when the dice cursor hovers the tile
  summary: string;
  role: string;
  tags: string[];
  cover: string;
  stats: [string, string][]; // "rent" rows on the deed card
};

export const items: Item[] = [
  {
    slug: 'lyft',
    href: '/projects/lyft',
    title: 'Lyft Explore',
    short: 'Lyft Explore',
    kind: 'Case study',
    color: 'lyft',
    face: 1,
    summary: 'A feature concept that turns every bike ride into a city adventure, built on infrastructure Lyft already owns.',
    role: 'Ideation lead, slide design, all mockups',
    tags: ['UX', 'Gamification', 'Strategy'],
    cover: '/images/lyft/hero.webp',
    stats: [['Projected ROI', '720%'], ['Profit margin', '87.7%'], ['5-yr profit', '$213M → $317M']],
  },
  {
    slug: 'releaf',
    href: '/projects/releaf',
    title: 'ReLeaf Candles',
    short: 'ReLeaf Candles',
    kind: 'Case study',
    color: 'releaf',
    face: 2,
    summary: 'The startup I founded: a candle jar that twists open into a planter once the candle burns out.',
    role: 'Founder + CEO',
    tags: ['Product', 'Brand', 'Startup'],
    cover: '/images/releaf/lineup.webp',
    stats: [['Skandalaris Venture Comp.', 'Finalist'], ['IdeaBounce', 'Winner'], ['Next', 'CA pilot']],
  },
  {
    slug: 'skate-for-girls',
    href: '/projects/skate-for-girls',
    title: 'SKATE for Girls × WashUX',
    short: 'SKATE for Girls',
    kind: 'Case study',
    color: 'skate',
    face: 3,
    summary: 'A consulting-style website redesign for a nonprofit, built to be shipped on their existing Wix site.',
    role: 'Homepage design lead + UX research',
    tags: ['UX research', 'Web design', 'Nonprofit'],
    cover: '/images/skate/final.webp',
    stats: [['Survey responses', '38'], ["Couldn't find Donate", '45%'], ['Deliverable', 'Prototype']],
  },
  {
    slug: 'circular-stl',
    href: '/projects/circular-stl',
    title: 'Circular STL: #AroundSTL',
    short: 'Circular STL',
    kind: 'Case study',
    color: 'stl',
    face: 4,
    summary: 'A social campaign and effectiveness study for St. Louis’s proposed Circularity District.',
    role: 'Campaign strategy, design + research',
    tags: ['Marketing', 'Research', 'Social'],
    cover: '/images/stl/slide-2.webp',
    stats: [['Favorability', '4.15 / 5'], ['Tagline landed', '~80%'], ['Respondents', '31']],
  },
  {
    slug: 'textiles',
    href: '/playground/textiles',
    title: 'Textiles + Print Design',
    short: 'Textiles',
    kind: 'Playground',
    color: 'tex',
    face: 5,
    summary: 'Two surface-design prints, from mood board to colorways to a bodice mockup.',
    role: 'Surface design',
    tags: ['Print', 'Fashion', 'Illustration'],
    cover: '/images/textiles/bead-singer.webp',
    stats: [['Prints', '2'], ['Colorways', '5+'], ['Final use', 'Bodice']],
  },
  {
    slug: 'design-social',
    href: '/playground/design-social',
    title: 'Design + Social',
    short: 'Design + Social',
    kind: 'Playground',
    color: 'design',
    face: 6,
    summary: 'Posters, reels, and recap videos for WUTV, the Skandalaris Center, and more.',
    role: 'Content creator + designer',
    tags: ['Social', 'Posters', 'Video'],
    cover: '/images/design/kiki-bouba.webp',
    stats: [['Creating content', '4+ yrs'], ['Clients', 'WUTV, Skandalaris'], ['Editing since', '2020']],
  },
  {
    slug: 'jdel',
    href: '/playground/jdel',
    title: 'JDel Fragrance',
    short: 'JDel',
    kind: 'Playground',
    color: 'jdel',
    face: 1,
    summary: 'A dream perfume brand named for my mom and me, concepted with AI image generation.',
    role: 'Brand + product concept',
    tags: ['Beauty', 'AI', 'Brand'],
    cover: '/images/jdel/bottle.webp',
    stats: [['Category', 'Fragrance'], ['Tools', 'AI + prompt design'], ['Status', 'Dream brand']],
  },
  {
    slug: 'raised-on-the-blur',
    href: '/playground/raised-on-the-blur',
    title: 'Raised on the Blur',
    short: 'Writing',
    kind: 'Playground',
    color: 'write',
    face: 2,
    summary: 'A research paper on AI-generated media, the attention economy, and what it means for Gen Z.',
    role: 'Research + writing',
    tags: ['Writing', 'AI', 'HCI'],
    cover: '',
    stats: [['Spot AI content', '~55%'], ['Deepfake growth', '3,000%'], ['Pages', '16']],
  },
];

export const caseStudies = items.filter((i) => i.kind === 'Case study');
export const playground = items.filter((i) => i.kind === 'Playground');

export function nextItem(slug: string) {
  const i = items.findIndex((p) => p.slug === slug);
  return items[(i + 1) % items.length];
}
