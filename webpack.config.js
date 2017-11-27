const path = require ('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const webpack = require('webpack');



module.exports = {
    entry: {
        indexJS: "./src/js/index.js",
        drugaJS: "./src/js/druga.js"
    },
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "dist")   // Putanja fajla koji se generiše

    },
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist'
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: [
                        {loader: 'css-loader', options: {sourceMap: true}},     // translates CSS into CommonJS
                        {loader: 'postcss-loader', options: {sourceMap: true}}, // postcss plugin loader
                        {loader: 'sass-loader', options: {sourceMap: true}}     // compiles Sass to CSS
                    ]
                })
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: { limit: 40000 } // Convert images < 40k to base64 strings
                    },
                    {   loader: 'image-webpack-loader',}
                ]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "eslint-loader",
                options: {
                    // eslint options (if necessary)
                }
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin("styles.css"),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'src/views/index.html',
            chunks: ['indexJS']
        }),
        new HtmlWebpackPlugin({
            filename: 'druga.html',
            template: 'src/views/druga.html',
            chunks: ['drugaJS']
        }),
        new CleanWebpackPlugin(['dist']),
        new BrowserSyncPlugin({
                host: 'localhost',
                port: 3000,                       // url adresa za vreme developmenta http://localhost:3000/
                proxy: 'http://localhost:8080/'   // proxy endpoint WebpackDev Servera  na http://localhost:8080
            },
            {
                reload: false                     // Sprečava da BrowserSync reloaduje stranu, da bi to uradio WebpackDev Server
            }
        ),
        new UglifyJsPlugin({
            test: /\.js($|\?)/i,
            uglifyOptions: {
                debug: true,
                minimize: true,
                sourceMap: false,
                output: {
                    comments: false
                },
                compress: {
                    warnings: false
                }
            }
        }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify("process.env.NODE_ENV")
        })
    ]
};