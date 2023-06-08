const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;

const deps = require("./package.json").dependencies;

module.exports = {
  mode: "development",
  entry: "./src/index.ts",
  // output: {
  //   path: path.join(__dirname, "dist"),
  //   filename: "[hash].js",
  //   publicPath: "/",
  // },
  output: {
    publicPath: "auto",
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|tsx|ts)$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
    new ModuleFederationPlugin({
      name: "gamezone",
      remotes: {
        cardpicker: "cardpicker@http://localhost:5500/remoteEntry.js",
        updown: "updown@http://localhost:5501/remoteEntry.js",
      },
      shared: {
        ...deps,
        ui: {
          singleton: true,
          eager: true,
        },
        react: {
          singleton: true,
          requiredVersion: deps.react,
          eager: true,
        },
        "react-dom": {
          singleton: true,
          requiredVersion: deps["react-dom"],
          eager: true,
        },
      },
    }),
  ],
  devServer: {
    host: "localhost", // live-server host 및 port
    port: 5502,
  },
};
