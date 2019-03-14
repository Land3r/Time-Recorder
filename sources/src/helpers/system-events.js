import systemEvents from '../data/system-events'

export function getIcon (name) {
  return systemEvents.filter(element => element.name === name)[0].icon
}
