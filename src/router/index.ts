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
{
  path: '/configuracao-lista',
  name: 'configuracao-lista',
  component:() => import('../views/configuracao/configuracao-lista-view.vue')
},
{
  path: '/configuracao-form',
  name: 'configuracao-form',
  component:() => import('../views/configuracao/configuracao-form-view.vue')
},
{
  path: '/modelo-lista',
  name: 'modelo-lista',
  component:() => import('../views/modelo/modelo-lista-view.vue')
},
{
  path: '/modelo-form',
  name: 'modelo-form',
  component:() => import('../views/modelo/modelo-form-view.vue')
},
{
  path: '/movimentacao-lista',
  name: 'movimentacao-lista',
  component:() => import('../views/movimentacao/movimentacao-lista-view.vue')
},
{
  path: '/movimentacao-form',
  name: 'movimentacao-form',
  component:() => import('../views/movimentacao/movimentacao-form-view.vue')
},
{
  path: '/veiculo-lista',
  name: 'veiculo-lista',
  component:() => import('../views/veiculo/veiculo-lista-view.vue')
},
{
  path: '/veiculo-form',
  name: 'veiculo-form',
  component:() => import('../views/veiculo/veiculo-form-view.vue')
},
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
