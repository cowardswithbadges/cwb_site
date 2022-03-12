<script context="module">
	export const prerender = true;

	export const load = async ({ fetch, url }) => {
		const posts = await fetch('/cwb_production/api/posts.json');
		const topResources = await posts.json();

		const dishonored = await fetch('/cwb_production/api/dishonor.json');
		const topDishonored = await dishonored.json();

		return {
			props: {
				posts: topResources.slice(0, 3),
				dishonored: topDishonored.slice(0, 3)
			}
		};
	};
</script>

<script>
	import { goto } from '$app/navigation';
	import Grid from '$lib/content/Grid.svelte';
	import { svgComponentsMapper } from '$lib/svg/svgMapper.js';
	export let posts;
	export let dishonored;
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<div class="content">
	<div class="banner-content">
		<svelte:component this={svgComponentsMapper['PoliceCar2']} />
		<div class="banner-right">
			<h1 class="banner-header">Discover why the role of police needs change.</h1>

			<button
				on:click={() => {
					goto(`/about`);
				}}
			>
				<ion-icon class="icon" name="arrow-forward-circle-outline" />
				<span>Learn More</span>
			</button>
		</div>
	</div>
	<h2>the latest resources</h2>
	<Grid {posts} />

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

	<h2>the newest cowards</h2>
	<Grid posts={dishonored} />

	<section>
		<button
			on:click={() => {
				goto(`/dishonored`);
			}}
		>
			<ion-icon class="icon" name="arrow-forward-circle-outline" />
			<span>See More cowards</span>
		</button>
	</section>
</div>

<style>
	.banner-content {
		width: 100%;
		height: auto;
		background: var(--banner-background) top center no-repeat,
			linear-gradient(
				0deg,
				var(--background) 10%,
				var(--primary-color) 35%,
				var(--secondary-color) 81.35%
			);
		display: flex;
		flex: 2;
		flex-direction: row;
		flex-wrap: nowrap;
		justify-content: space-evenly;
		align-content: space-evenly;
	}

	.banner-right {
		width: 60%;
		justify-content: flex-end;
		align-self: flex-end;
		flex: 0 0 auto;
	}

	h1.banner-header {
		color: #363c44;
		font-size: 3rem;
		line-height: 52px;
		letter-spacing: 0px;
		text-shadow: 2.1px 0.9px 0.9px rgb(255 255 255 / 45%);
		max-width: 30ch;
	}

	h2 {
		font-weight: 900;
		font-size: 2rem;
		text-align: center;
		color: var(--secondary-color);
		font-family: 'Questrial', Sans-Serif;
		line-height: 41px;
		text-transform: uppercase;
	}

	section {
		padding: 0rem;
		justify-content: center;
		display: flex;
	}

	/* Medium screens */
	@media all and (max-width: 1300px) {
		h1.banner-header {
			font-size: 2.6rem;
			line-height: 2.4rem;
			max-width: 25ch;
		}
	}

	/* Medium screens */
	@media all and (max-width: 1114px) {
		h1.banner-header {
			font-size: 2.3rem;
		}
	}

	@media all and (min-width: 901px) and (max-width: 1000px) {
		h1.banner-header {
			font-size: 2.5rem;
			line-height: 2.5rem;
		}
	}

	@media all and (min-width: 801px) and (max-width: 900px) {
		h1.banner-header {
			font-size: 1.9rem;
			line-height: 1.8rem;

			margin: 2rem 0 0 0;
		}
	}

	@media all and (max-width: 500px) {
		h1.banner-header {
			font-size: 1.6rem;
			line-height: 1.6rem;
			margin: 2rem 0 0 0;
		}
	}
</style>
