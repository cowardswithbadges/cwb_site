<script>
	import Bar from 'svelte-chartjs/src/Bar.svelte';

	let data = {
		labels: ['White', 'Hispanic', 'Black'],
		datasets: [
			{
				label: 'Milwaukee',
				data: [34, 0, 14],
				backgroundColor: ['rgba(178, 186, 187, 0.4)'],
				borderWidth: 2,
				borderColor: ['rgba(178, 186, 187, 1)']
			},
			{
				label: 'New York City',
				data: [31, 25, 15],
				backgroundColor: ['rgba(255, 195, 0, 0.4)'],
				borderWidth: 2,
				borderColor: ['rgba(255, 195, 0, 1)']
			},
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
		max-width: 90%;
		min-width: 50%;
		margin: 0 auto;
	}
</style>
