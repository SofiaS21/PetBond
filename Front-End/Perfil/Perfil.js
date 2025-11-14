const boton = document.querySelector('.boton-modo');
const imagenLuna = document.getElementById('Luna');
const imagenSol  = document.getElementById('Sol');
const imagenLogo = document.getElementById('Logo');
const imagenesCorazones      = document.getElementsByClassName('corazones');
const imagenesCalendarios    = document.getElementsByClassName('Calendarios');
const imagenesLocalizaciones = document.getElementsByClassName('Localizaciones');
const imagenesInformaciones  = document.getElementsByClassName('Informaciones');
const imagenesPerros         = document.getElementsByClassName('Perros');
const imagenesGatos          = document.getElementsByClassName('Gatos');

boton.addEventListener('click', () => {
  boton.classList.toggle('activo');
  document.body.classList.toggle('dark-mode');
  const isDark = document.body.classList.contains('dark-mode');
  imagenSol.src  = isDark ? "../imagenes/sol modo oscuro.png"  : "../imagenes/sol.png";
  imagenLuna.src = isDark ? "../imagenes/luna modo oscuro.png" : "../imagenes/luna.png";
  imagenLogo.src = isDark ? "../imagenes/logo modo oscuro.png" : "../imagenes/logo-azul.png";

  const imagenPasto = document.querySelector('.footer-pasto img');
  if (imagenPasto) {
    imagenPasto.src = isDark ? "../imagenes/pasto modo oscuro.png" : "../imagenes/pasto.png";
  }

  for (const el of imagenesCorazones) {
    el.src = isDark ? "../imagenes/Corazon icono MO.png" : "../imagenes/Corazon.png";
  }

  for (const el of imagenesCalendarios) {
    el.src = isDark ? "../imagenes/Calendario icono MO.png" : "../imagenes/Calendario emoji.png";
  }

  for (const el of imagenesLocalizaciones) {
    el.src = isDark ? "../imagenes/Localizacion MO.png" : "../imagenes/Localizacion emoji.png";
  }

  for (const el of imagenesInformaciones) {
    el.src = isDark ? "../imagenes/Info MO.png" : "../imagenes/INFO.png";
  }

  for (const el of imagenesPerros) {
    el.src = isDark ? "../imagenes/Perro icono MO.png" : "../imagenes/Perro emoji.png";
  }

  for (const el of imagenesGatos) {
    el.src = isDark ? "../imagenes/Gato icono MO.png" : "../imagenes/Gato emoji.png";
  }
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

let BotonInformarMauricia = document.getElementById("InfoMauricia");


function InformarMauricia() {
    window.location.href = '../ANIMALES/GATOS/Gatos publicados/Gato 3/Gato3.html';
}

BotonInformarMauricia.addEventListener("click", InformarMauricia);


let BotonInformarMatteo = document.getElementById("InfoMatteo");


function InformarMatteo() {
    window.location.href = '../ANIMALES/GATOS/Gatos publicados/Gato 5/Gato5.html';
}

BotonInformarMatteo.addEventListener("click", InformarMatteo);

let BotonInformarMilo = document.getElementById("InfoMilo");


function InformarMilo() {
    window.location.href = '../ANIMALES/PERROS/Perros publicados/Perro 6/Perro6.html';
}

BotonInformarMilo.addEventListener("click", InformarMilo);


let BotonInformarLuna = document.getElementById("InfoLuna");


function InformarLuna() {
    window.location.href = '../ANIMALES/PERROS/Perros publicados/Perro 4/Perro4.html';
}

BotonInformarLuna.addEventListener("click", InformarLuna);


const corazones = document.querySelectorAll(".corazones");

corazones.forEach(corazon => {
  corazon.addEventListener("click", () => {
    if (corazon.src.includes("Corazon.png")) {
      corazon.src = "../imagenes/Corazon relleno.png";
    } else {
      corazon.src = "../imagenes/Corazon.png";
    }
  });
});

