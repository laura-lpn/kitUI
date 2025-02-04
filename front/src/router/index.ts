import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CreateView from '../views/CreateView.vue'
import DownloadView from '../views/DownloadView.vue'
import LegalsView from '../views/LegalsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/creation',
      name: 'create',
      component: CreateView
    },
    {
      path: '/creation/download',
      name: 'download',
      component: DownloadView
    },
    {
      path: '/legals',
      name: 'legals',
      component: LegalsView
    }
  ]
})

export default router
