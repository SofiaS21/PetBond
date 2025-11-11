const boton = document.querySelector('.boton-modo');
const imagenLuna = document.getElementById('Luna');
const imagenSol = document.getElementById('Sol');
const imagenPasto = document.getElementById('Pasto');
const imagenLogo = document.getElementById('Logo');
const imagenCorazon = document.getElementsByClassName('corazones')[0];
const imagenCalendarios = document.getElementsByClassName('Calendarios')[0];
const imagenLocalizaciones = document.getElementsByClassName('Localizaciones')[0];
const imagenInformacion = document.getElementsByClassName('Informaciones')[0];
const imagenGatos = document.getElementsByClassName('Gatos')[0];


boton.addEventListener('click', () => {
  boton.classList.toggle('activo');
  document.body.classList.toggle('dark-mode');
  
  if (document.body.classList.contains('dark-mode')) {
    imagenSol.src = "../../../imagenes/sol modo oscuro.png";
  } else {
    imagenSol.src = "../../../imagenes/sol.png";
  }

  
  if (document.body.classList.contains('dark-mode')) {
    imagenLuna.src = "../../../imagenes/luna modo oscuro.png";
  } else {
    imagenLuna.src = "../../../imagenes/luna.png";
  }

  if (document.body.classList.contains('dark-mode')) {
    imagenPasto.src = "../../../imagenes/Pasto modo oscuro.png";
  } else {
    imagenPasto.src = "../../../imagenes/Pasto.png";
  }

  if (document.body.classList.contains('dark-mode')) {
    imagenLogo.src = "../../../imagenes/logo modo oscuro.png";
  } else {
    imagenLogo.src = "../../../imagenes/logo-azul.png";
  }

  if (document.body.classList.contains('dark-mode')) {
    imagenCorazon.src = "../../../imagenes/Corazon icono MO.png";
  } else {
    imagenCorazon.src = "../../../imagenes/Corazon.png";
  }

  if (document.body.classList.contains('dark-mode')) {
    imagenCalendarios.src = "../../../imagenes/Calendario icono MO.png";
  } else {
    imagenCalendarios.src = "../../../imagenes/Calendario emoji.png";
  }

  if (document.body.classList.contains('dark-mode')) {
    imagenLocalizaciones.src = "../../../imagenes/Localizacion MO.png";
  } else {
    imagenLocalizaciones.src = "../../../imagenes/Localizacion emoji.png";
  }

  if (document.body.classList.contains('dark-mode')) {
    imagenInformacion.src = "../../../imagenes/Info MO.png";
  } else {
    imagenInformacion.src = "../../../imagenes/INFO.png";
  }

  if (document.body.classList.contains('dark-mode')) {
    imagenGatos.src = "../../../imagenes/Gato icono MO.png";
  } else {
    imagenGatos.src = "../../../imagenes/Gato emoji.png";
  }

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


const corazones = document.querySelectorAll(".corazones");

corazones.forEach(corazon => {
  corazon.addEventListener("click", () => {
    if (corazon.src.includes("Corazon.png")) {
      corazon.src = "../../../imagenes/Corazon relleno.png";
    } else {
      corazon.src = "../../../imagenes/Corazon.png";
    }
  });
});
