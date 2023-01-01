const path = require('path');

var LiveReloadPlugin = require('webpack-livereload-plugin');

const mode = 'production';

module.exports = {
  name: 'server',
  mode,
  entry: './server/index.ts',
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.ts?$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              [
                '@babel/preset-typescript',
                {
                  allExtensions: true,
                  isTSX: true,
                  targets: {
                    edge: '17',
                    firefox: '60',
                    chrome: '67',
                    safari: '11.1',
                  },
                  useBuiltIns: 'usage',
                  corejs: '3.6.5',
                },
              ],
            ],
          },
        },
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  target: 'node',
  output: {
    filename: 'server.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins:
    mode !== 'production'
      ? [
          new LiveReloadPlugin({
            port: 3000,
            protocol: 'https',
            hostname: 'localhost',
          }),
        ]
      : [],
};
