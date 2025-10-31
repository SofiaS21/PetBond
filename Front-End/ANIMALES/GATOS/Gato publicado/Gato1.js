const boton = document.querySelector('.boton-modo');

boton.addEventListener('click', () => {
  boton.classList.toggle('activo');
});



let BotonPublicar = document.getElementById("Publicar");

function HacerPublicacion() {
    window.location.href = '../../ANIMAL no publicado/Animal-anonimo.html';
}

BotonPublicar.addEventListener("click", HacerPublicacion);

const boton = document.querySelector('.boton-modo');

