<script>
	import Footer from '$lib/footer/Footer.svelte';
	import Header from '$lib/header/Header.svelte';
	import Navigation from '$lib/Navigation.svelte';
	import '../app.css';

</script>

<Navigation />

<div class="col-2">
	<Header />

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
