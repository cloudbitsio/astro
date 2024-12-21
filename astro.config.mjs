// @ts-check
import { defineConfig, envField } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://example.com',
	integrations: [mdx(), sitemap()],
	env: {
		schema: {
			PUBLIC_COLOR: envField.string({ context: "client", access: "public", optional: false }),
		}
	},
	vite: {
		build: {
			exclude: ['stack/*']
		}
	}
});
