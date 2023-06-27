<template>

    <div class="container" style="margin-top: 10px;">
  
      <div class="row">
        <div class="col-md-10 text-center"> <p class="fs-3"> Comprovante</p> </div>
        <div class="col-md-2"> 
          
        </div>
      </div>
      <div>
          <button @click="onClickEditar">Finalizar</button>
      </div>
  
      <div class="d-grid gap-2">
            <router-link type="button" class="btn btn-info" 
              to="/movimentacao-lista">Voltar
            </router-link>
          </div>
    </div>
  
  </template>
  
  <script lang="ts">
  
  import { defineComponent } from 'vue';
  import { Movimentacao } from '@/model/Movimentacao';
  import  MovimentacaoClient  from '@/client/MovimentacaoClient';
  
  export default defineComponent({  
    name: 'MovimentacaoTerminar',
    data() {
      return { 
        movimentacao : new Movimentacao(),
        errors: [],
        mensagem: {
          ativo: false as boolean,
          titulo: "" as string,
          mensagem: "" as string,
          css: "" as string
        }
      }
    },
    computed: {
      id () {
        return this.$route.query.id
      },
      form () {
        return this.$route.query.form
      }
    },
    mounted() { 
  
      if(this.id !== undefined){
        this.findById(Number(this.id));
      }
  
  
    },
    methods: {
      findById(id: number){
        MovimentacaoClient.findById(id)
          .then(sucess => {
            this.movimentacao = sucess
          })
          .catch(error => {
            this.mensagem.ativo = true;
            this.mensagem.mensagem = error;
            this.mensagem.titulo = "Error. ";
            this.mensagem.css = "alert alert-danger alert-dismissible fade show";
          });
      },
      onClickEditar(){
          debugger;
        MovimentacaoClient.finalizarMov(this.movimentacao.id)
          .then(sucess => {
            this.movimentacao = new Movimentacao()
            this.mensagem.ativo = true;
            this.mensagem.mensagem = sucess;
            this.mensagem.titulo = "Parabens. ";
            this.mensagem.css = "alert alert-success alert-dismissible fade show";
          })
          .catch(error => {
            this.mensagem.ativo = true;
            this.mensagem.mensagem = error;
            this.mensagem.titulo = "Error. ";
            this.mensagem.css = "alert alert-danger alert-dismissible fade show";
          });
      },
    }
  });
  
  </script>