const boton = document.querySelector('.boton-modo');

boton.addEventListener('click', () => {
  boton.classList.toggle('activo');
  document.body.classList.toggle('dark-mode');
});

let BotonInformar = document.getElementById("Info");


function InformarMas() {
    window.location.href = '../Gatos publicados/Gato 1/Gato1.html';
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


let BotonInformarMatteo = document.getElementById("InfoMatteo");


function InformarMatteo() {
    window.location.href = '../Gatos publicados/Gato 5/Gato5.html';
}

BotonInformarMatteo.addEventListener("click", InformarMatteo);


let BotonInformarAlejandro = document.getElementById("InfoAlejandro");


function InformarAlejandro() {
    window.location.href = '../Gatos publicados/Gato 4/Gato4.html';
}

BotonInformarAlejandro.addEventListener("click", InformarAlejandro);


let BotonInformarMauricia = document.getElementById("InfoMauricia");


function InformarMauricia() {
    window.location.href = '../Gatos publicados/Gato 3/Gato3.html';
}

BotonInformarMauricia.addEventListener("click", InformarMauricia);


let BotonInformarPatricia = document.getElementById("InfoPatricia");


function InformarPatricia() {
    window.location.href = '../Gatos publicados/Gato 2/Gato2.html';
}

BotonInformarPatricia.addEventListener("click", InformarPatricia);

