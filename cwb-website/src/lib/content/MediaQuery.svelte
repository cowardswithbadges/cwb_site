<script>
	import { onMount } from 'svelte';
	export let query;

	let mql;
	let mqlListener;
	let wasMounted = false;
	let matches = false;
	$: innerWidth = 0;

	onMount(() => {
		wasMounted = true;
		return () => {
			removeActiveListener();
		};
	});

	$: {
		if (wasMounted) {
			removeActiveListener();
			addNewListener(query);
		}
	}

	function addNewListener(query) {
		mql = window.matchMedia(query);

		mqlListener = (v) => (matches = v.matches);

		try {
			// Chrome & Firefox
			mql.addEventListener('change', (e) => {
				mqlListener;
			});
		} catch (e1) {
			try {
				// Safari
				mql.addListener((e) => {
					mqlListener;
				});
			} catch (e2) {
				console.error(e2);
			}
		}

		matches = mql.matches;
	}

	function removeActiveListener() {
		if (mql && mqlListener) {
			mql.removeListener(mqlListener);
		}
	}
</script>

<svelte:window on:resize={addNewListener(query)} bind:innerWidth />

<slot {matches} />
