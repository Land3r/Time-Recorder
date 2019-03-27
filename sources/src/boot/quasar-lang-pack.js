import { Quasar } from 'quasar'
import getStore from '../store'

let store = getStore()
const langIso = store.state.settings.lang

export default async () => {
  try {
    await import(`quasar/lang/${langIso}`)
      .then(lang => {
        Quasar.lang.set(lang.default)
      })
  } catch (err) {
    // Requested Quasar Language Pack does not exist,
    // let's not break the app, so catching error
  }
}
