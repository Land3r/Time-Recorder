import Vue from 'vue'
import Vuex from 'vuex'
import merge from 'merge-objects'
import isElectron from 'is-electron'
import { createPersistedState, createSharedMutations } from 'vuex-electron'

import application from './application'
import records from './records'
import projects from './projects'

Vue.use(Vuex)

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation
 */

/* Base configuration for all configurations */
const baseStoreConfig = {
  modules: {
    application,
    records,
    projects
  },
  strict: process.env.NODE_ENV !== 'production'
}

/* Electron specific configuration */
const electronStoreConfig = {
  plugins: [
    createPersistedState(),
    createSharedMutations()
  ]
}

/* SPA specific configuration */
const spaStoreConfig = {
}

const storeConfig = isElectron() ? merge(baseStoreConfig, electronStoreConfig) : merge(baseStoreConfig, spaStoreConfig)

export default function (/* { ssrContext } */) {
  const Store = new Vuex.Store(storeConfig)
  console.log(Store)
  return Store
}
