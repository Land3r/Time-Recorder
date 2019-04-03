const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: 'temp',
        name: 'Temp',
        component: () => import('pages/Temp.vue'),
        meta: {
          breadcrumbs: [
            { id: 0, label: 'homepage', icon: 'home', to: '/index' },
            { id: 1, label: 'temppage', icon: 'timer' }
          ]
        }
      },
      {
        path: 'recorder',
        name: 'Recorder',
        component: () => import('pages/Recorder.vue'),
        meta: {
          breadcrumbs: [
            { id: 0, label: 'homepage', icon: 'home', to: '/index' },
            { id: 1, label: 'recorderpage', icon: 'timer' }
          ]
        }
      },
      {
        path: 'record',
        name: 'Record',
        component: () => import('pages/Record.vue'),
        meta: {
          breadcrumbs: [
            { id: 0, label: 'homepage', icon: 'home', to: '/index' },
            { id: 1, label: 'recordspage', icon: 'timer' }
          ]
        }
      },
      {
        path: 'projects',
        name: 'Projects',
        component: () => import('pages/Projects.vue'),
        meta: {
          breadcrumbs: [
            { id: 0, label: 'homepage', icon: 'home', to: '/index' },
            { id: 1, label: 'projectspage', icon: 'business' }
          ]
        }
      },
      {
        path: 'activities',
        name: 'Activites',
        component: () => import('pages/Activities.vue'),
        meta: {
          breadcrumbs: [
            { id: 0, label: 'homepage', icon: 'home', to: '/index' },
            { id: 1, label: 'activitiespage', icon: 'business' }
          ]
        }
      },
      {
        path: 'calendar',
        name: 'Calendar',
        component: () => import('pages/Calendar.vue'),
        meta: {
          breadcrumbs: [
            { id: 0, label: 'homepage', icon: 'home', to: '/index' },
            { id: 1, label: 'Calendar', icon: 'event' }
          ]
        }
      },
      {
        path: 'charts',
        name: 'Charts',
        component: () => import('pages/Charts.vue'),
        meta: {
          breadcrumbs: [
            { id: 0, label: 'homepage', icon: 'home', to: '/index' },
            { id: 1, label: 'graphicspage', icon: 'donut_small' }
          ]
        }
      },
      {
        path: 'settings',
        name: 'Settings',
        component: () => import('pages/Settings.vue'),
        meta: {
          breadcrumbs: [
            { id: 0, label: 'homepage', icon: 'home', to: '/index' },
            { id: 1, label: 'settingspage', icon: 'settings' }
          ]
        }
      },
      {
        path: 'index',
        name: 'Index',
        component: () => import('pages/Index.vue'),
        meta: {
          breadcrumbs: [
            { id: 0, label: 'homepage', icon: 'home' }
          ]
        }
      },
      {
        path: '',
        name: 'Index',
        component: () => import('pages/Index.vue'),
        meta: {
          breadcrumbs: [
            { id: 0, label: 'homepage', icon: 'home' }
          ]
        }
      }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
