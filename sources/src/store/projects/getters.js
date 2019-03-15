export function getState (state) {
  return {
    projects: state
  }
}

export function getActivityFullName (state) {
  return activityid => {
    let result = null
    console.log('Target', activityid)
    const activityFullName = state.projects.map(element => {
      const activities = element.activities.filter(activity => activity.id === activityid)
      if (activities.length > 0) {
        console.log('Activity found')
        result = `${element.name} : ${activities[0].name}`
      }
    })

    console.log(activityFullName)
    return 'test'
  }
}
