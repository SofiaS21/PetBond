connect2Server();

const boton = document.querySelector('.boton-modo');
const imagenTelefono = document.getElementById('telefono');
const imagenCandado = document.getElementById('Candado');
const imagenLogo = document.getElementById('Logo');
const imagenSol = document.getElementById('Sol');
const imagenLuna = document.getElementById('Luna');

const Correos = document.getElementById("Correos");
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

  const input = {
    correo: Correos.value,
    contraseña: Contraseña.value,
  };

  postEvent("iniciarSesion", input, (respuestaBack) => {
    console.log("Respuesta del backend:", respuestaBack);


        if (respuestaBack.msg === 'Login exitoso') {
            window.location.href = '../../Pantalla 1/Inicio.html';
            console.log("Secion inisiada")
        } 
        else {
            alert(respuestaBack.msg);
            console.log("Error")
        }
    });
}

BotonVolver.addEventListener("click", VolverPantalla);



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

