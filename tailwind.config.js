module.exports = {
	theme: {
		fontFamily: {
			sans: [
				'proxima-nova',
				'-apple-system',
				'system-ui',
				'BlinkMacSystemFont',
				'Segoe UI',
				'Roboto',
				'Helvetica Neue',
				'Arial',
				'sans-serif'
			]
		},
		extend: {
			colors: {
				grayLight: '#989ea7',
				grayDark: '#323e4f',
				greenTurq: '#34a6bb',
				greenTurqLight: '#4bb9ce',
				pinkPanther: '#ff7b92'
			},
			spacing: {
				72: '18rem',
				80: '20rem'
			},
			height: {
				26: '6.875rem',
				28: '7rem'
			},
			minHeight: {
				15: '3.625rem',
				26: '6.875rem'
			},
			maxHeight: {
				fit: '500px',
				0: '0'
			},
			maxWidth: {
				fit: '250px',
				0: '0'
			},
			inset: {
				icon: '2.3rem'
			},
			padding: {
				1.6: '0.407rem'
			},
			outline: {
				greenTurq: ['1px solid #34a6bb', '1px']
			},
			opacity: {
				60: '60%'
			},
			transitionProperty: {
				maxHeight: 'max-height'
			}
		}
	},
	variants: {
		extend: {
			transitionProperty: ['hover', 'focus']
		}
	},
	purge: {
		content: ['./src/**/*.vue', './src/**/*.css', './src/**/*.html'],

		options: {
			whitelist: [
				'bg-grayLight',
				'bg-grayDark',
				'bg-greenTurq',
				'bg-greenTurqLight',
				'bg-pinkPanther',
				'text-grayLight',
				'text-grayDark',
				'text-greenTurq',
				'text-greenTurqLight',
				'text-pinkPanther'
			]
		}
	}
}
