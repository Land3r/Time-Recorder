import {
  START_RECORD, END_RECORD
} from './types'

export default {
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
