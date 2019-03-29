export default {
  buttons: {
    save: 'Save',
    apply: 'Apply',
    ok: 'Ok',
    edit: 'Edit',
    cancel: 'Cancel',
    confirm: 'Confirm',
    delete: 'Delete',
    ignore: 'Ignore',
    back: 'Back',
    next: 'Next'
  },
  langs: {
    fr: 'French',
    en: 'English'
  },
  common: {
    noresults: 'No results',
    optional: 'Optional'
  },
  layout: {
    'poweredbyquasar': 'Powered by Quasar {version}',
    'exitlabel': 'Exit',
    'madewithlove': 'Made with 💗',
    'confirmquitmessage': 'A record is in progress, are you sure you still want to exit ?',
    'quitlabel': 'Quit anyway',
    'quitandsavelabel': 'Save and Quit'
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
    errorisrecording: 'A record is already in progress',
    title: 'Home',
    step1: {
      title: 'Start a record',
      details: 'You should start a record before doing anything else.',
      buttonlabel: 'Start record',
      commentlabel: 'Comment'
    },
    step2: {
      title: 'Select a project',
      details: 'You can already select a project / activity now, or choose to do it later',
      projectlabel: 'Project'
    },
    step3: {
      title: 'Select an activity',
      details: '',
      activitylabel: 'Activity',
      successactivity: 'Record started on {project}: {activity}.',
      successnoactivity: 'Record started.'
    }
  },
  recorderpage: {
    title: 'Recorder',
    nosegment: 'Activity not precised yet',
    activity: {
      projects: {
        title: 'Projects'
      },
      activities: {
        title: 'Activities',
        selectprojectfirst: 'Please select a project first.'
      },
      menu: {
        changeActivitylabel: 'Change activity',
        editActivityLabel: 'Edit current activity',
        cancelActivityLabel: 'Cancel current activity'
      },
      messages: {
        startSegmentWithNoRecordTitle: 'Start a record ?',
        startSegmentWithNoRecordMessage: 'No record is started yet. Do you want to start a record on activity {project}: {activity} ?'
      }*
    }
  },
  projectspage: {
    title: 'Projects'
  },
  graphicspage: {
    title: 'Graphics'
  },
  recordspage: {
    title: 'Records'
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
