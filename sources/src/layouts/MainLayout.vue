<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated class="header">
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          aria-label="Menu"
        >
          <q-icon name="menu" />
        </q-btn>

        <q-toolbar-title>
          Time Recorder
        </q-toolbar-title>

        <div>Using quasar v{{ $q.version }}</div>
          <q-btn flat round dense icon="settings" class="can-rotate on-hover-rotate-180">
            <q-menu
              transition-show="jump-down"
              transition-hide="jump-up"
            >
              <q-list style="min-width: 200px">
                <q-item clickable to="/settings" v-close-menu>
                  <q-item-section avatar>
                    <q-icon name="settings" />
                  </q-item-section>
                  <q-item-section>Paramètres</q-item-section>
                </q-item>
                <q-separator />
                <q-item clickable v-close-menu @click="requestCloseApplication()">
                  <q-item-section avatar>
                    <q-icon name="close" />
                  </q-item-section>
                  <q-item-section>Exit</q-item-section>
                </q-item>
              </q-list>
            </q-menu>
          </q-btn>
      </q-toolbar>
      <app-breadcrumbs v-bind:items="breadcrumbs" />
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      bordered
      content-class="bg-grey-2"
    >
      <q-list>
        <q-item-label header>Time Recorder</q-item-label>
        <q-separator />
        <q-item clickable tag="a" to="/recorder">
          <q-item-section avatar>
            <q-icon :name="getRecordIcon" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Enregisteur</q-item-label>
          </q-item-section>
        </q-item>
        <q-separator />
        <q-item clickable tag="a" to="/index">
          <q-item-section avatar>
            <q-icon name="dashboard" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Accueil</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable tag="a" to="/projects">
          <q-item-section avatar>
            <q-icon name="business" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Projets</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable tag="a" to="charts">
          <q-item-section avatar>
            <q-icon name="donut_small" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Graphiques</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable tag="a" to="/record">
          <q-item-section avatar>
            <q-icon name="business" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Enregistrement</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
      <q-list class="fixed-bottom">
        <q-item clickable tag="a" target="_blank" @click="openExternal('https://github.com/land3r/time-recorder')">
          <q-item-section avatar>
            <q-icon name="code" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Made with 💗</q-item-label>
            <q-item-label caption>github.com/land3r/time-recorder</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>
    <q-page-container>
      <router-view />
    </q-page-container>

    <q-dialog v-model="showConfirmExitDialog" persistent>
      <q-card>
        <q-card-section class="row items-center">
          <div :class="getRecordStatusClass"></div>
          <span class="q-ml-sm">Un enregistrement est en cours. Voulez vous vraiment quitter ?</span>
        </q-card-section>

        <q-card-actions align="right">
          <q-btn flat label="Annuler" v-close-dialog />
          <q-btn flat label="Quitter" color="primary" @click="closeApplication()" v-close-dialog />
          <q-btn flat label="Quitter et enregister" color="primary" @click="saveAndCloseApplication()" v-close-dialog />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </q-layout>
</template>

<script>
import { openURL } from 'quasar'
import { mapGetters, mapActions, mapState } from 'vuex'

const electron = require('electron')
import { EXIT_APPLICATION, OPEN_EXTERNAL_URL } from '../../src-electron/ipc-events-types'
import Breadcrumbs from '../components/navigation/Breadcrumbs'

export default {
  name: 'MainLayout',
  components: {
    'app-breadcrumbs': Breadcrumbs
  },
  data: function () {
    return {
      leftDrawerOpen: this.$q.platform.is.desktop,
      showConfirmExitDialog: false,
      breadcrumbs: this.$route.meta.breadcrumbs
    }
  },
  watch: {
    '$route' () {
      this.breadcrumbs = this.$route.meta.breadcrumbs
    }
  },
  computed: {
    ...mapGetters('records', [
      'getRecordIcon',
      'getRecordStatusClass'
    ]),
    ...mapState('records', [
      'isRecording'
    ])
  },
  methods: {
    openURL,
    requestCloseApplication: function () {
      if (this.isRecording) {
        this.showConfirmExitDialog = true
      } else {
        this.closeApplication()
      }
    },
    closeApplication: function () {
      electron.ipcRenderer.send(EXIT_APPLICATION)
    },
    saveAndCloseApplication: function () {
      this.endRecord()
      this.closeApplication()
    },
    openExternal: function (url) {
      electron.ipcRenderer.send(OPEN_EXTERNAL_URL, url)
    },
    ...mapActions('records', [
      'endRecord'
    ])
  }
}
</script>

<style>
</style>
