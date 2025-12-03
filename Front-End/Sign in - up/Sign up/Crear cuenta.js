
connect2Server();

const form = document.getElementById("Crear");
const respuesta = document.getElementById("respuesta");
const boton = document.querySelector('.boton-modo');
const imagenTelefono = document.getElementById('telefono');
const imagenCandado = document.getElementById('Candado');
const imagenPersonita = document.getElementById('Personita');
const imagenLogo = document.getElementById('Logo');
const imagenSol = document.getElementById('Sol');
const imagenLuna = document.getElementById('Luna');
const Fecha = document.getElementById('Fecha');
const Correos = document.getElementById("Correos");
const Nombre = document.getElementById('Usuario');
const Contraseña = document.getElementById('Contraseña');

boton.addEventListener('click', () => {
  boton.classList.toggle('activo');
  document.body.classList.toggle('dark-mode');

  if (document.body.classList.contains('dark-mode')) {
    imagenTelefono.src = "../../imagenes/Telefono modo oscuro.png";
  } else {
    imagenTelefono.src = "../../imagenes/Telefono emoji.png";
  }

  if (document.body.classList.contains('dark-mode')) {
    imagenCandado.src = "../../imagenes/Candado modo oscuro.png";
  } else {
    imagenCandado.src = "../../imagenes/Candado emoji.png";
  }

  if (document.body.classList.contains('dark-mode')) {
    imagenLogo.src = "../../imagenes/Logo modo oscuro.png";
  } else {
    imagenLogo.src = "../../imagenes/logo-azul.png";
  }

  if (document.body.classList.contains('dark-mode')) {
    imagenPersonita.src = "../../imagenes/Personita modo oscuro.png";
  } else {
    imagenPersonita.src = "../../imagenes/Personita emoji.png";
  }

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

});

let BotonVolver = document.getElementById("Crear");

function VolverPantalla() {
  const generoSeleccionado = document.querySelector('input[name="Genero"]:checked');
  const input = {
    correo: Correos.value,
    genero:  generoSeleccionado ? generoSeleccionado.value : "",
    fecha: Fecha.value,
    nombre: Nombre.value,
    contraseña: Contraseña.value,
  };

  postEvent("registrarUsuario", input, (respuestaBack) => {
    console.log("Respuesta del backend:", respuestaBack);
    respuesta.innerText = "Backend respondió: " + JSON.stringify(respuestaBack);

    if (respuestaBack.ok || respuestaBack.exito) {
      window.location.href = '../../Pantalla 1/Iniciado sesion/Inicio.html';
    }
  });
}

BotonVolver.addEventListener("click", VolverPantalla);


let BotonLogo = document.getElementById("Logo");


function Volver() {
    window.location.href = '../../Pantalla 1/Iniciado sesion/Inicio.html';
}

BotonLogo.addEventListener("click", Volver);

