const path = require('path');
var LiveReloadPlugin = require('webpack-livereload-plugin');
module.exports = {
  name: 'client',
  entry: './client-source/index.tsx',
  devtool: 'inline-source-map',
  mode: 'development',
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
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  target: 'node',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new LiveReloadPlugin({
      port: 4000,
      protocol: 'https',
      hostname: 'localhost',
    }),
  ],
};
