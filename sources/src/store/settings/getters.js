export function orderedDefaultActivities (state) {
  // .concat() is used to generate a new array and do not mutate the original state array.
  return state.defaultActivities.concat().sort((element1, element2) => {
    return element1.order < element2.order
  })
}

export function getNextDefaultActivityId (state) {
  return Math.max(state.defaultActivities.map((element) => element.id) + 1)
}

export function getNextDefaultActivityOrder (state) {
  return Math.max(state.defaultActivities.map((element) => element.order) + 1)
}
