
connect2Server();

const Correo = document.getElementById("Correo")

FormData.addEventListener("Crear" , (e) => {
    e.preventDefault()

const input = {
    Correo: Correo.value,
  };
  postEvent("registrarUsuario", input, (respuestaBack) => {
    console.log("Respuesta del backend:", input);
    respuesta.innerText = "Backend respondió: " + JSON.stringify(input);
  })
})

const boton = document.querySelector('.boton-modo');
const imagenTelefono = document.getElementById('telefono');
const imagenCandado = document.getElementById('Candado');
const imagenLogo = document.getElementById('Logo');


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

});


let BotonVolver = document.getElementById("Crear");


function VolverPantalla() {
    window.location.href = '../../Pantalla 1/Inicio.html';
}

BotonVolver.addEventListener("click", VolverPantalla);


let BotonLogo = document.getElementById("Logo");


function Volver() {
    window.location.href = '../../Pantalla 1/Inicio.html';
}

BotonLogo.addEventListener("click", Volver);

