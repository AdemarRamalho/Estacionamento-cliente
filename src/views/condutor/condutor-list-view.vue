<template>

    <div class="container tabela">
        <div class="container text-center">
            <div class="row align-items-start">
                <div class="col opcoes">
                    Lista de Condutores
                </div>
                <div class="col opcoes">  
                    <select class="form-select" aria-label="Default select example">
                        <option selected>Listar por</option>
                        <option value="1">Ativos</option>
                        <option value="2">Desativados</option>
                    </select>
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
    
        <div class="row itens">
            <div class="col"> 1       </div>
            <div class="col situacao"> Ativo </div>
            <div class="col"> Ademar Ramalho </div>
            <div class="col"> 190.132.187-84 </div>
            <div class="col"> 21 996973149 </div>
            <div class="col dropdown">
                <button type="submit" class="btn btn-outline-warning botao dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">Opções</button>   
                <div class="dropdown-menu">
                    <button class="dropdown-item">Excluir</button>
                    <button type="button" class="dropdown-item">Editar</button>
                </div> 
            </div>
        </div>
    
        <div class="row itens">
            <div class="col"> 2      </div>
            <div class="col situacao"> ativo </div>
            <div class="col"> Gabriele Steinmetz </div>
            <div class="col"> 200.556.887.99 </div>
            <div class="col"> 45 990907070 </div>
            <div class="col dropdown">
                <button type="submit" class="btn btn-outline-warning botao dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">Opções</button>   
                <div class="dropdown-menu">
                    <button class="dropdown-item">Excluir</button>
                    <button type="button" class="dropdown-item">Editar</button>
                </div> 
            </div>
        </div>
    
        <div class="row itens">
            <div class="col"> 3       </div>
            <div class="col situacao"> Ativo </div>
            <div class="col"> Cristovão Martins </div>
            <div class="col"> 667.886.889-87 </div>
            <div class="col"> 45 94002-8922 </div>
            <div class="col dropdown">
                <button type="submit" class="btn btn-outline-warning botao dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">Opções</button>   
                <div class="dropdown-menu">
                    <button class="dropdown-item">Excluir</button>
                    <button type="button" class="dropdown-item">Editar</button>
                </div> 
            </div>
        </div>
        
        <div class="row itens">
            <div class="col"> 4       </div>
            <div class="col situacao"> Ativo </div>
            <div class="col"> Pedro Henrique </div>
            <div class="col"> 102.558.778-00 </div>
            <div class="col"> 45 997997799 </div>
            <div class="col dropdown">
                <button type="submit" class="btn btn-outline-warning botao dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">Opções</button>   
                <div class="dropdown-menu">
                    <button class="dropdown-item">Excluir</button>
                    <button type="button" class="dropdown-item">Editar</button>
                </div> 
            </div>
        </div>
        
        <div class="row itens">
            <div class="col"> 5       </div>
            <div class="col situacao"> Ativo </div>
            <div class="col"> Tailyne Martins </div>
            <div class="col"> 558.885.669.69 </div>
            <div class="col"> 45 996699887 </div>
            <div class="col dropdown">
                    <button type="submit" class="btn btn-outline-warning botao dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">Opções</button>   
                <div class="dropdown-menu">
                    <button class="dropdown-item">Excluir</button>
                    <button type="button" class="dropdown-item">Editar</button>
                </div> 
            </div>
        </div>
    
        <div class="row itens">
            <div class="col"> 6       </div>
            <div class="col situacao"> Ativo </div>
            <div class="col"> De Arrascaeta </div>
            <div class="col"> 874.478.587-54 </div>
            <div class="col"> 21 985236985 </div>
            <div class="col dropdown">
                <button type="submit" class="btn btn-outline-warning botao dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">Opções</button>   
                <div class="dropdown-menu">
                    <button class="dropdown-item">Excluir</button>
                    <button type="button" class="dropdown-item">Editar</button>
                </div> 
            </div>
        </div>
    
        <div class="row itens">
            <div class="col"> 7       </div>
            <div class="col situacao"> Ativo </div>
            <div class="col"> Gabriel Barbosa </div>
            <div class="col"> 852.258.741-96 </div>
            <div class="col"> 21 963254125 </div>
            <div class="col dropdown">
                <button type="submit" class="btn btn-outline-warning botao dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">Opções</button>   
                <div class="dropdown-menu">
                    <button class="dropdown-item">Excluir</button>
                    <button type="button" class="dropdown-item">Editar</button>
                </div> 
            </div>
        </div>
    

    </div>
    
    </template>
    
    <script lang="ts">
    
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