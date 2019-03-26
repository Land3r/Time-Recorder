<template>
  <q-card>
    <h3>{{$t('settingspage.recorder.systemevents.title')}}</h3>
    <br />
    <q-list bordered class="q-pa-md">
      <q-item multiline tag="label" v-ripple>
        <q-item-section avatar>
          <q-icon color="primary" :name="getIcon('sleep')" />
        </q-item-section>
        <q-item-section>
          <q-item-label>{{$t('settingspage.recorder.systemevents.sleep.title')}}</q-item-label>
          <q-item-label caption>{{$t('settingspage.recorder.systemevents.sleep.details')}}</q-item-label>
        </q-item-section>
        <q-item-section avatar>
          <q-toggle v-model="watchEvents.watch_sleep" />
        </q-item-section>
      </q-item>
      <q-item multiline tag="label" v-ripple>
        <q-item-section avatar>
          <q-icon color="primary" :name="getIcon('resume')" />
        </q-item-section>
        <q-item-section>
          <q-item-label>{{$t('settingspage.recorder.systemevents.resume.title')}}</q-item-label>
          <q-item-label caption>{{$t('settingspage.recorder.systemevents.resume.details')}}</q-item-label>
        </q-item-section>
        <q-item-section avatar>
          <q-toggle v-model="watchEvents.watch_resume" />
        </q-item-section>
      </q-item>
      <q-item multiline tag="label" v-ripple>
        <q-item-section avatar>
          <q-icon color="primary" :name="getIcon('shutdown')" />
        </q-item-section>
        <q-item-section>
          <q-item-label>{{$t('settingspage.recorder.systemevents.shutdown.title')}}</q-item-label>
          <q-item-label caption>{{$t('settingspage.recorder.systemevents.shutdown.details')}}</q-item-label>
        </q-item-section>
        <q-item-section avatar>
          <q-toggle v-model="watchEvents.watch_shutdown" />
        </q-item-section>
      </q-item>
      <q-item multiline tag="label" v-ripple>
        <q-item-section avatar>
          <q-icon color="primary" :name="getIcon('lock')" />
        </q-item-section>
        <q-item-section>
          <q-item-label>{{$t('settingspage.recorder.systemevents.lock.title')}}</q-item-label>
          <q-item-label caption>{{$t('settingspage.recorder.systemevents.lock.details')}}</q-item-label>
        </q-item-section>
        <q-item-section avatar>
          <q-toggle v-model="watchEvents.watch_lock" />
        </q-item-section>
      </q-item>
      <q-item multiline tag="label" v-ripple>
        <q-item-section avatar>
          <q-icon color="primary" :name="getIcon('unlock')" />
        </q-item-section>
        <q-item-section>
          <q-item-label>{{$t('settingspage.recorder.systemevents.unlock.title')}}</q-item-label>
          <q-item-label caption>{{$t('settingspage.recorder.systemevents.unlock.details')}}</q-item-label>
        </q-item-section>
        <q-item-section avatar>
          <q-toggle v-model="watchEvents.watch_unlock" />
        </q-item-section>
      </q-item>
      <q-item multiline tag="label" v-ripple>
        <q-item-section avatar>
          <q-icon color="primary" :name="getIcon('ac')" />
        </q-item-section>
        <q-item-section>
          <q-item-label>{{$t('settingspage.recorder.systemevents.ac.title')}}</q-item-label>
          <q-item-label caption>{{$t('settingspage.recorder.systemevents.ac.details')}}</q-item-label>
        </q-item-section>
        <q-item-section avatar>
          <q-toggle v-model="watchEvents.watch_ac" />
        </q-item-section>
      </q-item>
      <q-item multiline tag="label" v-ripple>
        <q-item-section avatar>
          <q-icon color="primary" :name="getIcon('battery')" />
        </q-item-section>
        <q-item-section>
          <q-item-label>{{$t('settingspage.recorder.systemevents.battery.title')}}</q-item-label>
          <q-item-label caption>{{$t('settingspage.recorder.systemevents.battery.details')}}</q-item-label>
        </q-item-section>
        <q-item-section avatar>
          <q-toggle v-model="watchEvents.watch_battery" />
        </q-item-section>
      </q-item>
    </q-list>
    <br />
    <br />
    <center>
      <q-btn @click="saveEvents()" color="positive" :disable="JSON.stringify(watchEvents) === JSON.stringify(events)">{{$t('buttons.apply')}}</q-btn>
    </center>
    <br />
  </q-card>
</template>

<style>
</style>

<script>
import { mapActions, mapState } from 'vuex'

import { getIcon } from '../../../helpers/system-events'

export default {
  name: 'EditSystemEventsForm',
  data: function () {
    return {
      watchEvents: null // watchEvents is alimented in the created hook
    }
  },
  methods: {
    getIcon: function (name) {
      return getIcon(name)
    },
    saveEvents: function () {
      this.editEvents(this.watchEvents)

      this.$q.notify({
        message: this.$t('settingspage.recorder.success'),
        color: 'positive'
      })
    },
    ...mapActions('settings', [
      'editEvents'
    ])
  },
  computed: {
    ...mapState('settings', [
      'events'
    ])
  },
  created: function () {
    this.watchEvents = {
      ...this.events
    }
  }
}
</script>
