const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
  entry: './src/index.js',
  mode: "development",
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean:true
  },
  plugins: [
     new HtmlWebpackPlugin({
       title: 'Output Management',
       template: "src/index.html",
     }),
   ],
   module: {
        rules: [
                {
                        test: /\.css$/i,
                        use: ['style-loader', 'css-loader']
                }
        ]
   }
};
