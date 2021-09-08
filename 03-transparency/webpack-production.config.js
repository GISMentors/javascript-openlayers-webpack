const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader')

module.exports = {
  mode: 'production',
  entry: './src/index.js',
  resolve: {
        alias: {
                'vue$': 'vue/dist/vue.esm.js'
        }
  },
  plugins: [
     new HtmlWebpackPlugin({
       title: 'Vue switcher',
       template: "src/index.html",
     }),
     new VueLoaderPlugin({
     }),
   ],
   module: {
        rules: [
                {
                        test: /\.css$/i,
                        use: ['style-loader', 'css-loader']
                },
                {
                        test: /\.vue$/i,
                        use: ['vue-loader']
                },
                {
                        test: /\.(json|geojson)$/i,
                        use: ['json-loader']
                }
        ]
   },
  output: {
    filename: '[name].js',
    publicPath: '/javascript-openlayers-webpack/',
    path: path.resolve(__dirname, 'dist'),
    clean:true
  },
};
