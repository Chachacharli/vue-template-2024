import HomeView from '../views/HomeView.vue'

export const ROUTES = [
  {
    path: '/',
    name: 'base',
    component: HomeView,
    meta: {
      icon: 'bi bi-house-fill',
      label: '/',
      color: '#5e72e4',
      notVisible: true
    }
  },
  {
    path: '/home',
    name: 'home',
    component: HomeView,
    meta: {
      icon: 'bi bi-house-fill',
      label: 'home',
      color: '#5e72e4'
    }
  },
  {
    path: '/login',
    name: 'login',
    component: HomeView,
    meta: {
      icon: 'bi bi-house-fill',
      label: 'login',
      color: '#a8e45e'
    }
  },
  {
    path: '/users',
    name: 'users',
    component: HomeView,
    meta: {
      breadcrumb: 'usuarios',
      icon: 'bi bi-house-fill',
      label: 'users',
      color: '#e45e72'
    },
    children: [
      {
        path: ':id',
        name: 'user',
        component: HomeView
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: HomeView,
    meta: {
      icon: 'bi bi-house-fill',
      label: 'login',
      color: '#e45edd'
    }
  }
]
