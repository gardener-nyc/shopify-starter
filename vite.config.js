import shopify from 'vite-plugin-shopify';

export default {
	build: {
		minify: true,
	},
	plugins: [
		shopify({
			sourceCodeDir: 'src',
			entrypointsDir: 'src/entrypoints',
			snippetFile: 'assets.liquid',
		}),
	],
};
