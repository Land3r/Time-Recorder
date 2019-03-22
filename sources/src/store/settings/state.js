import { ObjectiveType } from '../../data/objectives'

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
  defaultActivities: [],
  objective: {
    type: ObjectiveType.WEEKLY,
    value: 37.5
  }
})
