<template>
  <q-page class="q-px-md q-py-lg">
    <vue-cal
      style="height: calc(100vh - 148px)"
      class=""
      :locale="settings.locale"
      :hide-weekends="settings.hideWeekends"
      :time="settings.showTime"
      :default-view="settings.defaultView"
      :timeFrom="settings.timeFrom"
      :timeTo="settings.timeTo"
      :startWeekOnSunday="settings.startWeekOnSunday"
      :disable-views="settings.disableViews"
      events-on-month-view="short"
      :onEventClick="onEventClick"
      :onEventDblClick="onEventDblClick"
      :events="events"
      >
      </vue-cal>
  </q-page>
</template>

<style>

/* .vuecal__cell.selected:before {border-color: rgba(66, 185, 131, 0.5);} */
</style>

<script>
import VueCal from 'vue-cal'
import 'vue-cal/dist/vuecal.css'
import { mapGetters } from 'vuex'

import { CalendarPage } from 'data/calendar'

export default {
  components: {
    VueCal
  },
  name: 'PageCalendar',
  data: function () {
    return {
      settings: {
        defaultView: CalendarPage.WEEK,
        disableViews: [CalendarPage.YEARS, CalendarPage.YEAR],
        locale: 'fr',
        hideWeekends: true,
        showTime: true,
        timeFrom: 60 * 8,
        timeTo: 60 * 20,
        startWeekOnSunday: false
      },
      events: [
        {
          start: '2019-04-09 14:00',
          end: '2019-04-09 18:00',
          title: 'Need to go shopping',
          icon: 'shopping_cart', // Custom attribute.
          content: 'Click to see my shopping list'
        },
        {
          start: '2018-11-22 10:00',
          end: '2018-11-22 15:00',
          title: 'Golf with John',
          icon: 'golf_course' // Custom attribute.
        }
      ]
    }
  },
  methods: {
    onEventClick: function (event, originalEvent) {
    },
    onEventDblClick: function (event, originalEvent) {
    }
  },
  computed: {
    ...mapGetters('settings', [
      'getCalendarSettings'
    ])
  },
  created: function () {
    this.settings = {
      ...this.getCalendarSettings
    }
  }
}
</script>
