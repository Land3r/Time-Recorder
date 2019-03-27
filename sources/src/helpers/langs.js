import { LangOptions } from '../data/langs'

export function getLangOption (value) {
  return LangOptions.filter(element => element.value === value)[0]
}
