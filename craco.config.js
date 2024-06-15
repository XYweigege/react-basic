const path = require('path')
const addPath = dir => path.join(__dirname, dir)
const CracoLessPlugin = require('craco-less')
const { name } = require('./package.json')
const { whenProd } = require('@craco/craco')
const postcssPresetEnv = require('postcss-preset-env')
const postcssEnvFunction = require('postcss-env-function')
const postcssPxtorem = require('postcss-pxtorem')
const tailwindcss = require('tailwindcss')
const autoprefixer = require('autoprefixer')
// const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");
// @ts-ignore
const PORT = 9000
let HOST = '127.0.0.1'
const publicPath = {
  development: `http://${HOST}:${PORT}`,
  production: `https://xxxxx/${name}`
}

module.exports = {
  devServer: {
    port: PORT,
    client: {
      webSocketURL: {
        hostname: HOST
      }
    }
  },
  webpack: {
    alias: {
      '@': addPath('src')
    },
    configure: {
      output: {
        publicPath: publicPath[process.env.NODE_ENV] + '/',
        library: `${name}-[name]`,
        libraryTarget: 'umd',
        chunkLoadingGlobal: `webpackJsonp_${name}`
      },
      module: {}
    },
    plugins: [
      //   new BundleAnalyzerPlugin({
      //     analyzerMode: "server",
      //     analyzerHost: "127.0.0.1",
      //     analyzerPort: 8888,
      //     openAnalyzer: true, // 构建完打开浏览器
      //     reportFilename: path.resolve(__dirname, `analyzer/index.html`),
      //   }),
      require('tailwindcss'), // 引入 Tailwind CSS
      require('autoprefixer') // 自动添加前缀
      // 可以在这里添加其他 PostCSS 插件
    ]
  },
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {},
            javascriptEnabled: true
          }
        }
      }
    }
  ],
  style: {
    postcss: {
      mode: 'extends',
      loaderOptions: (postcssLoaderOptions, { env, paths }) => {
        postcssLoaderOptions.postcssOptions.plugins = [
          ...postcssLoaderOptions.postcssOptions.plugins,
          [
            'autoprefixer',
            {
              overrideBrowserslist: [
                'last 2 version',
                '>1%',
                'Android >= 4.0',
                'iOS >= 7'
              ]
            }
          ],
          [
            'postcss-pxtorem',
            {
              rootValue({ file }) {
                // return file.indexOf('antd-mobile') > -1 ? 37.5 : 75;
                return 14.5
              },
              unitPrecision: 2, //只转换到两位小数
              propList: ['*']
            }
          ]
        ]
        return postcssLoaderOptions
      }
    }
  }
}
