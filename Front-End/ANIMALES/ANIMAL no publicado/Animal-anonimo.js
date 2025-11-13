
const boton = document.querySelector('.boton-modo');
const imagenLuna = document.getElementById('Luna');
const imagenSol = document.getElementById('Sol');
const imagenPasto = document.getElementById('Pasto');
const imagenLogo = document.getElementById('Logo');
const imagenCorazon = document.getElementById('corazon');
const imagenLapiz = document.getElementsByClassName('Lapiz');


boton.addEventListener('click', () => {
  boton.classList.toggle('activo');
  document.body.classList.toggle('dark-mode');

  const isDark = document.body.classList.contains('dark-mode');
  
  if (document.body.classList.contains('dark-mode')) {
    imagenSol.src = "../../imagenes/sol modo oscuro.png";
  } else {
    imagenSol.src = "../../imagenes/sol.png";
  }

  
  if (document.body.classList.contains('dark-mode')) {
    imagenLuna.src = "../../imagenes/luna modo oscuro.png";
  } else {
    imagenLuna.src = "../../imagenes/luna.png";
  }

  if (document.body.classList.contains('dark-mode')) {
    imagenPasto.src = "../../imagenes/Pasto modo oscuro.png";
  } else {
    imagenPasto.src = "../../imagenes/Pasto.png";
  }

  if (document.body.classList.contains('dark-mode')) {
    imagenLogo.src = "../../imagenes/logo modo oscuro.png";
  } else {
    imagenLogo.src = "../../imagenes/logo-azul.png";
  }

  if (document.body.classList.contains('dark-mode')) {
    imagenCorazon.src = "../../imagenes/Corazon individual MO.png";
  } else {
    imagenCorazon.src = "../../imagenes/Corazon.png";
  }

  if (document.body.classList.contains('dark-mode')) {
    imagenLapiz.src = "../../imagenes/Lapiz MO.png";
  } else {
    imagenLapiz.src = "../../imagenes/Lapiz.png";
  }

  if (isDark) {
    imagenLapiz.src = "../../imagenes//Lapiz MO.png";
  } else {
    imagenLapiz.src = "../../imagenes/Lapiz.png";
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


let BotonInicio = document.getElementById("Inicio");

function IniciarSesion() {
    window.location.href = '../Sign in - up/Sign In/iniciar sesion.html';
}

BotonInicio.addEventListener("click", IniciarSesion);
