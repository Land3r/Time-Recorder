import {
  ADD_ERROR, FLUSH_ERRORS,
  ADD_SYSTEM_AC, ADD_SYSTEM_BATTERY, ADD_SYSTEM_LOCK, ADD_SYSTEM_UNLOCK, ADD_SYSTEM_RESUME, ADD_SYSTEM_SHUTDOWN, ADD_SYSTEM_SLEEP, FLUSH_SYSTEM_EVENTS
} from './types'

export const mutations = {
  [ADD_ERROR] (state, error) {
    state.errors.push(error)
  },
  [FLUSH_ERRORS] (state) {
    state.errors = []
  },
  [ADD_SYSTEM_AC] (state) {
    let time = Date.now()
    state.events.push({
      'name': 'ac',
      'occuredAt': time
    })
  },
  [ADD_SYSTEM_BATTERY] (state) {
    let time = Date.now()
    state.events.push({
      'name': 'battery',
      'occuredAt': time
    })
  },
  [ADD_SYSTEM_LOCK] (state) {
    let time = Date.now()
    state.events.push({
      'name': 'lock',
      'occuredAt': time
    })
  },
  [ADD_SYSTEM_UNLOCK] (state) {
    let time = Date.now()
    state.events.push({
      'name': 'unlock',
      'occuredAt': time
    })
  },
  [ADD_SYSTEM_RESUME] (state) {
    let time = Date.now()
    state.events.push({
      'name': 'resume',
      'occuredAt': time
    })
  },
  [ADD_SYSTEM_SHUTDOWN] (state) {
    let time = Date.now()
    state.events.push({
      'name': 'shutdown',
      'occuredAt': time
    })
  },
  [ADD_SYSTEM_SLEEP] (state) {
    let time = Date.now()
    state.events.push({
      'name': 'sleep',
      'occuredAt': time
    })
  },
  [FLUSH_SYSTEM_EVENTS] (state) {
    state.events = []
  }
}
