import {
  START_RECORD, END_RECORD,
  START_SEGMENT, EDIT_SEGMENT, END_SEGMENT, CANCEL_SEGMENT, EDIT_RECORD
} from './types'
import {
  RESET_STATE, IMPORT_STATE
} from '../types'
import initialState from './state'
import { SegmentFactory } from '../../domain/segment'
import { RecordFactory } from '../../domain/record'

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

    // Defaut record merged with props of record
    const newRecord = RecordFactory.Edit(
      RecordFactory.Create({
        startedAt: Date.now()
      }), {
        ...record
      })
    state.currentRecord = { ...newRecord }
  },
  [EDIT_RECORD] (state, record) {
    // Current record merged with props of record
    const editedRecord = RecordFactory.Edit(
      { ...state.currentRecord },
      {
        ...record
      })

    state.currentRecord = { ...editedRecord }
  },
  [END_RECORD] (state) {
    let endedAt = Date.now()

    const editedRecord = RecordFactory.Edit(
      { ...state.currentRecord },
      {
        endedAt: endedAt
      }
    )
    state.records.push({ ...editedRecord })
    state.isRecording = false
    state.currentRecord = null
  },
  [START_SEGMENT] (state, segment) {
    const startedAt = Date.now()

    // Defaut segment merged with props of segment
    const newSegment = SegmentFactory.Edit(
      SegmentFactory.Create({
        startedAt: startedAt
      }),
      { ...segment }
    )
    state.currentSegment = { ...newSegment }
  },
  [EDIT_SEGMENT] (state, segment) {
    // Current record merged with props of record
    const editedSegment = SegmentFactory.Edit(
      { ...state.currentSegment },
      {
        ...segment
      })
    state.currentSegment = { ...editedSegment }
  },
  [END_SEGMENT] (state) {
    let endedAt = Date.now()

    const editedSegment = RecordFactory.Edit(
      { ...state.currentSegment },
      {
        endedAt: endedAt
      }
    )
    if (state.currentRecord && state.currentRecord.segments) {
      state.currentRecord.segments.push({ ...editedSegment })
    } else {
      console.error('Cannot save segment because no active record was found')
    }
    state.currentSegment = null
  },
  [CANCEL_SEGMENT] (state) {
    state.currentSegment = null
  }
}
