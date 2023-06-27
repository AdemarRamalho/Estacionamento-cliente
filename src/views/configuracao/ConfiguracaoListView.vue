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
          <table class="table table-bordered">
            <thead class="table-secondary" >
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Ativo</th>
                <th scope="col">Valor Hora</th>
                <th scope="col">inicio Expediente</th>
                <th scope="col"> fim Expediente</th>
                <th scope="col">valor Minuto Multa</th>
                <th scope="col"> Vagas Moto</th>
                <th scope="col"> Vagas Carro</th>
                <th scope="col"> Vagas Van</th>
                <th scope="col">Opção</th>
              </tr>
            </thead>  
            <tbody class="table-group-divider">
              
              <tr v-for="item in configuracaoList" :key="item.id">
                <th class="col">{{ item.id }}</th>              
                <th class="col"> 
                  <span v-if="item.ativo" class="badge text-bg-success"> Ativo </span>
                  <span v-if="!item.ativo" class="badge text-bg-danger"> Inativo </span>
                </th>
                <th class ="col-md-2">{{item.valorHora}}</th>
                <th class="text-start">{{ item.inicioExpediente }}</th>
                <th class="text-start">{{ item.fimExpediente }}</th>
                <th class="text-start">{{ item.valorMinutoMulta }}</th>
                <th class="text-start">{{ item.vagasMoto }}</th>
                <th class="text-start">{{ item.vagasCarro }}</th>
                <th class="text-start">{{ item.vagasVan }}</th>
                <th class="col-md-2">
                <div class="col dropdown">
                    <button type="submit" class="btn btn-outline-warning botao dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">Opções</button>   
                <div class="dropdown-menu">
                <RouterLink :to="{name:'configuracao-cadastrar-excluir', query:{id: item.id,form:'excluir'}}">
                    <button class="dropdown-item">Excluir</button>
                </RouterLink>
                <RouterLink :to="{name:'configuracao-cadastrar-editar', query:{id:item.id,form:'editar'}}">
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