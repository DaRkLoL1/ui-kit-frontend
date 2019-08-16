const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {

  entry: {
    index: './src/index.js'
  },

  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
     {
      test: /\.css$/,
      use: [
        MiniCssExtractPlugin.loader,
        'css-loader',
        'style-loader'
        ]
      },
      {
        test: /\.pug$/,
        loader: 'pug-loader'
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        exclude: [/fonts/],
        use: [
          'file-loader?name=./images/[name].[ext]'
        ]
      },
      {
        test: /\.(woff|woff2|ttf|svg)$/,
        use: [
          'file-loader?name=./fonts/[name].[ext]'
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
    new HtmlWebpackPlugin({
      hash: false,
      template: './src/index.pug',
      filename: 'index.html',
    }),
    new CleanWebpackPlugin(),
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery"
  }),
  ],
  devtool: 'inline-source-map',
  devServer: {
        contentBase: './dist'
  },
};