<template>
    <div>
        <h1 class="d-flex justify-content-center">Cadastro de Condutores</h1>
            <form>
                <div class="row">
                    <div class="col-md-4 offset-2">
                        <label>Nome</label>
                        <input type="text" class="form-control" placeholder="Digite seu nome">
                    </div>
                    <div class="col-md-4">
                        <label>Telefone</label>
                        <input type="text" class="form-control" placeholder="Digite seu telefone">
                    </div>
                </div>
                <div class="row coluna-nome">
                    <div class="col-md-4 offset-4">
                        <label>CPF</label>
                        <input type="text" class="form-control" placeholder="Digite Seu CPF">
                    </div>
                </div>
                <div class="col offset-9 botao-enviar">
                        <button type="submit" class="btn btn-primary mb-2">Cadastrar</button>
                </div>
            </form>
    </div>
</template>

<script lang="ts">

import CondutorClient from '@/client/CondutorClient';
import MarcaClient from '@/client/MarcaClient';
import ModeloClient from '@/client/ModeloClient';
import { Condutor } from '@/model/Condutor';
import { Marca } from '@/model/Marca';
import { Modelo } from '@/model/Modelo';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ModeloFormulario',
  data() {
    return { 
      condutor: new Condutor(),
      condutorsList: [],
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
      CondutorClient.cadastrar(this.condutor)
        .then(sucess => {
          this.condutor = new Condutor()
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
      CondutorClient.findById(id)
        .then(sucess => {
          this.condutor = sucess
        })
        .catch(error => {
          this.mensagem.ativo = true;
          this.mensagem.mensagem = error;
          this.mensagem.titulo = "Error. ";
          this.mensagem.css = "alert alert-danger alert-dismissible fade show";
        });
    },
    onClickEditar(){
      CondutorClient.editar(this.condutor.id, this.condutor)
        .then(sucess => {
          this.condutor = new Condutor()
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
      CondutorClient.excluir(this.condutor.id)
        .then(sucess => {
          this.condutor = new Condutor()
          this.$router.push({ name: 'CondutorListView' });
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
          this.condutorsList = sucess
        })
        .catch(error => {
          console.log(error);
        });
    },
    }
});

</script>

<style lang="scss">
    .botao-enviar{
        margin-top: 4%;
    }
</style>