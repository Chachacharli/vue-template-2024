import HomeView from '../views/HomeView.vue'

export const ROUTES = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/login',
    name: 'login',
    component: HomeView
  },
  {
    path: '/users',
    name: 'users',
    component: HomeView,
    meta: {
      breadcrumb: 'usuarios'
    },
    children: [
      {
        path: ':id',
        name: 'user',
        component: HomeView
      }
    ]
  }
] as const
