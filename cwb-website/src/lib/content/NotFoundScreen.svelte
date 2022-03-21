<script>
	import { goto } from '$app/navigation';
	import PoliceFish from '$lib/svg/PoliceFish.svelte';
	import Grid from '$lib/content/Grid.svelte';
	export let resources;
    export let cowards;
</script>

<PoliceFish />
<h1>We couldn't find what you were looking for.</h1>
<h3>popular resources</h3>
<Grid posts={resources} />

<section>
	<button
		on:click={() => {
			goto(`/resources`);
		}}
	>
		<ion-icon class="icon" name="arrow-forward-circle-outline" />
		<span>See More resources</span>
	</button>
</section>

<hr />

<h3>cowards with badges</h3>
<Grid posts={cowards} />

<section>
	<button
		on:click={() => {
			goto(`/dishonored`);
		}}
	>
		<ion-icon class="icon" name="arrow-forward-circle-outline" />
		<span>See More Cowards</span>
	</button>
</section>



<style>
	h1,
	h3 {
		font-weight: 900;
		font-size: 2rem;
		color: var(--primary-color);
        text-align: center;
	}

	h3 {
		font-weight: 900;
		font-size: 2rem;
		text-align: center;
		color: var(--secondary-color);
		text-transform: uppercase;
        font-family: 'Questrial', 'Sans-Serif';
	}

	section {
		padding: 0rem;
		justify-content: center;
		display: flex;
	}
</style>
