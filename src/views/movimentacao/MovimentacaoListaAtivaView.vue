<template>

    <div class="container" style="margin-top: 10px;">
  
      <div class="row">
        <div class="col-md-10 text-start"> <p class="fs-3"> Lista de Movimentacoes Finalizadas</p> </div>
        <div class="col-md-2"> 
          <div class="d-grid gap-2">
            <router-link type="button" class="btn btn-success" 
              to="/movimentacao-cadastrar">Cadastrar
            </router-link>
          </div>
        </div>
      </div>
  
      <div class="row">
        <div class="col-md-12">  
          <table class="table table-bordered">
            <thead class="table-secondary " >
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Status</th>
                <th scope="col">Condutor</th>
                <th scope="col">Veiculo</th>
                <th scope="col">Entrada</th>
                <th scope="col">Saida</th>
                <th scope="col">Valor</th>
              </tr>
            </thead>  
            <tbody class="table-group-divider">
              <tr v-for="item in movimentacaoList" :key="item.id">
                <th class="col-md-1">{{ item.id }}</th>              
                <th class="col-md-2"> 
                  <span v-if="item.ativo" class="badge text-bg-success"> Ativo </span>
                  <span v-if="!item.ativo" class="badge text-bg-danger"> Finalizado </span>
                </th>
                <th class="col-md1">{{item.condutor.nome}}</th>
                <th class="col-md1">{{item.veiculo.placa}}</th>
                <th class="col-md1" >{{ item.entrada}}</th>
                <th class="col-md1" >{{ item.saida}}</th>
                <th class="col-md1" >{{ item.valorTotal}}R$</th>


              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  
  </template>
  
  <script lang="ts">
  
  import { defineComponent } from 'vue';
  import { Movimentacao } from '@/model/Movimentacao';
  import  MovimentacaoClient  from '@/client/MovimentacaoClient';
  
  export default defineComponent({
    name: 'MovimentacaoLista',
    data() {
      return {
          movimentacaoList: new Array<Movimentacao>(),
          movimentacao : new Movimentacao()
      }
    },
    mounted() {
      this.findAll();
    },
    methods: {
      findAll() {
        MovimentacaoClient.listaInativos()
          .then(sucess => {
            this.movimentacaoList = sucess
          })
          .catch(error => {
            console.log(error);
          });
      },
    }
  });
  
  </script>