<script>
	import Logo from '../Logo.svelte';
	export let navOpened = true;
    export let toggleNavigation;
</script>

<header>
	{#if !navOpened}
	<button on:click={toggleNavigation}>
		<ion-icon class="small-icon" name="reorder-three-outline" />
	</button>
	{/if}

	<Logo />
</header>

<style>
	header {
		background: var(--primary-color);
		height: 10vh;
		padding: 1em;
		display: flex;
		justify-content: flex-start;
	}

	header button {
		display: flex;
		height: 4vh;
		margin: -1px 0 0 5px;
	}

	header button ion-icon {
		margin-top: -3px;
		margin-left: 3px;
	}
</style>
