const boton = document.querySelector('.boton-modo');
const imagenLuna = document.getElementById('Luna');
const imagenSol = document.getElementById('Sol');
const imagenPasto = document.getElementById('Pasto');
const imagenLogo = document.getElementById('Logo');
const imagenCorazon = document.getElementById('corazon');
const imagenLapizPublicar = document.querySelector('.imagen-lapiz');
const imagenesLapiz = document.getElementsByClassName('Lapiz'); 

const Nombre = document.getElementsByClassName('Nombre'); 
const Localizacion = document.getElementsByClassName('Localizacion'); 
const Raza = document.getElementsByClassName('Raza'); 
const Edad = document.getElementsByClassName('Edad'); 
const Genero = document.getElementsByClassName('Genero'); 
const Tamaño = document.getElementsByClassName('Tamaño'); 
const Peso = document.getElementsByClassName('Peso'); 
const Vivir = document.getElementsByClassName('Vivir'); 
const Vacunas = document.getElementsByClassName('Vacunas'); 
const Castrado = document.getElementsByClassName('Castrado'); 
const Biografia = document.getElementsByClassName('SuBiografia'); 
const Atributos = document.getElementsByClassName('SuAtributo'); 
const Contactos = document.getElementsByClassName('SuContactos'); 
const Notas = document.getElementsByClassName('SuNota'); 
const Publicar = document.getElementsByClassName('PublicarAnimal'); 


boton.addEventListener('click', () => {
  boton.classList.toggle('activo');
  document.body.classList.toggle('dark-mode');

  const isDark = document.body.classList.contains('dark-mode');
  
  if (isDark) {
    imagenSol.src = "../../imagenes/sol modo oscuro.png";
  } else {
    imagenSol.src = "../../imagenes/sol.png";
  }

  if (isDark) {
    imagenLuna.src = "../../imagenes/luna modo oscuro.png";
  } else {
    imagenLuna.src = "../../imagenes/luna.png";
  }

  if (isDark) {
    imagenPasto.src = "../../imagenes/pasto modo oscuro.png";
  } else {
    imagenPasto.src = "../../imagenes/pasto.png";
  }

  if (isDark) {
    imagenLogo.src = "../../imagenes/logo modo oscuro.png";
  } else {
    imagenLogo.src = "../../imagenes/logo-azul.png";
  }

  if (isDark) {
    imagenCorazon.src = "../../imagenes/Corazon individual MO.png";
  } else {
    imagenCorazon.src = "../../imagenes/Corazon.png";
  }

  if (isDark) {
    imagenLapizPublicar.src = "../../imagenes/Lapiz MO.png";
  } else {
    imagenLapizPublicar.src = "../../imagenes/Lapiz.png";
  }


  for (const el of imagenesLapiz) {
    el.src = isDark ? "../../imagenes/Lapiz MO.png" : "../../imagenes/Lapiz.png";
  }
});


document.addEventListener('DOMContentLoaded', () => {

  function setup(buttonId, inputId, modo = 'texto') {
    const boton = document.getElementById(buttonId);
    const input = document.getElementById(inputId);
    if (!boton || !input) return;


    function addItem() {
      const texto = (input.value || '').trim();
      if (!texto) return alert('Por favor escribe algo antes de agregar.');

      const cont = boton.closest('.contactos, .columnas-derecha, .Atributitos');

      let out = cont ? cont.querySelector('.resultado') : null;

      if (!out) out = boton.parentElement.querySelector('#resultado');

      if (!out) return console.warn('No encontré contenedor .resultado para', buttonId);

      let nodo;
      if (modo === 'chip' || (cont && cont.classList.contains('Atributitos'))) {
        nodo = document.createElement('span');
        nodo.className = 'Atributos';
      } else {
        nodo = document.createElement('p');
      }
      nodo.textContent = texto;
      out.appendChild(nodo);

      input.value = '';
      input.focus();
    }

    boton.addEventListener('click', addItem);
    input.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') addItem();
    });
  }

  setup('AgregarContacto',  'SuContactos',  'texto');
  setup('AgregarNota',      'SuNota',       'texto');
  setup('AgregarBiografia', 'SuBiografia',  'texto');
  setup('AgregAtributo',    'SuAtributo',   'chip'); 
});


let BotonLogo = document.getElementById("Logo");


function Volver() {
    window.location.href = '../../Pantalla 1/Inicio.html';
}

BotonLogo.addEventListener("click", Volver);


let BotonPerfil = document.getElementById("Perfil");

function CrearPerfil() {
window.location.href = '../../Perfil/Perfil.html';
}

BotonPerfil.addEventListener("click", CrearPerfil);


let BotonPublicar = document.getElementById("Publicar");


function PublicarAnimal() {
window.location.href = 'Animal-anonimo.html';
}

BotonPublicar.addEventListener("click", PublicarAnimal);  



function VolverPantalla() {
  const input = {
    nonmbre: Nombre.value,
    localizacion: Localizacion.value,
    raza: Raza.value,
    edad: Edad.value,
    genero: Genero.value,
    tamaño: Tamaño.value,
    peso: Peso.value,
    vivir: Vivir.value,
    vacunas: Vacunas.value,
    castrado: Castrado.value,
    biografia: Biografia.value,
    atributos: Atributos.value,
    contactos: Contactos.value,
    notas: Notas.value,
  };

  postEvent("registrarPerro", input, (respuestaBack) => {
    console.log("Respuesta del backend:", respuestaBack);
    respuesta.innerText = "Backend respondió: " + JSON.stringify(respuestaBack);

    if (respuestaBack.ok || respuestaBack.exito) {
      window.location.href = '../../Pantalla 1/Inicio.html';
    }
  });
}
