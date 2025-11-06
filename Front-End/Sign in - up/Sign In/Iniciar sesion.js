
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

let BotonCrear = document.getElementById("Crear");


function CrearCuenta() {
    window.location.href = '../Sign up/Crear cuenta.html';
}

BotonCrear.addEventListener("click", CrearCuenta);


let BotonIngresar = document.getElementById("Ingresar");


function IngresarCuenta() {
    window.location.href = '../../Pantalla 1/Inicio.html';
}

BotonIngresar.addEventListener("click", IngresarCuenta);

let BotonLogo = document.getElementById("Logo");


function Volver() {
    window.location.href = '../../Pantalla 1/Inicio.html';
}

BotonLogo.addEventListener("click", Volver);


form.addEventListener("Ingresar", (e) => {
    e.preventDefault();
    if (input.value) {
      postEvent("IniciarSesion", { msg: input.value }, (data) => {
        a.innerHTML = data.msg;
      });
      input.value = "";
    }
  });


