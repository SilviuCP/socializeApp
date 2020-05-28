const path = require('path');
const webpack = require("webpack");

module.exports = {
    entry: path.resolve(__dirname, "./src/App.tsx"),
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', ".css"]
    },
    devtool: "source-map",
    devServer: {
        hot: true,
        contentBase: path.join(__dirname, 'public'),
        historyApiFallback: {
            index: 'index.html'
        },
        index: 'index.html'
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/react', '@babel/typescript', '@babel/env']
                    }
                }
            },
            {
                test: /\.scss$/i,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
        ]
    },
    output: {
        path: path.join(__dirname, "public"),
        filename: "bundle.js",
    },
    optimization: {
        minimize: false
    },
    mode: "development"
};