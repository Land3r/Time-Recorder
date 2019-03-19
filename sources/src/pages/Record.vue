<template>
  <q-page class="q-px-md q-py-lg">
    <div>
      <h1>
        Enregistrement
      </h1>
      <q-timeline layout="comfortable" side="right" color="secondary">
        <q-timeline-entry heading>{{formatedRecord.startedAt}}</q-timeline-entry>
        <q-timeline-entry
          v-for="segment in formatedRecord.segments"
          :key="segment.id"
          :title="getSegmentName(segment)"
          :subtitle="segment.startedAt"
          :color="segment.color"
          :icon="segment.icon"
        >
          <div>
            {{segment.comment}}
          </div>
          CHANGE
        </q-timeline-entry>
        <q-timeline-entry heading>{{formatedRecord.endedAt}}</q-timeline-entry>
      </q-timeline>
    </div>
  </q-page>
</template>

<style>

</style>

<script>
import { mapState, mapGetters } from 'vuex'
import { date } from 'quasar'

export default {
  name: 'PageRecord',
  components: {
  },
  data: function () {
    return {
      record: {
        id: 'd20ff5a9-7907-4f68-b797-aa7fdbc82597',
        startedAt: 1552559240859,
        endedAt: 1554559240859,
        segments: [
          {
            id: 'aa7ec278-18e5-4a24-a479-aac98468279a',
            startedAt: 1552559240859,
            endedAt: 1552569240859,
            project: 'Test',
            color: 'primary',
            icon: 'business',
            activity: 'My awesome activity',
            comment: 'Travail avec Levy sur ReactJS'
          },
          {
            id: 'aa7ec278-18e5-4a24-a479-fds98468279a',
            startedAt: 1552569240859,
            endedAt: 155299240859,
            project: 'Test',
            color: 'secondary',
            icon: 'business',
            activity: 'My awesome activity',
            comment: 'none'
          }
        ]
      }
    }
  },
  methods: {
    formatDateTime: function (datetime) {
      return date.formatDate(datetime, this.dateFormat)
    },
    formatTime: function (datetime) {
      return date.formatDate(datetime, 'HH:mm:ss')
    },
    getSegmentName: function (segment) {
      return `${segment.project} - ${segment.activity}`
    },
    ...mapGetters('projects', [
      'getActivityFullName'
    ])
  },
  computed: {
    formatedRecord: function () {
      let formatedSegments = this.record.segments.map((element) => {
        let { startedAt, endedAt, ...rest } = element
        let startedAtFormated = this.formatTime(startedAt)
        let endedAtFormated = this.formatTime(endedAt)

        return {
          ...rest,
          startedAt: startedAtFormated,
          endedAt: endedAtFormated
        }
      })

      return {
        startedAt: this.formatDateTime(this.record.startedAt),
        endedAt: this.formatDateTime(this.record.endedAt),
        segments: [
          ...formatedSegments
        ]
      }
    },
    ...mapState('settings', [
      'dateFormat'
    ])
  }
}
</script>
