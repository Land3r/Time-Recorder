import { ADD_ERROR, FLUSH_ERRORS } from './types'

export default {
  [ADD_ERROR] (state, error) {
    state.errors.push(error)
  },
  [FLUSH_ERRORS] (state) {
    state.errors = []
  }
}
