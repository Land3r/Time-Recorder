export function getState (state) {
  return {
    settings: state
  }
}

export function getCalendarSettings (state) {
  return {
    ...state.calendar,
    locale: state.lang
  }
}
