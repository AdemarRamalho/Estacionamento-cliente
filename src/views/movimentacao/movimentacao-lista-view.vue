<template>
    <div class="flex:none">
        <h1>Movimentações</h1>
    <div>
        <router-link to="/">
            <button type="button" class="btn btn-outline-success">Cadastrar</button>
        </router-link>
        <table class="table table-striped table-dark table-bordered table-md table-responsive ">
            <thead class="thead-dark">
                <tr>
                    <th scope="col">id</th>
                    <th scope="col">Veiculo</th>
                    <th scope="col">Marca</th>
                    <th scope="col">Condutor</th>
                    <th scope="col">Entrada</th>
                    <th scope="col">Funções</th>
                </tr>
            </thead>
            <tbody class="table-striped">
                <tr>
                    <th scope="row">1</th>
                    <th scope="row">fusca</th>
                    <th scope="row">wolksvagen</th>
                    <th scope="row">Miro</th>
                    <th scope="row">22:22</th>
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
                    <th scope="row">uno</th>
                    <th scope="row">Fiat</th>
                    <th scope="row">Jerad</th>
                    <th scope="row">22:22</th>
                    <th scope="row">
                        <router-link to="">
                            <button type="button" class="btn btn-editar">Editar</button>
                        </router-link>
                        <button type="button" class="btn btn-excluir">Excluir</button>
                        <button type="button" class="btn btn-cadastrar">Cadastrar</button>
                    </th>
                </tr>
                <tr>
                    <th scope="row">3</th>
                    <th scope="row">gol</th>
                    <th scope="row">wolksvagen</th>
                    <th scope="row">thi melo</th>
                    <th scope="row">22:22</th>
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
<style lang="sccs">

/*.btn-editar{
    color: rgb(255, 115, 0);
}
*/
</style>