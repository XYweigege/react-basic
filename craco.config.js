const path = require("path");
const addPath = (dir) => path.join(__dirname, dir);
const CracoLessPlugin = require("craco-less");
const { name } = require("./package.json");
const { whenProd } = require("@craco/craco");
// const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");
// @ts-ignore
const PORT = 9000;
let HOST = "127.0.0.1";
const publicPath = {
  development: `http://${HOST}:${PORT}`,
  production: `https://xxxxx/${name}`,
};

module.exports = {
  devServer: {
    port: PORT,
    client: {
      webSocketURL: {
        hostname: HOST,
      },
    },
  },
  webpack: {
    alias: {
      "@": addPath("src"),
    },
    configure: {
      output: {
        publicPath: publicPath[process.env.NODE_ENV] + "/",
        library: `${name}-[name]`,
        libraryTarget: "umd",
        chunkLoadingGlobal: `webpackJsonp_${name}`,
      },
      module: {},
    },
    plugins: [
      //   new BundleAnalyzerPlugin({
      //     analyzerMode: "server",
      //     analyzerHost: "127.0.0.1",
      //     analyzerPort: 8888,
      //     openAnalyzer: true, // 构建完打开浏览器
      //     reportFilename: path.resolve(__dirname, `analyzer/index.html`),
      //   }),
    ],
  },
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {},
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
