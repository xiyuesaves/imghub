const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  pluginOptions: {
    electronBuilder: {
      nodeIntegration: true,
      externals: ['better-sqlite3']
    }
  },
  css: {
    loaderOptions: {
      sass: {
        additionalData: `@import "./src/assets/scss/style.scss";`
      }
    }
  },
  configureWebpack: config => {
    config.externals = {
      'better-sqlite3': 'commonjs better-sqlite3'
    };
  },
})
