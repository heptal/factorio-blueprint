var webpack = require('webpack');

module.exports = {
  entry:  [
    './index'
  ],
    output: {
        filename: 'bundle.js',
        path: __dirname + '/static/',
        publicPath: __dirname + '/static/'
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loaders: ['babel-loader?' + JSON.stringify({
                    presets: ['es2015', 'react']
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
};