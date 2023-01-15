const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: {
      '^/api': {
        target: 'http://jsonplaceholder.typicode.com',
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          "^/api": ""
        }
      },
      '^/code4func': {
        target: 'https://freeapi.code4func.com/api/v1'
      }
    }
  }
})
