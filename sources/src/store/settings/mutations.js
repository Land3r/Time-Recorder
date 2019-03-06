import {
  ADD_DEFAULT_ACTIVITY, EDIT_DEFAULT_ACTIVITY, REMOVE_DEFAULT_ACTIVITY,
  EDIT_EVENTS, TOGGLE_EVENT
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
  [ADD_DEFAULT_ACTIVITY] (state, activity) {
    state.defaultActivities.push(activity)
  },
  [EDIT_DEFAULT_ACTIVITY] (state, activity) {
    state.defaultActivities = [
      ...state.defaultActivities.filter((element) => element.id !== activity.id),
      activity
    ]
  },
  [REMOVE_DEFAULT_ACTIVITY] (state, id) {
    state.defaultActivities = [
      ...state.defaultActivities.filter((element) => element.id !== id)
    ]
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
  }
}
