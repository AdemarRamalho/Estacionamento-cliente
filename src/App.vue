<template>
<nav class="navbar navbar-expand-lg cor-nav nav-underline">
  <div class="container-fluid">
   
    <a class="navbar-brand" href="#">
      <img class="logo-inicio" src="./assets/logo.jpeg"></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0 ">
        <li class="nav-item menu-gap">
          <a class="nav-link active" id="cor-texto" aria-current="page" href="#">Menu</a>
        </li>

        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" id ="cor-texto" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" >
            Itens
          </a>
          <ul class="dropdown-menu" >
            <li><routerLink to="/movimentacoes"><a  class="dropdown-item">Movimentações</a></routerLink></li>
            <li><hr class="dropdown-divider"></li>
            <li><a  class="dropdown-item" href="#">Condutores</a></li>
            <li><a  class="dropdown-item" href="#">Veiculos</a></li>
            <li><a  class="dropdown-item" href="#">Configurações</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a  class="dropdown-item" href="#">Marca</a></li>
            <li><a  class="dropdown-item" href="#">Modelo</a></li>
          </ul>
        </li> 
      </ul>
    </div>
  </div>
</nav>
<form>
  <div class="row">
  <div class="form-group col-md-4 offset-md-4">
    <label for="name">Nome</label>
    <input type="name" class="form-control" id="name" aria-describedby="emailHelp" placeholder="Nome">
  </div>
  <div class="form-group col-md-4 offset-md-4">
    <label for="email">Email</label>
    <input type="name" class="form-control" id="email" aria-describedby="emailHelp" placeholder="Digite seu Email">
  </div>
  <div class="form-group col-md-4 offset-md-4">
    <label for="Senha">Senha</label>
    <input type="password" class="form-control" id="Senha" placeholder="senha">
  </div>
  <button type="submit" class="btn btn-primary col-md-1 offset-md-4"></button>
  <button type="submit" class="btn btn-primary col-md-1 offset-md-7">Voltar</button>
</div>
</form>


</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #ffffff;

    &.router-link-exact-active {
      color:#f7f7f7;
    }
  }

  .topo{
    text-align: center;
  }
}
.cor-nav{
    background-color: #1b1a1f;
  }
  .logo-inicio{
    width: 40%;
    right: 50%;
    margin-left: 30%;
  }
  #cor-texto {
    color: white;
  }
</style>
