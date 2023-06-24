<template>
        <div>
        <h1 class="d-flex justify-content-center">Cadastre um modelo</h1>
            <form>
                <div class="row">
                    <div class="col-md-4 offset-2">
                        <label>Modelo</label>
                        <input type="text" class="form-control" placeholder="Digite o Modelo">
                    </div>
                    <div class="col-md-4">
                        <label>Marca</label>
                        <input type="text" class="form-control" placeholder="Digite a Marca">
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