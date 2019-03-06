import {
  ADD_PROJECT, EDIT_PROJECT, REMOVE_PROJECT,
  ADD_PROJECT_ACTIVITY, EDIT_PROJECT_ACTIVITY, REMOVE_PROJECT_ACTIVITY
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
  [ADD_PROJECT] (state, project) {
    state.projects.push(project)
  },
  [EDIT_PROJECT] (state, project) {
    state.projects = [
      ...state.projects.filter((element) => element.id !== project.id),
      project
    ]
  },
  [REMOVE_PROJECT] (state, id) {
    state.projects = [
      ...state.projects.filter((element) => element.id !== id)
    ]
  },
  [ADD_PROJECT_ACTIVITY] (state, projectId, activity) {
    let currentProject = state.projects.find((element) => element.id === projectId)
    currentProject.activities.push(activity)

    state.projects = [
      ...state.projects.filter((element) => element.id !== projectId),
      currentProject
    ]
  },
  [EDIT_PROJECT_ACTIVITY] (state, projectId, activity) {
    state.projects = [
      ...state.projects.filter((element) => element.id !== projectId),
      {
        ...state.projects.filter((element) => element.id === projectId),
        'activities': [
          ...state.projects.filter((element) => element.id !== projectId).activities,
          activity
        ]
      }
    ]
  },
  [REMOVE_PROJECT_ACTIVITY] (state, projectId, id) {
    state.projects = [
      ...state.projects.filter((element) => element.id !== projectId),
      {
        ...state.projects.filter((element) => element.id === projectId),
        'activities': [
          ...state.projects.filter((element) => element.id !== id).activities
        ]
      }
    ]
  }
}
