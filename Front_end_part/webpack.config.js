const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


module.exports = {
  entry: ['./templates/app.js', './templates/styles.less'],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
   module: {
        rules: [

            {
                test:/\.(less|css)$/,
                use: [
                       MiniCssExtractPlugin.loader,
                       'css-loader',
                       'less-loader'
                ]
          },
             {
                 test: /\.js$/,
                 use: {
                    loader: 'babel-loader'
                }
             }
        ]
    },

  plugins: [
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        }),
        new MiniCssExtractPlugin({
        filename: "styles.css",
        chunkFilename: '[id].css',
         })
        ]
}


