<template>
        <div class="flex:none">
        <h1 class="d-flex justify-content-center">Modelo</h1>
    <div>
        <table class="table table-striped table-dark table-bordered table-md table-responsive ">
            <thead class="thead-dark">
                <tr>
                    <th scope="col">id</th>
                    <th scope="col">Nome</th>
                    <th scope="col">Marca</th>
                    <th scope="col">Funções</th>
                </tr>
            </thead>
            <tbody class="table-striped">
                <tr>
                    <th scope="row">1</th>
                    <th scope="row">fusca</th>
                    <th scope="row">wolksvagen</th>
                    <th scope="row">
                        <router-link to="">
                            <button type="button" class="btn btn-warning">Editar</button>
                        </router-link>
                        <button type="button" class="btn btn-danger">Excluir</button>
                    </th>
                </tr>
                <tr>
                    <th scope="row">2</th>
                    <th scope="row">uno</th>
                    <th scope="row">Fiat</th>
                    <th scope="row">
                        <router-link to="">
                            <button type="button" class="btn btn-warning">Editar</button>
                        </router-link>
                        <button type="button" class="btn btn-danger">Excluir</button>
                    </th>
                </tr>
                <tr>
                    <th scope="row">3</th>
                    <th scope="row">Xc40</th>
                    <th scope="row">volvo</th>
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
            <button type="button" class="btn  button-cadastrar btn-outline-success">Cadastrar</button>
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