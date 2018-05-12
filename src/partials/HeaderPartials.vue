<template>
    <header class="header mb-4">
        <div class="container-fluid">
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <a class="navbar-brand" href="#">CMS</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item active">
                        <a class="nav-link" href="/">Inicio <span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/#/FAQ">FAQ</a>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Servicios
                        </a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a class="dropdown-item" href="#">Tienda online</a>
                            <a class="dropdown-item" href="#">Snacks</a>
                            <a class="dropdown-item" href="#">Citas de Barbería</a>
                            <div class="dropdown-divider"></div>
                            <a class="dropdown-item" href="#">Refacciones</a>
                        </div>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link disabled" href="#">Próximos Eventos</a>
                    </li>
                    <div class=""></div>
                </ul>
                <ul class="nav navbar-nav navbar-right">
                    <li class="nav-item">
                        <a class="nav-link" href="/#/register"><i class="fas fa-user"></i><span class="ml-2">Regístrate</span></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/#/login"><i class="fas fa-sign-in-alt"></i><span class="ml-2">Inicia Sesión</span></a>
                    </li>
                </ul>
                <form class="form-inline my-2 my-lg-0">
                <input class="form-control mr-sm-2" type="search" placeholder="Buscar" aria-label="Search">
                <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Buscar</button>
                </form>
            </div>
            </nav>
        </div>
        
    </header>
</template>



<script>
export default {
    name: 'HeaderPartials',
    
}
</script>
