var webpack = require('webpack');

module.exports = {
    // entry: {
    //     javascript: "./index.js",
    // },
  entry:  [
    'webpack-dev-server/client?http://localhost:8000/',
    'webpack/hot/only-dev-server',
    './index'
  ],
    output: {
        filename: 'bundle.js',
        path: '/static/',
        publicPath: '/static/'
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loaders: ['react-hot-loader', 'babel-loader?' + JSON.stringify({
                    plugins: ["transform-class-properties"],
                    presets: ['es2015', 'react', 'stage-3']
                })]
            },
            {
                test: /\.html$/,
                loader: "file?name=[name].[ext]"
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                loaders: ["style-loader", "css-loader", "sass-loader"]
            }
        ]
    },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  devtool: 'inline-source-map',
  devServer: {
    hot: true
  }
};