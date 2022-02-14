<script>
	import { page } from '$app/stores';
</script>

<nav class="col-1">
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
			<ion-icon class="small-icon" name="videocam-outline" />
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

<style>
	nav {
		padding: 1em;
		background-color: var(--tertiary-color);
	}

	nav ul {
		list-style-type: none;
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
		position: relative;
		top: 0.4rem;
		left: -0.4rem;
		color: var(--primary-color);
	}

	nav li .small-icon {
		font-size: 1.8rem;
		position: relative;
		top: 0.4rem;
		left: -0.4rem;
		color: var(--secondary-color);
	}

	/*  nav span {
	align-self: center;
	font-size: 1.5rem;
	letter-spacing: -0.02rem;
	font-weight: bolder;
	text-transform: capitalize;
}*/
</style>
