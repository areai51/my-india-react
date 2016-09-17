import webpack from 'webpack';
import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';

export default {
  tool: 'inline-source-map',
  entry: [
    'webpack-dev-server/client?http://localhost:8181',
    'webpack/hot/only-dev-server',
    './src/entry'
  ],
  plugins: [
    new HtmlWebpackPlugin({
      title: 'my-india | Report Card',
      template: 'index.html'
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
  output: {
    path: __dirname,
    filename: 'bundle.js'
  },
  eslint: {
    configFile: path.join(__dirname, '.eslintrc.json')
  },
  module: {
    preLoaders: [
      { test: /\.js$/, loader: "eslint-loader", include: path.join(__dirname, 'src') }
    ],
    loaders: [{
      test: /\.jsx$|\.js$/,
      loaders: ['react-hot', 'babel-loader'],
      include: path.join(__dirname, 'src')
    }, {
      test: /\.css$/,
      loaders: ['style', 'css']
    }, {
      test: /\.(woff|ttf|eot|svg|gif)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
      loader: 'file'
    }]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './',
    hot: true,
    port: 8181
  }
};
