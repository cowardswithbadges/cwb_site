<script>
	export let title;
	export let date;
	export let youtubeId;
</script>

<svelte:head>
	<title>Resources - {title}</title>
	<meta property="og:title" content={title} />
</svelte:head>

<div class="post-container">
	<h1>{title}</h1>
	<p class="publish-date">Published: {date}</p>
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
</div>

<style>
	.post-container .publish-date {
		color: var(--primary-color);
		font-size: 1.6rem;
	}
</style>
