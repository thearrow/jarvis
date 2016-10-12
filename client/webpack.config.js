var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: ["babel-polyfill", "./index.js"],
    output: {
        path: __dirname,
        filename: "bundle.js"
    },
    plugins: [new HtmlWebpackPlugin({
      template: 'index.html',
    })],
    module: {
        loaders: [
            { test: /\.js$/, loader: "babel" }
        ]
    }
};
