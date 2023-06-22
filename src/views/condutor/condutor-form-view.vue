<template>
    <div>
        <h1 class="d-flex justify-content-center">Cadastro de Condutores</h1>
            <form>
                <div class="row">
                    <div class="col-md-4 offset-2">
                        <label>Nome</label>
                        <input type="text" class="form-control" placeholder="Digite seu nome">
                    </div>
                    <div class="col-md-4">
                        <label>Telefone</label>
                        <input type="text" class="form-control" placeholder="Digite seu telefone">
                    </div>
                </div>
                <div class="row coluna-nome">
                    <div class="col-md-4 offset-4">
                        <label>CPF</label>
                        <input type="text" class="form-control" placeholder="Digite Seu CPF">
                    </div>
                </div>
                <div class="col offset-9 botao-enviar">
                        <button type="submit" class="btn btn-primary mb-2">Cadastrar</button>
                </div>
            </form>
    </div>
</template>

<script lang="ts">

</script>

<style lang="scss">
    .botao-enviar{
        margin-top: 4%;
    }
</style>