import {
  START_RECORD, END_RECORD
} from './types'

export function startRecord (context, activity) {
  // TODO: Vérification des champs obligatoires.
  context.commit(START_RECORD, activity)
}

export function endRecord (context) {
  context.commit(END_RECORD)
}
