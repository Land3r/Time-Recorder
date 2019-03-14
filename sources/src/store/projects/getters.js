export function getState (state) {
  return {
    projects: state
  }
}

export function getActivity (state) {
  return activityid => {
    const activities = [...state.projects.map(element => element.activities)]

    console.log(activities)
  }
}
