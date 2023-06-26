<template>

    <div class="container" style="margin-top: 10px;">
  
      <div class="row">
        <div class="col-md-10 text-start"> <p class="fs-3"> Lista de Configuracoes </p> </div>
        <div class="col-md-2"> 
          <div class="d-grid gap-2">
            <router-link type="button" class="btn btn-success" 
              to="/configuracao-modelo-lista">Cadastrar
            </router-link>
          </div>
        </div>
      </div>
  
      <div class="row">
        <div class="col-md-12">  
          <table class="table">
            <thead class="table-secondary" >
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Ativo</th>
                <th scope="col">ValorHora</th>
                <th scope="col">inicioExpediente</th>
                <th scope="col"> fimExpediente</th>
                <th scope="col">Opção</th>
              </tr>
            </thead>  
            <tbody class="table-group-divider">
              
              <tr v-for="item in configuracaoList" :key="item.id">
                <th class="col-md-1">{{ item.id }}</th>              
                <th class="col-md-2"> 
                  <span v-if="item.ativo" class="badge text-bg-success"> Ativo </span>
                  <span v-if="!item.ativo" class="badge text-bg-danger"> Inativo </span>
                </th>
                <th class ="col-md-2">{{item.valorHora}}</th>
                <th class="text-start">{{ item.inicioExpediente }}</th>
                <th class="text-start">{{ item.fimExpediente }}</th>
                <th class="col-md-2">
                <div class="col dropdown">
                    <button type="submit" class="btn btn-outline-warning botao dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">Opções</button>   
                <div class="dropdown-menu">
                <RouterLink :to="{name:'condutor-cadastrar-excluir', query:{id: item.id,form:'excluir'}}">
                    <button class="dropdown-item">Excluir</button>
                </RouterLink>
                <RouterLink :to="{name:'condutor-cadastrar-editar', query:{id:item.id,form:'editar'}}">
                    <button type="button" class="dropdown-item">Editar</button>
                </RouterLink>
                </div> 
            </div>
                </th>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  
  </template>
  
  <script lang="ts">
  
  import { defineComponent } from 'vue';
  import { Configuracao } from '@/model/Configuracao';
  import  ConfiguracaoClient  from '@/client/ConfiguracaoClient';
  
  export default defineComponent({
    name: 'ConfiguracaoLista',
    data() {
      return {
          configuracaoList: new Array<Configuracao>()
      }
    },
    mounted() {
      this.findAll();
    },
    methods: {
      findAll() {
        ConfiguracaoClient.listaAll()
          .then(sucess => {
            this.configuracaoList = sucess
          })
          .catch(error => {
            console.log(error);
          });
      },
    }
  });
  
  </script>