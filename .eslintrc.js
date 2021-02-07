module.exports = {
	root: true,
	env: {
		browser: true,
		node: true
	},
	parserOptions: {
		parser: '@babel/eslint-parser',
		requireConfigFile: false
	},
	extends: ['plugin:vue/essential', 'plugin:prettier/recommended'],
	plugins: ['vue'],
	rules: {
		'prettier/prettier': [
			'warn',
			{
				singleQuote: true,
				semi: false,
				trailingComma: 'none'
			}
		]
	}
}
