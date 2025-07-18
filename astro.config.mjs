// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
const isProd = process.env.NODE_ENV === 'production';
export default defineConfig({
  site: 'https://axensz.github.io',
  base: isProd ? '/autocoop-website' : '/',
  vite: {
    plugins: [tailwindcss()]
  }
});