<script>
	import Bar from 'svelte-chartjs/src/Bar.svelte';

	let data = {
		labels: ['Constitutional', 'Unconstitutional', 'N'],
		datasets: [
			{
				label: 'Percent of Pat Down Search ',
				data: [54.4, 45.5, 44.0],
				backgroundColor: ['rgba(221, 47, 47, 0.4)'],
				borderWidth: 2,
				borderColor: ['rgba(255, 134, 159, 1)']
			},
			{
				label: 'Percent of Full Search',
				data: [80.3, 19.7, 71.0],
				backgroundColor: ['rgba(35, 146, 229, 0.4)'],
				borderWidth: 2,
				borderColor: ['rgba(118, 195, 253, 1)']
			}
		]
	};

	let options = {
		responsive: true,
		maintainAspectRatio: true,
		plugins: {
			legend: {
				labels: {
					color: 'rgb(78, 205, 196)',
					font: {
						size: 18
					}
				}
			}
		},
		scales: {
			x: {
				grid: {
					color: 'rgba(199, 244, 100, 0.2)'
				},
				ticks: {
					color: 'rgb(78, 205, 196)',
					font: {
						size: 18
					},
					barPercentage: 1
				}
			},
			y: {
				grid: {
					color: 'rgba(199, 244, 100, 0.2)'
				},
				ticks: {
					beginAtZero: true,
					color: 'rgb(78, 205, 196)',
					font: {
						size: 18
					}
				}
			}
		}
	};
</script>

<div class="chart">
	<Bar {data} {options} />
</div>

<style>
	.chart {
		max-width: 100vw;
		min-width: 50vw;
		margin: 0 auto;
	}
</style>
