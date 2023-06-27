<template>

    <div class="container tabela">
        <div class="container text-center">
            <div class="row align-items-start">
                <div class="col opcoes">
                    Lista de Marcas
                </div>
                <div class="col opcoes">
                    <router-link to='/veiculo-cadastrar'>
                        <button type="button" class="btn btn-success ">Adicionar Veiculo</button>
                    </router-link>
                </div>
            </div>
        </div>
    
        <div class="row inicio">
            <div class="col"> ID       </div>
            <div class="col"> Situação </div>
            <div class="col"> Nome </div>
            <div class="col"> Modelo </div>
            <div class="col"> Placa </div>
            <div class="col"> Cor </div>
            <div class="col"> Tipo </div>
            <div class="col"> Ano </div>
            <div class="col"> Opções</div>
        </div>
    
        <div v-for="item in veiculosList" :key="item.id" class="row itens">
            <div class="col"> {{item.id}}       </div>
            <div class="col situacao"> 
                <span v-if="item.ativo" class="badge text-bg-success"> Ativo </span>
                <span v-if="!item.ativo" class="badge text-bg-danger"> Inativo </span>
            </div>
            <div class="col"> {{ item.modelo.marca.nome }} </div>
            <div class="col"> {{ item.modelo.nome }} </div>
            <div class="col"> {{ item.placa }} </div>
            <div class="col"> {{ item.cor }} </div>
            <div class="col"> {{ item.tipoVeiculo }} </div>
            <div class="col"> {{item.ano}} </div>
            <div class="col dropdown">
                <button type="submit" class="btn btn-outline-warning botao dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">Opções</button>   
                <div class="dropdown-menu">
                <RouterLink :to="{name:'veiculo-cadastrar-excluir', query:{id: item.id,form:'excluir'}}">
                    <button class="dropdown-item">Excluir</button>
                </RouterLink>
                <RouterLink :to="{name:'veiculo-cadastrar-editar', query:{id:item.id,form:'editar'}}">
                    <button type="button" class="dropdown-item">Editar</button>
                </RouterLink>
                </div> 
            </div>
        </div>
    </div>
</template>
    
<script lang="ts">
    import { defineComponent } from 'vue';
    import { Veiculo } from '@/model/Veiculo';
    import VeiculoClient  from '@/client/VeiculoClient';

    export default defineComponent({
    name: 'VeiculoLista',
    data() {
        return {
            veiculosList: new Array<Veiculo>()
        }
    },
    mounted() {
        this.findAll();
    },
    methods: {

        findAll() {
        VeiculoClient.listaAll()
            .then(sucess => {
            this.veiculosList = sucess
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