import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
import mdx from '@astrojs/mdx';
import expressiveCode from 'astro-expressive-code';
import remarkMermaid from 'remark-mermaidjs';


// https://astro.build/config
export default defineConfig({
  site: 'https://NikoLicht.github.io',
  markdown: {
    remarkPlugins: [remarkMermaid],
  },
  base: '/portfolio',
  integrations: [react(), expressiveCode(), mdx()]
});
