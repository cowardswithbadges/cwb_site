<script>
	import Bar from 'svelte-chartjs/src/Bar.svelte';

	let data = {
		labels: [
			'Absolutely Unconstitutional ',
			'Unconstitutional',
			'Likely Unconstitutional',
			'Probably Unconstitutional ',
			'Barely Unconstitutional ',
			'Barely Constitutional',
			'Probably Constitutional',
			'Likely Constitutional',
			'Constitutional',
			'Absolutely Constitutional '
		],
		datasets: [
			{
				label: 'Percentage',
				data: [0.9, 8.7, 12.2, 0.9, 7.0, 2.6, 12.2, 9.6, 20.9, 25.2],
				backgroundColor: [
					'rgba(221, 47, 47, 0.4)',
					'rgba(198, 42, 42, 0.4)',
					'rgba(180, 55, 55, 0.4)',
					'rgba(170, 44, 44, 0.4)',
					'rgba(150, 33, 33, 0.4)',
					'rgba(140, 29, 29, 0.4)',
					'rgba(130, 25, 25, 0.4)',
					'rgba(120, 25, 25, 0.4)',
					'rgba(110, 10, 10, 0.4)',
					'rgba(108, 9, 9, 0.4)'
				],
				borderWidth: 2,
				borderColor: ['rgba(255, 134, 159, 1)']
			},
			{
				label: 'N',
				data: [1, 10, 14, 1, 8, 3, 14, 11, 24, 29],
				backgroundColor: [
					'rgba(35, 146, 229, 0.4)',
					'rgba(35, 146, 210, 0.4)',
					'rgba(35, 146, 190, 0.4)',
					'rgba(35, 146, 180, 0.4)',
					'rgba(35, 146, 170, 0.4)',
					'rgba(35, 146, 160, 0.4)',
					'rgba(35, 146, 150, 0.4)',
					'rgba(35, 146, 140, 0.4)',
					'rgba(35, 146, 130, 0.4)',
					'rgba(35, 146, 120, 0.4)'
				],
				borderWidth: 2,
				borderColor: ['rgba(118, 195, 253, 1)']
			},
			{
				label: 'Rank',
				data: [10, 9, 8, 7, 6, 5, 4, 3, 2, 1],
				backgroundColor: [
					'rgba(243, 192, 36, 0.4)',
					'rgba(230, 192, 32, 0.4)',
					'rgba(220, 192, 32, 0.4)',
					'rgba(218, 192, 30, 0.4)',
					'rgba(218, 192, 25, 0.4)',
					'rgba(218, 192, 20, 0.4)',
					'rgba(218, 192, 15, 0.4)',
					'rgba(218, 192, 10, 0.4)',
					'rgba(218, 192, 5, 0.4)',
					'rgba(218, 192, 0, 0.4)'
				],
				borderWidth: 2,
				borderColor: ['rgba(255, 203, 48, 1)']
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
		max-width: 90%;
		min-width: 50%;
		margin: 0 auto;
	}

</style>
