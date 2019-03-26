<template>
  <q-card>
  <div class="row">
    <div class="col q-px-xs">
      <h3>{{$t('settingspage.importexport.import.title')}}</h3>
      <center>
        <q-btn color="primary" @click="importStateFromFile">{{$t('settingspage.importexport.import.buttonlabel')}}</q-btn>
      </center>
    </div>
    <div class="col q-px-xs">
      <h3>{{$t('settingspage.importexport.export.title')}}</h3>
      <center>
        <q-btn color="primary" @click="exportStateToFile">{{$t('settingspage.importexport.export.buttonlabel')}}</q-btn>
      </center>
    </div>
  </div>
</q-card>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import { save } from 'save-file'
import formatJson from 'format-json'

const electron = require('electron')
import { OPEN_FILE, OPEN_FILE_RESPONSE } from '../../../../src-electron/ipc-events-types'

export default {
  name: 'ImportExportForm',
  methods: {
    exportStateToFile: async function () {
      const vuexState = {
        ...this.exportApplicationState(),
        ...this.exportProjectsState(),
        ...this.exportRecordsState(),
        ...this.exportSettingsState()
      }
      const data = formatJson.plain(vuexState)
      await save(data, 'time-recorder.json')

      this.$q.notify({
        message: this.$t('settingspage.importexport.export.success'),
        color: 'positive'
      })
    },
    importStateFromFile: function () {
      electron.ipcRenderer.once(OPEN_FILE_RESPONSE, (event, args) => {
        const importedState = JSON.parse(args)
        this.importApplicationState(importedState.application)
        this.importProjectsState(importedState.projects)
        this.importRecordsState(importedState.records)
        this.importSettingsState(importedState.settings)
        this.$q.notify({
          message: this.$t('settingspage.importexport.import.success'),
          color: 'positive'
        })
      })
      electron.ipcRenderer.send(OPEN_FILE)
    },
    ...mapGetters('application', {
      exportApplicationState: 'getState'
    }),
    ...mapGetters('projects', {
      exportProjectsState: 'getState'
    }),
    ...mapGetters('records', {
      exportRecordsState: 'getState'
    }),
    ...mapGetters('settings', {
      exportSettingsState: 'getState'
    }),
    ...mapActions('application', {
      importApplicationState: 'importState'
    }),
    ...mapActions('projects', {
      importProjectsState: 'importState'
    }),
    ...mapActions('records', {
      importRecordsState: 'importState'
    }),
    ...mapActions('settings', {
      importSettingsState: 'importState'
    })
  }
}
</script>
