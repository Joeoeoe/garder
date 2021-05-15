module.exports = {
  mode: 'production',
  output: {
    path: `${__dirname}/dist`,
    filename: 'garder-core.js',
    library: 'Watch',
    libraryTarget: 'umd',
    globalObject: 'this',
  },
  entry: `${__dirname}/src/index.ts`,
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'ts-loader',
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.ts'],
  },
};
