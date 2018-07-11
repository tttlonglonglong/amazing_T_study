const path = require('path')

const resolve = p => path.resolve(__dirname, '../', p)

// 不同版本vuejs，resolve的不同打包方式
// alias提供到 真实文件地址的映射关系
module.exports = {
  vue: resolve('src/platforms/web/entry-runtime-with-compiler'),
  compiler: resolve('src/compiler'),
  core: resolve('src/core'),
  shared: resolve('src/shared'),
  web: resolve('src/platforms/web'),
  weex: resolve('src/platforms/weex'),
  server: resolve('src/server'),
  entries: resolve('src/entries'),
  sfc: resolve('src/sfc')
}
