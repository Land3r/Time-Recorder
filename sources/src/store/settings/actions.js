import {
  SET_USERNAME,
  SET_LANG,
  SET_DATEFORMAT,
  EDIT_EVENTS, TOGGLE_EVENT,
  ADD_DEFAULT_ACTIVITY, EDIT_DEFAULT_ACTIVITY, REMOVE_DEFAULT_ACTIVITY, SET_DEFAULT_ACTIVITIES,
  SET_OBJECTIVE
} from './types'
import {
  RESET_STATE, IMPORT_STATE
} from '../types'

export function resetState (context) {
  context.commit(RESET_STATE)
}

export function importState (context, importedState) {
  context.commit(IMPORT_STATE, importedState)
}

export function setUsername (context, username) {
  context.commit(SET_USERNAME, username)
}

export async function setLang (context, lang) {
  // Note that quasar lang should be changed before
  context.commit(SET_LANG, lang)
}

export function setDateFormat (context, dateFormat) {
  context.commit(SET_DATEFORMAT, dateFormat)
}

export function editEvents (context, events) {
  context.commit(EDIT_EVENTS, events)
}

export function toggleEvent (context, event) {
  context.commit(TOGGLE_EVENT, event)
}

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

export function setDefaultActivities (context, activities) {
  context.commit(SET_DEFAULT_ACTIVITIES, activities)
}

export function setObjective (context, objective) {
  context.commit(SET_OBJECTIVE, objective)
}
