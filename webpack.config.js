const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './src/js/app.js',
  output: {
    clean: true,
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].[contenthash].js',
    assetModuleFilename: "./assets/media/[hash][ext][query]"
  },
  resolve: {
    extensions: ['.js', '.ts'],
    alias: {
      '@js': path.resolve(__dirname, 'src/js'),
      '@media': path.resolve(__dirname, 'src/media'),
      '@style': path.resolve(__dirname, 'src/style'),
      '@sass': path.resolve(__dirname, 'src/style/sass')
    },
  },
  mode: "production",
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"},
      { test: /\.ts?$/, exclude: /node_modules/, use: 'ts-loader', },
      { test: /\.s?css$/i, use: [ MiniCssExtractPlugin.loader,  'css-loader', 'sass-loader' ],},
      { test: /\.(png|svg|jpg|jpeg|gif)$/i, loader: 'file-loader', options: { publicPath: '../media', outputPath: './assets/media/', name: '[name].[contenthash].[ext]' }},
      { test: /\.(woff)$/, use: { loader: 'url-loader', options: { limit: 10000, mimetype: "application/font-woff", name: "[name].[contenthash].[ext]", outputPath: "./assets/fonts/", publicPath: "../fonts/", esModule: false, } }, },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      minify: {
        collapseWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        useShortDoctype: true
      }
    }),
    new MiniCssExtractPlugin({
      filename: './assets/style/[name].[contenthash].css'
    }),
    new CopyPlugin({
      patterns:[
          {
            from: path.resolve(__dirname, "src", "media/"),
            to: "assets/media/[name][ext]",
            globOptions: {
              ignore: ["**/media/opening-bg.jpg", "**/media/bg-card-front.png", "**/media/bg-card-back.png", "**/media/bg-quotes.png", "**/media/characters-bg.jpg", "**/media/separator-decorate.png"]
            },
          },
          {
            from: path.resolve(__dirname, "public", "favicon.ico"),
            to: "[name].[contenthash].ico"
          }
      ]
    }),
  ],
  externals:[{
    xmlhttprequest: '{XMLHttpRequest:XMLHttpRequest}'
  }],
  optimization: {
      minimize: true,
    minimizer: [
      new CssMinimizerPlugin(),
    ],
  }
}