import {
  ADD_DEFAULT_ACTIVITY, EDIT_DEFAULT_ACTIVITY, REMOVE_DEFAULT_ACTIVITY
} from './types'

export const mutations = {
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
  }
}
