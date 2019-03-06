export function orderedProjects (state) {
  // .concat() is used to generate a new array and do not mutate the original state array.
  return state.projects.concat().sort((element1, element2) => {
    return element1.order > element2.order
  })
}

export function getNextProjectId (state) {
  return Math.max(state.projects.map((element) => element.id) + 1)
}

export function getNextProjectOrder (state) {
  return Math.max(state.projects.map((element) => element.order) + 1)
}
