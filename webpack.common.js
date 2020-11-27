const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'src', 'index.tsx'),
  output: {
    path: path.resolve(__dirname, 'static', 'build'),
    filename: '[name].bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'ts-loader',
        }
      },
      {
        test: /\.(gif|png|jpe?g)$/i,
        use: 'file-loader'
      },
      {
        test: /\.svg$/,
        loader: 'svg-url-loader',
        options: {
          limit: 10 * 1024,
          noquotes: true,
          name: '[name].[ext]'
        }
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        use: [{
          loader: 'file-loader',
          options: {
            name: '[name].[ext]'
          }
        }]
      }
    ]
  },
  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        default: false,
        vendors: false,
        vendor: {
          name: 'vendor',
          test: /node_modules/,
          chunks: 'all',
          priority: 20
        },
        common: {
          name: 'common',
          chunks: 'all',
          priority: 10,
          minChunks: 2,
          reuseExistingChunk: true,
          enforce: true
        }
      }
    }
  },
  node: {
    __filename: true
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    alias: {
      "src": path.resolve(__dirname, 'src'),
      "static": path.resolve(__dirname, 'static'),
      'react-dom': '@hot-loader/react-dom'
    }
  }
};
