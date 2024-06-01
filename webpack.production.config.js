const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const config = {
    entry: {
        'first_entry_index': './src/first_entry_index.js',
        'second_entry_index': './src/second_entry_index.js',
    },
    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, './dist'),
        publicPath: '',
        // clean: {
        //     dry: true,
        //     keep: /\.css/,
        // } - similar to CleanWebpackPlugin if you have +5 webpack version
    },
    mode: 'production',
    optimization: {
        splitChunks: {
            chunks: 'all',
            minSize: 3000
        }
    },
    module: {
        rules: [
            {
                test: /\.(png|jpg)$/,
                type: 'asset/resource'
            },
            {
                test: /\.txt/,
                type: 'asset/resource'
            },
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader, 'css-loader'
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'
                ]
            },
            {
                test: /\.js$/,
                exclude: '/node_modules/',
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/env'],
                        plugins: ['@babel/plugin-proposal-class-properties']
                    }
                }
            },
        ]
    },
    plugins: [
        new TerserPlugin(), // included by default
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css',
        }),
        new CleanWebpackPlugin({
            cleanOnceBeforeBuildPatterns: [
                '**/*',
                // path: path.join(process.cwd(), './build/**/*)
            ]
        }),
        new HtmlWebpackPlugin({
            filname: 'first_entry_index.html',
            chunks: ['first_entry_index'],
            title: 'First entry',
            meta: {
                description: 'Some first description',
            },
            minify: false,
        }),
        new HtmlWebpackPlugin({
            filename: 'second_entry_index.html',
            chunks: ['second_entry_index'],
            title: 'Second entry',
            meta: {
                description: 'Some second description'
            },
            minify: false,
        }),
    ],
    // devServer: {
    //     static: {
    //         directory: path.resolve(__dirname, './'),
    //     },
    //     port: 9000,
    //     compress: true,
    //     historyApiFallback: true,
    // },
}

module.exports = config;