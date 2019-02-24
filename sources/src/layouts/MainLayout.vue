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
        <q-item clickable tag="a" to="/index">
          <q-item-section avatar>
            <q-icon name="dashboard" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Accueil</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable tag="a" to="/activities">
          <q-item-section avatar>
            <q-icon name="record_voice_over" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Activités</q-item-label>
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
        <q-item clickable tag="a" target="_blank" href="https://twitter.com/quasarframework">
          <q-item-section avatar>
            <q-icon name="rss_feed" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Twitter</q-item-label>
            <q-item-label caption>@quasarframework</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
      <q-list class="fixed-bottom">
        <q-item clickable tag="a" target="_blank" href="https://github.com/land3r/time-recorder">
          <q-item-section avatar>
            <q-icon name="code" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Github</q-item-label>
            <q-item-label caption>github.com/land3r/time-recorder</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { openURL } from 'quasar'
import Breadcrumbs from '../components/navigation/Breadcrumbs'

export default {
  components: {
    'app-breadcrumbs': Breadcrumbs
  },
  name: 'MyLayout',
  data () {
    return {
      leftDrawerOpen: this.$q.platform.is.desktop,
      breadcrumbs: []
    }
  },
  watch: {
    '$route' () {
      console.log(`Bd channged: `, this.$route)
      this.breadcrumbs = this.$route.meta.breadcrumbs
    }
  },
  methods: {
    openURL
  }
}
</script>

<style>
</style>
