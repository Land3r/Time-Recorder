import electron from 'electron'
import storeFunc from '../../src/store/index'
import { EXIT_APPLICATION } from '../ipc-events-types'

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
    store.dispatch('application', 'addSystemSleep')
  })
  electron.powerMonitor.on('resume', () => {
    store.dispatch('application', 'addSystemResume')
  })
  electron.powerMonitor.on('shutdown', () => {
    store.dispatch('application', 'addSystemShutdown')
  })
  electron.powerMonitor.on('on-ac', () => {
    store.dispatch('application', 'addSystemAc')
  })
  electron.powerMonitor.on('on-battery', () => {
    store.dispatch('application', 'addSystemBattery')
  })
  electron.powerMonitor.on('lock-screen', () => {
    store.dispatch('application', 'application/addSystemLock')
  })
  electron.powerMonitor.on('unlock-screen', () => {
    store.dispatch('application', 'application/addSystemUnlock')
  })
}

/**
 * App Ready event listener.
 */
electron.app.on('ready', () => {
  createWindow()
  registerEventListeners()
})

/**
 * App all window closed event listener.
 */
electron.app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    electron.app.quit()
  }
})

/**
 * App activate event listener.
 */
electron.app.on('activate', () => {
  if (mainWindow === null) {
    createWindow()
  }
})

/**
 * IPC custom events.
 */
electron.ipcMain.on(EXIT_APPLICATION, (event, args) => {
  electron.app.quit()
})
