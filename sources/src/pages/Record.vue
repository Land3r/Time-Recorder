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
          :title="getActivityFullName()(segment.categoryId)"
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
        ],
        events: [
          {
            name: 'sleep',
            occuredAt: 1552569241859
          },
          {
            name: 'resume',
            occuredAt: 1552570241859
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
    ...mapGetters('projects', [
      'getActivityFullName'
    ])
  },
  computed: {
    formatedRecord: function () {
      let segments = [ ...this.record.segments ]

      let events = []
      if (this.record.events.length != null && this.record.events.length) {
        events = this.record.events.concat().sort(function (event1, event2) {
          return event1.occuredAt > event2.occuredAt
        })

        let eventStack = []
        eventStack['sleep'] = null
        eventStack['shutdown'] = null
        eventStack['resume'] = null
        eventStack['lock'] = null
        eventStack['unlock'] = null
        eventStack['battery'] = null
        eventStack['ac'] = null
        let additionalSegments = []
        let currentEvent = null
        for (let i = 0; i < events.length; i++) {
          currentEvent = events[i]

          if (currentEvent.name === 'sleep') {
            // Sleep is a segment begining event.
            eventStack['sleep'] = currentEvent
          } else if (currentEvent.name === 'shutdown') {
            // Shutdown is a segment begining event.
            eventStack['shutdown'] = currentEvent
          } else if (currentEvent.name === 'resume') {
            // Resume is a segment ending event for Resume/Shutdown event.
            if (eventStack['shutdown'] !== null) {
              let segment = {
                startedAt: eventStack['shutdown'].occuredAt,
                endedAt: currentEvent.occuredAt,
                comment: 'Shutdowned'
              }
              additionalSegments.push(segment)
              eventStack['shutdown'] = null
            } else if (eventStack['sleep'] !== null) {
              let segment = {
                startedAt: eventStack['sleep'].occuredAt,
                endedAt: currentEvent.occuredAt,
                comment: 'Sleeped'
              }
              additionalSegments.push(segment)
              eventStack['sleep'] = null
            }
          } else if (currentEvent.name === 'lock') {
            // Lock is a segment begining event.
            eventStack['lock'] = currentEvent
          } else if (currentEvent.name === 'unlock') {
            // Unlock is a segment ending event for lock event.
            if (eventStack['lock'] !== null) {
              let segment = {
                startedAt: eventStack['lock'].occuredAt,
                endedAt: currentEvent.occuredAt,
                comment: 'Locked'
              }
              additionalSegments.push(segment)
              eventStack['lock'] = null
            }
          } else if (currentEvent.name === 'battery') {
            // Battery is a segment begining event and ending event for ac.
            if (eventStack['ac'] !== null) {
              let segment = {
                startedAt: eventStack['ac'].occuredAt,
                endedAt: currentEvent.occuredAt,
                comment: 'Moved'
              }
              additionalSegments.push(segment)
              eventStack['ac'] = null
            } else {
              eventStack['battery'] = currentEvent
            }
          } else if (currentEvent.name === 'ac') {
            // AC is a segment begining event and ending event for battery.
            if (eventStack['battery'] !== null) {
              let segment = {
                startedAt: eventStack['battery'].occuredAt,
                endedAt: currentEvent.occuredAt,
                comment: 'Moved'
              }
              additionalSegments.push(segment)
              eventStack['battery'] = null
            } else {
              eventStack['ac'] = currentEvent
            }
          }
        }
      }

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
