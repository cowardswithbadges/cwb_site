<script context="module">
	import { base } from '$app/paths'
	export const load = async ({ params, fetch }) => {
		const currentCategory = params.category;
		const response = await fetch(`${base}/api/posts.json`);
		const posts = await response.json();

		const matchingPosts = posts.filter((post) => post.meta.categories.includes(currentCategory));

		return {
			props: {
				posts: matchingPosts
			}
		};
	};
</script>

<script>
	import Grid from '$lib/content/Grid.svelte';
	export let posts;
</script>

<h1>Categories</h1>
<Grid posts={posts} />
