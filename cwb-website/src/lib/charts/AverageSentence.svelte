<script>
	import Line from 'svelte-chartjs/src/Line.svelte';

	let data = {
		labels: [
			'1999',
			'2000',
			'2001',
			'2002',
			'2003',
			'2004',
			'2005',
			'2006',
			'2007',
			'2008',
			'2009',
			'2010',
			'2011',
			'2012',
			'2013',
			'2014',
			'2015',
			'2016'
		],
		datasets: [
			{
				label: 'Black',
				data: [85, 87, 90, 80, 82, 84, 85, 87, 91, 87, 89, 81, 78, 79, 79, 78, 74, 71],
				backgroundColor: ['rgba(204, 144, 251, 0.4)'],
				borderWidth: 2,
				borderColor: ['rgba(204, 144, 251, 1)']
			},
			{
				label: 'White Male',
				data: [56, 52, 57, 42, 44, 46, 45, 56, 58, 56, 54, 53, 53, 55, 61, 61, 62, 64],
				backgroundColor: ['rgba(255, 195, 0, 0.4)'],
				borderWidth: 2,
				borderColor: ['rgba(255, 195, 0, 1)']
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
	<Line {data} {options} />
</div>

<style>
	.chart {
		max-width: 100vw;
		min-width: 50vw;
		margin: 0 auto;
	}
</style>
