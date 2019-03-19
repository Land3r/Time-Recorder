<template>
  <q-page class="q-px-md q-py-lg">
    <div>
      <h1>
        Enregisteur
        <div :class="getRecordStatusClass"></div>
      </h1>
      <q-card class="">
        <q-card-section>
          <div :class="getRecordStatusClass" class="float-left q-mr-sm"></div>
          <span class="text-h5">{{dateDifference}}</span>
          <span> | </span>
          <span>Activitée non precisée</span>
        </q-card-section>
        <q-separator />
        <q-card-section>
          <div class="text-h6">Our Changing Planet</div>
          <div class="text-subtitle2">by John Doe</div>
        </q-card-section>

        <q-card-actions>
          <q-btn flat @click="toggleRecording()" :label="isRecording ? 'Arrêter' : 'Démarrer'"></q-btn>
          <q-btn flat>Pause</q-btn>
        </q-card-actions>
      </q-card>
    </div>
  </q-page>
</template>

<style>

</style>

<script>
import { mapState, mapActions, mapGetters } from 'vuex'
import { date, uid } from 'quasar'

export default {
  name: 'PageRecorder',
  components: {
  },
  data: function () {
    return {
      dateDifference: this.updateTimer()
    }
  },
  timers: {
    updateTimer: { time: 1000, autostart: true, repeat: true }
  },
  methods: {
    updateTimer: function () {
      if (this.isRecording && this.record != null && this.record.startedAt != null) {
        const dateDifference = date.getDateDiff(Date.now(), this.record.startedAt, 'seconds')
        const hours = Math.floor(dateDifference / 3600).toLocaleString('fr-fr', { minimumIntegerDigits: 2 })
        const minutes = Math.floor((dateDifference % 3600) / 60).toLocaleString('fr-fr', { minimumIntegerDigits: 2 })
        const seconds = Math.floor((dateDifference % 3600) % 60).toLocaleString('fr-fr', { minimumIntegerDigits: 2 })
        this.dateDifference = `${hours}:${minutes}:${seconds}`
      }
    },
    toggleRecording: function () {
      if (this.isRecording) {
        this.dateDifference = '00:00:00'
        this.endRecord()
      } else {
        this.startRecord({
          id: uid(),
          comment: 'Random day'
        })
      }
    },
    ...mapActions('records', {
      startRecord: 'startRecord',
      endRecord: 'endRecord',
      startSegment: 'startSegment',
      endSegment: 'endSegment',
      editSegment: 'editSegment'
    })
  },
  computed: {
    ...mapGetters('records', [
      'getRecordStatusClass'
    ]),
    ...mapState('records', {
      isRecording: 'isRecording',
      record: 'currentRecord',
      segment: 'currentSegment'
    })
  }
}
</script>
