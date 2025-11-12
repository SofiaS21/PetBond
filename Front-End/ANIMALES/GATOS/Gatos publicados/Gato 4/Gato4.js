const boton = document.querySelector('.boton-modo');
const imagenLuna = document.getElementById('Luna');
const imagenSol = document.getElementById('Sol');
const imagenPasto = document.getElementById('Pasto');
const imagenLogo = document.getElementById('Logo');
const imagenCorazon = document.getElementById('corazon');

boton.addEventListener('click', () => {
  boton.classList.toggle('activo');
  document.body.classList.toggle('dark-mode');
  
  if (document.body.classList.contains('dark-mode')) {
    imagenSol.src = "../../../../imagenes/sol modo oscuro.png";
  } else {
    imagenSol.src = "../../../../imagenes/sol.png";
  }

  
  if (document.body.classList.contains('dark-mode')) {
    imagenLuna.src = "../../../../imagenes/luna modo oscuro.png";
  } else {
    imagenLuna.src = "../../../../imagenes/luna.png";
  }

  if (document.body.classList.contains('dark-mode')) {
    imagenPasto.src = "../../../../imagenes/Pasto modo oscuro.png";
  } else {
    imagenPasto.src = "../../../../imagenes/Pasto.png";
  }

  if (document.body.classList.contains('dark-mode')) {
    imagenLogo.src = "../../../../imagenes/logo modo oscuro.png";
  } else {
    imagenLogo.src = "../../../../imagenes/logo-azul.png";
  }

  if (document.body.classList.contains('dark-mode')) {
    imagenCorazon.src = "../../../../imagenes/Corazon individual MO.png";
  } else {
    imagenCorazon.src = "../../../../imagenes/Corazon.png";
  }

});
let BotonLogo = document.getElementById("Logo");


function Volver() {
    window.location.href = '../../../../Pantalla 1/Inicio.html';
}

BotonLogo.addEventListener("click", Volver);



let BotonPerfil = document.getElementById("Perfil");


function CrearPerfil() {
window.location.href = '../../../../Perfil/Perfil.html';
}

BotonPerfil.addEventListener("click", CrearPerfil);


let BotonPublicar = document.getElementById("Publicar");


function PublicarAnimal() {
window.location.href = '../../../ANIMAL no publicado/Animal-anonimo.html';
}

BotonPublicar.addEventListener("click", PublicarAnimal);  


const corazon = document.getElementById("corazon");

corazon.addEventListener("click", () => {
  if (corazon.src.includes("Corazon.png")) {
    corazon.src = "../../../../imagenes/Corazon relleno.png";
  } else {
    corazon.src = "../../../../imagenes/Corazon.png";
  }
});


