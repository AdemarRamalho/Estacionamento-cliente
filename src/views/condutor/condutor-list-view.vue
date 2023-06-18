<template>
     <div class="flex:none">
        
    <div>
        <h1 class="d-flex justify-content-center">Condutores</h1>
        <table class="table table-striped table-dark table-bordered table-md table-responsive ">
            <thead class="thead-dark">
                <tr>
                    <th scope="col">id</th>
                    <th scope="col">nome</th>
                    <th scope="col">telefone</th>
                    <th scope="col">CPF</th>
                    <th scope="col">funções</th>
                </tr>
            </thead>
            <tbody class="table-striped">
                <tr>
                    <th scope="row">1</th>
                    <th scope="row">Miro</th>
                    <th scope="row">9 9929-0020</th>
                    <th scope="row">123.456.789-10</th>
                    <th scope="row">
                        <router-link to="">
                            <button type="button" class="btn btn-warning">Editar</button>
                        </router-link>
                        <button type="button" class="btn btn-danger">Excluir</button>
                    </th>
                </tr>
                <tr>
                    <th scope="row">2</th>
                    <th scope="row">Jerad</th>
                    <th scope="row">9 7070-7070</th>
                    <th scope="row">123.434.322-10</th>
                    <th scope="row">
                        <router-link to="">
                            <button type="button" class="btn btn-warning">Editar</button>
                        </router-link>
                        <button type="button" class="btn btn-danger">Excluir</button>
                    </th>
                </tr>
                <tr>
                    <th scope="row">3</th>
                    <th scope="row">Thi Melo</th>
                    <th scope="row">9 4002-8922</th>
                    <th scope="row">990.456.421-11</th>
                    <th scope="row">
                        <router-link to="">
                            <button type="button" class="btn btn-warning">Editar</button>
                        </router-link>
                        <button type="button" class="btn btn-danger">Excluir</button>
                    </th>
                </tr>
            </tbody>
        </table>
        <router-link to="/">
            <button type="button" class="btn button-cadastrar btn-success">Cadastrar</button>
        </router-link>
    </div>
    </div>
</template>

<script lang="ts">

</script>

<style lang="scss">

h1{
    color:rgb(255, 255, 255);
    background: #1b1a1f;
}
.button-cadastrar{
    background: #1b1a1f;
    color:white;
}
</style>