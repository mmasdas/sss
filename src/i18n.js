import Vue from 'vue'
import VueI18n from 'vue-i18n'
// import enLocale from 'element-ui/lib/locale/lang/en'
// import zhLocale from 'element-ui/lib/locale/lang/zh-CN'
// import jaLocale from 'element-ui/lib/locale/lang/ja'
// const messages = {
//   en: {
//     message: 'hello',
//     ...enLocale // 或者用 Object.assign({ message: 'hello' }, enLocale)
//   },
//   zh: {
//     message: '你好',
//     ...zhLocale // 或者用 Object.assign({ message: '你好' }, zhLocale)
//   },
//   jp: {
//     message: 'こんにちは',
//     ...jaLocale // 或者用 Object.assign({ message: '你好' }, zhLocale)
//   }
// }

Vue.use(VueI18n)

function loadLocaleMessages() {
  const locales = require.context('./', true, /[A-Za-z0-9-_,\s]+\.json$/i)
  const messages = {}
  locales.keys().forEach(key => {
    const matched = key.match(/([A-Za-z0-9-_]+)\./i)
    if (matched && matched.length > 1) {
      const locale = matched[1]
      messages[locale] = locales(key)
    }
  })
  return messages
}

export default new VueI18n({
  locale: process.env.VUE_APP_I18N_LOCALE || 'en',
  fallbackLocale: process.env.VUE_APP_I18N_FALLBACK_LOCALE || 'en',
  messages: loadLocaleMessages(),
  // messages: messages
})
