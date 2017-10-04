var path = require('path');

module.exports = {

    entry: {
        app: './src/entry.js',
        vendor: ['angular']
    },

    output: {
        path: path.join(__dirname, 'public/js'),
        publicPath: '/',
        filename: '[name].js',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.html$/,
                loader: 'html-loader',
                exclude: /node_modules/
            }
        ]
    }
};