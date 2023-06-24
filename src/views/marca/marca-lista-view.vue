<template>

    <div class="container tabela">
        <div class="container text-center">
            <div class="row align-items-start">
                <div class="col opcoes">
                    Lista de Marcas
                </div>
                <div class="col opcoes">  
                    <select class="form-select" aria-label="Default select example">
                        <option selected>Listar por</option>
                        <option value="1">Ativos</option>
                        <option value="2">Desativados</option>
                    </select>
                </div>
                <div class="col opcoes">
                    <router-link to='/form-marca'>
                        <button type="button" class="btn btn-success "><img src="/adicionar.usuario.png" class="botao-cadastrar">Adicionar Marca</button>
                    </router-link>
                </div>
            </div>
        </div>
    
        <div class="row inicio">
            <div class="col"> ID       </div>
            <div class="col"> Situação </div>
            <div class="col"> Nome </div>
            <div class="col"> Detalhes</div>
        </div>
    
        <div class="row itens">
            <div class="col"> 1       </div>
            <div class="col situacao"> Ativo </div>
            <div class="col"> Honda </div>
            <div class="col dropdown">
                <button type="submit" class="btn btn-outline-warning botao dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">Opções</button>   
                <div class="dropdown-menu">
                    <button class="dropdown-item">Excluir</button>
                    <button type="button" class="dropdown-item">Editar</button>
                </div> 
            </div>
        </div>
    
        <div class="row itens">
            <div class="col"> 2       </div>
            <div class="col situacao"> Ativo </div>
            <div class="col"> Bmw </div>
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
            <div class="col"> Volvo </div>
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
            <div class="col"> Fiat </div>
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
            <div class="col"> Audi </div>
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
            <div class="col"> Porsche </div>
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
            <div class="col"> Fiat </div>
            <div class="col dropdown">
                <button type="submit" class="btn btn-outline-warning botao dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">Opções</button>   
                <div class="dropdown-menu">
                    <button class="dropdown-item">Excluir</button>
                    <button type="button" class="dropdown-item">Editar</button>
                </div> 
            </div>
        </div>
        
        <div class="row itens">
            <div class="col"> 8       </div>
            <div class="col situacao"> Ativo </div>
            <div class="col"> Ford </div>
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