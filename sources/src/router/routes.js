const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: 'projects',
        name: 'Projects',
        component: () => import('pages/Projects.vue'),
        meta: {
          breadcrumbs: [
            { id: 0, label: 'Accueil', icon: 'home', to: '/index' },
            { id: 1, label: 'Activités', icon: 'business' }
          ]
        }
      },
      {
        path: 'activities',
        name: 'Activites',
        component: () => import('pages/Activities.vue'),
        meta: {
          breadcrumbs: [
            { id: 0, label: 'Accueil', icon: 'home', to: '/index' },
            { id: 1, label: 'Activités', icon: 'business' }
          ]
        }
      },
      {
        path: 'charts',
        name: 'Charts',
        component: () => import('pages/Charts.vue'),
        meta: {
          breadcrumbs: [
            { id: 0, label: 'Accueil', icon: 'home', to: '/index' },
            { id: 1, label: 'Graphiques', icon: 'donut_small' }
          ]
        }
      },
      {
        path: 'index',
        name: 'Index',
        component: () => import('pages/Index.vue'),
        meta: {
          breadcrumbs: [
            { id: 0, label: 'Accueil', icon: 'home' }
          ]
        }
      },
      {
        path: '',
        name: 'Index',
        component: () => import('pages/Index.vue'),
        meta: {
          breadcrumbs: [
            { id: 0, label: 'Accueil', icon: 'home' }
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
