<template>
    <div class="container" style="background: ">
      <div class="row">
        <div class="col-md-10 text-start">
          <p class="fs-3">Cadastrar Movimentacao</p>
        </div>
        <div class="col-md-2"></div>
      </div>
  
      <hr />

      <div v-if="mensagem.ativo" class="row">
      <div class="col-md-12 text-start">
        <div :class="mensagem.css" role="alert">
          <strong>{{ mensagem.titulo }}</strong> {{ mensagem.mensagem }}
          <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
      </div>
    </div>

      <div class="row">
        <div class="col-md-6 text-start">
          <label>Condutor</label> <br />
          <select class="form-select" v-model="movimentacao.condutor">
            <option v-for="item in condutoresList" :key="item.id" :value="item">
              {{ item.nome }}
            </option>
          </select>
        </div>
        <div class="col-md-6">
          <label> Placa </label> <br />
          <select class="form-select" v-model="movimentacao.veiculo">
            <option v-for="item in veiculosList" :key="item.id" :value="item">
              {{ item.placa }} - {{ item.modelo.nome }}
            </option>
          </select>
        </div>
      </div>
    </div>
  
    <p><br /></p>
  
    <div class="row">
      <div class="col-md-3 offset-md-6">
        <div class="d-grid gap-2">
          <router-link type="button" class="btn btn-info" to="/movimentacao-lista"
            >Voltar
          </router-link>
        </div>
      </div>
      <div class="col-md-3">
        <div class="d-grid gap-2">
          <button
            v-if="this.form === undefined" type="button"
            class="btn btn-success"
            @click="onClickCadastrar()">Cadastrar
          </button>
          <button
            v-if="this.form === 'editar'" type="button"
            class="btn btn-warning" @click="onClickEditar()">Editar
          </button>
          <button
            v-if="this.form === 'excluir'" type="button"
            class="btn btn-danger" @click="onClickExcluir()">
            Excluir
          </button>
          <button
            v-if="this.form === 'finalizar'" type="button"
            class="btn btn-success" @click="onClickFinalizar()">finalizar
          </button>
        </div>
      </div>
    </div>
  </template>
  
  <script lang="ts">
  import CondutorClient from "@/client/CondutorClient";
  import MovimentacaoClient from "@/client/MovimentacaoClient";
  import VeiculoClient from "@/client/VeiculoClient";
  import { Condutor } from "@/model/Condutor";
  import { Movimentacao } from "@/model/Movimentacao";
  import { Veiculo } from "@/model/Veiculo";
  import { defineComponent } from "vue";
  
  export default defineComponent({
    name: "VeiculoFormulario",
    data() {
      return {
        movimentacao: new Movimentacao(),
        veiculo: new Veiculo(),
        condutor: new Condutor(),
        veiculosList: [],
        condutoresList: [],
        mensagem: {
          ativo: false as boolean,
          titulo: "" as string,
          mensagem: "" as string,
          css: "" as string,
        },
      };
    },
    computed: {
      id() {
        return this.$route.query.id;
      },
      form() {
        return this.$route.query.form;
      },
    },
    mounted() {
      this.VeiculoListAllAtivos();
      this.CondutoresListAllAtivos();
      if (this.id !== undefined) {
        this.findById(Number(this.id));
      }
    },
    methods: {
      onClickCadastrar() {
        //   this.movimentacao.entrada = new Date();
        MovimentacaoClient.cadastrar(this.movimentacao)
  
          .then((sucess) => {
            let formattedDate = new Date(this.movimentacao.entrada)
              .toLocaleString("pt-BR", {
                day: "2-digit",
                month: "2-digit",
                year: "numeric",
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit",
              })
              .replace(/[/.,]/g, "-");
            this.veiculo = new Veiculo();
            this.mensagem.ativo = true;
            this.mensagem.mensagem = sucess;
            this.mensagem.titulo = "Parabens. ";
            this.mensagem.css = "alert alert-success alert-dismissible fade show";
          })
          .catch((error) => {
            this.mensagem.ativo = true;
            this.mensagem.mensagem = error;
            this.mensagem.titulo = "Error. ";
            this.mensagem.css = "alert alert-danger alert-dismissible fade show";
          });
      },
      findById(id: number) {
        MovimentacaoClient.findById(id)
          .then((sucess) => {
            this.movimentacao = sucess;
          })
          .catch((error) => {
            this.mensagem.ativo = true;
            this.mensagem.mensagem = error;
            this.mensagem.titulo = "Error. ";
            this.mensagem.css = "alert alert-danger alert-dismissible fade show";
          });
      },
      onClickEditar() {
        MovimentacaoClient.editar(this.veiculo.id, this.movimentacao)
          .then((sucess) => {
            this.veiculo = new Veiculo();
            this.mensagem.ativo = true;
            this.mensagem.mensagem = sucess;
            this.mensagem.titulo = "Parabens. ";
            this.mensagem.css = "alert alert-success alert-dismissible fade show";
          })
          .catch((error) => {
            this.mensagem.ativo = true;
            this.mensagem.mensagem = error;
            this.mensagem.titulo = "Error. ";
            this.mensagem.css = "alert alert-danger alert-dismissible fade show";
          });
      },
      onClickExcluir() {
        MovimentacaoClient.excluir(this.movimentacao.id)
          .then((sucess) => {
            this.veiculo = new Veiculo();
            this.$router.push({ name: "MovimentacaoListView" });
          })
          .catch((error) => {
            this.mensagem.ativo = true;
            this.mensagem.mensagem = error;
            this.mensagem.titulo = "Error. ";
            this.mensagem.css = "alert alert-danger alert-dismissible fade show";
          });
      },
      VeiculoListAllAtivos() {
        VeiculoClient.listaAllAtivos()
          .then((sucess) => {
            this.veiculosList = sucess;
          })
          .catch((error) => {
            console.log(error);
          });
      },
      CondutoresListAllAtivos() {
        CondutorClient.listaAllAtivos()
          .then((sucess) => {
            this.condutoresList = sucess;
          })
          .catch((error) => {
            console.log(error);
          });
      },
      onClickFinalizar(){
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
    },
  });
  </script>