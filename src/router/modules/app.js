import Home from '@/modules/App/Dashboard/Index.vue'

const routes = [
  {
    path: '/',
    name: 'dashboard-home',
    component: Home,
    meta: {
      layout: 'Dashboard',
      requiresAuth: false,
      parent: 'home',
      name: 'home'
    }
  },

]

export default routes
