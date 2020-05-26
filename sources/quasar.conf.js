// Configuration for your app
let path = require('path')

module.exports = function (ctx) {
  return {
    // app boot file (/src/boot)
    // --> boot files are part of "main.js"
    boot: [
      'i18n', // For internalisation of 'custom' components.
      'quasar-lang-pack', // For internalisation of quasat components.
      'axios', // For HTTP request.
      'vuelidate', // For form validation.
      'timers' // For vue-timers
    ],

    css: [
      'app.styl'
    ],

    extras: [
      'roboto-font',
      'material-icons' // optional, you are not bound to it
      // 'ionicons-v4',
      // 'mdi-v3',
      // 'fontawesome-v5',
      // 'eva-icons'
    ],

    // framework: 'all', // --- includes everything; for dev only!
    framework: {
      components: [
        'QLayout',
        'QHeader',
        'QDrawer',
        'QPageContainer',
        'QPage',
        'QToolbar',
        'QToolbarTitle',
        'QTabs',
        'QTab',
        'QTabPanels',
        'QTabPanel',
        'QBtn',
        'QIcon',
        'QList',
        'QItem',
        'QItemSection',
        'QItemLabel',
        'QBreadcrumbs',
        'QBreadcrumbsEl',
        'QAvatar',
        'QSeparator',
        'QDialog',
        'QCard',
        'QCardSection',
        'QCardActions',
        'QMenu',
        'QInput',
        'QToggle',
        'QSelect',
        'QEditor',
        'QExpansionItem',
        'QImg',
        'QTimeline',
        'QTimelineEntry',
        'QBtnToggle',
        'QScrollArea',
        'QBadge',
        'QCircularProgress',
        'QSlider',
        'QStepper',
        'QStep',
        'QStepperNavigation',
        'QTime',
        'QPopupProxy'
      ],

      directives: [
        'Ripple',
        'CloseDialog',
        'CloseMenu'
      ],

      // Quasar plugins
      plugins: [
        'Dialog',
        'Notify'
      ]

      // iconSet: 'ionicons-v4'
      // lang: 'de' // Quasar language
    },

    supportIE: false,

    build: {
      scopeHoisting: true,
      // vueRouterMode: 'history',
      // vueCompiler: true,
      // gzip: true,
      // analyze: true,
      // extractCSS: false,
      extendWebpack (cfg) {
        // Add eslint
        cfg.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /node_modules/
        })
        // Add i18n component
        cfg.module.rules.push({
          resourceQuery: /blockType=i18n/,
          use: [
            { loader: '@kazupon/vue-i18n-loader' },
            { loader: 'yaml-loader' }
          ]
        })
        // Add webpack aliases
        cfg.resolve.alias = {
          ...cfg.resolve.alias,
          '@': path.resolve(__dirname, 'src'),
          'assets': path.resolve(__dirname, 'src/assets'),
          'boot': path.resolve(__dirname, 'src/boot'),
          'components': path.resolve(__dirname, 'src/components'),
          'data': path.resolve(__dirname, 'src/data'),
          'domain': path.resolve(__dirname, 'src/domain'),
          'helpers': path.resolve(__dirname, 'src/helpers'),
          'i18n': path.resolve(__dirname, 'src/i18n'),
          'layouts': path.resolve(__dirname, 'src/layouts'),
          'pages': path.resolve(__dirname, 'src/pages'),
          'router': path.resolve(__dirname, 'src/router'),
          'store': path.resolve(__dirname, 'src/store')
        }
      }
    },

    devServer: {
      https: true,
      // port: 8080,
      open: true // opens browser window automatically
    },

    // animations: 'all' --- includes all animations
    animations: [],

    ssr: {
      pwa: false
    },

    pwa: {
      // workboxPluginMode: 'InjectManifest',
      // workboxOptions: {},
      manifest: {
        // name: 'Quasar App',
        // short_name: 'Quasar-PWA',
        // description: 'Best PWA App in town!',
        display: 'standalone',
        orientation: 'portrait',
        background_color: '#ffffff',
        theme_color: '#027be3',
        icons: [
          {
            'src': 'statics/icons/icon-128x128.png',
            'sizes': '128x128',
            'type': 'image/png'
          },
          {
            'src': 'statics/icons/icon-192x192.png',
            'sizes': '192x192',
            'type': 'image/png'
          },
          {
            'src': 'statics/icons/icon-256x256.png',
            'sizes': '256x256',
            'type': 'image/png'
          },
          {
            'src': 'statics/icons/icon-384x384.png',
            'sizes': '384x384',
            'type': 'image/png'
          },
          {
            'src': 'statics/icons/icon-512x512.png',
            'sizes': '512x512',
            'type': 'image/png'
          }
        ]
      }
    },

    cordova: {
      // id: 'org.cordova.quasar.app'
    },

    electron: {
      // bundler: 'builder', // or 'packager'
      extendWebpack (cfg) {
        // do something with Electron process Webpack cfg
      },
      packager: {
        // https://github.com/electron-userland/electron-packager/blob/master/docs/api.md#options

        // OS X / Mac App Store
        // appBundleId: '',
        // appCategoryType: '',
        // osxSign: '',
        // protocol: 'myapp://path',

        // Window only
        // win32metadata: { ... }
      },
      builder: {
        // https://www.electron.build/configuration/configuration

        // appId: 'quasar-app'
      }
    }
  }
}
