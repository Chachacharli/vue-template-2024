import HomeView from '../views/HomeView.vue'

export const ROUTES = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: {
      icon: 'bi bi-house-fill',
      label: 'home'
    }
  },
  {
    path: '/login',
    name: 'login',
    component: HomeView,
    meta: {
      icon: 'bi bi-house-fill',
      label: 'login'
    }
  },
  {
    path: '/users',
    name: 'users',
    component: HomeView,
    meta: {
      breadcrumb: 'usuarios',
      icon: 'bi bi-house-fill',
      label: 'users'
    },
    children: [
      {
        path: ':id',
        name: 'user',
        component: HomeView
      }
    ]
  }
]
