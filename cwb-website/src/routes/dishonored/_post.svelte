<script>
	import { base } from '$app/paths';
	export let title;
	export let date;
	export let youtubeId = undefined;
	export let categories;

	function slugToTitle(slug) {
		var words = slug.split('-');

		for (var i = 0; i < words.length; i++) {
			var word = words[i];
			words[i] = word.charAt(0).toUpperCase() + word.slice(1);
		}

		return words.join(' ');
	}
</script>

<svelte:head>
	<title>Resources - {title}</title>
	<meta property="og:title" content={title} />
</svelte:head>

<article class="post-container">
	<h1>{title}</h1>
	<p class="publish-date">Published: {date}</p>

	{#if categories.length}
		<aside>
			<h2>Posted in:</h2>
			<ul>
				{#each categories as category}
					<li>
						<a sveltekit:prefetch href="{base}/dishonored/categories/{category}">
							{slugToTitle(category)}
						</a>
					</li>
				{/each}
			</ul>
		</aside>
	{/if}

	{#if typeof youtubeId !== 'undefined'}
		<div class="video-container">
			<iframe
				title="Video Player"
				id="ytplayer"
				type="text/html"
				width="100%"
				height="600"
				src="https://www.youtube.com/embed/{youtubeId}"
				frameborder="0"
			/>
		</div>
	{/if}

	<slot />
</article>

<style>
	
	.video-container {
		position: relative;
		width: 100%;
		padding-bottom: 56.25%;
		margin: 1em auto;
	}

	iframe {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		border: 0;
	}

	h2 {
		font-size: 1rem;
		display: flex;
		flex-direction: column;
	}

	.post-container .publish-date {
		color: var(--primary-color);
		font-size: 1.6rem;
		padding: 0;
		margin: 0;
	}

	.post-container aside {
		display: inline-flex;
		justify-content: flex-start;
		margin: 0.7rem 0;
		padding: 0;
		flex: 1;
		flex-flow: row wrap;
		width: 100%;
	}

	.post-container ul {
		list-style-type: none;
		margin: auto;
		padding: 0;
		flex: 2;
		flex-direction: column;
	}

	.post-container li {
		padding: 0px 16px;
		display: inline-flex;
	}

	
</style>
