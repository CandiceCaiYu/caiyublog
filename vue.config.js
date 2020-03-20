const path = require('path')
function resolve(dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  outputDir: 'dist',
  assetsDir: 'assets',
  lintOnSave: 'error',
  configureWebpack: config => {
    config.resolve.alias = {
      '@src' : path.resolve(__dirname, './src'),
      '@views' : path.resolve(__dirname, './src/views'),
      '@comp' : path.resolve(__dirname, './src/components')
    }
  },
  css: {
    requireModuleExtension: false,
    loaderOptions: {
      less: {
        includePaths: [resolve('./src')]
      }
    }
  }
}