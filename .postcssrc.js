// https://github.com/michael-ciniawsky/postcss-load-config

module.exports = {
  "plugins": {
    "postcss-import": {},
    "postcss-url": {},
    // to edit target browsers: use "browserslist" field in package.json
    "postcss-aspect-ratio-mini":{},
    "postcss-write-svg":{
      utf8:false
    },
    "postcss-cssnext":{},
    "postcss-px-to-viewport":{
      viewportWidth: 750, // (Number) The width of the viewport.
      viewportHeight: 1334, // (Number) The height of the viewport.
      unitPrecision: 3, // px 转 视窗单位的 小数位数
      viewportUnit: 'vw', // 希望转成哪种视窗单位  推荐vw
      selectorBlackList: ['.ignore', '.hairlines'], //指定不转换为视窗单位的类，可以自定义，可以无限添加,建议定义一至两个通用的类名,hairlines一般用于设置border-width:0.5px的元素中著作权归作者所有。
      minPixelValue: 1, // (Number) Set the minimum pixel value to replace.
      mediaQuery: false // (Boolean) Allow px to be converted in media queries.
    },
    "postcss-viewport-units":{},
    "cssnano": { //清理压缩css
      preset: "advanced",
      autoprefixer: false,//由于cssnext和cssnano都具有autoprefixer
      "postcss-zindex": false
    }
  }
}

/*
autoprefixer:在配置的时候，未显示的配置相关参数的话，表示使用的是package.json  里的browserslist指定的列表参数，你也可以像这样来指定last 2 versions 或者 > 5%
* */

//npm i postcss-aspect-ratio-mini postcss-px-to-viewport postcss-write-svg postcss-cssnext postcss-viewport-units cssnano --S


/**上面解决了px到vw的转换计算。那么在哪些地方可以使用vw来适配我们的页面。根据相关的测试：
容器适配，可以使用vw
文本的适配，可以使用vw
大于1px的边框、圆角、阴影都可以使用vw
内距和外距，可以使用vw
**/
