const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack');

const config = {
  devtool: 'inline-sourse-map',
  entry: './src/index.js',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.pug$/,
        use: [
          'html-loader',
          'pug-html-loader',
        ],
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
              data: '@import "colors/colors.scss";',
              includePaths: [__dirname, 'src'],
              sourceMap: true,
            },
          },
        ],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        exclude: [/fonts/],
        use: [
          'file-loader?name=./images/[name].[ext]',
          'image-webpack-loader',
        ],
      },
      {
        test: /\.(woff|woff2|ttf|svg|eot|ijmap.txt)$/,
        use: [
          'file-loader?name=./fonts/[name].[ext]',
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'index.css',
    }),
    new CleanWebpackPlugin(),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
    }),
    new HtmlWebpackPlugin({
      hash: false,
      template: './src/index.pug',
      filename: 'index.html',
    }),
  ],

  devServer: {
    contentBase: './dist',
    index: 'search-room.html',
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
  'sign-in',
].forEach((item) => {
  config.plugins.push(
    new HtmlWebpackPlugin({
      hash: false,
      template: `./src/pages/${item}/${item}.pug`,
      filename: `${item}.html`,
      chunks: ['name'],
    }),
  );
});

module.exports = config;
