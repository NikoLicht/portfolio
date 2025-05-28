import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
import rss from '@astrojs/rss';

// https://astro.build/config
export default defineConfig({
  site: 'https://NikoLicht.github.io',
  base: '/portfolio',
  integrations: [react(), rss()]
});