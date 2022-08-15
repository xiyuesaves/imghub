const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  pluginOptions: {
    electronBuilder: {
      nodeIntegration: true
    }
  },
  css: {
    loaderOptions: {
       sass: {
           additionalData:`@import "./src/assets/scss/style.scss";` 
           }
       }
   }
})
