const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
    //關閉eslint
    lintOnSave: false,
    transpileDependencies: true,

    pluginOptions: {
        i18n: {
            locale: 'zh',
            fallbackLocale: 'en',
            localeDir: 'locales',
            enableLegacy: true,
            runtimeOnly: false,
            compositionOnly: true,
            fullInstall: true
        }
    }
})