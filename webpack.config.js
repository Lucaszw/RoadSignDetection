var path = require('path');
var webpack = require('webpack');

var config = {
  entry: {
    main: './static/js/src/main.jsx'
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname,'./static/js/dist')
  },
  plugins: [
    new webpack.ProvidePlugin({
      React: 'react',
      ReactDOM: 'react-dom',
      '$': 'jquery',
      'jQuery': 'jquery',
      '_': 'underscore'
    })
  ],
  module: {
    loaders: [
      { test: /\.jsx$/,
        exclude: /(node_modules|bower_components)/,
        include: path.resolve(__dirname, "static/js/src"),
        loader: "babel-loader"}
    ]
  }
};

module.exports = config;
