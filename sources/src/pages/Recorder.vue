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
          <span>{{currentSegmentName}}</span>
          <span class="float-right">{{currentDay}}</span>
        </q-card-section>
        <q-separator />
          <q-tabs
            v-model="selectedTab"
            dense
            class="text-grey"
            active-color="primary"
            indicator-color="primary"
            align="justify"
            narrow-indicator
          >
            <q-tab name="dashboard" label="Dashboard" />
            <q-tab name="record" label="Enregistrement" />
            <q-tab name="activities" label="Activité" />
          </q-tabs>
          <q-separator />

          <q-tab-panels v-model="selectedTab" animated>
            <q-tab-panel name="dashboard">
              <app-dashboardpanel />
            </q-tab-panel>

            <q-tab-panel name="record">
              <app-recordpanel />
            </q-tab-panel>

            <q-tab-panel name="activities">
              <app-activitiespanel />
            </q-tab-panel>
          </q-tab-panels>
          <q-card-section>
            <q-card-actions>
              <q-btn
                color="primary"
                @click="toggleRecording()"
                :label="isRecording ? 'Arrêter' : 'Démarrer'"
                :icon="isRecording ? 'stop' : 'play_arrow'"
              />
            </q-card-actions>
        </q-card-section>
      </q-card>
    </div>
  </q-page>
</template>

<style>

</style>

<script>
import { mapState, mapActions, mapGetters } from 'vuex'
import { date } from 'quasar'

import { RecordFactory } from '../domain/record'
import ActivitiesPanel from '../components/panel/recorder/Activities'
import RecordPanel from '../components/panel/recorder/Record'
import DashboardPanel from '../components/panel/recorder/Dashboard'

export default {
  name: 'PageRecorder',
  components: {
    'app-activitiespanel': ActivitiesPanel,
    'app-recordpanel': RecordPanel,
    'app-dashboardpanel': DashboardPanel
  },
  data: function () {
    return {
      selectedTab: 'dashboard',
      dateDifference: this.updateTimer(),
      currentDay: date.formatDate(Date.now(), 'dddd DD MMMM YYYY'),
      selectedProject: null,
      selectedActivity: null,
      contextActivity: null
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
        const record = RecordFactory.Create()
        this.startRecord(record)
      }
    },
    getProjectClass: function (project) {
      if (this.selectedProject !== null && this.selectedProject.id === project.id) {
        return `${project.bgcolor} ${project.textcolor}`
      } else {
        return `black`
      }
    },
    getActivityClass: function (activity) {
      if (this.selectedActivity !== null && this.selectedActivity.id === activity.id) {
        return `bg-positive`
      } else {
        return ``
      }
    },
    ...mapActions('records', {
      startRecord: 'startRecord',
      endRecord: 'endRecord',
      startSegment: 'startSegment',
      endSegment: 'endSegment',
      editSegment: 'editSegment',
      cancelSegment: 'cancelSegment'
    })
  },
  computed: {
    currentSegmentName: function () {
      if (this.isRecording && this.segment !== null) {
        return `${this.segment.project.name}: ${this.segment.activity.name}`
      } else {
        return this.$t('recorderpage.nosegment')
      }
    },
    ...mapGetters('records', [
      'getRecordStatusClass'
    ]),
    ...mapState('records', {
      isRecording: 'isRecording',
      record: 'currentRecord',
      segment: 'currentSegment'
    }),
    ...mapState('projects', [
      'projects'
    ])
  },
  watch: {
    selectedActivity: function (newSelectedActivity, oldSelectedActivity) {
      if (oldSelectedActivity === null) {
        // Start segment
        this.startSegment(newSelectedActivity)
        this.$q.notify({
          message: 'Activitée démarrée.',
          color: 'positive'
        })
      } else {
        // End segment
        this.endSegment()
        // Start segment
        this.startSegment(newSelectedActivity)
        this.$q.notify({
          message: 'Activitée changée.',
          color: 'positive'
        })
      }
    }
  }
}
</script>
