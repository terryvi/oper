var path = require('path');
// var ExtractTextPlugin = require("extract-text-webpack-plugin");
var webpackConfig = {
	entry:{
		app:["../src/app.js"]
	},
	output:{
        path: path.resolve(__dirname,'../release'), 
		filename: '[name].bundle.js'
	},
	module: {
        loaders: [{
            test: /.js$/,
            loader: 'jsx-loader?harmony'
        }, {
            test: /.vue$/,
            loader: 'vue-loader'
        },{
            test: /\.css$/,
            loader: 'style!css'
        }
        ]
    },
    query:{
    	 presets: ['es2015']
	},
    // 要引用外部模块，比如jq，比如我们合并好的vue.min.js之类的，是通过script的方式写在页面上的，但又希望在webpack模块中使用就得用到这个externals了
    externals:{
        'vue':'Vue',
        'vue-router':'VueRouter',
        'vue-resource':"VueResource"
    },
    plugins:[
        // new ExtractTextPlugin()
    ],
    resolve: {
        extensions: ['', '.js', '.json', '.less']        
    }
}

module.exports = webpackConfig