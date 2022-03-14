<script context="module">
	import { base } from '$app/paths';
	//prefetch('/dishonored');
	//prefetchRoutes();
	export const load = async ({ fetch, url }) => {
		const posts = await fetch(`${base}/api/dishonor.json`);
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

<h1>the dishonored</h1>

<Grid posts={posts} />
