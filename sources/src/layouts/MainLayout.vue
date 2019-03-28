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

        <div>{{$t('layout.poweredbyquasar', {version: $q.version})}}</div>
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
                  <q-item-section>{{$t('settingspage.title')}}</q-item-section>
                </q-item>
                <q-separator />
                <q-item clickable v-close-menu @click="requestCloseApplication()">
                  <q-item-section avatar>
                    <q-icon name="close" />
                  </q-item-section>
                  <q-item-section>{{$t('layout.exitlabel')}}</q-item-section>
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
            <q-item-label>{{$t('recorderpage.title')}}</q-item-label>
          </q-item-section>
        </q-item>
        <q-separator />
        <q-item clickable tag="a" to="/index">
          <q-item-section avatar>
            <q-icon name="dashboard" />
          </q-item-section>
          <q-item-section>
            <q-item-label>{{$t('homepage.title')}}</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable tag="a" to="/projects">
          <q-item-section avatar>
            <q-icon name="business" />
          </q-item-section>
          <q-item-section>
            <q-item-label>{{$t('projectspage.title')}}</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable tag="a" to="charts">
          <q-item-section avatar>
            <q-icon name="donut_small" />
          </q-item-section>
          <q-item-section>
            <q-item-label>{{$t('graphicspage.title')}}</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable tag="a" to="/record">
          <q-item-section avatar>
            <q-icon name="business" />
          </q-item-section>
          <q-item-section>
            <q-item-label>{{$t('recordspage.title')}}</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable tag="a" to="/temp">
          <q-item-section avatar>
            <q-icon name="business" />
          </q-item-section>
          <q-item-section>
            <q-item-label>TEMP</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
      <q-list class="fixed-bottom">
        <q-item clickable tag="a" target="_blank" @click="openExternal('https://github.com/land3r/time-recorder')">
          <q-item-section avatar>
            <q-icon name="code" />
          </q-item-section>
          <q-item-section>
            <q-item-label>{{$t('layout.madewithlove')}}</q-item-label>
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
          <span class="q-ml-sm">{{$t('layout.confirmquitmessage')}}</span>
        </q-card-section>

        <q-card-actions align="right">
          <q-btn flat :label="$t('buttons.cancel')" v-close-dialog />
          <q-btn flat :label="$t('layout.quitlabel')" color="primary" @click="closeApplication()" v-close-dialog />
          <q-btn flat :label="$t('layout.quitandsavelabel')" color="primary" @click="saveAndCloseApplication()" v-close-dialog />
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
