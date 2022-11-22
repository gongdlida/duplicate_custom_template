const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname,"src","index.js"),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: { presets: ['@babel/preset-env', '@babel/preset-react'] },
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname,"./public/index.html"),
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
