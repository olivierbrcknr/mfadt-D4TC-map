// next.config.js

// make css accessible
const withCSS = require('@zeit/next-css')

module.exports =
  withCSS({
    exportTrailingSlash: true,
      exportPathMap: function() {
      return {
        '/': { page: '/' },
      };
    },
    webpack(config, options) {

      config.module.rules.push({
        test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 100000,
            name: '[name].[ext]',
            esModule: false,
          },
        }
      })

      config.module.rules.push({
        test: /\.(mp4)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]'
            }
          }
        ]
      })

      config.module.rules.push({
        test: /\.md$/,
        use: 'raw-loader'
      })

      return config
    },
  });
