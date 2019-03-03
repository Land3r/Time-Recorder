import electron from 'electron'
import storeFunc from '../../src/store/index'

/**
 * Set `__statics` path to static files in production;
 * The reason we are setting it here is that the path needs to be evaluated at runtime
 */
if (process.env.PROD) {
  global.__statics = require('path').join(__dirname, 'statics').replace(/\\/g, '\\\\')
}

let mainWindow
let store = storeFunc()

/**
 * Creates electron main window
 */
function createWindow () {
  /**
   * Initial window options
   */
  mainWindow = new electron.BrowserWindow({
    width: 1000,
    height: 600,
    useContentSize: true,
    titleBarStyle: 'hiddenInset',
    show: false
  })

  mainWindow.loadURL(process.env.APP_URL)

  mainWindow.once('ready-to-show', () => {
    mainWindow.show()
  })

  mainWindow.on('closed', () => {
    mainWindow = null
  })
}

/**
 * Register system event listeners
 */
function registerEventListeners () {
  electron.powerMonitor.on('suspend', () => {
    console.log('The system is going to sleep')
    store.dispatch('application', 'addSystemSleep')
  })
  electron.powerMonitor.on('resume', () => {
    console.log('The system is going to resume')
    store.dispatch('application', 'addSystemResume')
  })
  electron.powerMonitor.on('shutdown', () => {
    console.log('The system is going to shutdown')
    store.dispatch('application', 'addSystemShutdown')
  })
  electron.powerMonitor.on('on-ac', () => {
    console.log('The system is now on AC')
    store.dispatch('application', 'addSystemAc')
  })
  electron.powerMonitor.on('on-battery', () => {
    console.log('The system is now on Battery')
    store.dispatch('application', 'addSystemBattery')
  })
  electron.powerMonitor.on('lock-screen', () => {
    console.log('The screen is going to lock')
    store.dispatch('application', 'application/addSystemLock')
  })
  electron.powerMonitor.on('unlock-screen', () => {
    console.log('The screen is going to unlock')
    store.dispatch('application', 'application/addSystemUnlock')
  })
}

electron.app.on('ready', () => {
  createWindow()
  registerEventListeners()
})

electron.app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    electron.app.quit()
  }
})

electron.app.on('activate', () => {
  if (mainWindow === null) {
    createWindow()
  }
})
