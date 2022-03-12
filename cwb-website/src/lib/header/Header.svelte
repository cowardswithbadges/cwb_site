<script>
	import Logo from '../Logo.svelte';
	export let navOpened = true;
	export let toggleNavigation;
</script>

<header>
	{#if !navOpened}
		<nav>
			<button on:click={toggleNavigation}>
				<ion-icon class="small-icon" name="reorder-three-outline" />
			</button>
		</nav>
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

	header nav button {
		height: 4vh;
		margin: -1px 0 0 5px;
		position: fixed;
		top: 1rem;
		left: 2rem;
		z-index: 2;
	}

	header nav button ion-icon {
		margin-top: -5px;
		margin-left: 4px;
	}
</style>
