import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CreateView from '../views/CreateView.vue'
import PreviewView from '../views/PreviewView.vue'

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
      name: 'Create kitui',
      component: CreateView
    },
    {
      path: '/creation/preview',
      name: 'Preview',
      component: PreviewView
    }
  ]
})

export default router
