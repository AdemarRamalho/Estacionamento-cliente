<template>

    <div class="container tabela">
        <div class="container text-center">
            <div class="row align-items-start">
                <div class="col opcoes">
                    Lista de Condutores
                </div>

                <div class="col opcoes">
                    <router-link to='/condutor-form'>
                        <button type="button" class="btn btn-success ">Adicionar Condutor</button>
                    </router-link>
                </div>
            </div>
        </div>
    
        <div class="row inicio">
            <div class="col"> ID       </div>
            <div class="col"> Status </div>
            <div class="col"> Nome </div>
            <div class="col"> CPF </div>
            <div class="col"> Telefone </div>
            <div class="col"> Detalhes </div>
            
        </div>
    
        <div v-for="item in condutorList" :key="item.id" class="row itens">
            <div class="col"> {{ item.id }}      </div>
            <div class="col situacao"> 
                <span v-if="item.ativo" class="badge text-bg-success">Ativo</span>
                <span v-if="!item.ativo" class="badge text-bg-danger">Inativo</span>
            </div>
            <div class="col"> {{ item.nome }} </div>
            <div class="col"> {{item.cpf}} </div>
            <div class="col"> {{item.telefone}} </div>
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
        </div>    
    </div>
    
</template>
    
<script lang="ts">

    import { defineComponent } from 'vue';
    import { Condutor } from '@/model/Condutor';
    import  CondutorClient  from '@/client/CondutorClient';

    export default defineComponent({
    name: 'CondutorLista',
    data() {
        return {
            condutorList: new Array<Condutor>()
        }
    },
    mounted() {
        this.findAll();
    },
    methods: {
        findAll() {
        CondutorClient.listaAll()
            .then(sucess => {
            this.condutorList = sucess
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
        margin-left: 8%;
    }
    
    
    .situacao{
        color: green;
        font-weight: bolder;
        background-color: rgba(0, 128, 0, 0.349);
        border-radius: 5px;
        margin: 2vh;
    }
    
    .botao-cadastrar{
        height: 2.5vh;
        align-items: center;
        margin-right: 1vh;
    }
    
</style>