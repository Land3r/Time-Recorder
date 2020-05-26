<template>
  <q-page class="q-px-md q-py-lg">
    <div>
      <h1>{{$t('settingspage.title')}}</h1>
    </div>
    <q-list bordered>
      <q-expansion-item group="settings" icon="perm_identity" key="user" :label="$t('settingspage.user.expansiontitle')" default-opened :header-class="getHeaderClass('user')" @show="setActiveExpansionItem('user')">
        <app-editprofileform />
      </q-expansion-item>
      <q-expansion-item group="settings" icon="whatshot" key="objective" :label="$t('settingspage.objective.expansiontitle')" :header-class="getHeaderClass('objective')" @show="setActiveExpansionItem('objective')">
        <app-editobjectiveform />
      </q-expansion-item>
      <q-expansion-item group="settings" icon="list" key="activities" :label="$t('settingspage.defaultactivities.expansiontitle')" :header-class="getHeaderClass('activities')" @show="setActiveExpansionItem('activities')">
        <app-defaultactivitiesform />
      </q-expansion-item>
      <q-expansion-item group="settings" icon="event" key="calendar" :label="$t('settingspage.calendar.expansiontitle')" :header-class="getHeaderClass('calendar')" @show="setActiveExpansionItem('calendar')">
        <app-editcalendarform />
      </q-expansion-item>
      <q-expansion-item group="settings" icon="timer" key="recorder" :label="$t('settingspage.recorder.expansiontitle')" :header-class="getHeaderClass('recorder')" @show="setActiveExpansionItem('recorder')">
        <app-editsystemeventsform />
      </q-expansion-item>
      <q-expansion-item group="settings" icon="import_export" key="import_export" :label="$t('settingspage.importexport.expansiontitle')" :header-class="getHeaderClass('import_export')" @show="setActiveExpansionItem('import_export')">
        <app-importexportform />
      </q-expansion-item>
      <q-expansion-item group="settings" icon="delete_forever" key="reset" :label="$t('settingspage.reset.expansiontitle')" :header-class="getHeaderClass('reset')" @show="setActiveExpansionItem('reset')">
        <app-resetform />
      </q-expansion-item>
    </q-list>
  </q-page>
</template>

<script>
import EditProfileForm from '../components/form/settings/EditProfile'
import EditObjectiveForm from '../components/form/settings/EditObjective'
import DefaultActivitiesForm from '../components/form/settings/DefaultActivities'
import EditCalendarForm from '../components/form/settings/EditCalendar'
import EditSystemEventsForm from '../components/form/settings/EditSystemEvents'
import ImportExportForm from '../components/form/settings/ImportExport'
import ResetForm from '../components/form/settings/Reset'

export default {
  name: 'SettingsIndex',
  components: {
    'app-editprofileform': EditProfileForm,
    'app-editobjectiveform': EditObjectiveForm,
    'app-defaultactivitiesform': DefaultActivitiesForm,
    'app-editcalendarform': EditCalendarForm,
    'app-editsystemeventsform': EditSystemEventsForm,
    'app-importexportform': ImportExportForm,
    'app-resetform': ResetForm
  },
  data: function () {
    return {
      activeExpansionItem: 'user'
    }
  },
  methods: {
    getHeaderClass: function (key) {
      return this.activeExpansionItem === key ? 'text-primary' : ''
    },
    setActiveExpansionItem: function (key) {
      this.activeExpansionItem = key
    }
  }
}
</script>
