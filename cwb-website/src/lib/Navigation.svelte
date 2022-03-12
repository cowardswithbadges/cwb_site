<script>
	import { page } from '$app/stores';
	import { base } from '$app/paths';
	import MediaQuery from '$lib/content/MediaQuery.svelte';
	export let navOpened = true;
	export let toggleNavigation;
	
</script>

{#if navOpened}
	<nav class="col-1 nav-open">
		<ul>
			<div class="corner">
				<button on:click={toggleNavigation}>
					<ion-icon class="small-icon" name="close-circle-outline" />
				</button>
			</div>
			<MediaQuery query="(max-width: 800px)" let:matches>
				<li class:active={$page.url.pathname === '/'}>
					<ion-icon class="small-icon" name="home-outline" />
					{#if matches}
						<a on:click={toggleNavigation} sveltekit:prefetch href="{base}/">Home</a>
					{:else}
						<a sveltekit:prefetch href="{base}/">Home</a>
					{/if}
				</li>
				<li class:active={$page.url.pathname === '/about'}>
					<ion-icon class="small-icon" name="help-circle-outline" />

					{#if matches}
						<a on:click={toggleNavigation} sveltekit:prefetch href="{base}/about">About</a>
					{:else}
						<a sveltekit:prefetch href="{base}/about">About</a>
					{/if}
				</li>
				<li class:active={$page.url.pathname === '/resources/categories/human-rights'}>
					<ion-icon class="small-icon" name="ribbon-outline" />

					{#if matches}
						<a
							on:click={toggleNavigation}
							sveltekit:prefetch
							href="{base}/resources/categories/human-rights">Your Rights</a
						>
					{:else}
						<a sveltekit:prefetch href="{base}/resources/categories/human-rights">Your Rights</a>
					{/if}
				</li>
				<!--<li class:active={$page.url.pathname === '/todos'}>
					<ion-icon class="small-icon" name="film-outline" />
					<a sveltekit:prefetch href="{base}/todos">Videos</a>
				</li> -->
				<li class:active={$page.url.pathname === '/dishonored'}>
					<ion-icon class="small-icon" name="thumbs-down-outline" />

					{#if matches}
						<a on:click={toggleNavigation} sveltekit:prefetch href="{base}/dishonored">The Dishonored</a>
					{:else}
						<a sveltekit:prefetch href="{base}/dishonored/">The Dishonored</a>
					{/if}
				</li>
				<li class:active={$page.url.pathname === '/resources'}>
					<ion-icon class="small-icon" name="bar-chart-outline" />
					{#if matches}
						<a on:click={toggleNavigation} sveltekit:prefetch href="{base}/resources">Resources</a>
					{:else}
						<a sveltekit:prefetch href="{base}/resources/">Resources</a>
					{/if}
				</li>
			</MediaQuery>
		</ul>
	</nav>
{:else}
	<nav class="col-1 nav-closed">
		<div class="corner">
			<button on:click={toggleNavigation}>
				<ion-icon class="small-icon" name="close-circle-outline" />
			</button>
		</div>
	</nav>
{/if}

<style>
	nav {
		padding: 1em;
		background-color: var(--tertiary-color);
		animation: open-menu 0.3s forwards cubic-bezier(0.34, 1.56, 0.64, 1);
		z-index: 3;
	}

	@keyframes open-menu {
		0% {
			transform: translate(-416px, 0px);
			position: absolute;
		}

		100% {
			transform: translate(0, 0);
		}
	}

	nav ul {
		list-style-type: none;
		position: sticky;
		top: 3ch;
	}

	nav li {
		padding: 1rem 0;
		font-family: 'Alegreya', Serif;
		font-size: 1.7rem;
	}

	nav li a {
		color: var(--secondary-color);
		text-decoration: none;
	}

	nav li.active a {
		color: var(--primary-color);
		text-decoration: underline;
	}

	nav li a:hover {
		text-decoration: underline;
	}

	nav li.active .small-icon {
		font-size: 1.8rem;
		color: var(--primary-color);
		margin: -5px 5px;
	}

	nav li .small-icon {
		font-size: 1.8rem;
		color: var(--secondary-color);
		margin: -5px 5px;
	}

	nav .corner {
		display: flex;
		justify-content: flex-end;
		margin-top: 0.9rem;
	}

	nav.nav-open .corner button {
		padding: 0.2rem;
		margin: 0;
		top: 3ch;
	}

	nav .corner button .small-icon {
		color: var(--secondary-color);
	}

	nav.nav-closed {
		transform: translate(0, 0);
		width: 20%;
		height: 100%;
		animation: close-menu 0.5s forwards cubic-bezier(0.34, 1.56, 0.64, 1);
	}

	@keyframes close-menu {
		0% {
			transform: translate(0, 0);
			width: 20%;
			height: 100%;
		}

		100% {
			transform: translate(-416px, 0px);
			position: absolute;
		}
	}

	/* Medium screens */
	@media all and (max-width: 800px) {
		nav.nav-open {
			justify-content: flex-start;
			flex-direction: column;
			flex: 0 0 auto;
			width: 100vw;
			max-width: calc(94vw * (9 / 9));
		}
	}
</style>
