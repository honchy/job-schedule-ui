var path = require('path')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var CleanWebpackPlugin = require('clean-webpack-plugin')
var webpack = require('webpack')
var ExtractTextPlugin = require("extract-text-webpack-plugin")

module.exports = {
	entry: {
		main: './src/pages/index.js'
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
				loader: "babel-loader"
			},
			{
				test: /\.css$/i,
				// development
				loaders: "style-loader!css-loader?importLoader=1&modules&localIdentName=[folder]_[local]_[sha512:hash:base62:5]!postcss-loader"
				// production
				// use: ExtractTextPlugin.extract({
				// 	fallback: "style-loader",
			 //        use: "css-loader?importLoader=1&modules&localIdentName=[folder]_[local]_[sha512:hash:base62:5]!postcss-loader"
				// })
			}
		]
	},
	resolve: {
		alias: {
			"$models": path.resolve(__dirname, "src/models"),
			"$components": path.resolve(__dirname, "src/components")
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
