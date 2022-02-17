<script context="module">
	import { prefetch, prefetchRoutes } from '$app/navigation';
	prefetch('/resources');
	prefetchRoutes();
	export const load = async ({ fetch, url }) => {
		const posts = await fetch('/api/posts.json');
		const allPosts = await posts.json();

		return {
			props: {
				posts: allPosts
			}
		};
	};
</script>

<script>
	import { svgComponentsMapper } from '$lib/svg/svgMapper.js';
	export let posts;
</script>

<h1>resources</h1>

<ul>
	{#each posts as post}
		<li>
			{#if post.meta.svg}
				<span><svelte:component this={svgComponentsMapper[post.meta.svg]} /></span>
			{/if}
			<h3>
				<a href={post.path}>
					{post.meta.title}
				</a>
			</h3>
			<p class="publish-date">Published: {post.meta.date}</p>
		</li>
	{/each}
</ul>

<style>
	ul {
		list-style-type: none;
		display: flex;
		justify-content: space-evenly;
		flex-flow: row wrap;
		margin: 0;
		padding: 0;
	}

	li {
		padding: 1rem;
		min-width: 25%;
        max-width: 25%;
		background-color: var(--resource-background-color);
		border-radius: 10px;
		margin: 1rem;
	}

	li span {
		width: auto;
		justify-content: space-evenly;
		display: flex;
	}

	.publish-date {
		color: var(--primary-color);
		font-size: 1.1rem;
		padding: 0;
		margin: 0;
        text-align: center;
	}

	h3 {
		font-size: 1.6rem;
		text-shadow: 3px 1px 1px rgb(0 0 0 / 25%);
        text-transform: capitalize;
        text-align: center;
	}

	/* Medium screens */
	@media all and (max-width: 800px) {
		ul {
			/* When on medium sized screens, we center it by evenly distributing empty space around items */
			justify-content: flex-start;
		}
	}

	/* Small screens */
	@media all and (max-width: 500px) {
		ul {
			/* On small screens, we are no longer using row direction but column */
			flex-direction: column;
		}
	}
</style>
