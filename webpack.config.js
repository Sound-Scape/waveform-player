const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const combineLoaders = require('webpack-combine-loaders');

module.exports = {
  entry: './client/index.jsx',
  plugins: [
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: 'bundle.css',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['@babel/preset-env', '@babel/preset-react'],
        },
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: '../',
            },
          },
          combineLoaders([{
            loader: 'css-loader',
            query: {
              modules: true,
              localIdentName: '[path][name]__[local]--[hash:base64:5]',
            },
          }]),
        ],
      },
    ],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public/dist'),
  },
};
