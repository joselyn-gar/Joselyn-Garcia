// One-off asset pipeline: raw uploads -> web-ready files in public/.
// Usage: IMG_SRC=<dir of raw images> VID_SRC=<dir of raw videos> STL_SRC=<dir of report crops> npm run media
import sharp from 'sharp';
import ffmpeg from 'ffmpeg-static';
import { execFileSync } from 'node:child_process';
import { mkdirSync, existsSync, readdirSync } from 'node:fs';
import { dirname, join } from 'node:path';

const IMG_SRC = process.env.IMG_SRC;
const VID_SRC = process.env.VID_SRC;
const STL_SRC = process.env.STL_SRC;
const OUT = new URL('../public/', import.meta.url).pathname;

// [source file, output path under public/images, max width]
const images = [
  // Lyft Explore
  ['41.png', 'lyft/hero.webp'], ['42.webp', 'lyft/kiosk-map.webp'], ['43.png', 'lyft/features.webp'],
  ['44.webp', 'lyft/evolution.webp'], ['45.webp', 'lyft/handlebar.webp'], ['46.webp', 'lyft/payout.webp'],
  ['47.webp', 'lyft/moodboard.webp'], ['48.webp', 'lyft/final-screens.webp'], ['49.png', 'lyft/campaign.webp'],
  ['50.webp', 'lyft/billboard.webp'],
  // ReLeaf Candles
  ['23.webp', 'releaf/hero.webp'], ['24.webp', 'releaf/packaging.webp'], ['25.webp', 'releaf/brand-guide.webp'],
  ['26.webp', 'releaf/logo.webp', 900], ['27.webp', 'releaf/lineup.webp'], ['28.webp', 'releaf/how-it-works.webp'],
  ['29.webp', 'releaf/social.webp'], ['30.webp', 'releaf/first-print.webp'], ['31.webp', 'releaf/tradeshow.webp'],
  ['40.png', 'releaf/cad.webp'],
  // SKATE for Girls
  ['32.webp', 'skate/final.webp', 1000], ['33.png', 'skate/donate-sketches.webp'], ['34.png', 'skate/about-sketches.webp'],
  ['36.png', 'skate/impact-options.webp'], ['38.webp', 'skate/home-wireframe.webp', 1000], ['59.webp', 'skate/original-home.webp'],
  // Textiles
  ['10.webp', 'textiles/bead-mockups.webp'], ['11.png', 'textiles/bead-palettes.webp'], ['12.webp', 'textiles/bead-singer.webp', 1200],
  ['13.webp', 'textiles/creamsicle-moodboard.webp'], ['14.png', 'textiles/creamsicle-colorways.webp'],
  ['15.png', 'textiles/creamsicle-target.webp'], ['83.webp', 'textiles/cover.webp', 1200],
  ['17.jpg', 'textiles/creamsicle-bodice-flat.webp', 1000],
  // Textile gallery
  ['63.jpg', 'textiles/gallery/shibori-kaleidoscope.webp', 1200], ['64.jpg', 'textiles/gallery/shibori-stripes.webp', 1200],
  ['65.jpg', 'textiles/gallery/party-animal.webp', 1200], ['66.jpg', 'textiles/gallery/fabric-collage.webp', 1200],
  ['67.jpg', 'textiles/gallery/shibori-crimson.webp', 1200], ['68.jpg', 'textiles/gallery/sunburst.webp', 1200],
  ['69.jpg', 'textiles/gallery/shibori-ochre.webp', 1200], ['70.jpg', 'textiles/gallery/wrap-top.webp', 1200],
  // About: Chance card photos
  ['73.jpg', 'about/dodgers.webp', 900], ['74.jpg', 'about/jazz.webp', 900],
  ['75.jpg', 'about/agriculture.webp', 900], ['76.jpg', 'about/video.webp', 900],
  // Design + social posters
  ['18.webp', 'design/mod-portrait.webp', 1100], ['19.webp', 'design/tinydesk-black.webp', 1100],
  ['20.webp', 'design/tinydesk-blue.webp', 1100], ['21.webp', 'design/kiki-bouba.webp', 1100],
  ['22.webp', 'design/perform.webp', 1100], ['79.webp', 'design/wutv-banner.webp'],
  ['87.webp', 'design/asb-love-like-a-viking.webp', 900], ['88.webp', 'design/asb-duo-day.webp', 900],
  ['89.png', 'design/asb-ice-cream-social.webp', 900],
  // Covers
  ['85.png', 'releaf/cover.webp'], ['86.jpg', 'stl/cover.webp'],
];

