import {
  ADD_ERROR, FLUSH_ERRORS,
  ADD_SYSTEM_AC, ADD_SYSTEM_BATTERY, ADD_SYSTEM_LOCK, ADD_SYSTEM_UNLOCK, ADD_SYSTEM_SLEEP, ADD_SYSTEM_SHUTDOWN, ADD_SYSTEM_RESUME, FLUSH_SYSTEM_EVENTS
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

export function addError (context, error) {
  // TODO: Vérification des champs obligatoires.
  context.commit(ADD_ERROR, error)
}

export function flushErrors (context) {
  context.commit(FLUSH_ERRORS)
}

export function addSystemAc (context) {
  context.commit(ADD_SYSTEM_AC)
}

export function addSystemBattery (context) {
  context.commit(ADD_SYSTEM_BATTERY)
}

export function addSystemLock (context) {
  context.commit(ADD_SYSTEM_LOCK)
}

export function addSystemUnlock (context) {
  context.commit(ADD_SYSTEM_UNLOCK)
}

export function addSystemSleep (context) {
  context.commit(ADD_SYSTEM_SLEEP)
}

export function addSystemShutdown (context) {
  context.commit(ADD_SYSTEM_SHUTDOWN)
}

export function addSystemResume (context) {
  context.commit(ADD_SYSTEM_RESUME)
}

export function flushSystemEvents (context) {
  context.commit(FLUSH_SYSTEM_EVENTS)
}
