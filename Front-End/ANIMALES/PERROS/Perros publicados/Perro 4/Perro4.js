const boton = document.querySelector('.boton-modo');

boton.addEventListener('click', () => {
  boton.classList.toggle('activo');
  document.body.classList.toggle('dark-mode');
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
