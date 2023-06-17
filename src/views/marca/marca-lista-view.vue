<template>
    <div class="flex:none">
        <h1>Marca</h1>
    <div>
        <router-link to="/">
            <button type="button" class="btn btn-outline-success">Cadastrar</button>
        </router-link>
        <table class="table table-striped table-dark table-bordered table-md table-responsive ">
            <thead class="thead-dark">
                <tr>
                    <th scope="col">id</th>
                    <th scope="col">Marca</th>
                    <th scope="col">Funções</th>
                </tr>
            </thead>
            <tbody class="table-striped">
                <tr>
                    <th scope="row">1</th>
                    <th scope="row">wolksvagen</th>
                    <th scope="row">
                        <router-link to="">
                            <button type="button" class="btn">Editar</button>
                        </router-link>
                        <button type="button" class="btn">Excluir</button>
                        <button type="button" class="btn">Cadastrar</button>
                    </th>
                </tr>
                <tr>
                    <th scope="row">2</th>
                    <th scope="row">volvo</th>
                    <th scope="row">
                        <router-link to="">
                            <button type="button" class="btn">Editar</button>
                        </router-link>
                        <button type="button" class="btn">Excluir</button>
                        <button type="button" class="btn">Cadastrar</button>
                    </th>
                </tr>
                <tr>
                    <th scope="row">3</th>
                    <th scope="row">Fiat</th>
                    <th scope="row">
                        <router-link to="">
                            <button type="button" class="btn">Editar</button>
                        </router-link>
                        <button type="button" class="btn">Excluir</button>
                        <button type="button" class="btn">Cadastrar</button>
                    </th>
                </tr>
            </tbody>
        </table>
    </div>
    </div>
</template>


<script lang="ts">

</script>