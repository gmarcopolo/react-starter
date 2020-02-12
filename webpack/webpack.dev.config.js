const merge = require("webpack-merge");
const common = require("./webpack.common.config.js");
const webpack = require("webpack");
const path = require("path");

const PATH_SRC = path.resolve("src");
const PATH_DIST = path.resolve("dist");
const DEV_SERVER_PORT = 8082;

module.exports = merge(common, {
  devtool: "eval-source-map",
  module: {
    rules: [
      {
        test: /\.(css|scss)$/,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader"
        ]
      }
    ]
  },
  plugins: [],
  devServer: {
    contentBase: PATH_DIST,
    clientLogLevel: "error",
    port: DEV_SERVER_PORT,
    host: "0.0.0.0",
    open: "true"
  }
});
