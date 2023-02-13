import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/eggs/:eggType', name: 'eggs', component: () => import('../views/Eggs.vue') },
  { path: '/eggs', redirect: '/eggs/chicken-egg' },
  { path: '/:pathMatch(.*)*', component: () => import('../views/NotFound.vue') }
]

const router = createRouter(
  {
    history: createWebHistory(),
    routes,
    linkActiveClass: 'egg-active'
  }
)

export default router
