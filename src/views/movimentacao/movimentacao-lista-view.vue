<template>


<div class="container tabela">
    <div class="container text-center">
        <div class="row align-items-start">
            <div class="col opcoes">
                Lista de Movimentações
            </div>
            <div class="col opcoes">  
                <select class="form-select" aria-label="Default select example">
                    <option selected>Listar por</option>
                    <option value="1">Ativos</option>
                    <option value="2">Desativados</option>
                </select>
            </div>
            <div class="col opcoes">
                <router-link to='/movimentacao-form'>
                    <button type="button" class="btn btn-success "><img src="/adicionar.usuario.png" class="botao-cadastrar">Adicionar Movimentação</button>
                </router-link>
            </div>
        </div>
    </div>

    <div class="row inicio">
        <div class="col"> ID       </div>
        <div class="col"> Situação </div>
        <div class="col"> Condutor </div>
        <div class="col"> Veiculo </div>
        <div class="col"> Placa </div>
        <div class="col"> Opções </div>
    </div>

    <div class="row itens">
        <div class="col"> 1       </div>
        <div class="col situacao"> Aberta </div>
        <div class="col"> Ademar Ramalho </div>
        <div class="col"> 911 </div>
        <div class="col"> AFC-9I11 </div>
        <div class="col dropdown">
            <button type="submit" class="btn btn-outline-warning botao dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">Opções</button>   
            <div class="dropdown-menu">
                <button class="dropdown-item">Excluir</button>
                <button type="button" class="dropdown-item">Editar</button>
            </div> 
        </div>
    </div>

    <div class="row itens">
        <div class="col">2       </div>
        <div class="col situacao"> Aberta </div>
        <div class="col"> Gabriele Steinmetz </div>
        <div class="col"> X4 </div>
        <div class="col"> XCD-4A40 </div>
        <div class="col dropdown">
            <button type="submit" class="btn btn-outline-warning botao dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">Opções</button>   
            <div class="dropdown-menu">
                <button class="dropdown-item">Excluir</button>
                <button type="button" class="dropdown-item">Editar</button>
            </div> 
        </div>
    </div>

    <div class="row itens">
        <div class="col">3       </div>
        <div class="col situacao"> Aberta </div>
        <div class="col"> Cristovão Martins </div>
        <div class="col"> Civic </div>
        <div class="col"> BCT-7D78 </div>
        <div class="col dropdown">
            <button type="submit" class="btn btn-outline-warning botao dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">Opções</button>   
            <div class="dropdown-menu">
                <button class="dropdown-item">Excluir</button>
                <button type="button" class="dropdown-item">Editar</button>
            </div> 
        </div>
    </div>
    
    <div class="row itens">
        <div class="col">4       </div>
        <div class="col situacao"> Aberta </div>
        <div class="col"> Pedro Henrique </div>
        <div class="col"> XC40 </div>
        <div class="col"> CDS-4A12 </div>
        <div class="col dropdown">
            <button type="submit" class="btn btn-outline-warning botao dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">Opções</button>   
            <div class="dropdown-menu">
                <button class="dropdown-item">Excluir</button>
                <button type="button" class="dropdown-item">Editar</button>
            </div> 
        </div>
    </div>

    <div class="row itens">
        <div class="col">5       </div>
        <div class="col situacao"> Aberta </div>
        <div class="col"> Tailyne Martins </div>
        <div class="col"> Uno </div>
        <div class="col"> ADE-8A42 </div>
        <div class="col dropdown">
            <button type="submit" class="btn btn-outline-warning botao dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">Opções</button>   
            <div class="dropdown-menu">
                <button class="dropdown-item">Excluir</button>
                <button type="button" class="dropdown-item">Editar</button>
            </div> 
        </div>
    </div>

    <div class="row itens">
        <div class="col">6       </div>
        <div class="col situacao"> Aberta </div>
        <div class="col"> De Arrascaeta </div>
        <div class="col"> Festback </div>
        <div class="col"> XDS-7A88 </div>
        <div class="col dropdown">
            <button type="submit" class="btn btn-outline-warning botao dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">Opções</button>   
            <div class="dropdown-menu">
                <button class="dropdown-item">Excluir</button>
                <button type="button" class="dropdown-item">Editar</button>
            </div> 
        </div>
    </div>

    <div class="row itens">
        <div class="col">7       </div>
        <div class="col situacao"> Aberta </div>
        <div class="col"> Gabriel Barbosa </div>
        <div class="col"> Fusion </div>
        <div class="col"> GOL-2A81 </div>
        <div class="col dropdown">
            <button type="submit" class="btn btn-outline-warning botao dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">Opções</button>   
            <div class="dropdown-menu">
                <button class="dropdown-item">Excluir</button>
                <button type="button" class="dropdown-item">Editar</button>
            </div> 
        </div>
    </div>

    <div class="row itens">
        <div class="col">8       </div>
        <div class="col situacao"> Aberta </div>
        <div class="col"> Janaina Juvenal </div>
        <div class="col"> A4 </div>
        <div class="col"> ASA-8A85 </div>
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