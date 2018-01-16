const path    = require('path'),
      webpack = require('webpack');

module.exports = {
  entry: './src/main.ts',
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/dist/',
    filename: 'build.js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader'
        ],
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        // options: {
        //   loaders: {
            // Since sass-loader (weirdly) has SCSS as its default parse mode, we map
            // the "scss" and "sass" values for the lang attribute to the right configs here.
            // other preprocessors should work out of the box, no loader config like this necessary.
            // 'scss': [
            //   'vue-style-loader',
            //   'css-loader',
            //   'sass-loader'
            // ],
            // 'sass': [
            //   'vue-style-loader',
            //   'css-loader',
            //   'sass-loader?indentedSyntax'
            // ]
          // }
          // other vue-loader options go here
        // }
      },
      {
        test: /\.js$/,
        // loader: 'babel-loader',
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          "plugins": [
            "transform-decorators-legacy",
            ["transform-class-properties", { "spec": true }]
          ],
          "presets": [
            "@babel/preset-env",
            "@babel/preset-typescript",
          ],
          "comments": false,
        }
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]'
        }
      },
      {
        test: /\.ts$/,
        loader: 'ts-loader',
        options: {
          appendTsSuffixTo: [/\.vue$/]
        }
      }
    ]
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    },
    extensions: ['*', '.js', '.vue', '.json', '.ts']
  },
  devServer: {
    historyApiFallback: true,
    noInfo: true,
    overlay: true,
    watchOptions: {
      aggregateTimeout: 300,
    }
  },
  performance: {
    hints: false
  },
  devtool: '#eval-source-map'
};

if (process.env.NODE_ENV === 'production') {
  module.exports.devtool = '#source-map'
  // http://vue-loader.vuejs.org/en/workflow/production.html
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    // new webpack.optimize.UglifyJsPlugin({
    //   sourceMap: true,
    //   compress: {
    //     warnings: false
    //   }
    // }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    })
  ]);
}
