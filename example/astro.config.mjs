import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import windi from 'astro-windi';

// https://astro.build/config
export default defineConfig({
	integrations: [mdx(), windi()],
});
