var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: ["babel-polyfill", "./index.js"],
    output: {
        path: __dirname,
        filename: "bundle.js"
    },
    plugins: [new HtmlWebpackPlugin({title: 'Jarvis 1.0'})],
    module: {
        loaders: [
            { test: /\.js$/, loader: "babel" }
        ]
    }
};
