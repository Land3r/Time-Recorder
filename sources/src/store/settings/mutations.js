import {
  SET_USERNAME,
  SET_LANG,
  SET_DATEFORMAT,
  EDIT_EVENTS, TOGGLE_EVENT,
  ADD_DEFAULT_ACTIVITY, EDIT_DEFAULT_ACTIVITY, REMOVE_DEFAULT_ACTIVITY, SET_DEFAULT_ACTIVITIES,
  SET_OBJECTIVE
} from './types'
import {
  RESET_STATE, IMPORT_STATE
} from '../types'
import initialState from './state'

export const mutations = {
  [RESET_STATE] (state) {
    const initial = initialState()
    Object.keys(initial).forEach(key => {
      state[key] = initial[key]
    })
  },
  [IMPORT_STATE] (state, importedState) {
    Object.keys(importedState).forEach(key => {
      state[key] = importedState[key]
    })
  },
  [SET_USERNAME] (state, username) {
    state.username = username
  },
  [SET_LANG] (state, lang) {
    state.lang = lang
  },
  [SET_DATEFORMAT] (state, dateFormat) {
    state.dateFormat = dateFormat
  },
  [EDIT_EVENTS] (state, events) {
    state.events = {
      ...state.events,
      ...events
    }
  },
  [TOGGLE_EVENT] (state, event) {
    state.events = {
      ...state.events,
      event: !state.events[event]
    }
  },
  [ADD_DEFAULT_ACTIVITY] (state, activity) {
    state.defaultActivities.push(activity)
  },
  [EDIT_DEFAULT_ACTIVITY] (state, activity) {
    let index = state.defaultActivities.findIndex(e => e.id === activity.id)
    state.defaultActivities[index] = {
      ...activity
    }
  },
  [REMOVE_DEFAULT_ACTIVITY] (state, id) {
    state.defaultActivities = [
      ...state.defaultActivities.filter((element) => element.id !== id)
    ]
  },
  [SET_DEFAULT_ACTIVITIES] (state, defaultActivities) {
    state.defaultActivities = [
      ...defaultActivities
    ]
  },
  [SET_OBJECTIVE] (state, objective) {
    state.objective = objective
  }
}
