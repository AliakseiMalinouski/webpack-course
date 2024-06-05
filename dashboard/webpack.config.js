const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { ModuleFederationPlugin } = require('webpack').container;

const config = {
    entry: './src/dashboard.js',
    output: {
        clean: true,
        filename: 'bundle.js',
        path: path.resolve(__dirname, './dist'),
        publicPath: 'http://localhost:9003/',
    },
    mode: 'development',
    module: {
        rules: [
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
        new HtmlWebpackPlugin({
            title: 'Webpack application',
            filename: 'dashboard.html',
        }),
        new ModuleFederationPlugin({
            name: 'DashboardApp',
            remotes: {
                ItemFromFirstApp: 'FirstApp@http://localhost:9000/remoteEntry.js'
            }
        }),
    ],
    devServer: {
        port: 9003,
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