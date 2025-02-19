const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const ESLintPlugin = require("eslint-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const { merge } = require("webpack-merge");
const CopyWebpackPlugin = require("copy-webpack-plugin");

const source_folder = "src";
const dist_folder = "dist";

const commonConfig = {
  entry: {
    bundle: path.join(__dirname, source_folder, "app.js"),
  },

  output: {
    path: path.join(__dirname, dist_folder),
    filename: "[name].[contenthash].js",
    clean: true,
    assetModuleFilename: "assets/[name].[contenthash][ext]", // Output assets into the 'assets' folder
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif|mp3|woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource", // Handle static assets in JS imports
      },
    ],
  },
  plugins: [
    new ESLintPlugin({
      fix: true,
    }),
    new HtmlWebpackPlugin({
      title: "ATEECREN",
      filename: "index.html",
      favicon: path.join(source_folder, "assets", "icons", "favicon.svg"),
      template: path.join(source_folder, "template.html"),
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, source_folder, "assets"), // Use resolve to ensure the path is correct
          to: path.resolve(__dirname, dist_folder, "assets"), // Ensure it copies to dist/assets folder
          noErrorOnMissing: true, // Ignore missing assets
        },
      ],
    }),
  ],
};
const developmentConfig = {
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    static: [
      {
        directory: path.join(__dirname, "src/assets"),
        publicPath: "/assets", // Serve files under /assets
      },
      {
        directory: path.join(__dirname, dist_folder),
      },
    ],
    liveReload: true,
    port: 3000,
    open: true,
    hot: true,
    compress: true,
    historyApiFallback: true,
  },
  watch: true,
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
};

const productionConfig = {
  mode: "production",
  plugins: [
    new MiniCssExtractPlugin({
      filename: "styles/[name].[contenthash].css", // Put CSS in a styles folder
      chunkFilename: "styles/[id].[contenthash].css", // For chunked CSS
    }),
  ],

  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
    ],
  },

  optimization: {
    minimize: true,
    minimizer: [new CssMinimizerPlugin(), new TerserPlugin()],
  },
};

module.exports = (_env, args) => {
  switch (args.mode) {
    case "development":
      return merge(commonConfig, developmentConfig);
    case "production":
      return merge(commonConfig, productionConfig);
    default:
      throw new Error("No matching configuration was found!");
  }
};