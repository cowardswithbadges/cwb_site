<script context="module">
	export const prerender = true;

	export const load = async ({ fetch, url }) => {
		const posts = await fetch('/api/posts.json');
		const topResources = await posts.json();

		return {
			props: {
				posts: topResources.slice(0, 3)
			}
		};
	};
</script>

<script>
	//import Counter from '$lib/Counter.svelte';
	import Grid from '$lib/content/Grid.svelte';
	import { svgComponentsMapper } from '$lib/svg/svgMapper.js';
	export let posts;
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<div class="content">
	<div class="banner-content">
		<svelte:component this={svgComponentsMapper['PoliceCar2']} />
		<div class="banner-right">
			<h1 class="banner-header">Discover why the role of police needs change.</h1>

			<button>
				<ion-icon class="icon" name="arrow-forward-circle-outline" />
				<span>Learn More</span>
			</button>
		</div>
	</div>
	<h2>the latest resources</h2>
	<Grid posts={posts} />
	
	<article>
		<button>
			<ion-icon class="icon" name="arrow-forward-circle-outline" />
			<span>Learn More</span>
		</button>
		<h1>what defuning police means.</h1>
		<p>
			Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of
			classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a
			Latin professor at <a href="/">Hampden-Sydney</a> College in Virginia, looked up one of the more
			obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the
			word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections
			1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero,
			written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance.
			The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
		</p>

		<p>
			There are many variations of passages of Lorem Ipsum available, but the majority have suffered
			alteration in some form, by injected humour, or randomised words which don't look even
			slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure
			there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators
			on the Internet tend to repeat predefined chunks as necessary, making this the first true
			generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a
			handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The
			generated Lorem Ipsum is therefore always free from repetition, injected humour, or
			non-characteristic words etc.
		</p>

		<p>
			Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of
			classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a
			Latin professor at <a href="/">Hampden-Sydney</a> College in Virginia, looked up one of the more
			obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the
			word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections
			1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero,
			written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance.
			The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
		</p>

		<p>
			There are many variations of passages of Lorem Ipsum available, but the majority have suffered
			alteration in some form, by injected humour, or randomised words which don't look even
			slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure
			there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators
			on the Internet tend to repeat predefined chunks as necessary, making this the first true
			generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a
			handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The
			generated Lorem Ipsum is therefore always free from repetition, injected humour, or
			non-characteristic words etc.
		</p>

		<button>
			<ion-icon class="icon" name="arrow-forward-circle-outline" />
			<span>Learn More</span>
		</button>
	</article>
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
		max-width: 45vw;
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

</style>
