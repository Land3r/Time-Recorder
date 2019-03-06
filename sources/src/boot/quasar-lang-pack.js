import { Quasar } from 'quasar'

export default async () => {
  // TODO: ... some logic to determine it (use Cookies Plugin?)
  const langIso = 'fr'

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
