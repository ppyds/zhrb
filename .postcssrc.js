// // https://github.com/michael-ciniawsky/postcss-load-config
//
// module.exports = {
//   "plugins": {
//     "postcss-import": {},
//     "postcss-url": {},
//     // to edit target browsers: use "browserslist" field in package.json
//     "autoprefixer": {}
//   }
// }


module.exports = {
  "plugins": {
    "postcss-import": {},
    "postcss-url": {},
    // to edit target browsers: use "browserslist" field in package.json
    // "autoprefixer": {},
    "postcss-aspect-ratio-mini": {},
    "postcss-px-to-viewport": {
      viewportWidth: 375,
      // viewportHeight: 1334,      // 视口高度，根据750设备的宽度来指定，也可以不设置
      unitPrecision: 3,       // 单位精度
      viewportUnit: 'vw',     // 单位名称
      selectorBlackList: [], // 拥有该类名的元素保留px单位
      minPixeValue: 2,  // 小于或等于1px不转换为视窗单位，也可以设置为想要的值
      mediaQuery: false, // 是否允许在媒体查询中转换px
      exclude: /node_modules|folder_name/i
    },
    "postcss-write-svg": {
      utf8: false
    },
    "postcss-cssnext": {},
    "cssnano": {
      preset: "advanced",
      autoprefixer: false,
      "postcss-zindex": false
    },
    "postcss-viewport-units": {}
  }
}
