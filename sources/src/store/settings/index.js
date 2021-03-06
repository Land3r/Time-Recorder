import defaultState from './state'
import * as getters from './getters'
import { mutations } from './mutations'
import * as actions from './actions'

export default {
  namespaced: true,
  getters,
  mutations: {
    ...mutations
  },
  actions,
  state: {
    ...defaultState()
  }
}
