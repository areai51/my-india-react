var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    devtool: 'eval',
    entry: [
        'webpack-dev-server/client?http://localhost:8080',
        'webpack/hot/only-dev-server',
        './app/app.jsx'
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/static/'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new ExtractTextPlugin('style.css', {
            allChunks: true
        })
    ],
    module: {
        loaders: [{
                test: /\.jsx$/,
                loaders: ['react-hot', 'babel-loader'],
                include: path.join(__dirname, 'app')
            },
            {
                test: /\.js$/,
                loaders: ['react-hot', 'babel-loader'],
                include: path.join(__dirname, 'app')
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract('css!sass')
            }
        ]
    }
};