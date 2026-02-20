import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import react from '@astrojs/react';

export default defineConfig({
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ar'],
    routing: {
      prefixDefaultLocale: false,
    },
  },

  image: {
      domains: ["images.unsplash.com"],
    },

  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [react()],
});