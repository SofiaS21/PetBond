const boton = document.querySelector('.boton-modo');
const imagenLuna = document.getElementById('Luna');
const imagenSol = document.getElementById('Sol');
const imagenPasto = document.getElementById('Pasto');
const imagenLogo = document.getElementById('Logo');
const imagenFondo = document.getElementById('Fondo');
const imagenesCorazones = document.getElementsByClassName('corazones');
const imagenesCalendarios = document.getElementsByClassName('Calendarios');
const imagenesLocalizaciones = document.getElementsByClassName('Localizaciones');
const imagenesInformaciones = document.getElementsByClassName('Informaciones');
const imagenesGatos = document.getElementsByClassName('Gatos');

boton.addEventListener('click', () => {
  boton.classList.toggle('activo');
  document.body.classList.toggle('dark-mode');

  const isDark = document.body.classList.contains('dark-mode');
  
  if (isDark) {
    imagenSol.src = "../../../imagenes/sol modo oscuro.png";
  } else {
    imagenSol.src = "../../../imagenes/sol.png";
  }

  if (isDark) {
    imagenLuna.src = "../../../imagenes/luna modo oscuro.png";
  } else {
    imagenLuna.src = "../../../imagenes/luna.png";
  }

  if (isDark) {
    imagenPasto.src = "../../../imagenes/pasto modo oscuro.png";
  } else {
    imagenPasto.src = "../../../imagenes/pasto.png";
  }

    if (isDark) {
    imagenLogo.src = "../../../imagenes/Logo modo oscuro.png";
  } else {
    imagenLogo.src = "../../../imagenes/logo-azul.png";
  }

  if (isDark) {
    imagenFondo.src = "../../../imagenes/Imagen gato oscuro.png";
  } else {
    imagenFondo.src = "../../../imagenes/Imagen fondo gato.png";
  }

  if (isDark) {
    for (const el of imagenesCorazones)       el.src = "../../../imagenes/Corazon icono MO.png";
  } else {
    for (const el of imagenesCorazones)       el.src = "../../../imagenes/Corazon.png";
  }

  if (isDark) {
    for (const el of imagenesCalendarios)     el.src = "../../../imagenes/Calendario icono MO.png";
  } else {
    for (const el of imagenesCalendarios)     el.src = "../../../imagenes/Calendario emoji.png";
  }

  if (isDark) {
    for (const el of imagenesLocalizaciones)  el.src = "../../../imagenes/Localizacion MO.png";
  } else {
    for (const el of imagenesLocalizaciones)  el.src = "../../../imagenes/Localizacion emoji.png";
  }

  if (isDark) {
    for (const el of imagenesInformaciones)   el.src = "../../../imagenes/Info MO.png";
  } else {
    for (const el of imagenesInformaciones)   el.src = "../../../imagenes/INFO.png";
  }

  if (isDark) {
    for (const el of imagenesGatos)           el.src = "../../../imagenes/Gato icono MO.png";
  } else {
    for (const el of imagenesGatos)           el.src = "../../../imagenes/Gato emoji.png";
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
    window.location.href = '../../../Pantalla 1/Iniciado sesion/Inicio.html';
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

const BotonesExtra = document.getElementsByClassName("extra");

for (const el of BotonesExtra) {
  el.addEventListener("click", Volver);
}