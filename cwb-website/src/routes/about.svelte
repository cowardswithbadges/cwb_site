<script context="module">
	import { base } from '$app/paths';
	import { browser, dev } from '$app/env';

	// we don't need any JS on this page, though we'll load
	// it in dev so that we get hot module replacement...
	export const hydrate = dev;

	// ...but if the client-side router is already loaded
	// (i.e. we came here from elsewhere in the app), use it
	export const router = browser;

	// since there's no dynamic data here, we can prerender
	// it so that it gets served as a static asset in prod
	export const prerender = true;
</script>

<svelte:head>
	<title>About</title>
</svelte:head>

<div class="content">
	<h1>about our cause</h1>

	<p>
		Our vision is to ensure a society where law enforcement no longer serves a racist system that
		bases itself on lies, discrimination, and has a finanical agenda. We support divesting funds
		from police departments and reallocating to non-policing forms of mental health care, community
		support, education, employment, and other community resources.
	</p>
	
	<hr />
	<h4 id="the-system-is-corrupt">
		<a aria-hidden="true" tabindex="-1" href="#the-system-is-corrupt">
		<span class="icon icon-link" /></a>the system is corrupt
	</h4>

	<p>
		The current judicial process in America is designed for individuals that have been arrested of a
		crime, either innocent or guilty - to fail. This system's focal point is to generate money for
		government. The victims of this system lose their children, jobs, homes, finanical independence,
		and their lives.
	</p>

	<p>
		While there are many reasons for an individual to break a law, the jail and prison systems offer
		no education, training, or support to help a person turn their live around. The criminal courts
		and probation services force individuals to pay an unfair amount of fees ranging from court
		costs, restitution, child support, probation, and many other avenues that would be considered
		extortion. 
	</p>

	<p>If these fees are not paid on time, often the individuals will lose their driver's
		license. Over time this leads to unemployment, as criminal backgrounds drastically reduces
		employment opportunities. By design, all these facets causes individuals caught in this sytem to
		commit more crimes and continue the cycle of government making money off of them.</p>

	<h4 id="police-officers-are-under-trained">
		<a aria-hidden="true" tabindex="-1" href="#police-officers-are-under-trained">
		<span class="icon icon-link" /></a>Police Officers are under-trained & over-armed
	</h4>

	<p>
		Police Officers have demonstrated time and time again that they are under-trained and
		over-armed. These officers <a href="{base}/resources/officers-donot-have-to-know-law">do not know the laws</a> they are enforcing. <a href="{base}/resources/defunding-police">
		Deallocating funds that militarize law enforcement</a> need to be put to use into a fund that supports an individual's
		education, employment, mental health, and family support. Police Officers can often be observed
		on a daily basis looking for petty crimes, for example: a broken tail light, jay-walking,
		running a stop sign, disorderly conduct, victimless crimes such as a person in possession of
		marijuana. Law enforcement officers use these crimes as a way to look or fish for more
		infractions. Police Officers lie, make up laws, and <a href="{base}/resources/categories/human-rights">violate our rights</a> every day.
	</p>

	<p>
		As a society, we've been trained to believe that laws against petty crimes is for public saftey,
		however that is far from the truth. The term known as "broken windows policing", meaning
		targeting low-level offenses, defunding those areas of police work and allocating those funds to
		another agency that provides replacement vehicle lights, anger management courses, mental health
		evaluations and medications, and training on changing habits would stop the financial incentive
		for policing and government. Society would be encouraged to use those resources instead of law
		enforcement using overcriminalization, violating citizen's rights and excessive use of force.
	</p>

	<p>Society would be encouraged to use those resources instead of law
		enforcement using overcriminalization, violating our rights, excessive use of force, and killing
		people.</p>

	<h4 id="providing-education">
		<a aria-hidden="true" tabindex="-1" href="#providing-education">
		<span class="icon icon-link" /></a>providing education and exposing corruption
	</h4>

	<p>
		Corrupt Police Officers, Judges, Attorneys, Child Protective Agents, courts, and other
		government officials such as commissioners and mayors, will use their badge and authority to
		commit crimes but cannot be held accountable due to qualified immunity. Their crimes are often
		extortion, theft, planting/destorying evidence, civil rights violations, racism, kidnapping,
		rape, sexual assault on children, human trafficking, and murder. They are <a href="{base}/">Cowards with Badges</a
		>. We will expose, educate, and document these cowards and break their immunity safe
		haven.
	</p>
</div>
