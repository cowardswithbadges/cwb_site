import adapter from '@sveltejs/adapter-static'
import { mdsvex } from 'mdsvex'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),

		// Override http methods in the Todo forms
		methodOverride: {
			allowed: ['PATCH', 'DELETE']
		},
	},
	extensions: ['.svelte', '.md'],

	preprocess: [
		mdsvex({
			extensions: ['.md'],
			layout: {
				resources: '/src/routes/resources/_post.svelte'
			}
		})
	]
};

export default config;
