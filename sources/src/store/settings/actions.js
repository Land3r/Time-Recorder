import {
  ADD_DEFAULT_ACTIVITY, EDIT_DEFAULT_ACTIVITY, REMOVE_DEFAULT_ACTIVITY
} from './types'

export function addDefaultActivity (context, activity) {
  // TODO: Vérification des champs obligatoires.
  context.commit(ADD_DEFAULT_ACTIVITY, activity)
}

export function editDefaultActivity (context, activity) {
  context.commit(EDIT_DEFAULT_ACTIVITY, activity)
}

export function removeDefaultActivity (context, activityId) {
  context.commit(REMOVE_DEFAULT_ACTIVITY, activityId)
}
