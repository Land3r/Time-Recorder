import {
  ADD_PROJECT, EDIT_PROJECT, REMOVE_PROJECT, GET_PROJECT,
  ADD_ACTIVITY, EDIT_ACTIVITY, REMOVE_ACTIVITY, GET_ACTIVITY,
  ADD_ERROR, FLUSH_ERRORS
} from './types'

export function addProject (context, project) {
  // TODO: Vérification des champs obligatoires.
  context.commit(ADD_PROJECT, project)
}

export function editProject (context, project) {
  // TODO: Vérification des champs obligatoires.
  context.commit(EDIT_PROJECT, project)
}

export function removeProject (context, projectId) {
  // TODO: Vérification des champs obligatoires.
  context.commit(REMOVE_PROJECT, projectId)
}

export function getProject (context, projectId) {
  // TODO: Vérification des champs obligatoires.
  context.commit(GET_PROJECT, projectId)
}

export function addActivity (context, activity) {
  // TODO: Vérification des champs obligatoires.
  context.commit(ADD_ACTIVITY, activity)
}

export function editActivity (context, activity) {
  // TODO: Vérification des champs obligatoires.
  context.commit(EDIT_ACTIVITY, activity)
}

export function removeActivity (context, activityId) {
  // TODO: Vérification des champs obligatoires.
  context.commit(REMOVE_ACTIVITY, activityId)
}

export function getActivity (context, activityId) {
  // TODO: Vérification des champs obligatoires.
  context.commit(GET_ACTIVITY, activityId)
}

export function addError (context, error) {
  context.commit(ADD_ERROR, error)
}

export function flushErrors (context) {
  context.commit(FLUSH_ERRORS)
}
