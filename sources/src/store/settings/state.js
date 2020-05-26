import { ObjectiveType } from '../../data/objectives'
import { CalendarPage } from '../../data/calendar'

export default () => ({
  username: '',
  lang: 'fr',
  dateFormat: 'dddd DD MMMM YYYY - HH:mm',
  events: {
    watch_sleep: true,
    watch_resume: true,
    watch_shutdown: true,
    watch_lock: true,
    watch_unlock: true,
    watch_ac: false,
    watch_battery: false
  },
  calendar: {
    defaultView: CalendarPage.WEEK,
    disableViews: [CalendarPage.YEARS, CalendarPage.YEAR],
    hideWeekends: true,
    showTime: true,
    timeFrom: 60 * 8,
    timeTo: 60 * 20,
    startWeekOnSunday: false
  },
  defaultActivities: [],
  objective: {
    type: ObjectiveType.WEEKLY,
    value: 37.5
  }
})
