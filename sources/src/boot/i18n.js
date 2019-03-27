import VueI18n from 'vue-i18n'
import messages from 'src/i18n'
import getStore from '../store'

let i18n
let store = getStore()
const langIso = store.state.settings.lang

export default async ({ app, Vue }) => {
  Vue.use(VueI18n)

  // Set i18n instance on app
  app.i18n = new VueI18n({
    locale: langIso,
    fallbackLocale: 'en-us',
    messages
  })
  i18n = app.i18n
}

export { i18n }
