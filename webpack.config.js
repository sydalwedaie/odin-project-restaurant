import path from "node:path";
import HtmlWebpackPlugin from "html-webpack-plugin";

export default {
  entry: {
    index: "./src/index.js",
  },
  devtool: "inline-source-map",
  devServer: {
    static: "./dist",
    watchFiles: ["./src/template.html"],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Odin Restaurant",
      template: "./src/template.html",
    }),
  ],
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(import.meta.dirname, "dist"),
  },
  optimization: {
    runtimeChunk: "single",
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.html$/i,
        use: ["html-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
      },
    ],
  },
};
