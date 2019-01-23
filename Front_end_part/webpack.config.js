var path = require('path');
var webpack = require('webpack');
var MiniCssExtractPlugin = require('mini-css-extract-plugin');


module.exports = {
  entry: ['./templates/app.js', './templates/styles.less'],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
   module: {
        rules: [

            {
                test:/\.(less|css)$/, // .less and .css
                use: [
                       MiniCssExtractPlugin.loader,
                       'css-loader',
                       'less-loader'
                ]
          }
        ]
    },

  plugins: [
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        }),
        new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
        filename: "styles.css",
        chunkFilename: '[id].css',
         })
        ]
}


