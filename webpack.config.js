var path = require('path');
var webpack=require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin')



module.exports = {
  entry: {
	main:'./src/app.jsx',
	react:['react','react-dom'],
	},
  output: {
    	//filename: 'dist/bundle.js',
    	filename: 'dist/bundle-[chunkhash:8].js',
	path: path.resolve(__dirname, 'public')
  },
	//externals: {
     	//	'react': 'React'
  	//},
	 module: {
		rules:[	
			{
				 test: /\.jsx$/,
				 exclude: /(node_modules)/,
				 use: ["jsx-loader"]
			}
		]
	},
		
	plugins: [
	
	new webpack.optimize.UglifyJsPlugin({
      		compress: {
       		 warnings: false
      		}
    	}),
	new webpack.optimize.CommonsChunkPlugin({
			name:['react'], 
			filename:'dist/vendor-[chunkhash:8].js'
		}),
	new HtmlWebpackPlugin({
		title: 'FireFly',
		template: 'src/index.html',
		minify: { collapseWhitespace:true},
	})

]
}

