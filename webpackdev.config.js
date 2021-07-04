const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './src/js/app.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].js',
    clean: true,
    assetModuleFilename: "./src/media/[name][ext][query]"
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
  mode: "development",
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"},
      { test: /\.ts?$/, exclude: /node_modules/, use: 'ts-loader', },
      { test: /\.s?css$/i, use: [ MiniCssExtractPlugin.loader,  'css-loader', 'sass-loader' ],},
      { test: /\.(png|svg|jpg|jpeg|gif)$/i, loader: 'file-loader', options: { publicPath: '../media', outputPath: './assets/media/', name: '[name].[ext]' }},
      { test: /\.(woff)$/, use: { loader: 'url-loader', options: { limit: 10000, mimetype: "application/font-woff", name: "[name].[ext]", outputPath: "./assets/fonts/", publicPath: "../fonts/", esModule: false, } }, },
    ]
  },
  devServer: {
    port: 4000,
    open: true
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
      filename: './assets/style/[name].css'
    }),
    new CopyPlugin({
      patterns:[
          {
              from: path.resolve(__dirname, "src", "media/"),
              to: "assets/media",
              globOptions: {
                // ignore: ["opening-bg.jpg", "bg-card-front.png", "card-left.png", "card-right.png", "media/pngaaa.com-1306331.png"]
              }
          },
          {
            from: path.resolve(__dirname, "public", "favicon.ico"),
            to: "[name].ico"
          }
      ]
    }),
  ],
  externals:[{
    xmlhttprequest: '{XMLHttpRequest:XMLHttpRequest}'
}]
}