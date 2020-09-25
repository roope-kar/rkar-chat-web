const path = require('path');
const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const commonConfig = require('./webpack.common');

module.exports = webpackMerge.merge(commonConfig, {
    mode: 'development',
    devtool: 'eval-source-map',
    cache: true,
    watchOptions: {
        ignored: /node_modules/
    },
    devServer: {
        publicPath: '/',
        contentBase: path.join(__dirname, 'static'),
        hot: true,
        writeToDisk: true,
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
            "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization"
        },
        historyApiFallback: {
            disableDotRule: true
        }
    },
    output: {
        publicPath: '/',
        path: path.resolve(__dirname, 'static', 'build'),
        filename: '[name].bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                enforce: 'pre',
                exclude: /node_modules/,
                use: {
                    loader: 'prettier-loader',
                    options: {
                        resolveConfigOptions: {
                            editorConfig: true,
                            config: '.prettierrc'
                        }
                    }
                }
            },
            {
                test: /\.(scss|css)$/,
                use: [
                    'style-loader',
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
    performance: {
        hints: false
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('development'),
        })
    ]
});
