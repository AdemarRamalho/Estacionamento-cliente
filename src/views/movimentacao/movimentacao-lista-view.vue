<template>
    <div class="flex:none">
        <h1 class="d-flex justify-content-center">Movimentações</h1>
    <div>

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
                            <button type="button" class="btn btn-warning">Finalizar</button>
                        </router-link>
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
                            <button type="button" class="btn btn-success">Finalizada</button>
                        </router-link>
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
                            <button type="button" class="btn btn-warning">Finalizar</button>
                        </router-link>
                    </th>
                </tr>
            </tbody>
        </table>
        <router-link to="/movimentacao-form">
            <button type="button" class="btn button-cadastrar btn-outline-success">Iniciar Moviemantação</button>
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