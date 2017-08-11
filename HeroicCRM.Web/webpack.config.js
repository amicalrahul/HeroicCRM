﻿//import WebpackRTLPlugin from 'webpack-rtl-plugin'

var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');
var WebpackRTLPlugin = require('webpack-rtl-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = {
    devtool: 'source-map',
    performance: {
        hints: false
    },
    context: path.join(__dirname, 'js'),
    entry: {  
        "polyfills": "./polyfills.js",  
        // "vendor":"./A2/vendor.ts",    
        "app": './app/app.js'
    },  
    output: {
        path: path.join(__dirname, 'Built'),
        filename: '[name].bundle.js'
    },
    resolve: {
        extensions: ['.ts', '.js', '.json', '.css', '.scss', '.html', '.cshtml'],
        modules: [path.resolve(__dirname, './src'), path.resolve(__dirname, './node_modules/')]
    },
    module: {
        rules: [{
            test: /\.js$/, exclude: /node_modules/,
            loader: 'babel-loader'
        }, {
        //    test: /\.ts$/,
        //    loaders: ['awesome-typescript-loader', 'source-map-loader', 'tslint-loader']
        //}, {
            test: /\.(png|jpg|gif|woff|woff2|ttf|svg|eot)$/,
            loader: 'file-loader?name=assets/[name]-[hash:6].[ext]'
        }, {
            test: /favicon.ico$/, exclude: /node_modules/,
            loader: 'file-loader?name=/[name].[ext]'
        }, {
            test: /\.css$/, 
            loader: 'style-loader!css-loader'
        }, {
            test: /\.scss$/,
            loaders: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader']
        }, {
            test: /\.(html|cshtml)$/, exclude: /node_modules/,
            loader: 'raw-loader'
        }],
        exprContextCritical: false
    },
    plugins: [new ExtractTextPlugin('style.css'),
    new WebpackRTLPlugin()
        //new webpack.optimize.CommonsChunkPlugin({
        //    name: ['app', 'polyfills', /*'vendor'*/]
        //}),
        //new CleanWebpackPlugin(
        //    ['./AngularBundle', ]),
        //new HtmlWebpackPlugin({
        //    template: "../Views/Home/",
        //    filename: "./Index.cshtml",
        //    inject: false,
        //})
        //,
        //new CopyWebpackPlugin([{
        //    from: './angular2/images/*.*',
        //    to: 'assets/',
        //    flatten: true
        //}])
    ]
};