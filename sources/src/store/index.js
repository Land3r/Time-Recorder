import Vue from 'vue'
import Vuex from 'vuex'

import application from './application'
import projects from './projects'

Vue.use(Vuex)

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation
 */

export default function (/* { ssrContext } */) {
  const Store = new Vuex.Store({
    modules: {
      application,
      projects
    }
  })

  return Store
}
