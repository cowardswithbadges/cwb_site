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
		height: 46px;
		margin: -1px 0 0 -15px;
		position: fixed;
		top: 1rem;
		left: 2rem;
		z-index: 2;
		width: 65px;
	}

	header nav button ion-icon {
		margin-top: -10px;
    	margin-left: 4px;
		font-size: 3rem;
	}

	@media all and (max-width: 800px){

	}
</style>
