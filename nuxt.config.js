export default {
	components: true,
	target: 'static',
	router: {
		base: '/senior-frontend-test/'
	},

	generate: {
		subFolders: true // HTML files are generated according to the route path
	},

	head: {
		title: process.env.npm_package_name || '',
		meta: [
			{ charset: 'utf-8' },
			{
				name: 'viewport',
				content:
					'width=device-width, initial-scale=1, user-scalable=0, maximum-scale=1'
			},
			{
				hid: 'description',
				name: 'description',
				content: process.env.npm_package_description || ''
			}
		],
		link: [
			{
				rel: 'icon',
				type: 'image/png',
				href: 'favicon.png'
			},
			{
				rel: 'stylesheet',
				href: 'https://use.typekit.net/bgi4bzm.css'
			}
		]
	},

	plugins: [],

	buildModules: ['@nuxtjs/tailwindcss'],

	modules: [],

	build: {
		extend() {}
	}
}
