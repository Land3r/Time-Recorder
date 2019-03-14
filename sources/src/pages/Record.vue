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
          title="Test"
          :subtitle="segment.startedAt"
        >
          <div>
            {{segment.comment}}
          </div>
        </q-timeline-entry>
        <q-timeline-entry
          title="Event Title"
          subtitle="February 22, 1986"
          side="left"
        >
          <div>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </div>
        </q-timeline-entry>
        <q-timeline-entry
          title="Event Title"
          subtitle="February 21, 1986"
          side="right"
          icon="delete"
        >
          <div>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </div>
        </q-timeline-entry>
        <q-timeline-entry heading>November, 2017</q-timeline-entry>
        <q-timeline-entry
          title="Event Title"
          subtitle="February 22, 1986"
          side="left"
        >
          <div>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </div>
        </q-timeline-entry>

        <q-timeline-entry
          title="Event Title"
          subtitle="February 22, 1986"
          side="right"
        >
          <div>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </div>
        </q-timeline-entry>

        <q-timeline-entry
          title="Event Title"
          subtitle="February 22, 1986"
          side="left"
          color="orange"
          icon="done_all"
        >
          <div>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </div>
        </q-timeline-entry>

        <q-timeline-entry
          title="Event Title"
          subtitle="February 22, 1986"
          side="right"
        >
          <div>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </div>
        </q-timeline-entry>

        <q-timeline-entry
          title="Event Title"
          subtitle="February 22, 1986"
          side="left"
        >
          <div>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </div>
        </q-timeline-entry>
        <q-timeline-entry heading>{{formatedRecord.endedAt}}</q-timeline-entry>
      </q-timeline>
    </div>
  </q-page>
</template>

<style>

</style>

<script>
import { mapState } from 'vuex'
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
            categoryId: '3af1adad-af24-4a15-aebc-d373d3c4ff64',
            comment: 'Travail avec Levy sur ReactJS'
          },
          {
            id: 'aa7ec278-18e5-4a24-a479-fds98468279a',
            startedAt: 1552569240859,
            endedAt: 155299240859,
            categoryId: '3af1adad-af24-4a15-aebc-d373d3c4ff64',
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
    }
  },
  computed: {
    formatedRecord: function () {
      let segments = [ ...this.record.segments ]
      let formatedSegments = segments.map((element) => {
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
