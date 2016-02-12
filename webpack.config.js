var webpack = require("webpack"),
  definePlugin = new webpack.DefinePlugin({
    __ENV__: {
      phase: JSON.stringify(process.env.PHASE || 'local'),
      version: JSON.stringify(process.env.VERSION || 'v1')
    }
  }),
  config = {
  context: __dirname + "/src",
  resolve: {
    root: __dirname + "/src"
  },
  entry: {
    javascript: "./js/app.js",
    html: "./index.html"
  },
  devtool: "source-map",
  output: {
    path: __dirname + "/build",
    filename: "app.js"
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
        test: /\.css$/,
        loader: "bootstrap",
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
    definePlugin
  ]
};

if (process.env.PHASE === 'release') {
  config.plugins.push(new webpack.optimize.UglifyJsPlugin({minimize: true}));
}

module.exports = config;
