import { i18n } from '../boot/i18n'

export const Lang = {
  fr: 'fr',
  en: 'en-us'
}

export const LangOptions = [
  {
    label: i18n.t('langs.fr'),
    value: Lang.fr,
    icon: 'fr'
  },
  {
    label: i18n.t('langs.en'),
    value: Lang.en,
    icon: 'en'
  }
]
