import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://joselyngarcia.com',
  trailingSlash: 'ignore',
  build: { format: 'directory' },
});
