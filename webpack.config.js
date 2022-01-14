const fs = require('fs');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

const isProduction = process.env.NODE_ENV === 'production';
const entrypointsDir = path.resolve(__dirname, 'src', 'entrypoints');
const outputDir = path.resolve(__dirname, 'assets');
const entrypoints = fs.readdirSync(entrypointsDir).reduce(
	(entrypoints, file) => ({
		...entrypoints,
		[path.parse(file).name]: path.resolve(entrypointsDir, file),
	}),
	{},
);

module.exports = {
	mode: isProduction ? 'production' : 'development',
	entry: entrypoints,
	output: {
		path: outputDir,
		filename: '[name].js',
	},
	optimization: {
		minimizer: ['...', new CssMinimizerPlugin()],
	},
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				loader: 'esbuild-loader',
				options: {
					loader: 'jsx',
					target: 'es2015',
				},
			},
			{
				test: /\.s[ac]ss$/i,
				include: path.resolve(__dirname, 'src'),
				use: [
					MiniCssExtractPlugin.loader,
					'css-loader',
					'postcss-loader',
					'sass-loader',
				],
			},
		],
	},
	plugins: [new MiniCssExtractPlugin()],
};
