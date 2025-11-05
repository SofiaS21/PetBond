const boton = document.querySelector('.boton-modo');

boton.addEventListener('click', () => {
  boton.classList.toggle('activo');
  document.body.classList.toggle('dark-mode');
});


let BotonLogo = document.getElementById("Logo");


function Volver() {
    window.location.href = '../Pantalla 1/Inicio.html';
}

BotonLogo.addEventListener("click", Volver);


let BotonPublicar = document.getElementById("Publicar");


function PublicarAnimal() {
window.location.href = '../ANIMALES/ANIMAL no publicado/Animal-anonimo.html';
}

BotonPublicar.addEventListener("click", PublicarAnimal); 


let BotonPerfil = document.getElementById("Perfil");


function CrearPerfil() {
window.location.href = 'Perfil.html';
}

BotonPerfil.addEventListener("click", CrearPerfil);

