<template>
        <div class="flex:none">
        <h1 class="d-flex justify-content-center">Veiculos</h1>
    <div>
        <table class="table table-striped table-dark table-bordered table-md table-responsive ">
            <thead class="thead-dark">
                <tr>
                    <th scope="col">id</th>
                    <th scope="col">nome</th>
                    <th scope="col">modelo</th>
                    <th scope="col">placa</th>
                    <th scope="col">cor</th>
                    <th scope="col">tipo</th>
                    <th scope="col">ano</th>
                    <th scope="col">funções</th>
                </tr>
            </thead>
            <tbody class="table-striped">
                <tr>
                    <th scope="row">1</th>
                    <th scope="row">fusca</th>
                    <th scope="row">wolksvagen</th>
                    <th scope="row">ABT3N43</th>
                    <th scope="row">Prata</th>
                    <th scope="row">Carro</th>
                    <th scope="row">2023</th>
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
                    <th scope="row">ERC3D43</th>
                    <th scope="row">Prata</th>
                    <th scope="row">Carro</th>
                    <th scope="row">2023</th>
                    <th scope="row">
                        <router-link to="">
                            <button type="button" class="btn btn-warning">Editar</button>
                        </router-link>
                        <button type="button" class="btn btn-danger">Excluir</button>
                    </th>
                </tr>
                <tr>
                    <th scope="row">1</th>
                    <th scope="row">Gol</th>
                    <th scope="row">wolksvagen</th>
                    <th scope="row">DBT3N23</th>
                    <th scope="row">Prata</th>
                    <th scope="row">Carro</th>
                    <th scope="row">2023</th>
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
            <button type="button" class="btn button-cadastrar btn-outline-success">Cadastrar</button>
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