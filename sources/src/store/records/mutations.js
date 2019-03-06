import {
  START_RECORD, END_RECORD
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
  [START_RECORD] (state, activity) {
    state.isRecording = true
    state.currentRecord = {
      startedAt: Date.now(),
      activity: activity
    }
  },
  [END_RECORD] (state) {
    let endedAt = Date.now()
    state.records.push({
      ...state.currentRecord,
      endedAt: endedAt
    })
    state.isRecording = false
  }
}
