import adapter from '@sveltejs/adapter-static';
import { mdsvex } from 'mdsvex';
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
const dev = process.env.NODE_ENV === 'development';

/** @type {import('@sveltejs/kit').Config} */

const config = {
	kit: {
		adapter: adapter({
			// default options are shown
			pages: 'build',
			assets: 'build',
			fallback: null,
			precompress: false
		}),
		paths: {
			base: dev ? '' : '',
		},
		
		appDir: 'internal',
		trailingSlash: 'never',
	},
	extensions: ['.svelte', '.md'],

	preprocess: [
		mdsvex({
			extensions: ['.md'],
			layout: {
				resources: '/src/routes/resources/_post.svelte',
				dishonored: '/src/routes/dishonored/_post.svelte'
			},
			rehypePlugins: [
				rehypeSlug,
				rehypeAutolinkHeadings,
			]
		})
	]
};

export default config;
