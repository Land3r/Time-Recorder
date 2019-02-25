import {
  ADD_PROJECT, EDIT_PROJECT, REMOVE_PROJECT, GET_PROJECT,
  ADD_ACTIVITY, EDIT_ACTIVITY, REMOVE_ACTIVITY, GET_ACTIVITY,
  ADD_ERROR, FLUSH_ERRORS
} from './types'

export function [ADD_PROJECT] (state, project) {
  state.projects.push(project)
}

export function [ADD_ACTIVITY] (state, activity) {
  state.projects.push(project)
}
