


document.addEventListener('DOMContentLoaded', () => {

  function setup(buttonId, inputId, modo = 'texto') {
    const boton = document.getElementById(buttonId);
    const input = document.getElementById(inputId);
    if (!boton || !input) return;


    function addItem() {
      const texto = (input.value || '').trim();
      if (!texto) return alert('Por favor escribe algo antes de agregar.');

      // Contenedor más cercano que podría tener el "resultado"
      const cont = boton.closest('.contactos, .columnas-derecha, .Atributitos');
      // Busca el primer .resultado DENTRO del contenedor

      let out = cont ? cont.querySelector('.resultado') : null;
      //  busca un #resultado hermano (compatible con tu HTML actual)

      if (!out) out = boton.parentElement.querySelector('#resultado');

      if (!out) return console.warn('No encontré contenedor .resultado para', buttonId);

      // Crear nodo según el modo
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

  // Conexiones según tus IDs en el HTML que pegaste
  setup('AgregarContacto',  'SuContactos',  'texto');
  setup('AgregarNota',      'SuNota',       'texto');
  setup('AgregarBiografia', 'SuBiografia',  'texto');
  setup('AgregAtributo',    'SuAtributo',   'chip'); // usa "chip" para Atributitos
});

const boton = document.querySelector('.boton-modo');

boton.addEventListener('click', () => {
  boton.classList.toggle('activo');
  document.body.classList.toggle('dark-mode');
});

let BotonInicio = document.getElementById("Inicio");


function IniciarSesion() {
    window.location.href = '../Sign in - up/Sign In/iniciar sesion.html';
}

BotonInicio.addEventListener("click", IniciarSesion);
