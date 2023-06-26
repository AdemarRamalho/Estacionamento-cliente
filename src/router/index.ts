import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import App from '../views/movimentacao/movimentacao-lista-view.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: App
  },
  {
    path: '/lista-marca',
    name: 'marca-lista-view',
    component:() => import('../views/marca/marca-lista-view.vue')
  },
{
  path: '/form-marca',
  name: 'marca-form-view',
  component:() => import('../views/marca/marca-form-view.vue')
},
{
path: '/condutor-lista',
name: 'condutor-lista-view',
component:() => import('../views/condutor/condutor-list-view.vue')
},
{
  path: '/condutor-form',
  name: 'condutor-form-view',
  component:() => import('../views/condutor/condutor-form-view.vue')
  },
{
  path: '/configuracao-lista',
  name: 'configuracao-lista-view',
  component:() => import('../views/configuracao/configuracao-lista-view.vue')
},
{
  path: '/configuracao-form',
  name: 'configuracao-form-view',
  component:() => import('../views/configuracao/configuracao-form-view.vue')
},
{
  path: '/modelo-lista',
  name: 'modelo-lista-view',
  component:() => import('../views/modelo/modelo-lista-view.vue')
},
{
  path: '/modelo-form',
  name: 'modelo-form-view',
  component:() => import('../views/modelo/modelo-form-view.vue')
},
{
  path: '/movimentacao-lista',
  name: 'movimentacao-lista-view',
  component:() => import('../views/movimentacao/movimentacao-lista-view.vue')
},
{
  path: '/movimentacao-form',
  name: 'movimentacao-form-view',
  component:() => import('../views/movimentacao/movimentacao-form-view.vue')
},
{
  path: '/veiculo-lista',
  name: 'veiculo-lista-view',
  component:() => import('../views/veiculo/veiculo-lista-view.vue')
},
{
  path: '/veiculo-form',
  name: 'veiculo-form-view',
  component:() => import('../views/veiculo/veiculo-form-view.vue')
},
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
