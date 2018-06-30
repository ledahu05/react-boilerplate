const path = require("path")
const webpack = require("webpack")
const HTMLWebpackPlugin = require("html-webpack-plugin")
const MiniCSSExtractPlugin = require("mini-css-extract-plugin")
const OptimizedCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
module.exports = {
  entry: {
    main: ["./src/main.js"]
  },
  mode: "production",
  output: {
    filename: "[name]-bundle.js",
    path: path.resolve(__dirname, "../dist"),
    publicPath: "/"
  },
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader"
          }
        ]
      },
      {
        test: /\.css$/,
          use: [
          {
            loader: "MiniCSSExtractPlugin.loader"
          },
          { loader: "css-loader" }
        ]
      },
      {
        test: /\.sass$/,
          use: [
          {
            loader: "style-loader"
          },
          { loader: "css-loader" },
          { loader: "sass-loader" }
        ]
      },
      {
        test: /\.styl$/,
          use: [
          {
            loader: "style-loader"
          },
          { loader: "css-loader" },
          { loader: "stylus-loader" }
        ]
      },
      {
        test: /\.less$/,
          use: [
          {
            loader: MiniCSSExtractPlugin.loader
          },
          { loader: "css-loader" },
          { loader: "postcss-loader" },
          { loader: "less-loader" }
        ]
      },
      {
        test: /\.jpg$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "images/[name].[ext]"
            }
          }
        ]
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      }
    ]
  },
  plugins: [
    new OptimizedCssAssetsPlugin(),
    new MiniCSSExtractPlugin({
      filename: "[name]-[contenthash].css"
    }),
    new HTMLWebpackPlugin({
      template: "./src/index.html"
    })
  ]
}
