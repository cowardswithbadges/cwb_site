<script context="module">
	import { browser, dev } from '$app/env';

	// we don't need any JS on this page, though we'll load
	// it in dev so that we get hot module replacement...
	export const hydrate = dev;

	// ...but if the client-side router is already loaded
	// (i.e. we came here from elsewhere in the app), use it
	export const router = browser;

	// since there's no dynamic data here, we can prerender
	// it so that it gets served as a static asset in prod
	export const prerender = true;
</script>

<svelte:head>
	<title>Contact Us</title>
</svelte:head>

<div class="content">
	<h1>contact us</h1>

	<p>
		The best way to contact the staff at Cowards with Badges is through our Discord server or
		through our social media platforms.
	</p>

	<iframe
		src="https://discord.com/widget?id=951620741005197333&theme=dark"
        title="Cowards with Badges Discord Server"
		width="100%"
		height="500"
		allowtransparency="true"
		frameborder="0"
		sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
	/>

	<h4 id="social-media">
		<a aria-hidden="true" tabindex="-1" href="#social-media" />
		<span class="icon icon-link" />social media platforms
	</h4>
	<nav class="social-media-contacts">
		<a href="https://www.tiktok.com/@cowardswithbadges" target="_blank">tiktok</a>
		<a href="https://www.youtube.com/channel/UCtYS0uK53GyT17r2DdB6spw" target="_blank">youtube</a>
		<a href="https://twitter.com/holy_acab" target="_blank">twitter</a>
		<!--<a href="https://www.linkedin.com/company/3ee-games" target="_blank">linkedin</a>-->
		<a href="https://www.facebook.com/cowards.with.badges/" target="_blank">facebook</a>
	</nav>
</div>

<style>
    .social-media-contacts{
        display: inline-flex;
        
    }
    .social-media-contacts a{
        margin: 0 1rem;
        padding: 0 1rem;
    }
</style>
