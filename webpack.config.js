const path = require('path');

module.exports = {
    entry: {
        a: "./src/js/a.js",
        b: "./src/js/b.js",
        // c: ["./c", "./d"]
    },
    output: {
        path: path.join(__dirname, "dist"),
        filename: "[name].entry.js"
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
        }]
    }
};