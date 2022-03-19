<script>
	import Doughnut from 'svelte-chartjs/src/Doughnut.svelte';

	let data = {
		labels: [
			'Unfounded Radio Calls',
			'Investigate Premises',
			'Derelict Vehicles',
			'False Burglary Alarms',
			'Information Requests',
			'False Fire Alarms',
			'City Business',
			'Lost Property',
			'Fire & Damage',
			'Disputes',
			'Animals',
			'Complaints Against Police',
			'Disorderly Crowds',
			'Domestic Disputes',
			'Minor Disturbances',
			'Traffic Accidents',
			'Traffic Enforcement',
			'DUI',
			'Truancy',
			'Vandalism',
			'Curfew Violations',
			'City Ordinances',
			'Vices',
			'Medical Assistance',
			'Missing Persons',
			'Child Endangerment',
			'Simple Assaults',
			'Harassment',
			'Trespass',
			'Judicial Violations',
			'Sex Offenses',
			'Theft',
			'Vehicle Crime',
			'Burglary',
			'Arson',
			'Fraud & Embezzlement',
			'Drugs',
			'Weapon Violations',
			'Aggravated Assault',
			'Robbery',
			'Rape',
			'Homicide'
		],

		datasets: [
			{
				data: [
					50, 37, 25, 27, 17, 14, 9, 8, 14, 6, 4, 2, 30, 18, 16, 21, 13, 5, 11, 11, 11, 9, 5, 19, 9,
					4, 13, 5, 5, 8, 3, 17, 9, 8, 4, 11, 9, 4, 8, 7, 3, 1
				],

				backgroundColor: [
					'#add8e6',
					'#b0c4de',
					'#87cefa',
					'#87ceeb',
					'#6495ed',
					'#4169e1',
					'#1e90ff',
					'#00bfff',
					'#00bfff',
					'#0000cd',
					'#041690',
					'#191970',
					'#000080',
					'#21abcd',
					'#bcd4e6',
					'#abcdef',
					'#ace5ee',
					'#b0e0e6',
					'#a1caf1',
					'#a4dded',
					'#1c1cf0',
					'#00aae4',
					'#92a1cf',
					'#93ccea',
					'#9bc4e2',
					'#8ab9f1',
					'#d73b3e',
					'#8cbed6',
					'#99badd',
					'#a2a2d0',
					'#e97451',
					'#73c2fb',
					'#80daeb',
					'#e32636',
					'#ff003f',
					'#92a1cf',
					'#003399',
					'#be0032',
					'#ff0800',
					'#be4f62',
					'#d40000',
					'#ff2800'
				],
				hoverBackgroundColor: [
					'#6495ed',
					'#92a1cf',
					'#8cbed6',
					'#7cb9e8',
					'#80daeb',
					'#73c2fb',
					'#a2add0',
					'#a2a2d0',
					'#99badd',
					'#87ceeb',
					'#77b5fe',
					'#8ab9f1',
					'#9bc4e2',
					'#93ccea',
					'#87cefa',
					'#87ceeb',
					'#b0c4de',
					'#6495ed',
					'#000080',
					'#0000cd',
					'#1e90ff',
					'#ace5ee',
					'#add8e6',
					'#b0c4de',
					'#87cefa',
					'#b0e0e6',
					'#ff4040',
					'#4169e1',
					'#9bc4e2',
					'#87ceeb',
					'#ed1c24',
					'#b0e0e6',
					'#a1caf1',
					'#800020',
					'#c23b22',
					'#45b1e8',
					'#00aae4',
					'#800020',
					'#ae2029',
					'#cf1020',
					'#e62020',
					'#c23b22'
				]
			}
		]
	};

	function onResize(chart, size) {
        if(options.plugins.legend.labels.font.size < 18){
            options.plugins.legend.labels.font.size = 18;
            options.plugins.legend.maxWidth = 1000;
            options.plugins.legend.maxHeight = 700;
            options.plugins.legend.align = 'center';	
            options.plugins.legend.labels.padding = 25;
        }

		if (size.width < 665.6) {
			options.plugins.legend.labels.font.size = 12;
            options.plugins.legend.maxWidth = 490;
            options.plugins.legend.maxHeight = 1000;
            options.plugins.legend.align = 'left';	
            options.plugins.legend.labels.padding = 8;		
		}
	}

	$: options = {
		responsive: true,
		maintainAspectRatio: false,
		onResize: onResize,
		aspectRatio: 2,
		layout: {
			padding: 2,
			autoPadding: false
		},
		plugins: {
			legend: {
				position: 'bottom',
				maxWidth: 1000,
				maxHeight: 700,
				align: 'center',
				fullSize: true,
				labels: {
					boxWidth: 60,
					padding: 25,
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
	<Doughnut {data} {options} />
</div>

<style>
	.chart {
		max-width: 65vw;
		min-height: 100vh;
		margin: auto;
	}
</style>
