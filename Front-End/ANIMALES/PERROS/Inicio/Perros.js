const boton = document.querySelector('.boton-modo');
const imagenLuna = document.getElementById('Luna');
const imagenSol = document.getElementById('Sol');
const imagenPasto = document.getElementById('Pasto');
const imagenLogo = document.getElementById('Logo');
const imagenesCorazones = document.getElementsByClassName('corazones');
const imagenesCalendarios = document.getElementsByClassName('Calendarios');
const imagenesLocalizaciones = document.getElementsByClassName('Localizaciones');
const imagenesInformaciones = document.getElementsByClassName('Informaciones');
const imagenesGatos = document.getElementsByClassName('Gatos');
const imagenFondo = document.getElementById('Fondo');

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
    imagenFondo.src = "../../../imagenes/Fondo perro MO (3).png";
  } else {
    imagenFondo.src = "../../../imagenes/Fondo perro.png";
  }


  if (isDark) {
    imagenPasto.src = "../../../imagenes/pasto modo oscuro.png"; 
  } else {
    imagenPasto.src = "../../../imagenes/pasto.png";            
  }

  if (isDark) {
    imagenLogo.src = "../../../imagenes/logo modo oscuro.png";
  } else {
    imagenLogo.src = "../../../imagenes/logo-azul.png";
  }

  if (isDark) {
    for (const el of imagenesCorazones) el.src = "../../../imagenes/Corazon icono MO.png";
  } else {
    for (const el of imagenesCorazones) el.src = "../../../imagenes/Corazon.png";
  }

  if (isDark) {
    for (const el of imagenesCalendarios) el.src = "../../../imagenes/Calendario icono MO.png";
  } else {
    for (const el of imagenesCalendarios) el.src = "../../../imagenes/Calendario emoji.png";
  }

  if (isDark) {
    for (const el of imagenesLocalizaciones) el.src = "../../../imagenes/Localizacion MO.png";
  } else {
    for (const el of imagenesLocalizaciones) el.src = "../../../imagenes/Localizacion emoji.png";
  }

  if (isDark) {
    for (const el of imagenesInformaciones) el.src = "../../../imagenes/Info MO.png";
  } else {
    for (const el of imagenesInformaciones) el.src = "../../../imagenes/INFO.png";
  }

  if (isDark) {
    for (const el of imagenesGatos) el.src = "../../../imagenes/Perro icono MO.png";
  } else {
    for (const el of imagenesGatos) el.src = "../../../imagenes/Perro emoji.png";
  }
});
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



let BotonInformar = document.getElementById("Info");


function InformarMas() {
    window.location.href = '../Perros publicados/Perro 1/Perro1.html';
}

BotonInformar.addEventListener("click", InformarMas);


let BotonInformarVioleta = document.getElementById("InfoVioleta");


function InformarVioleta() {
    window.location.href = '../Perros publicados/Perro 2/Perro2.html';
}

BotonInformarVioleta.addEventListener("click", InformarVioleta);


let BotonInformarMaxi = document.getElementById("InfoMaxi");


function InformarMaxi() {
    window.location.href = '../Perros publicados/Perro 3/Perro3.html';
}

BotonInformarMaxi.addEventListener("click", InformarMaxi);


let BotonInformarLuna = document.getElementById("InfoLuna");


function InformarLuna() {
    window.location.href = '../Perros publicados/Perro 4/Perro4.html';
}

BotonInformarLuna.addEventListener("click", InformarLuna);


let BotonInformarFlor = document.getElementById("InfoFlor");


function InformarFlor() {
    window.location.href = '../Perros publicados/Perro 5/Perro5.html';
}

BotonInformarFlor.addEventListener("click", InformarFlor);


let BotonInformarMilo = document.getElementById("InfoMilo");


function InformarMilo() {
    window.location.href = '../Perros publicados/Perro 6/Perro6.html';
}

BotonInformarMilo.addEventListener("click", InformarMilo);

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