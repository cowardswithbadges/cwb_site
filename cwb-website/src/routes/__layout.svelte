<script>
	import { page } from '$app/stores';
	import Footer from '$lib/footer/Footer.svelte';
	import Header from '$lib/header/Header.svelte';
	import Navigation from '$lib/Navigation.svelte';
	import '../app.css';
	export let navOpened = true;

	$: isNavOpen = navOpened;

	function toggleNavigation() {
		navOpened = !navOpened;
	}
</script>

<Navigation {toggleNavigation} navOpened={isNavOpen} />

<div class="col-2">
	<Header {toggleNavigation} navOpened={isNavOpen} />
	{#if $page.url.pathname === '/'}
		<main class="homepage">
			<slot />
		</main>
	{:else}
		<main>
			<slot />
		</main>
	{/if}

	<Footer />
</div>

<style>
	/*@media (min-width: 480px) {
		footer {
			padding: 40px 0;
		}
	}*/
</style>
