const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const config = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, './dist'),
        publicPath: '',
        // clean: {
        //     dry: true,
        //     keep: /\.css/,
        // } - similar to CleanWebpackPlugin if you have +5 webpack version
    },
    mode: 'development',
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
                   'style-loader', 'css-loader'
                ]
            },
            {
                test: /\.scss$/,
                use: [
                   'style-loader', 'css-loader', 'sass-loader'
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
        // dont need in dev config
        // new TerserPlugin(),
        // exist option to remove this plugin in dev mode
        // new MiniCssExtractPlugin({
        //     filename: 'styles.css',
        // }),
        new CleanWebpackPlugin({
            cleanOnceBeforeBuildPatterns: [
                '**/*',
                // path: path.join(process.cwd(), './build/**/*)
            ]
        }),
        new HtmlWebpackPlugin({
            title: 'Webpack application',
            filename: 'index.html',
            meta: {
                description: 'Some description',
            }
        }),
    ],
    devServer: {
        port: 9000,
        compress: true,
        historyApiFallback: true,
        static: {
            directory: path.resolve(__dirname, './dist'),
        },
        devMiddleware: {
            index: 'index.html',
            writeToDisk: true,
        },  
    },
}

module.exports = config;