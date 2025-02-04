import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [tailwind()],
  title: 'Get Archive',
  description: 'Films. Music. Books. Podcasts '
});