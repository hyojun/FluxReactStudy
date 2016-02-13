var webpack = require("webpack"),
  CopyWebpackPlugin = require('copy-webpack-plugin'),
  definePlugin = new webpack.DefinePlugin({
    __ENV__: {
      phase: JSON.stringify(process.env.PHASE || 'local'),
      version: JSON.stringify(process.env.VERSION || 'v1')
    }
  }),
  config = {
  context: __dirname,
  resolve: {
    root: __dirname + "/src"
  },
  entry: {
    javascript: "./src/js/app.js",
    html: "./src/index.html"
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
        loader: "style-loader!css-loader",
        exclude: /node-modules/
      },
      {
        test: /\.less$/,
        loader: "style-loader!css-loader!less-loader",
        exclude: /node-modules/
      },
      {
        test: /\.html$/,
        loader: "file?name=[name].[ext]"
      },
      {
        test: /\.svg$/,
        loader: 'svg-inline'
      }
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

var resourcesToCopy = [];

switch (process.env.PHASE) {
  case 'release':
  case 'stage':
    resourcesToCopy.push({ from: "bower_components/bootstrap/dist/js/bootstrap.min.js", to: "js" });
    resourcesToCopy.push({ from: "bower_components/font-awesome/css/font-awesome.min.css", to: "css" });
    resourcesToCopy.push({ from: "bower_components/metisMenu/dist/metisMenu.min.js", to: "js" });
    resourcesToCopy.push({ from: "bower_components/metisMenu/dist/metisMenu.min.css", to: "css" });
    break;
  case 'local':
  case 'dev':
  default:
    resourcesToCopy.push({ from: "bower_components/bootstrap/dist/js/bootstrap.js", to: "js/bootstrap.min.js" });
    resourcesToCopy.push({ from: "bower_components/font-awesome/css/font-awesome.css", to: "css/font-awesome.min.css" });
    resourcesToCopy.push({ from: "bower_components/metisMenu/dist/metisMenu.js", to: "js/metisMenu.min.js" });
    resourcesToCopy.push({ from: "bower_components/metisMenu/dist/metisMenu.css", to: "css/metisMenu.min.css" });
    resourcesToCopy.push({ from: "bower_components/bootstrap/dist/css/bootstrap.css.map", to: "css" });
    resourcesToCopy.push({ from: "bower_components/jquery/dist/jquery.min.map", to: "js"});
    break;
}
resourcesToCopy.push({ from: "bower_components/bootstrap/dist/css/bootstrap.min.css", to: "css" });
resourcesToCopy.push({ from: "bower_components/bootstrap/dist/fonts", to: "fonts" });
resourcesToCopy.push({ from: "bower_components/font-awesome/fonts", to: "fonts" });
resourcesToCopy.push({ from: "bower_components/jquery/dist/jquery.min.js", to: "js" });
resourcesToCopy.push({ from: "bower_components/startbootstrap-sb-admin-2/dist/js/sb-admin-2.js", to:"js" });

config.plugins.push(new CopyWebpackPlugin(resourcesToCopy));


module.exports = config;
