const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname,"src","index.tsx"),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.tsx$/,
        exclude: /node_modules/,
        loader: 'ts-loader'
      },
    ],
  },
  resolve:{
    extensions:[".tsx",".ts",".js"]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname,"./dist/index.html"),
    }),
  ],
  devServer: {
    port: 4000,
    compress: true,
    open: true,
    hot: true,
    static: {
      directory: path.join(__dirname, 'public'),
      watch: {
        ignored: '*.txt',
        usePolling: false,
      },
    },
  },
}
