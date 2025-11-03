const boton = document.querySelector('.boton-modo');

boton.addEventListener('click', () => {
  boton.classList.toggle('activo');
});

let BotonInformar = document.getElementById("Info");


function InformarMas() {
    window.location.href = '../Gato publicado/Gato1.html';
}

BotonInformar.addEventListener("click", InformarMas);


let BotonPerfil = document.getElementById("Perfil");


function CrearPerfil() {
window.location.href = '../../../Perfil/Perfil.html';
}

BotonPerfil.addEventListener("click", CrearPerfil);


let BotonPublicar = document.getElementById("Publicar");


function PublicarAnimal() {
window.location.href = '../../ANIMAL no publicado/Animal-anonimo.html';
}

BotonPublicar.addEventListener("click", PublicarAnimal);  



let BotonLogo = document.getElementById("Logo");


function Volver() {
    window.location.href = '../../../Pantalla 1/Inicio.html';
}

BotonLogo.addEventListener("click", Volver);
