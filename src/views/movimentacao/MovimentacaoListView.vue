<template>
<div class="container tabela">
    <div class="container text-center">
        <div class="row align-items-start">
            <div class="col opcoes">
                Lista de Movimentações
            </div>
            <div class="col opcoes">
                <Router-link to='/movimentacao-cadastrar'>
                    <button type="button" class="btn btn-success ">Adicionar Movimentação</button>
                </Router-link>
            </div>
        </div>
    </div>

    <div class="row inicio">
        <div class="col"> ID       </div>
        <div class="col"> Situação </div>
        <div class="col"> Condutor </div>
        <div class="col"> Veiculo </div>
        <div class="col"> Placa </div>
        <div class="col"> Entrada </div>
        <div class="col"> Opções </div>
    </div>

    <div v-for="item in movimentacaoList" :key="item.id" class="row itens">
        <div class="col"> {{ item.id }}       </div>
        <div class="col situacao">
            <span v-if="item.ativo" class="badge text-bg-success"> Ativo </span>
            <span v-if="!item.ativo" class="badge text-bg-danger"> Inativo </span>
        </div>
        <div class="col"> {{ item.condutor.nome }} </div>
        <div class="col"> {{ item.veiculo.modelo.nome }} </div>
        <div class="col"> {{ item.veiculo.placa }} </div>
        <div class="col"> {{ item.entrada }} </div>
        <RouterLink class="col" :to="{name: 'movimentacao-cadastrar-finalizar', query:{id:item.id,form:'finalizar'}}">
            <button type="submit" class="btn btn-danger botao" role="button"  aria-expanded="false">Finalizar</button>
        </RouterLink>
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
      MovimentacaoClient.listaAllAtivos()
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

<style scoped>

.tabela{
    margin-top: 2vw;
    background-color: WHITE;
    height: 75vh;
    border-radius: 6px;

}

.inicio{
    background-color: rgba(128, 128, 128, 0.144);
    color: grey;
    font-family: 'Lato';
    text-align: center;
    align-items: center;
    font-size: 10px;
    font-weight: bolder;
    border-radius: 5px;
    margin: 2vh;
    height: 5vh;
  
}

.itens{
    background-color: white;
    align-items: center;
    text-align: center;
    border-radius: 5px;
    margin: 2vh;
    transition: 2s;
    height: 5vh;
    
}

.col{
    font-size: 15px;
    font-weight: 100;
    font-family: 'Lato';
}

.page-link{
    width: 2vw;
    color: black;
}

.pagination{
    margin-top: 5vw;
    justify-content: center;
}

.opcoes{
    background-color: white;
    align-items: center;
    text-align: center;
    border-radius: 5px;
    margin-top: 2vw;
    font-size: 4vh;
    font-weight: bolder;
}


.situacao{
    color: green;
    font-weight: bolder;
    background-color: rgba(0, 128, 0, 0.349);
    border-radius: 5px;
   
}

.botao-cadastrar{
    height: 2.5vh;
    align-items: center;
    margin-right: 1vh;
}

</style>