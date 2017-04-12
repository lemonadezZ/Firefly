var path = require('path');
var webpack=require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin')



module.exports = {
  entry: {
	main:'./src/app.jsx',
	react:['react','react-dom'],
	service:'./src/service.js',
	serviceTest:'./src/service/test.js',
	},
  output: {
    	//filename: 'dist/bundle.js',
    	//filename: 'dist/[name]-[chunkhash:8].js',
    	filename: 'dist/[name].js',
	path: path.resolve(__dirname, 'public')
	
  },
	//externals: {
     	//	'react': 'React'
  	//},
	 module: {
		rules:[	
			{
				 test: /\.js$/,
				 exclude: /(node_modules)/,
				 use: ["balel-loader"]
			}
		],
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
		excludeChunks:['test']
	//	minify: { collapseWhitespace:true},
	})

	],
	resolve: {
		 extensions: ['.js', '.json', '.coffee','jsx'],
		 modules: [
     			"node_modules",
      			path.resolve(__dirname, "src")
    		],
	}
	
}

