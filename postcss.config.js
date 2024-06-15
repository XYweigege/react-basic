module.exports = {
  plugins: [
    require("postcss-preset-env"),
    require("postcss-env-function")({
      // @ts-ignore
      env: {
        width: "max-width",
        value: "1440px",
      },
    }),
    require("postcss-pxtorem")({
      rootValue: 14.4,
      unitPrecision: 2,
      minPixelValue: 3,
      propList: ["*"],
      exclude: /node_modules/i,
    }),
    require("tailwindcss"), // 添加 Tailwind CSS 插件
    require("autoprefixer"), // 添加 Autoprefixer 插件
  ],
};
