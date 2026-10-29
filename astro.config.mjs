// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Set SITE_URL to your production domain (e.g. https://adetobi.dev) in your
// host's environment settings. It powers canonical URLs, Open Graph URLs and
// the sitemap. Without it the site still builds, just without those.
const SITE_URL = process.env.SITE_URL;

export default defineConfig({
  site: SITE_URL,
  integrations: SITE_URL ? [sitemap()] : [],
  markdown: {
    shikiConfig: {
      // Light and dark code themes; global.css switches them with the site theme.
      themes: { light: 'github-light', dark: 'github-dark-dimmed' },
      wrap: false
    }
  }
});
