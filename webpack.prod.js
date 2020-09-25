const path = require('path');
const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const commonConfig = require('./webpack.common');
const MiniCssExtractCssPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const CompressionWebpackPlugin = require('compression-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = webpackMerge.merge(commonConfig, {
    mode: 'production',
    devtool: 'hidden-source-map',
    output: {
        publicPath: '/',
        path: path.resolve(__dirname, 'static', 'build'),
        filename: '[name].[contenthash:8].bundle.js',
        chunkFilename: '[name].[chunkhash:8].bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.(scss|css)$/,
                use: [
                    MiniCssExtractCssPlugin.loader,
                    'css-loader',
                    'postcss-loader',
                    {
                        loader: 'sass-loader',
                        options: {
                            additionalData: '$buildBy: webpack;',
                        }
                    }
                ]
            }
        ]
    },
    stats: 'minimal',
    optimization: {
        minimizer: [
            new UglifyJsPlugin({
                cache: true,
                parallel: true,
                sourceMap: true
            }),
            new OptimizeCssAssetsPlugin(),
        ]
    },
    plugins: [
        new webpack.HashedModuleIdsPlugin(),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production'),
        }),
        new MiniCssExtractCssPlugin({
            filename: '[name].[contenthash:8].bundle.css',
            chunkFilename: '[name].[chunkhash:8].bundle.css'
        }),
        new CompressionWebpackPlugin({
            filename: '[file].gz',
            cache: true,
            algorithm: "gzip"
        }),
        new ManifestPlugin(),
    ]
});
