<template>
           <div>
        <h1 class="d-flex justify-content-center">Iniciar Movimentação</h1>
            <form>
                <div class="row">
                    <div class="col-md-4 offset-2">
                        <label>Veiculo</label>
                        <input type="text" class="form-control" placeholder="Digite o nome do veiculo">
                    </div>
                    <div class="col-md-4">
                        <label>Marca</label>
                        <input type="text" class="form-control" placeholder="Digite a marca do veiculo">
                    </div>
                    <div class="col-md-4 offset-2">
                        <label>Condutor</label>
                        <input type="text" class="form-control" placeholder="Digite o nome do condutor">
                    </div>
                    <div class="col-md-4">
                        <label>Horario da entrada</label>
                        <input type="text" class="form-control" placeholder="Hora da entrada">
                    </div>
                    <div class="col offset-9 botao-enviar">
                        <button type="submit" class="btn btn-primary mb-2">Iniciar</button>
                    </div>  
                </div>
            </form>
    </div>
</template>

<script lang="ts">

</script>

<style lang="scss">

</style>