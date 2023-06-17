import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import App from '../App.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: App
  },
  {
    path: '/lista-marca',
    name: 'marca-lista',
    component:() => import('../views/marca/marca-lista-view.vue')
  },
{
  path: '/form-marca',
  name: 'marca-form',
  component:() => import('../views/marca/marca-form-view.vue')
},
{
path: '/condutor-lista',
name: 'condutor-lista',
component:() => import('../views/condutor/condutor-list-view.vue')
},
{
  path: '/condutor-form',
  name: 'condutor-form',
  component:() => import('../views/condutor/condutor-form-view.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
