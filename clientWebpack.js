const path = require('path');
var LiveReloadPlugin = require('webpack-livereload-plugin');
const mode = 'production';
module.exports = {
  name: 'client',
  entry: './client-source/index.tsx',
  devtool: 'inline-source-map',
  mode,
  module: {
    rules: [
      {
        test: /\.css$/i,
        include: path.resolve(__dirname, 'client-source'),
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
      {
        test: /\.(ts|tsx)$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [['@babel/preset-typescript'], ['@babel/preset-react']],
          },
        },
      },
      // {
      //   test: /\.(png|svg|jpg|gif|jpe?g)$/,
      //   include: path.resolve(__dirname, 'client-source/photos'),
      //   use: [
      //     {
      //       options: {
      //         name: '[name].[ext]',
      //         outputPath: path.resolve(__dirname, 'dist/images'),
      //       },
      //       loader: 'file-loader',
      //     },
      //   ],
      // },
      {
        test: /\.html$/i,
        type: 'asset/resource',
        generator: {
          filename: '[name][ext]',
        },
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.png', '.css'],
  },
  target: 'node',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins:
    mode !== 'production'
      ? [
          new LiveReloadPlugin({
            port: 4000,
            protocol: 'https',
            hostname: 'localhost',
          }),
        ]
      : [],
};
