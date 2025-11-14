const boton = document.querySelector('.boton-modo');
const imagenLuna = document.getElementById('Luna');
const imagenSol = document.getElementById('Sol');
const imagenPasto = document.getElementById('Pasto');
const imagenLogo = document.getElementById('Logo');
const imagenFondo = document.getElementById('Fondo');

boton.addEventListener('click', () => {
  boton.classList.toggle('activo');
  document.body.classList.toggle('dark-mode');

  const isDark = document.body.classList.contains('dark-mode');
  
  if (isDark) {
    imagenSol.src = "../../imagenes/sol modo oscuro.png";
  } else {
    imagenSol.src = "../../imagenes/sol.png";
  }

  if (isDark) {
    imagenLuna.src = "../../imagenes/luna modo oscuro.png";
  } else {
    imagenLuna.src = "../../imagenes/luna.png";
  }

  if (isDark) {
    imagenPasto.src = "../../imagenes/pasto modo oscuro.png";
  } else {
    imagenPasto.src = "../../imagenes/pasto.png";
  }

    if (isDark) {
    imagenLogo.src = "../../imagenes/Logo modo oscuro.png";
  } else {
    imagenLogo.src = "../../imagenes/logo-azul.png";
  }

  if (isDark) {
    imagenFondo.src = "../../imagenes/Fondo favoritos MO.png";
  } else {
    imagenFondo.src = "../../imagenes/Fondo favoritos (2).png";
  }
});



let BotonPerfil = document.getElementById("Perfil");


function CrearPerfil() {
window.location.href = '../../Perfil/Perfil.html';
}

BotonPerfil.addEventListener("click", CrearPerfil);


let BotonPublicar = document.getElementById("Publicar");


function PublicarAnimal() {
window.location.href = '../ANIMAL no publicado/Animal-anonimo.html';
}

BotonPublicar.addEventListener("click", PublicarAnimal);  


let BotonLogo = document.getElementById("Logo");


function Volver() {
    window.location.href = '../Pantalla 1/Inicio.html';
}

BotonLogo.addEventListener("click", Volver);
