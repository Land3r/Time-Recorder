export default {
  buttons: {
    save: 'Save',
    apply: 'Apply',
    ok: 'Ok',
    edit: 'Edit',
    cancel: 'Cancel',
    confirm: 'Confirm',
    delete: 'Delete'
  },
  langs: {
    fr: 'French',
    en: 'English'
  },
  search: {
    noresults: 'No results'
  },
  form: {
    activity: {
      create: {
        title: 'Create a new activity',
        namelabel: 'Name',
        labellabel: 'Label',
        iconlabel: 'Icon'
      },
      edit: {
        title: 'Edit an activity',
        namelabel: 'Name',
        labellabel: 'Label',
        iconlabel: 'Icon'
      },
      delete: 'Confirm delete <strong>{name}</strong> activity ?'
    }
  },
  homepage: {
    title: 'Home',
    step1: {
      title: 'Start a record',
      details: 'You should start a record before doing anything else.'
    },
    step2: {
      title: 'Select a project',
      details: ''
    },
    step3: {
      title: 'Select an activity',
      details: ''
    }
  },
  settingspage: {
    title: 'Settings',
    user: {
      expansiontitle: 'User',
      title: 'User',
      usernamelabel: 'Username',
      langlabel: 'Language',
      dateformat: {
        label: 'Date format',
        details: 'You can use any datetime format supported by quasar framework (https://v1.quasar-framework.org/quasar-utils/date-utils#Format-for-display)'
      },
      success: 'User profile updated.'
    },
    objective: {
      expansiontitle: 'Objectives',
      title: 'Objective',
      objectivetypelabel: 'Objective type',
      objectivevaluelabel: 'Value (in hours)',
      success: 'Objective updated.'
    },
    defaultactivities: {
      expansiontitle: 'Activities',
      title: 'Default activities',
      noactivities: {
        label: 'No activities yet.',
        sublabel: 'Default activities can be added to new project on creation'
      }
    },
    recorder: {
      expansiontitle: 'Recorder',
      title: 'Recorder',
      systemevents: {
        title: 'System events watchers',
        sleep: {
          title: 'Sleep',
          details: 'Watch for sleep event'
        },
        resume: {
          title: 'Resume',
          details: 'Watch for resume event'
        },
        shutdown: {
          title: 'Shutdown',
          details: 'Watch for shutdown event'
        },
        lock: {
          title: 'Lock',
          details: 'Watch for session lock event'
        },
        unlock: {
          title: 'Unlock',
          details: 'Watch for session unlock event'
        },
        ac: {
          title: 'AC',
          details: 'Watch for switch to sector alimentation event'
        },
        battery: {
          title: 'Battery',
          details: 'Watch for witch to battery alimentation event'
        }
      },
      success: 'Event watchers updated.'
    },
    importexport: {
      expansiontitle: 'Import / Export',
      import: {
        title: 'Import',
        buttonlabel: 'Import',
        success: 'Data imported successfully.'
      },
      export: {
        title: 'Export',
        buttonlabel: 'Export',
        success: 'Data export to JSON file.'
      }
    },
    reset: {
      expansiontitle: 'Reset',
      title: 'Reset',
      buttonlabel: 'Reset',
      popup: {
        message: 'Are you sure you want to reset the application state ?'
      },
      success: 'Application was reset.'
    }
  }
}
