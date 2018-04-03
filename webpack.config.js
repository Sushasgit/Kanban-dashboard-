const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const src = path.resolve(__dirname, 'src');
const dist = path.resolve(__dirname, 'dist');

module.exports = {
  devtool: "cheap-module-source-map",
  devServer: {
    contentBase: path.join(__dirname, 'src'),
    host: '127.0.0.1',
    port: 8088,
    historyApiFallback: true,
  },

  entry: [
    path.resolve(src, 'index.js'),
    path.resolve(src, 'styles.css')
  ],

  output: {
    path: dist,
    filename: 'bundle.js',
    publicPath: '/'
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },

      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['eslint-loader']
      },

      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            options: {minimize: true}
          }
        ]
      },

      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          use: [
            {
              loader: 'css-loader',
              options: {
                importLoaders: 1
              }
            },
            'postcss-loader'
          ]
        })
      }
    ]
  },

  plugins: [
    new CleanWebpackPlugin(dist, {
      root: __dirname,
      verbose: true
    }),

    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html"
    }),

    new ExtractTextPlugin({
      filename: "styles.css"
    })
  ]
};
