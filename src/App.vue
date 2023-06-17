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
          <a class="nav-link active" aria-current="page" href="#">Menu</a>
        </li>

        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" >
            Itens
          </a>
          <ul class="dropdown-menu" >
            <li><a class="dropdown-item" href="#">Movimentações</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a  class="dropdown-item" href="#"> <RouterLink to="/condutor-lista">Condutores</RouterLink></a></li>
            <li><a  class="dropdown-item" href="#">Veiculos</a></li>
            <li><a  class="dropdown-item" href="#">Configurações</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a  class="dropdown-item" href="#" ><router-link to="/lista-marca">Marca</router-link></a></li>
            <li><a  class="dropdown-item" href="#">Modelo</a></li>
          </ul>
        </li> 
      </ul>
    </div>
  </div>
</nav>
<router-view/>

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
    color: #070202;

    &.router-link-exact-active {
      color:#000201;
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
</style>
