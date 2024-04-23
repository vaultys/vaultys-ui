const path = require("path");

module.exports = function (env, argv) {
  return {
    mode: "production",
    entry: path.resolve(__dirname, "src/index.tsx"),
    output: {
      filename: "index.js",
      library: "vaultys-ui",
      libraryTarget: "umd",
      path: path.resolve(__dirname, "dist"),
    },
    devtool: "source-map",
    module: {
      rules: [
        {
          test: /\.(js|ts)x?$/,
          exclude: /node_modules/,
          use: ["babel-loader", "ts-loader"],
        },
        {
          test: /\.css$/i,
          use: ["style-loader", "css-loader", "postcss-loader"],
        },
      ],
    },
    externals: {
      react: "react",
      "react-dom": "react-dom",
    },
    resolve: {
      alias: {
        "@root": path.resolve(__dirname, "src"),
      },
      extensions: [".js", ".jsx", ".ts", ".tsx"],
    },
  };
};
