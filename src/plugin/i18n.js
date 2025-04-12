// i18n-plugin.js
export default {
  install: (app, translations) => {
    app.config.globalProperties.$translate = (key) => {
      return key.split('.').reduce((dict, k) => dict[k], translations)
    }
  }
}