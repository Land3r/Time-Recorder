import {
  START_RECORD, END_RECORD
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

export function startRecord (context, activity) {
  // TODO: Vérification des champs obligatoires.
  context.commit(START_RECORD, activity)
}

export function endRecord (context) {
  context.commit(END_RECORD)
}
