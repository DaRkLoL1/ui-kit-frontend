const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  devtool: 'inline-sourse-map',

  entry: {},

  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  },
  
  module: {
    rules: [
      {
        test: /\.pug$/,
        use: [
          'html-loader',
          'pug-html-loader'
        ]
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'style-loader',
          },
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
            },
          },
           'resolve-url-loader',
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
            },
          }
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
        test: /\.(woff|woff2|ttf|svg|eot|ijmap.txt)$/,
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
    new CleanWebpackPlugin(),
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery"
  }),
  ],
  
  devServer: {
        contentBase: './dist',
        index: 'sign-in.html'
  },
};

[
  'room-details', 
  'registration', 
  'cards', 
  'elements', 
  'colors-types', 
  'headers-footers', 
  'landing-page', 
  'search-room',
  'sign-in'
].forEach( item => {
  module.exports.entry[item] = './src/' + item +'.js';

  module.exports.plugins.push(
    new HtmlWebpackPlugin({
      hash: false,
      template: './src/' + item + '.pug',
      filename: item + '.html',
      chunks: [item]
    })
  );
})