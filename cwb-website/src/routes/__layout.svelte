<script>

	import Footer from '$lib/footer/Footer.svelte';
	import Header from '$lib/header/Header.svelte';
	import Navigation from '$lib/Navigation.svelte';
	import '../app.css';
	export let navOpened = true;
	$: isNavOpen = navOpened;

	function toggleNavigation(){
		navOpened = !navOpened;
		console.log('toggle!!!')
	}

</script>


<Navigation toggleNavigation={toggleNavigation} navOpened={isNavOpen} />

<div class="col-2">
	<Header toggleNavigation={toggleNavigation} navOpened={isNavOpen}  />

	<main>
		<slot />
	</main>

	<Footer />
</div>
<style>
	/*@media (min-width: 480px) {
		footer {
			padding: 40px 0;
		}
	}*/
</style>