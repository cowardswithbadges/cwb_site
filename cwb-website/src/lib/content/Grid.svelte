<script>
    export let posts;
	import { base } from '$app/paths';
	import { goto } from '$app/navigation';
    import { svgComponentsMapper } from '$lib/svg/svgMapper.js';
</script>

<ul>
	{#each posts as post}
		<li on:click={() => {
			goto(base + post.path);
		}}>
			{#if typeof post.meta.svg !== 'undefined'}
				<span><svelte:component this={svgComponentsMapper[post.meta.svg]} /></span>
			{/if}
			<h3>
				<a href={base}{post.path}>
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
		cursor: pointer;
	}

	li span {
		justify-content: space-evenly;
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
		ul{
			justify-content: space-evenly;
		}

		li{
			max-width: 90vw;
			min-width: 85%;
		}
		
	}
</style>