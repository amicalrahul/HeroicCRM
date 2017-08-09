var path = require('path');

module.exports = {
    context: path.join(__dirname, 'js/App'),
    entry: './app.js',
    output: {
        path: path.join(__dirname, 'Built'),
        filename: '[name].bundle.js'
    },
    module: {
        rules: [{
        //    test: /\.ts$/,
        //    loaders: ['awesome-typescript-loader', 'source-map-loader', 'tslint-loader']
        //}, {
            test: /\.(png|jpg|gif|woff|woff2|ttf|svg|eot)$/,
            loader: 'file-loader?name=assets/[name]-[hash:6].[ext]'
        }, {
            test: /favicon.ico$/,
            loader: 'file-loader?name=/[name].[ext]'
        }, {
            test: /\.css$/,
            loader: 'style-loader!css-loader'
        }, {
            test: /\.scss$/,
            exclude: /node_modules/,
            loaders: ['style-loader', 'css-loader', 'sass-loader']
        }, {
            test: /\.html$/,
            loader: 'raw-loader'
        }]
    }
};