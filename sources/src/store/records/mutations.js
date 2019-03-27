import {
  START_RECORD, END_RECORD,
  START_SEGMENT, EDIT_SEGMENT, END_SEGMENT, CANCEL_SEGMENT, EDIT_RECORD
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
  [START_RECORD] (state, record) {
    state.isRecording = true
    state.currentRecord = {
      segments: [],
      comment: '',
      ...record,
      startedAt: Date.now()
    }
  },
  [EDIT_RECORD] (state, record) {
    state.currentRecord = {
      ...state.currentRecord,
      ...record
    }
  },
  [END_RECORD] (state) {
    let endedAt = Date.now()
    state.records.push({
      ...state.currentRecord,
      endedAt: endedAt
    })
    state.isRecording = false
    state.currentRecord = null
  },
  [START_SEGMENT] (state, segment) {
    let startedAt = Date.now()
    state.currentSegment = {
      ...segment,
      startedAt: startedAt
    }
  },
  [EDIT_SEGMENT] (state, segment) {
    state.currentSegment = {
      ...state.currentSegment,
      ...segment
    }
  },
  [END_SEGMENT] (state) {
    let endedAt = Date.now()
    state.currentSegment = {
      ...state.currentSegment,
      endedAt: endedAt
    }
    state.currentRecord.segments.push(state.currentSegment)
    state.currentSegment = null
  },
  [CANCEL_SEGMENT] (state) {
    state.currenSegment = null
  }
}
