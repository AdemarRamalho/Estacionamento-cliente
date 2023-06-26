<template>

    <div class="container tabela">
        <div class="container text-center">
            <div class="row align-items-start">
                <div class="col opcoes">
                    Lista de Modelos
                </div>
                <div class="col opcoes">
                    <router-link to='/modelo-form'>
                        <button type="button" class="btn btn-success "><img src="/adicionar.usuario.png" class="botao-cadastrar">Adicionar Modelo</button>
                    </router-link>
                </div>
            </div>
        </div>
    
        <div class="row inicio">
            <div class="col"> ID       </div>
            <div class="col"> Situação </div>
            <div class="col"> Modelo </div>
            <div class="col">Marca</div>
            <div class="col"> Detalhes</div>
        </div>
    
        <div v-for="item in modelosList" :key="item.id" class="row itens">
            <div class="col"> {{ item.id }}       </div>
            <div class="col situacao">
                <span v-if="item.ativo" class="badge text-bg-success"> Ativo </span>
                <span v-if="!item.ativo" class="badge text-bg-danger"> Inativo </span>
            </div>
            <div class="col">{{ item.nome }}</div>
            <div class="col"> {{ item.marca.nome }} </div>
            <div class="col dropdown">
                <button type="submit" class="btn btn-outline-warning botao dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">Opções</button>   
                <div class="dropdown-menu">
                <RouterLink :to="{name:'modelo-cadastrar-excluir', query:{id: item.id,form:'excluir'}}">
                    <button class="dropdown-item">Excluir</button>
                </RouterLink>
                <RouterLink :to="{name:'modelo-cadastrar-editar', query:{id:item.id,form:'editar'}}">
                    <button type="button" class="dropdown-item">Editar</button>
                </RouterLink>
                </div> 
            </div>
        </div>
    </div>
    
    </template>
    
<script lang="ts">
    import { defineComponent } from 'vue';
    import { Modelo } from '@/model/Modelo';
    import  ModeloClient  from '@/client/ModeloClient';

    export default defineComponent({
    name: 'ModeloLista',
    data() {
        return {
            modelosList: new Array<Modelo>()
        }
    },
    mounted() {
        this.findAll();
    },
    methods: {
        findAll() {
        ModeloClient.listaAll()
            .then(sucess => {
            this.modelosList = sucess
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