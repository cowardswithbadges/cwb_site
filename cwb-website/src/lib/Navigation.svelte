<script>
	import { page } from '$app/stores';
	export let navOpened = true;
	export let toggleNavigation;
</script>

{#if navOpened}
	<nav class="col-1">
		<ul>
			<div class="corner">
				<button on:click={toggleNavigation}>
					<ion-icon class="small-icon" name="close-circle-outline" />
				</button>
			</div>
			<li class:active={$page.url.pathname === '/'}>
				<ion-icon class="small-icon" name="home-outline" />
				<a sveltekit:prefetch href="/">Home</a>
			</li>
			<li class:active={$page.url.pathname === '/about'}>
				<ion-icon class="small-icon" name="help-circle-outline" />
				<a sveltekit:prefetch href="/about">About</a>
			</li>
			<li class:active={$page.url.pathname === '/todos'}>
				<ion-icon class="small-icon" name="ribbon-outline" />
				<a sveltekit:prefetch href="/todos">Your Rights</a>
			</li>
			<li class:active={$page.url.pathname === '/todos'}>
				<ion-icon class="small-icon" name="film-outline" />
				<a sveltekit:prefetch href="/todos">Videos</a>
			</li>
			<li class:active={$page.url.pathname === '/todos'}>
				<ion-icon class="small-icon" name="thumbs-down-outline" />
				<a sveltekit:prefetch href="/todos">The Dishonored</a>
			</li>
			<li class:active={$page.url.pathname === '/resources'}>
				<ion-icon class="small-icon" name="bar-chart-outline" />
				<a sveltekit:prefetch href="/resources">Resources</a>
			</li>
		</ul>
	</nav>
{:else}
	<nav class="col-1 nav-closed">
		<div class="corner">
			<button on:click={toggleNavigation}>
				<ion-icon class="small-icon" name="close-circle-outline" />
			</button>
		</div>

		<ul>
			<li class:active={$page.url.pathname === '/'}>
				<ion-icon class="small-icon" name="home-outline" />
				<a sveltekit:prefetch href="/">Home</a>
			</li>
			<li class:active={$page.url.pathname === '/about'}>
				<ion-icon class="small-icon" name="help-circle-outline" />
				<a sveltekit:prefetch href="/about">About</a>
			</li>
			<li class:active={$page.url.pathname === '/todos'}>
				<ion-icon class="small-icon" name="ribbon-outline" />
				<a sveltekit:prefetch href="/todos">Your Rights</a>
			</li>
			<li class:active={$page.url.pathname === '/todos'}>
				<ion-icon class="small-icon" name="film-outline" />
				<a sveltekit:prefetch href="/todos">Videos</a>
			</li>
			<li class:active={$page.url.pathname === '/todos'}>
				<ion-icon class="small-icon" name="thumbs-down-outline" />
				<a sveltekit:prefetch href="/todos">The Dishonored</a>
			</li>
			<li class:active={$page.url.pathname === '/todos'}>
				<ion-icon class="small-icon" name="bar-chart-outline" />
				<a sveltekit:prefetch href="/todos">Resources</a>
			</li>
		</ul>
	</nav>
{/if}

<style>
	nav {
		padding: 1em;
		background-color: var(--tertiary-color);
		animation: open-menu 0.3s forwards cubic-bezier(0.34, 1.56, 0.64, 1);
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

	nav .corner button {
		padding: 0.2rem;
		margin: 0;
	}

	nav .corner button .small-icon {
		color: var(--secondary-color);
	}

	nav.nav-closed {
		transform: translate(0, 0);
		position: absolute;
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

	/*  nav span {
	align-self: center;
	font-size: 1.5rem;
	letter-spacing: -0.02rem;
	font-weight: bolder;
	text-transform: capitalize;
}*/
</style>
