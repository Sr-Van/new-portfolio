import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://portfolio-vandev.digital',
  integrations: [tailwind()],
  output: 'static',
  server: {
    host: true,
  },
  vite: {
    server: {
      allowedHosts: ['.trycloudflare.com'],
    }
  }
});
