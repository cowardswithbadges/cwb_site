<script context="module">
	export async function load({ error, status }) {
		return {
			props: {
				message: error.message,
				status
			}
		};
	}
</script>

<script>
	import ErrorScreen from '../lib/content/ErrorScreen.svelte';
	import NotFoundScreen from '../lib/content/NotFoundScreen.svelte';

	export let message;
	export let status;

	let resources = [
		{
			meta: {
				title: 'All Amendments to the United States Constitution',
				date: '2022-02-28',
				svg: 'Book'
			},
			path: '/resources/all-amendments-from-constitution'
		},

		{
			meta: {
				title: 'want to stop being racist?',
				date: '2022-03-05',
				svg: 'StopSign'
			},
			path: '/resources/want-to-stop-being-racist'
		},
		{
			meta: {
				title: 'racism in policing',
				date: '2022-03-01',
				svg: 'Badge'
			},

			path: '/resources/racism-in-policing'
		}
	];

	let cowards = [
		{
			meta: {
				title: 'Joseph Scuotto',
				date: '2022-03-01',
				svg: 'HotHead'
			},
			path: '/dishonored/joseph-scuotto'
		},

		{
			meta: {
				title: 'christopher pullease',
				date: '2022-02-28',
				svg: 'PoliceMaleLightVest'
			},
			path: '/dishonored/christopher-pullease'
		},
		{
			meta: {
				title: 'derek chauvin',
				date: '2022-02-12',
				svg: 'PoliceHat'
			},

			path: '/dishonored/derek-chavin'
		}
	];
</script>

{#if status == 404}
	<!-- Used '==' instead of '===' to match string/number status code (just to be sure) -->
	<NotFoundScreen {message} {resources} {cowards} />
{:else}
	<ErrorScreen {message} {resources} {cowards}/>
{/if}
