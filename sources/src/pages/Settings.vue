<template>
  <q-page class="q-px-md q-py-lg">
    <div>
      <h1>{{$t('settingspage.title')}}</h1>
    </div>
    <q-list bordered>
      <q-expansion-item group="settings" icon="perm_identity" key="user" label="Utilisateur" default-opened :header-class="getHeaderClass('user')" @show="setActiveExpansionItem('user')">
        <app-editprofileform />
      </q-expansion-item>
      <q-expansion-item group="settings" icon="whatshot" key="objective" label="Objectifs" :header-class="getHeaderClass('objective')" @show="setActiveExpansionItem('objective')">
        <app-editobjectiveform />
      </q-expansion-item>
      <q-expansion-item group="settings" icon="list" key="activities" label="Activités" :header-class="getHeaderClass('activities')" @show="setActiveExpansionItem('activities')">
        <app-defaultactivitiesform />
      </q-expansion-item>
      <q-expansion-item group="settings" icon="timer" key="recorder" label="Enregisteur" :header-class="getHeaderClass('recorder')" @show="setActiveExpansionItem('recorder')">
        <app-editsystemeventsform />
      </q-expansion-item>
      <q-expansion-item group="settings" icon="import_export" key="import_export" label="Import / Export" :header-class="getHeaderClass('import_export')" @show="setActiveExpansionItem('import_export')">
        <app-importexportform />
      </q-expansion-item>
      <q-expansion-item group="settings" icon="delete_forever" key="reset" label="Reset" :header-class="getHeaderClass('reset')" @show="setActiveExpansionItem('reset')">
        <app-resetform />
      </q-expansion-item>
    </q-list>
  </q-page>
</template>

<style>
.visible-on-hover {
  visibility: hidden
}

div.q-item:hover .visible-on-hover {
  visibility: initial
}
</style>

<script>
import DefaultActivitiesForm from '../components/form/settings/DefaultActivities'
import EditProfileForm from '../components/form/settings/EditProfile'
import EditSystemEventsForm from '../components/form/settings/EditSystemEvents'
import EditObjectiveForm from '../components/form/settings/EditObjective'
import ImportExportForm from '../components/form/settings/ImportExport'
import ResetForm from '../components/form/settings/Reset'

export default {
  name: 'SettingsIndex',
  components: {
    'app-editprofileform': EditProfileForm,
    'app-editsystemeventsform': EditSystemEventsForm,
    'app-defaultactivitiesform': DefaultActivitiesForm,
    'app-editobjectiveform': EditObjectiveForm,
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
