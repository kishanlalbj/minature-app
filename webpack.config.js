const HtmlWebpackPlugin = require("html-webpack-plugin")
const path = require("path");

module.exports = {
  entry: "./src/index.js",
  plugins: [new HtmlWebpackPlugin({
    template: "./src/index.html"
  })],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.html$/,
        use: ["html-loader"]
      },
      {
        test: /\.(png|jpe?g|gif)$/,
        use: {
          loader: "file-loader",
          options: {
            name: "[name].[hash].[ext]",
            outputPath: "img"
          },
        }
      }
    ],
  },
};
