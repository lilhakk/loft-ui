const path = require('path');
const fs = require('fs');
const ErrorOverlayPlugin = require('error-overlay-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const autoprefixer = require('autoprefixer');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = env=> {
  const isEnvDevelopment = env === 'development';

  console.log(path.join(__dirname, './src'));
  console.log(path.join(__dirname, '../packages/react'));

  const plugins = [
    new ErrorOverlayPlugin(),
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      template: './public/index.html',
      minify: { collapseWhitespace: true }
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].css',
      chunkFilename: 'css/[name].chunk.css'
    }),
    autoprefixer
  ];

  return {
    name: 'src',
    entry: './src/index.js',
    output: {
      filename: 'bundle.js',
      path: path.join(__dirname, './build'),
      publicPath: '/'
    },
    resolve: {
      alias: {
        vue: 'vue/dist/vue.esm.js'
      },
      extensions: ['.js', '.jsx', '.vue', '.json']
    },
    module: {
      rules: [
        {
          test: /\.vue$/,
          loader: 'vue-loader'
        },
        {
          test: /(\.js|\.jsx)$/,
          include: [
            path.join(__dirname, './src'),
            path.join(__dirname, '../packages/react')
          ],
          loader: 'babel-loader',
          options: {
            ...JSON.parse(fs.readFileSync(path.resolve(__dirname, './.babelrc')))
          }
        },
        {
          test: /\.mdx?$/,
          use: [
            {
              loader: 'babel-loader',
              options: {
                ...JSON.parse(fs.readFileSync(path.resolve(__dirname, './.babelrc')))
              }
            },
            '@mdx-js/loader'
          ]
        },
        {
          test: /\.s[ac]ss$/i,
          use: [
            isEnvDevelopment && 'style-loader' || MiniCssExtractPlugin.loader,
            {
              loader: 'css-loader',
              options: {
                modules: {
                  localIdentName:
                    isEnvDevelopment
                      ? '[local]__[hash:base64:5]'
                      : '[hash:base64:5]'
                }
              }
            },
            {
              loader: 'postcss-loader',
              options: {
                plugins: ()=> [autoprefixer()]
              }
            },
            'sass-loader'
          ]
        },
        {
          test: /\.css$/i,
          use: [
            isEnvDevelopment && 'style-loader' || MiniCssExtractPlugin.loader,
            'css-loader'
          ]
        },
        {
          test: [/\.bmp$/, /\.webp$/, /\.gif$/, /\.jpe?g$/, /\.png$/, /\.eot$/, /\.ttf$/, /\.woff$/, /\.woff2$/],
          loader: 'url-loader',
          options: {
            name: 'res/[name].[hash:base64:3].[ext]',
            limit: 100
          }
        },
        {
          test: /\.svg$/,
          loader: 'svg-url-loader',
          options: {
            name: 'res/[name].[hash:base64:3].[ext]',
            limit: 1000
          }
        }
      ]
    },
    optimization: {
      minimize: !isEnvDevelopment,
      minimizer: [
        new TerserPlugin({
          terserOptions: {
            parse: {
              ecma: 8
            },
            compress: {
              ecma: 5,
              warnings: false,
              comparisons: false,
              inline: 2
            },
            mangle: {
              safari10: true
            },
            output: {
              ecma: 5,
              comments: false,
              ascii_only: true
            }
          },
          parallel: true,
          cache: true,
          extractComments: false
        }),
        new OptimizeCssAssetsPlugin({})
      ]
    },
    plugins,
    devServer: {
      publicPath: '/',
      contentBase: './public',
      historyApiFallback: true,
      overlay: true,
      compress: true,
      port: 3000,
      disableHostCheck: true
    },
    node: {
      fs: 'empty',
      __dirname: true
    }
  };
};
