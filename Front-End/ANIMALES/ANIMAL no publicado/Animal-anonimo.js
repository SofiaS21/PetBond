document.addEventListener('DOMContentLoaded', () => {

  if (typeof connect2Server === 'function') {
    connect2Server();
  }

  function setup(buttonId, inputId, modo = 'texto') {
    const boton = document.getElementById(buttonId);
    const input = document.getElementById(inputId);
    if (!boton || !input) return;

    function addItem() {
      const texto = (input.value || '').trim();
      if (!texto) {
        alert('Por favor escribe algo antes de agregar.');
        return;
      }

      const cont = boton.closest('.contactos, .columnas-derecha, .Atributitos');
      if (!cont) {
        console.warn('No encontré contenedor padre para', buttonId);
        return;
      }

      const out = cont.querySelector('.resultado');
      if (!out) {
        console.warn('No encontré .resultado dentro de', buttonId);
        return;
      }

      let nodo;
      if (modo === 'chip' || cont.classList.contains('Atributitos')) {
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

  const BotonLogo = document.getElementById('Logo');
  
  if (BotonLogo) {
    BotonLogo.addEventListener('click', () => {
      window.location.href = '../../../../Pantalla 1/Iniciado sesion/Inicio.html';
    });
  }

  const BotonPerfil = document.getElementById('PreviewAnimal');
  if (BotonPerfil) {
    BotonPerfil.addEventListener('click', () => {
      window.location.href = '../../Perfil/Perfil.html';
    });
  }

  const BotonPublicarHeader = document.getElementById('Publicar');
  if (BotonPublicarHeader) {
    BotonPublicarHeader.addEventListener('click', () => {
      window.location.href = 'Animal-anonimo.html';
    });
  }

  const botonModo = document.querySelector('.boton-modo');
  const imagenLuna = document.getElementById('Luna');
  const imagenSol = document.getElementById('Sol');
  const imagenPasto = document.getElementById('Pasto');
  const imagenLogo = document.getElementById('Logo');
  const imagenCorazon = document.getElementById('corazon');
  const imagenLapizPublicar = document.querySelector('.imagen-lapiz');
  const imagenesLapiz = document.querySelectorAll('.Lapiz');

  if (botonModo) {
    botonModo.addEventListener('click', () => {
      botonModo.classList.toggle('activo');
      document.body.classList.toggle('dark-mode');

      const isDark = document.body.classList.contains('dark-mode');

      if (imagenSol) {
        imagenSol.src = isDark
          ? '../../imagenes/sol modo oscuro.png'
          : '../../imagenes/sol.png';
      }

      if (imagenLuna) {
        imagenLuna.src = isDark
          ? '../../imagenes/luna modo oscuro.png'
          : '../../imagenes/luna.png';
      }

      if (imagenPasto) {
        imagenPasto.src = isDark
          ? '../../imagenes/pasto modo oscuro.png'
          : '../../imagenes/pasto.png';
      }

      if (imagenLogo) {
        imagenLogo.src = isDark
          ? '../../imagenes/logo modo oscuro.png'
          : '../../imagenes/logo-azul.png';
      }

      if (imagenCorazon) {
        imagenCorazon.src = isDark
          ? '../../imagenes/Corazon individual MO.png'
          : '../../imagenes/Corazon.png';
      }

      if (imagenLapizPublicar) {
        imagenLapizPublicar.src = isDark
          ? '../../imagenes/Lapiz MO.png'
          : '../../imagenes/Lapiz.png';
      }

      imagenesLapiz.forEach((el) => {
        el.src = isDark
          ? '../../imagenes/Lapiz MO.png'
          : '../../imagenes/Lapiz.png';
      });
    });
  }

  const Nombre      = document.getElementById('Nombre');
  const Localizacion = document.getElementById('Localizacion');
  const Raza        = document.getElementById('Raza');
  const Edad        = document.getElementById('Edad');
  const Genero      = document.getElementById('Genero');
  const Tamaño      = document.getElementById('Tamaño');
  const Peso        = document.getElementById('Peso');
  const Vivir       = document.getElementById('Vivir');
  const Vacunas     = document.getElementById('Vacunas');
  const Castrado    = document.getElementById('Castrado');

  const Biografia   = document.getElementById('SuBiografia');
  const Atributos   = document.getElementById('SuAtributo');
  const Contactos   = document.getElementById('SuContactos');
  const Notas       = document.getElementById('SuNota');

  const BotonPublicarAnimal = document.getElementById('PublicarAnimal');
  const respuesta = document.getElementById('respuesta');

  function VolverPantalla() {
    const input = {
      nombre:       Nombre.value,
      localizacion: Localizacion.value,
      raza:         Raza.value,
      edad:         Edad.value,
      genero:       Genero.value,
      tamaño:       Tamaño.value,
      peso:         Peso.value,
      vivir:        Vivir.value,
      vacunas:      Vacunas.value,
      castrado:     Castrado.value,
      biografia:    Biografia.value,
      atributos:    Atributos.value,
      contactos:    Contactos.value,
      notas:        Notas.value,
    };

    if (typeof postEvent !== 'function') {
      console.warn('postEvent no está definido. ¿Incluiste el JS del backend?');
      if (respuesta) {
        respuesta.textContent = 'Error: no se encontró la función postEvent (backend no conectado).';
      }
      return;
    }

    postEvent('registrarPerro', input, (respuestaBack) => {
      console.log('Respuesta del backend:', respuestaBack);

      if (respuesta) {
        respuesta.innerText = 'Backend respondió: ' + JSON.stringify(respuestaBack);
      }

      if (respuestaBack && (respuestaBack.ok || respuestaBack.exito)) {
        window.location.href = '../../../../Pantalla 1/Iniciado sesion/Inicio.html';
      }
    });
  }

  if (BotonPublicarAnimal) {
    BotonPublicarAnimal.addEventListener('click', VolverPantalla);
  }
});
