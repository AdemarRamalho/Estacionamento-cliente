<template>
        <div>
        <h1 class="d-flex justify-content-center">Cadastro de Marcas</h1>
            <form>
                <div class="row">
                    <div class="col-md-4 offset-2">
                        <label>Nome</label>
                        <input type="text" class="form-control" placeholder="Digite o nome">
                    </div>
                    <div class="col-md-4">
                        <label>Modelo</label>
                        <input type="text" class="form-control" placeholder="Digite o modelo">
                    </div>
                    <div class="col-md-4 offset-2">
                        <label>Placa</label>
                        <input type="text" class="form-control" placeholder="Digite a Placa">
                    </div>
                    <div class="col-md-4">
                        <label>ano</label>
                        <input type="text" class="form-control" placeholder="Digite o Ano">
                    </div>
                    <div class="col-md-4 offset-2">
                        <select class="orm-select">
                            <option selected>Selecione as Cores</option>
                            <option value="1">Azul</option>
                            <option value="2">Verde</option>
                            <option value="3">Vermelho</option>
                        </select>
                    </div>
                    <div class="col-md-4 offset-8">
                        <select class="orm-select">
                            <option selected>Selecione o tipo</option>
                            <option value="1">Carro</option>
                            <option value="2">Van</option>
                            <option value="3">Moto</option>
                        </select>
                    </div>
                    <div class="col offset-1 botao-enviar">
                        <button type="submit" class="btn btn-primary mb-2">Cadastrar</button>
                    </div>
                </div>
            </form>
    </div>
</template>

<script lang="ts">

</script>

<style lang="scss">
.botao-enviar{
    margin-top: 2%;
    margin-left: 70%;
}
</style>