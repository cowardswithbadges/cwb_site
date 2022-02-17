<script>
	export let title;
	export let date;
	export let youtubeId;
	export let categories;
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
						<a href="/resources/categories/{category}">
							{category}
						</a>
					</li>
				{/each}
			</ul>
		</aside>
	{/if}

	{#if typeof youtubeId !== 'undefined'}
		<iframe
			id="ytplayer"
			type="text/html"
			width="100%"
			height="600"
			src="https://www.youtube.com/embed/{youtubeId}"
			frameborder="0"
		/>
	{/if}

	<slot />
</article>

<style>
	.post-container .publish-date {
		color: var(--primary-color);
		font-size: 1.6rem;
		padding: 0;
		margin: 0;
	}

	.post-container aside {
		display: inline-flex;

		justify-content: flex-start;
		margin: 0;
		padding: 0;
		flex: 1;
		flex-flow: row wrap;
		width: 100%;
	}

	.post-container ul {
		display: inline-flex;
		list-style-type: none;
		margin: auto;
		padding: 0;
		flex: 1 0 auto;
	}

	.post-container li {
		padding: 0px 16px;
	}
</style>
