import { SystemEventTypeOptions } from '../data/system-events'

export function getIcon (name) {
  return SystemEventTypeOptions.filter(element => element.name === name)[0].icon
}
