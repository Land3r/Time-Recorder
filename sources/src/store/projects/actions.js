import {
  ADD_PROJECT, EDIT_PROJECT, REMOVE_PROJECT,
  ADD_PROJECT_ACTIVITY, EDIT_PROJECT_ACTIVITY, REMOVE_PROJECT_ACTIVITY
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

export function addProjectActivity (context, projectId, activity) {
  // TODO: Vérification des champs obligatoires.
  context.commit(ADD_PROJECT_ACTIVITY, projectId, activity)
}

export function editProjectActivity (context, projectId, activity) {
  // TODO: Vérification des champs obligatoires.
  context.commit(EDIT_PROJECT_ACTIVITY, projectId, activity)
}

export function removeProjectActivity (context, projectId, activityId) {
  // TODO: Vérification des champs obligatoires.
  context.commit(REMOVE_PROJECT_ACTIVITY, projectId, activityId)
}
