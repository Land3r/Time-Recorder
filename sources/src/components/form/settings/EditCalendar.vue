<template>
  <q-card>
    <h3>{{$t('settingspage.calendar.title')}}</h3>
    <div class="q-pa-md">
      <div class="row">
        <div class="col q-pr-sm">
          <i18nselect
            ref="defaultView"
            :model="form.defaultView"
            :options="calendarPageOptions"
            :label="$t('settingspage.calendar.defaultviewlabel')"
            :validations="validations.defaultView"
          />
        </div>
        <div class="col q-pl-sm">
          <i18nselect
            ref="disableViews"
            :model="form.disableViews"
            :options="calendarPageOptions"
            :label="$t('settingspage.calendar.disableviewslabel')"
            multiple
            :validations="validations.disableViews"
          />
        </div>
      </div>
      <div class="row">
        <div class="col q-pr-sm">
          <i18nvuecaltime
            ref="timeFrom"
            :model="form.timeFrom"
            label="settingspage.calendar.timefromlabel"
            :landscape="true"
          />
        </div>
        <div class="col q-pl-sm">
          <i18nvuecaltime
            ref="timeTo"
            :model="form.timeTo"
            label="settingspage.calendar.timetolabel"
            :landscape="true"
          />
        </div>
      </div>
      <div class="row">
        <div class="col q-pr-sm">
          <q-toggle :label="$t('settingspage.calendar.hideweekendslabel')" v-model="form.hideWeekends" />
        </div>
        <div class="col">
          <q-toggle :label="$t('settingspage.calendar.startweekonsundaylabel')" v-model="form.startWeekOnSunday" />
        </div>
        <div class="col q-pl-sm">
          <q-toggle :label="$t('settingspage.calendar.showtimelabel')" v-model="form.showTime" />
        </div>
      </div>
    </div>
    <br />
    <center>
      <q-btn color="positive" @click="submit" :disable="JSON.stringify(form) === JSON.stringify(this.calendar)">{{$t('buttons.save')}}</q-btn>
    </center>
    <br />
  </q-card>
</template>

<style>
</style>

<script>
import { required, minLength } from 'vuelidate/lib/validators'
import { mapActions, mapState } from 'vuex'

import { CalendarPage, CalendarPageOptions } from 'data/calendar'
import i18nSelect from 'components/generics/form/i18nselect'
import i18nVueCalTime from 'components/generics/form/i18nVueCalTime'
import { getValue } from 'helpers/data'

export default {
  name: 'EditCalendarForm',
  components: {
    i18nselect: i18nSelect,
    i18nvuecaltime: i18nVueCalTime
  },
  data: function () {
    return {
      form: {
        defaultView: getValue(CalendarPageOptions, CalendarPage.WEEK),
        disableViews: getValue(CalendarPageOptions, [CalendarPage.YEARS, CalendarPage.YEAR]),
        locale: 'fr', // Auto calculate
        hideWeekends: true,
        showTime: true,
        timeFrom: 60 * 8,
        timeTo: 60 * 20,
        startWeekOnSunday: false
      },
      validations: {
        disableViews: { required },
        defaultView: { required, minLength: minLength(4) }
      },
      temp: {
        timeFrom: null,
        timeTo: null
      },
      calendarPageOptions: CalendarPageOptions
    }
  },
  validations: {
    form: {
      defaultView: { required },
      disableViews: { },
      hideWeekends: { required },
      showTime: { required },
      timeFrom: { required },
      timeTo: { required },
      startWeekOnSunday: { required }
    }
  },
  methods: {
    submit () {
      this.$v.$touch()
      if (!this.$v.$invalid) {
        const calendar = {
          ...this.form,
          defaultView: this.$refs.defaultView.getValue(),
          disableViews: this.$refs.disableViews.getValue(),
          timeFrom: this.$refs.timeFrom.getValue(),
          timeTo: this.$refs.timeTo.getValue()
        }

        this.setCalendar(calendar)
        this.$q.notify({
          message: this.$t('settingspage.calendar.success'),
          color: 'positive'
        })
      }
    },
    reset () {
      this.form = {
      }
    },
    ...mapActions('settings', [
      'setCalendar'
    ])
  },
  computed: {
    isValid: function () {
      return !this.$v.$invalid
    },
    ...mapState('settings', [
      'calendar'
    ])
  },
  created: function () {
    const { defaultView, disableViews, ...others } = this.calendar
    console.log({ defaultView: getValue(CalendarPageOptions, defaultView),
      disableViews: getValue(CalendarPageOptions, disableViews),
      ...others })
    this.form = {
      defaultView: getValue(CalendarPageOptions, defaultView),
      disableViews: getValue(CalendarPageOptions, disableViews),
      ...others
    }
  }
}
</script>
