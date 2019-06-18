"use strict"

const path = require('path');
const {VueLoaderPlugin} = require('vue-loader');
const MiniCssExtractPlugin =  require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode : 'development',
  entry : {
    main : path.resolve(__dirname , './src/main.js')
  },
  devServer : {
    port : 3000,
    publicPath : '/',
    contentBase : './dist',
    historyApiFallback: true // router mode history의 적용
  },
  devtool: 'source-map',
  resolve: { alias: { vue: 'vue/dist/vue.esm.js' } },
  module : {
    rules : [
      {
        test : /\.vue$/,
        use : 'vue-loader'
      },
      {
        test : /\.js$/,
        exclude : '/node_modules/',
        use : 'babel-loader'
      },
      {
        test : /\.css$|.scss$/,
        use : [
          // 'vue-style-loader',
          MiniCssExtractPlugin.loader,
          // 'style-loader',
          'css-loader',
          'sass-loader'
        ]
      }
    ]
  },
  plugins : [
    new VueLoaderPlugin(),
    new MiniCssExtractPlugin({
      filename: "style.css",
    }),
    new HtmlWebpackPlugin({
      template :'./src/index.html',
      filename : 'index.html',
      
    })
  ]
}