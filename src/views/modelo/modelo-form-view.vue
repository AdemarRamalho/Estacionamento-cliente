<template>

    <div class="container" style="background: ;">
  
      <div class="row">
        <div class="col-md-10 text-start"> <p class="fs-3"> Cadastrar Modelo </p> </div>
        <div class="col-md-2"> </div>
      </div>
  
      <hr/>
  
      <div v-if="mensagem.ativo" class="row">
        <div class="col-md-12 text-start">
          <div :class="mensagem.css" role="alert">
            <strong>{{ mensagem.titulo }}</strong> {{ mensagem.mensagem }}
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
          </div>
        </div>
      </div>
  
      <div class="row">
        <div class="col-md-12 text-start">
          <label class="form-label">Nome do Modelo *</label>
          <input type="text" :disabled="this.form === 'excluir' ? '' : disabled" class="form-control" v-model="modelo.nome">
          <label>Nome da marca</label> <br>
          <select class="form-select" v-model="modelo.marca">
              <option v-for="item in marcasList" :key="item.id" :value="item">{{item.nome}}</option>
          </select>        
        </div>
      </div>
  
      <div class="row">
        <div class="col-md-3 offset-md-6"> 
          <div class="d-grid gap-2">
            <router-link type="button" class="btn btn-info" 
              to="/modelo-lista">Voltar
            </router-link>
          </div>
        </div>
        <div class="col-md-3 "> 
          <div class="d-grid gap-2">
            <button v-if="this.form === undefined" type="button" 
                class="btn btn-success" @click="onClickCadastrar()">
              Cadastrar 
            </button>
            <button v-if="this.form === 'editar'" type="button" 
                class="btn btn-warning" @click="onClickEditar()">
              Editar 
            </button>
            <button v-if="this.form === 'excluir'" type="button" 
                class="btn btn-danger" @click="onClickExcluir()">
              Excluir 
            </button>
          </div>
        </div>
      </div>
    </div>
  
  </template>
  
  <script lang="ts">
  
  import MarcaClient from '@/client/MarcaClient';
  import ModeloClient from '@/client/ModeloClient';
  import { Marca } from '@/model/Marca';
  import { Modelo } from '@/model/Modelo';
  import { defineComponent } from 'vue';
  
  export default defineComponent({
    name: 'ModeloFormulario',
    data() {
      return { 
        modelo: new Modelo(),
        marcasList: [],
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
        this.marcaListAll();
  
      if(this.id !== undefined){
        this.findById(Number(this.id));
      }
  
  
    },
    methods: {
  
      onClickCadastrar(){
        ModeloClient.cadastrar(this.modelo)
          .then(sucess => {
            this.modelo = new Modelo()
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
      findById(id: number){
        ModeloClient.findById(id)
          .then(sucess => {
            this.modelo = sucess
          })
          .catch(error => {
            this.mensagem.ativo = true;
            this.mensagem.mensagem = error;
            this.mensagem.titulo = "Error. ";
            this.mensagem.css = "alert alert-danger alert-dismissible fade show";
          });
      },
      onClickEditar(){
        ModeloClient.editar(this.modelo.id, this.modelo)
          .then(sucess => {
            this.modelo = new Modelo()
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
      onClickExcluir(){
        ModeloClient.excluir(this.modelo.id)
          .then(sucess => {
            this.modelo = new Modelo()
            this.$router.push({ name: 'ModeloListaView' });
          })
          .catch(error => {
            this.mensagem.ativo = true;
            this.mensagem.mensagem = error;
            this.mensagem.titulo = "Error. ";
            this.mensagem.css = "alert alert-danger alert-dismissible fade show";
          });
      },
      marcaListAll(){
        MarcaClient.listaAllAtivos()
          .then(sucess => {
            this.marcasList = sucess
          })
          .catch(error => {
            console.log(error);
          });
      },
      }
  });
  
  </script>