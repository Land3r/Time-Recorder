export function getState (state) {
  return {
    records: state
  }
}

export function getRecordIcon (state) {
  return state.isRecording ? 'timer' : 'timer_off'
}

export function getRecordStatusClass (state) {
  return state.isRecording ? 'record-status bg-red blink' : 'record-status bg-grey'
}

export function isInSegment (state) {
  return state.currentSegment !== null
}

export function getCurrentSegmentActivityName (state) {
  return `${state.currentSegment.project} : ${state.currentSegment.activity}`
}
