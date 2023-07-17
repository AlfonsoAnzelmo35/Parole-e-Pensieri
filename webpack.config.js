
const {BundleAnalyzerPlugin} = require("webpack-bundle-analyzer") ;
const path = require('path');
module.exports = {
  mode: 'development',
  entry:{
    a: './src/fileEntry.js',
    b: './src/fileEntry2.js',//entry per commenta.html
    c: './src/registrati.js' // entry per registrati.html
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
  },
  devServer: {
    static: './dist',
  },
  module: {
    rules: [
      {//style loader
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {//loader immagini(built-in)
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {//loader html
        test: /\.html$/i,
        loader: "html-loader",
      },
      
    ],    
  },
  plugins:[
    //new BundleAnalyzerPlugin()
  ],
};
