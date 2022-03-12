<script>
	import Logo from '../Logo.svelte';
	import { goto } from '$app/navigation';

	async function getDiscordLink(e) {
		e.preventDefault();
		const response = await fetch('https://discord.com/api/guilds/951620741005197333/widget.json');
		const discord = await response.json();
		goto(discord.instant_invite, { keepfocus: true });
	}
</script>

<footer>
	<div class="footer-container">
		<div class="footer-main">
			<div class="brand">
				<div class="footer-logo footer-logo-animation">
					<Logo isFooter="true" />
				</div>
				<p class="legal">&copy; Copyright 2022 Cowards with Badges. All rights reserved.</p>
				<p class="legal">
					In memory of all civilians murdered by police, <a href="/say-their-names"
						>say their names</a
					> 🖤
				</p>
			</div>

			<div class="footer-routes">
				<div class="footer-category">
					<h6><ion-icon class="footer-heading-icon" name="chatbubbles-sharp" /> speak up</h6>
					<a href="/resources/all-amendments-from-constitution">the united states constitution</a>
					<a href="#" on:click={getDiscordLink}>discussions on our discord server</a>
					<a href="https://www.tiktok.com/@cowardswithbadges" target="_blank">tiktok</a>
					<a href="https://www.youtube.com/channel/UCtYS0uK53GyT17r2DdB6spw" target="_blank"
						>youtube</a
					>
					<a href="https://twitter.com/holy_acab" target="_blank">twitter</a>
					<!--<a href="https://www.linkedin.com/company/3ee-games" target="_blank">linkedin</a>-->
					<a href="https://www.facebook.com/cowards.with.badges/" target="_blank">facebook</a>
				</div>
				<div class="footer-category">
					<h6><ion-icon class="footer-heading-icon" name="trophy-outline" /> accountability</h6>
					<a href="/resources/defunding-police" aria-current="page"
						>what does defunding mean for police?</a
					>
					<a href="/resources/racism-in-policing" aria-current="page">racism in policing</a>
					<a href="/resources/officers-donot-have-to-know-law" aria-current="page"
						>officers not knowing the law</a
					>
					<a href="/resources/what-does-acab-mean" aria-current="page">what does ACAB mean?</a>
					<a href="/resources/what-does-thin-blue-line-mean" aria-current="page"
						>What does thin blue line mean?</a
					>
					<a href="/resources/want-to-stop-being-racist" aria-current="page"
						>want to stop being racist?</a
					>
					<!--<a href="/about" aria-current="page">support the LGBTQA+ community</a>
					
					<a href="/about" aria-current="page">want to stop being homo/transphobic?</a>-->
				</div>
				<div class="footer-category">
					<h6><ion-icon class="footer-heading-icon" name="library-outline" /> educate</h6>
					<a href="/about" aria-current="page">about our cause</a>
					<a href="/resources/categories/human-rights" aria-current="page">your rights</a>
					<a href="/dishonored" aria-current="page">Dishonored Cowards</a>
					<a href="/resources" aria-current="page">resources for everyone</a>
					<a href="/contact" aria-current="page">contact us</a>
				</div>
			</div>
		</div>
	</div>
</footer>

<style>
	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		background: var(--secondary-color);
	}

	footer a {
		font-weight: bolder;
	}

	footer h6 {
		font-family: 'Questrial', Sans-Serif;
		text-transform: uppercase;
		font-size: 1rem;
		margin: 1rem 0;
		color: var(--background);
	}

	footer .brand {
		display: flex;
		width: 40%;
		padding-right: 40px;
		-webkit-box-orient: vertical;
		-webkit-box-direction: normal;
		-webkit-flex-direction: column;
		flex-direction: column;
		-ms-flex-pack: justify;
		justify-content: space-between;
		flex: 0 0 auto;
		align-self: center;
	}

	footer a {
		line-height: 1.95;
		font-weight: 400;
		font-size: 0.9rem;
		font-family: 'Alegreya', Serif;
		text-transform: capitalize;
	}

	footer p {
		font-size: 0.9rem;
		margin: 10px auto;
		font-family: 'Alegreya', Serif;
		line-height: 1.1rem;
		color: var(--background);
		text-shadow: none;
	}

	footer .legal a {
		font-size: 0.9rem;
		margin: 10px auto;
		font-family: 'Alegreya', Serif;
		line-height: 1.1rem;
	}

	footer .legal {
		text-align: center;
	}
	footer .legal .heart-icon {
		vertical-align: middle;
		font-size: 1.7rem;
		fill: var(--accent-color);
	}

	.footer-container {
		position: relative;
		width: 89%;
		max-width: 1440px;
		margin-right: auto;
		margin-left: auto;
		padding: 30px 0;
	}

	.footer-heading-icon {
		font-size: 1.9rem;
		margin: 0px 5px -9px 0px;
		color: var(--background);
	}

	.footer-main {
		display: flex;
		justify-content: flex-start;
	}

	.footer-logo {
		margin: 0 auto;
		min-width: 80px;
	}

	.footer-routes {
		flex: 0 0 auto;
		display: flex;
		width: 60%;
	}

	.footer-category {
		flex: 1;
	}

	.footer-category a {
		display: block;
		color: var(--background);
	}

	@media all and (min-width: 100px) and (max-width: 966px) {
		.footer-routes {
			width: 100%;
			flex-flow: column nowrap;
			align-items: center;
			text-align: center;
		}

		.footer-main {
			flex-flow: column nowrap;
		}

		.brand {
			order: 1;
		}

		footer a {
			line-height: 1.95;
			font-weight: 400;
			font-size: 1.9rem;
		}

		footer h6 {
			font-size: 2.6rem;
		}

		footer p {
			font-size: 0.9rem;
		}

		footer .legal a {
			font-size: 0.9rem;
		}

		footer .legal .heart-icon {
			font-size: 1.7rem;
		}

		.footer-heading-icon {
			font-size: 2.9rem;
		}

		.footer-category {
			padding: 2rem 0;
		}
	}
</style>
