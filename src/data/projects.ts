// Single source for the board tiles, deed cards, dice roll, and search.
export type Item = {
  slug: string;
  href: string;
  title: string;
  short: string; // tile label
  kind: 'Case study' | 'Playground';
  color: string; // CSS var prefix, e.g. 'lyft' -> --lyft, --lyft-tint, --lyft-text
  face: 1 | 2 | 3 | 4 | 5 | 6; // die face shown when the dice cursor hovers the tile
  summary: string; // may contain <strong> for key words
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
    summary: 'A <strong>feature concept</strong> that turns every bike ride into a city adventure, built on <strong>infrastructure Lyft already owns</strong>.',
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
    summary: 'The <strong>startup I founded</strong>: a candle jar that <strong>twists open into a planter</strong> once the candle burns out.',
    role: 'Founder + CEO',
    tags: ['Product', 'Brand', 'Startup'],
    cover: '/images/releaf/cover.webp',
    stats: [['Skandalaris Venture Comp.', 'Top 16 of 131'], ['Survey responses', '146'], ['Customers', '26']],
  },
  {
    slug: 'skate-for-girls',
    href: '/projects/skate-for-girls',
    title: 'SKATE for Girls × WashUX',
    short: 'SKATE for Girls',
    kind: 'Case study',
    color: 'skate',
    face: 3,
    summary: 'A <strong>UX consulting</strong> redesign for a nonprofit, built to ship on their <strong>existing Wix site</strong>.',
    role: 'Homepage design lead + UX research',
    tags: ['UX research', 'Web design', 'Nonprofit'],
    cover: '/images/skate/cover.webp',
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
    summary: 'A <strong>social campaign</strong> and <strong>effectiveness study</strong> for St. Louis’s proposed Circularity District.',
    role: 'Campaign strategy, design + research',
    tags: ['Marketing', 'Research', 'Social'],
    cover: '/images/stl/cover.webp',
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
    summary: 'Two <strong>surface-design prints</strong>, from mood board to colorways to a <strong>bodice mockup</strong>.',
    role: 'Surface design',
    tags: ['Print', 'Fashion', 'Illustration'],
    cover: '/images/textiles/cover.webp',
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
    summary: '<strong>Posters</strong>, <strong>reels</strong>, and recap videos for <strong>WUTV</strong> and the <strong>Skandalaris Center</strong>.',
    role: 'Content creator + designer',
    tags: ['Social', 'Posters', 'Video'],
    cover: '/images/design/hero.webp',
    stats: [['Avg. post views', '1,000+'], ['WUTV members', '3 → 20'], ['Creating content', '4+ yrs']],
  },
  {
    slug: 'jdel',
    href: '/playground#jdel',
    title: 'JDel Fragrance',
    short: 'JDel',
    kind: 'Playground',
    color: 'jdel',
    face: 1,
    summary: 'A dream <strong>perfume brand</strong> named for my mom and me, concepted with <strong>AI image generation</strong>.',
    role: 'Brand + product concept',
    tags: ['Beauty', 'AI', 'Brand'],
    cover: '/images/jdel/bottle.webp',
    stats: [['Category', 'Fragrance'], ['Tools', 'AI + prompt design'], ['Status', 'Dream brand']],
  },
];

export const caseStudies = items.filter((i) => i.kind === 'Case study');
export const playground = items.filter((i) => i.kind === 'Playground');

export function nextItem(slug: string) {
  const i = items.findIndex((p) => p.slug === slug);
  return items[(i + 1) % items.length];
}
