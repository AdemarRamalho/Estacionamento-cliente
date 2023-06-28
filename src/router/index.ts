import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import App from '../views/movimentacao/MovimentacaoListView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: App
  },
  {
    path: '/marca-lista',
    name: 'marca-lista-view',
    component: () => import(/* webpackChunkName: "about" */ '../views/marca/MarcaListView.vue')
  },
  {
    path: '/form-marca-lista',
    name: 'MarcaForm',
    component: () => import(/* webpackChunkName: "about" */ '../views/marca/MarcaFormView.vue'),
    children: [
      {
        path: '/marcaCadastrar',
        name: 'marca-cadastrar-editar',
        component: () => import(/* webpackChunkName: "about" */ '../views/marca/MarcaFormView.vue'),
      },
      {
        path: '/marcaCadastrar',
        name: 'marca-cadastrar-excluir',
        component: () => import(/* webpackChunkName: "about" */ '../views/marca/MarcaFormView.vue'),
      },
    ]
  },
  {
    path: '/modelo-lista',
    name: 'ModeloListaView',
    component: () => import(/* webpackChunkName: "about" */ '../views/modelo/ModeloListView.vue')
  },
  {
    path: '/form-modelo-lista',
    name: 'ModeloForm',
    component: () => import(/* webpackChunkName: "about" */ '../views/modelo/ModeloFormView.vue'),
    children: [
      {
        path: '/modelo-cadastrar',
        name: 'modelo-cadastrar-editar',
        component: () => import(/* webpackChunkName: "about" */ '../views/modelo/ModeloFormView.vue'),
      },
      {
        path: '/modelo-cadastrar',
        name: 'modelo-cadastrar-excluir',
        component: () => import(/* webpackChunkName: "about" */ '../views/modelo/ModeloFormView.vue'),
      },
    ]
  },
  {
    path: '/veiculo-lista',
    name: 'VeiculoListView',
    component: () => import(/* webpackChunkName: "about" */ '../views/veiculo/VeiculoListView.vue')
  },
  {
    path: '/veiculo-modelo-lista',
    name: 'VeiculoForm',
    component: () => import(/* webpackChunkName: "about" */ '../views/veiculo/VeiculoFormView.vue'),
    children: [
      {
        path: '/veiculo-cadastrar',
        name: 'veiculo-cadastrar-editar',
        component: () => import(/* webpackChunkName: "about" */ '../views/veiculo/VeiculoFormView.vue'),
      },
      {
        path: '/veiculo-cadastrar',
        name: 'veiculo-cadastrar-excluir',
        component: () => import(/* webpackChunkName: "about" */ '../views/veiculo/VeiculoFormView.vue'),
      },
    ]
  },
  {
    path: '/condutor-lista',
    name: 'CondutorListView',
    component: () => import(/* webpackChunkName: "about" */ '../views/condutor/CondutorListView.vue')
  },
  {
    path: '/condutor-modelo-lista',
    name: 'CondutorForm',
    component: () => import(/* webpackChunkName: "about" */ '../views/condutor/CondutorFormView.vue'),
    children: [
      {
        path: '/condutor-cadastrar',
        name: 'condutor-cadastrar-editar',
        component: () => import(/* webpackChunkName: "about" */ '../views/condutor/CondutorFormView.vue'),
      },
      {
        path: '/condutor-cadastrar',
        name: 'condutor-cadastrar-excluir',
        component: () => import(/* webpackChunkName: "about" */ '../views/condutor/CondutorFormView.vue'),
      },
    ]
  },
  {
    path: '/configuracao-lista',
    name: 'ConfiguracaoListView',
    component: () => import(/* webpackChunkName: "about" */ '../views/configuracao/ConfiguracaoListView.vue')
  },
  {
    path: '/configuracao-modelo-lista',
    name: 'ConfiguracaoForm',
    component: () => import(/* webpackChunkName: "about" */ '../views/configuracao/ConfiguracaoFormView.vue'),
    children: [
      {
        path: '/configuracao-cadastrar',
        name: 'configuracao-cadastrar-editar',
        component: () => import(/* webpackChunkName: "about" */ '../views/configuracao/ConfiguracaoFormView.vue'),
      },
      {
        path: '/configuracao-cadastrar',
        name: 'configuracao-cadastrar-excluir',
        component: () => import(/* webpackChunkName: "about" */ '../views/configuracao/ConfiguracaoFormView.vue'),
      },
    ]
  },
  {
    path: '/movimentacao-lista',
    name: 'MovimentacaoListView',
    component: () => import(/* webpackChunkName: "about" */ '../views/movimentacao/MovimentacaoListView.vue')
  },
  {
    path: '/form-movimentacao-lista',
    name: 'MovimentacaoForm',
    component: () => import(/* webpackChunkName: "about" */ '../views/movimentacao/MovimentacaoFormView.vue'),
    children: [
      {
        path: '/movimentacao-cadastrar',
        name: 'movimentacao-cadastrar-editar',
        component: () => import(/* webpackChunkName: "about" */ '../views/movimentacao/MovimentacaoFormView.vue'),
      },
      {
        path: '/movimentacao-cadastrar',
        name: 'movimentacao-cadastrar-excluir',
        component: () => import(/* webpackChunkName: "about" */ '../views/movimentacao/MovimentacaoFormView.vue'),
      },
    ]
  },
  {
    path: '/movimentacao-cadastrar',
    name: 'movimentacao-cadastrar-finalizar',
    component: () => import(/* webpackChunkName: "about" */ '../views/movimentacao/MovimentacaoFinalizarView.vue'),
  },
  {
    path: '/movimentacao-listarInativos',
    name: 'movimentacao-ativas-finalizar',
    component: () => import(/* webpackChunkName: "about" */ '../views/movimentacao/MovimentacaoListaAtivaView.vue'),
  },
  
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router