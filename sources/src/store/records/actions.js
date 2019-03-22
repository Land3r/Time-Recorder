import {
  START_RECORD, EDIT_RECORD, END_RECORD,
  START_SEGMENT, EDIT_SEGMENT, END_SEGMENT, CANCEL_SEGMENT
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

export function startRecord (context, record) {
  // TODO: Vérification des champs obligatoires.
  context.commit(START_RECORD, record)
}

export function editRecord (context, record) {
  context.commit(EDIT_RECORD, record)
}

export function endRecord (context) {
  context.commit(END_RECORD)
}

export function startSegment (context, segment) {
  context.commit(START_SEGMENT, segment)
}

export function endSegment (context) {
  context.commit(END_SEGMENT)
}

export function editSegment (context, segment) {
  context.commit(EDIT_SEGMENT, segment)
}

export function cancelSegment (context) {
  context.commit(CANCEL_SEGMENT)
}
