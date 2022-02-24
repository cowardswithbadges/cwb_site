<script>
	import Logo from '../Logo.svelte';
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
					In memory of all civilians murdered by police, <a href="about">say their names</a> 🖤
				</p>
			</div>

			<div class="footer-routes">
				<div class="footer-category">
					<h6><ion-icon class="footer-heading-icon" name="chatbubbles-sharp" /> speak up</h6>
					<a href="https://www.facebook.com/3eecom" target="_blank">the united states constitution</a>
					<a href="https://www.facebook.com/3eecom" target="_blank">discussions on our discord server</a>
					<a href="https://www.youtube.com/channel/UCv-Cy54zRQgGHe5kiqpfOGA" target="_blank">tik tok</a>
					<a href="https://www.youtube.com/channel/UCv-Cy54zRQgGHe5kiqpfOGA" target="_blank">snapchat</a>
					<a href="https://www.youtube.com/channel/UCv-Cy54zRQgGHe5kiqpfOGA" target="_blank">youtube</a>
					<a href="https://twitter.com/holy_acab" target="_blank">twitter</a>
					<a href="https://www.linkedin.com/company/3ee-games" target="_blank">linkedin</a>
					<a href="https://www.facebook.com/3eecom" target="_blank">facebook</a>
				</div>
				<div class="footer-category">
					<h6><ion-icon class="footer-heading-icon" name="trophy-outline" /> accountability</h6>
					<a href="/account/login" aria-current="page">what does defunding mean for police?</a>
					<a href="/account/create" aria-current="page">racism in policing</a>
					<a href="/games" aria-current="page">officers not knowing the law</a>
					<a href="/blog" aria-current="page">what does ACAB mean?</a>
					<a href="/about" aria-current="page">What does thin blue line mean?</a>
					<a href="/about" aria-current="page">support the LGBTQA+ community</a>
					<a href="/about" aria-current="page">want to stop being racist?</a>
					<a href="/about" aria-current="page">want to stop being homo/transphobic?</a>
				</div>
				<div class="footer-category">
					<h6><ion-icon class="footer-heading-icon" name="library-outline" /> educate</h6>
					<a href="/about" aria-current="page">about our cause</a>
					<a href="/games" aria-current="page">your rights</a>
					<a href="/blog" aria-current="page">resources for everyone</a>
					<a href="/about" aria-current="page">contact us</a>
					
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
		line-height: 0;
		color: var(--background);
		
	}

	footer .legal a {
		font-size: 0.9rem;
		margin: 10px auto;
		font-family: 'Alegreya', Serif;
		line-height: 0;
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

	.footer-category a{
		display: block;
		color: var(--background);
	}

	@-webkit-keyframes colorChangeLogo {
		0% {
			fill: #3898ec;
		}

		50% {
			fill: var(--accent-color);
		}

		100% {
			fill: #fff;
		}
	}

	@keyframes colorChangeLogo {
		0% {
			fill: #3898ec;
		}

		50% {
			fill: var(--accent-color);
		}

		100% {
			fill: #fff;
		}
	}

	@-webkit-keyframes colorChangeText {
		0% {
			fill: #3898ec;
		}

		50% {
			fill: var(--accent-color);
		}

		100% {
			fill: #fff;
		}
	}

	@keyframes colorChangeText {
		0% {
			fill: #3898ec;
		}

		50% {
			fill: var(--accent-color);
		}

		100% {
			fill: #fff;
		}
	}

	@media (min-width: 480px) {
		footer {
			padding: 0;
		}
	}
</style>
