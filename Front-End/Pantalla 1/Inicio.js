
let BotonInicio = document.getElementById("Inicio");


function IniciarSesion() {
    window.location.href = '../Sign in - up/Sign In/iniciar sesion.html';
}

BotonInicio.addEventListener("click", IniciarSesion);


let BotonCrear = document.getElementById("Crear");


function CrearCuenta() {
    window.location.href = '../Sign in - up/Sign up/Crear cuenta.html';
}

BotonCrear.addEventListener("click", CrearCuenta);



let BotonPerros = document.getElementById("Perros");


function PaginaPerros() {
    window.location.href = '../ANIMALES/PERROS/Inicio/Perros.html';
}

BotonPerros.addEventListener("click", PaginaPerros);


let BotonGatos = document.getElementById("Gatos");

function PaginaGatos() {
    window.location.href = '../ANIMALES/GATOS/Inicio/Gatos.html';
}

BotonGatos.addEventListener("click", PaginaGatos);


let BotonFavoritos = document.getElementById("Favoritos");

function PaginaFavoritos() {
    window.location.href = '../ANIMALES/FAVORITOS/Favoritos.html';
}

BotonFavoritos.addEventListener("click", PaginaFavoritos);

const boton = document.querySelector('.boton-modo');

boton.addEventListener('click', () => {
  boton.classList.toggle('activo');
});




