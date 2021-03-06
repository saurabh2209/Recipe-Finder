var webpack = require('webpack');

module.exports = {
  entry: [
    'script!jquery/dist/jquery.min.js',
    'script!foundation-sites/dist/foundation.min.js',
    './public/app.jsx'
  ],
  externals: {
    jquery: 'jQuery'
  },
  plugins: [
    new webpack.ProvidePlugin({
      '$': 'jquery',
      'jQuery': 'jquery'
    })
  ],
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  resolve: {
    root: __dirname,
    alias: {
     Main:'components/Main.jsx',
     SearchRecipe:'components/SearchRecipe.jsx',
     ListRecipe:'components/ListRecipe.jsx',
     RecipeItem:'components/RecipeItem.jsx'
    },
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      
      {
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-2']
        },
        test: /\.jsx?$/,
        
        exclude: /(node_modules|bower_components)/
      },
      {loader:'style-loader!css-loader',test: /\.css?$/}
        
     
    ],
   
  },
  devtool: 'cheap-module-eval-source-map'
};
