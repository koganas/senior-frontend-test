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
			transitionProperty: {
				maxHeight: 'max-height'
			},
			transitionDuration: {
				5000: '5000ms'
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
				'bg-pinkPanther',
				'text-grayLight',
				'text-grayDark',
				'text-greenTurq',
				'text-pinkPanther',
				'tk-proxima-nova'
			]
		}
	}
}
