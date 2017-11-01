var path = require('path')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var CleanWebpackPlugin = require('clean-webpack-plugin')
var webpack = require('webpack')
var ExtractTextPlugin = require("extract-text-webpack-plugin")


module.exports = {
	entry: {
		main: './src/pages/JobAdmin/index.js'
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: '[name].[hash].js'
	},
	module: {
		rules: [
			{
				test:/\.js$/i,
				exclude: /node_modules/i,
				loader: "babel-loader",
				options: {
					presets: ['env', 'react']
				}
			},
			{
				test: /\.css$/i,
				use: ExtractTextPlugin.extract({
					fallback: "style-loader",
			        use: "css-loader!postcss-loader"
				})
			}
		]
	},
	resolve: {
		alias: {
			"$models": "./src/models"
		}
	},
	devServer: {
		contentBase: path.resolve(__dirname, 'dist'),
		port: 9000,
		hot: true
	},
	plugins: [
		new CleanWebpackPlugin(['dist']),
		new HtmlWebpackPlugin({
			template: './src/index.html'
		}),
		new webpack.NamedModulesPlugin(),
		new webpack.HotModuleReplacementPlugin(),
		new ExtractTextPlugin("styles.css")
	]
};
