<template>
  <q-card>
    <h3>Evenements systemes</h3>
    <br />
    <q-list bordered class="q-pa-md">
      <q-item multiline tag="label" v-ripple>
        <q-item-section>
          <q-item-label>Sleep</q-item-label>
          <q-item-label caption>Surveiller la mise en veille</q-item-label>
        </q-item-section>
        <q-item-section avatar>
          <q-toggle v-model="watchEvents.watch_sleep" />
        </q-item-section>
      </q-item>
      <q-item multiline tag="label" v-ripple>
        <q-item-section>
          <q-item-label>Resume</q-item-label>
          <q-item-label caption>Surveiller la reprise du systeme</q-item-label>
        </q-item-section>
        <q-item-section avatar>
          <q-toggle v-model="watchEvents.watch_resume" />
        </q-item-section>
      </q-item>
      <q-item multiline tag="label" v-ripple>
        <q-item-section>
          <q-item-label>Shutdown</q-item-label>
          <q-item-label caption>Surveiller l'arret</q-item-label>
        </q-item-section>
        <q-item-section avatar>
          <q-toggle v-model="watchEvents.watch_shutdown" />
        </q-item-section>
      </q-item>
      <q-item multiline tag="label" v-ripple>
        <q-item-section>
          <q-item-label>Lock</q-item-label>
          <q-item-label caption>Surveiller le verouillage de session</q-item-label>
        </q-item-section>
        <q-item-section avatar>
          <q-toggle v-model="watchEvents.watch_lock" />
        </q-item-section>
      </q-item>
      <q-item multiline tag="label" v-ripple>
        <q-item-section>
          <q-item-label>Unlock</q-item-label>
          <q-item-label caption>Surveiller le déverouillage de session</q-item-label>
        </q-item-section>
        <q-item-section avatar>
          <q-toggle v-model="watchEvents.watch_unlock" />
        </q-item-section>
      </q-item>
      <q-item multiline tag="label" v-ripple>
        <q-item-section>
          <q-item-label>AC</q-item-label>
          <q-item-label caption>Surveiller le passage sur secteur</q-item-label>
        </q-item-section>
        <q-item-section avatar>
          <q-toggle v-model="watchEvents.watch_ac" />
        </q-item-section>
      </q-item>
      <q-item multiline tag="label" v-ripple>
        <q-item-section>
          <q-item-label>Battery</q-item-label>
          <q-item-label caption>Surveiller le passage sur batterie</q-item-label>
        </q-item-section>
        <q-item-section avatar>
          <q-toggle v-model="watchEvents.watch_battery" />
        </q-item-section>
      </q-item>
    </q-list>
    <br />
    <br />
    <center>
      <q-btn @click="saveEvents()" color="positive" :disable="JSON.stringify(watchEvents) === JSON.stringify(events)" >Appliquer</q-btn>
    </center>
    <br />
  </q-card>
</template>

<style>
</style>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  name: 'EditSystemEventsForm',
  data: function () {
    return {
      watchEvents: null // watchEvents is alimented in the created hook
    }
  },
  methods: {
    saveEvents: function () {
      this.editEvents(this.watchEvents)

      this.$q.notify({
        message: 'Evenements mis à jour',
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
