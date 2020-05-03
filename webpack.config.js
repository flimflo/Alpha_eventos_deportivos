const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')


module.exports = {
  mode: 'development',
  devtool: 'eval-source-map',
  entry: {
    components: './src/components/index.js',
    'admin-app': './src/admin-app/index.js',
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    modules: ['node_modules'],
    alias: { vue: 'vue/dist/vue.esm.js' }
  },
  module: {
    rules: [
      // ... other rules
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader'
        ]
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin()
  ],
  devServer: {
    contentBase: path.join(__dirname, '/'),
    compress: true,
    port: 9000
  }
};