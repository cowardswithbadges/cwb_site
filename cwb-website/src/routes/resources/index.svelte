<script context="module">
	import { base } from '$app/paths'
	export const load = async ({ fetch, url }) => {
		const posts = await fetch(`${base}/api/posts.json`);
		const allPosts = await posts.json();

		return {
			props: {
				posts: allPosts
			}
		};
	};
</script>

<script>
	export let posts;
	import Grid from '$lib/content/Grid.svelte';
</script>

<h1>resources</h1>

<Grid posts={posts} />
