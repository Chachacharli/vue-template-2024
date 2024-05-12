import HomeView from '../views/HomeView.vue'

export const ROUTES = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/user',
    name: 'user',
    component: import('../views/User.vue')
  }
] as const
