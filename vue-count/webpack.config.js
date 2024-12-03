const HtmlWebPackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const { VueLoaderPlugin } = require("vue-loader");
const Dotenv = require('dotenv-webpack');
const path = require("path");

module.exports = (_, argv) => ({
  output: {
    path: path.resolve(__dirname, "dist"),
    publicPath: argv.mode !== 'development' ? process.env.PROJECT_URL : 'http://localhost:3004/',
  },


  resolve: {
    extensions: [".tsx", ".ts", ".vue", ".jsx", ".js", ".json"],
  },

  devServer: {
    port: 3004,
    historyApiFallback: true,
  },

  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: "vue-loader",
      },
      {
        test: /\.tsx?$/,
        use: [
          "babel-loader",
          {
            loader: "ts-loader",
            options: {
              transpileOnly: true,
              appendTsSuffixTo: ["\\.vue$"],
              happyPackMode: true,
            },
          },
        ],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: "file-loader",
          },
        ],
      },
      {
        test: /\.(css|s[ac]ss)$/i,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
    ],
  },

  plugins: [
    new VueLoaderPlugin(),
    new Dotenv(),
    new ModuleFederationPlugin({
      name: "vue_count",
      filename: "remoteEntry.js",
      remotes: {},
      exposes: {
        "./Header": "./src/components/Header.vue",
        "./VueCountdown": "./src/components/VueCountdown.vue",
        "./VueApp": "./src/bootloaderexporter.js",
      },
      shared: require("./package.json").dependencies,
    }),
    new HtmlWebPackPlugin({
      template: "./src/index.html",
    }),
  ],
});
