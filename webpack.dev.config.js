var webpack = require("webpack");

module.exports = {
  context: __dirname + "/src",
{
  entry: {
    javascript: "./js/app.js",
    html: "./index.html"
  },
  devtool: "source-map",
  output: {
    path: __dirname + "/build",
    filename: "app.js"
  }
},
  module: {
    preLoaders: [
      {
        test: /\.js$/,
        loader: "eslint-loader",
        exclude: /node_modules/
      }
    ],
    loaders: [
      {
        test: /\.js$|\.react$/,
        loaders: ["react-hot", "babel-loader"],
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        loader: "css-loader",
        exclude: /node-modules/
      },
      {
        test: /\.html$/,
        loader: "file?name=[name].[ext]"
      },
    ]
  },
  eslint: {
    configFile: '.eslintrc',
    failOnError: true
  },
  plugins: [
  ]
};
