
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
const imagenFondo = document.getElementById('Fondo');
const imagenLuna = document.getElementById('Luna');
const imagenSol = document.getElementById('Sol');
const imagenPasto = document.getElementById('Pasto');



boton.addEventListener('click', () => {
  boton.classList.toggle('activo');
  document.body.classList.toggle('dark-mode');

  if (document.body.classList.contains('dark-mode')) {
    imagenFondo.src = "../imagenes/fondo modo oscuro.png";
  } else {
    imagenFondo.src = "../imagenes/fondo.png";
  }

  
  if (document.body.classList.contains('dark-mode')) {
    imagenSol.src = "../imagenes/sol modo oscuro.png";
  } else {
    imagenSol.src = "../imagenes/sol.png";
  }

  
  if (document.body.classList.contains('dark-mode')) {
    imagenLuna.src = "../imagenes/luna modo oscuro.png";
  } else {
    imagenLuna.src = "../imagenes/luna.png";
  }

  if (document.body.classList.contains('dark-mode')) {
    imagenPasto.src = "../imagenes/Pasto modo oscuro.png";
  } else {
    imagenPasto.src = "../imagenes/Pasto.png";
  }

});




