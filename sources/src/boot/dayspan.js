import Vuetify from 'vuetify'
import DaySpanVuetify from 'dayspan-vuetify'

export default async ({ app, router, Vue }) => {
  Vue.use(Vuetify)
  Vue.use(DaySpanVuetify, {
    methods: {
      getDefaultEventColor: () => '#1976d2'
    }
  })
}