// about/vibe-coding.webp: 77.webp trimmed of white margins and padded (done once by hand).
// [source, output, crop box, output width]
const crops = [
  ['57.webp', 'about/portrait.webp', { left: 520, top: 420, width: 960, height: 915 }, 900],
  // JDel render, cropped to remove the generator watermark in the bottom-right corner
  ['58.webp', 'jdel/bottle.webp', { left: 0, top: 0, width: 1170, height: 710 }, 1280],
  ['59.webp', 'skate/original-nav.webp', { left: 0, top: 0, width: 1882, height: 194 }, 1600],
  ['32.webp', 'skate/final-hero.webp', { left: 0, top: 0, width: 614, height: 345 }, 614],
];

// Circular STL carousel slides, cut from the report's Exhibit 1 page.
const stlCrops = [
  ['p6X22.png', 'stl/slide-1.webp', { left: 20, top: 127, width: 677, height: 782 }],
  ['p6X22.png', 'stl/slide-2.webp', { left: 717, top: 127, width: 677, height: 782 }],
  ['p6X22.png', 'stl/slide-3.webp', { left: 20, top: 929, width: 677, height: 782 }],
  ['p6X22.png', 'stl/slide-4.webp', { left: 717, top: 929, width: 677, height: 782 }],
  ['p1X9.png', 'stl/logo.webp', { left: 90, top: 0, width: 164, height: 180 }],
];

// [source prefix, output name under public/media, max width, extra ffmpeg input args]
const videos = [
  ['c64067d7', 'lyft-ride-concept', 1280],
  ['e0b52866', 'lyft-explore-with-me', 540],
  ['7a4bc23b', 'skate-prototype', 1280],
  ['4a44f2b0', 'skandalaris-welcome', 720],
  ['3259c7df', 'skandalaris-ie-awards', 540],
  ['6d3cc3f6', 'wutv-tiny-desk', 540],
  ['f931ef92', 'asb-home-game', 540],
  ['00221e6a', 'asb-staff-breakfast', 540],
  ['1347a89a', 'releaf-booth', 720],
  ['ed8cb7db', 'jdel-palette', 720, ['-t', '11']],
];

const ensure = (p) => mkdirSync(dirname(p), { recursive: true });

async function run() {
  if (IMG_SRC) {
    for (const [src, out, max = 1600] of images) {
      const dest = join(OUT, 'images', out); ensure(dest);
      await sharp(join(IMG_SRC, src)).resize({ width: max, withoutEnlargement: true }).webp({ quality: 80 }).toFile(dest);
    }
    for (const [src, out, box, width] of crops) {
      const dest = join(OUT, 'images', out); ensure(dest);
      await sharp(join(IMG_SRC, src)).extract(box).resize({ width }).webp({ quality: 85 }).toFile(dest);
    }
  }
  if (STL_SRC) {
    for (const [src, out, box] of stlCrops) {
      const dest = join(OUT, 'images', out); ensure(dest);
      await sharp(join(STL_SRC, src)).extract(box).resize({ width: 800, withoutEnlargement: true }).webp({ quality: 80 }).toFile(dest);
    }
  }
  if (VID_SRC) {
    const files = readdirSync(VID_SRC);
    for (const [prefix, name, max, pre = []] of videos) {
      const src = files.find((f) => f.startsWith(prefix) && /\.(mp4|mov)$/i.test(f));
      if (!src) { console.warn('missing video', prefix); continue; }
      const mp4 = join(OUT, 'media', `${name}.mp4`);
      const poster = join(OUT, 'media', `${name}.jpg`);
      ensure(mp4);
      execFileSync(ffmpeg, ['-y', '-loglevel', 'error', ...pre, '-i', join(VID_SRC, src),
        '-vf', `scale='min(${max},iw)':-2`, '-c:v', 'libx264', '-preset', 'slow', '-crf', '28',
        '-pix_fmt', 'yuv420p', '-movflags', '+faststart', '-c:a', 'aac', '-b:a', '96k', mp4]);
      execFileSync(ffmpeg, ['-y', '-loglevel', 'error', '-ss', '1', '-i', mp4, '-frames:v', '1',
        '-vf', `scale='min(${max},iw)':-2`, '-q:v', '4', poster]);
    }
  }
}

run().then(writeDims).then(() => console.log('media done'));

// Record intrinsic sizes so <Img> can set width/height and avoid layout shift.
export async function writeDims() {
  const { writeFileSync } = await import('node:fs');
  const dims = {};
  const walk = (dir) => {
    for (const f of readdirSync(dir, { withFileTypes: true })) {
      const p = join(dir, f.name);
      if (f.isDirectory()) walk(p);
      else if (/\.(webp|jpg|png)$/.test(f.name)) dims['/' + p.slice(OUT.length)] = p;
    }
  };
  for (const d of ['images', 'media']) if (existsSync(join(OUT, d))) walk(join(OUT, d));
  const out = {};
  for (const [url, p] of Object.entries(dims)) {
    const m = await sharp(p).metadata();
    out[url] = [m.width, m.height];
  }
  writeFileSync(new URL('../src/data/dims.json', import.meta.url), JSON.stringify(out, null, 1));
}
