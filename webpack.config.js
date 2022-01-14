const fs = require('fs');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

const isProduction = process.env.NODE_ENV === 'production';
const srcDir = path.resolve(__dirname, 'src');
const entrypointsDir = path.resolve(srcDir, 'entrypoints');
const assetsDir = path.resolve(srcDir, 'assets');
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
				include: srcDir,
				use: [
					MiniCssExtractPlugin.loader,
					'css-loader',
					'postcss-loader',
					'sass-loader',
				],
			},
		],
	},
	plugins: [
		new MiniCssExtractPlugin(),
		new CopyPlugin({
			patterns: [{from: assetsDir, to: outputDir}],
		}),
	],
};
