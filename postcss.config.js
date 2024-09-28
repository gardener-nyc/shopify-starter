module.exports = {
	plugins: [
		require('postcss-import'),
		require('postcss-hexrgba'),
		require('tailwindcss/nesting'),
		require('tailwindcss'),
		require('autoprefixer'),
	],
};
