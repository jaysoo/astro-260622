// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Nx Starlight Template',
			description: 'Production-ready documentation site powered by Astro Starlight and Nx.',
			social: [
				{
					icon: 'github',
					label: 'GitHub',
					href: 'https://github.com/nrwl/astro-starlight-template',
				},
			],
			sidebar: [
				{
					label: 'Guides',
					items: [
						{ label: 'Getting Started', slug: 'guides/getting-started' },
						{ label: 'Nx Features', slug: 'guides/nx-features' },
						{ label: 'Example', slug: 'guides/example' },
					],
				},
				{
					label: 'Reference',
					items: [{ autogenerate: { directory: 'reference' } }],
				},
			],
			editLink: {
				baseUrl: 'https://github.com/nrwl/astro-starlight-template/edit/main/apps/docs/',
			},
		}),
	],
});
