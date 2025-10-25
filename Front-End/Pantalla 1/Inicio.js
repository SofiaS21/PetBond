
let BotonInicio = document.getElementById("Inicio");


function IniciarSesion() {
    window.location.href = '../Sign in - up/Sign In/iniciar sesion.html';
}

BotonInicio.addEventListener("click", IniciarSesion);


let BotonCrear = document.getElementById("Crear");


function CrearCuenta() {
    window.location.href = '../Sign in - up/Sign up/Crear cuenta.html';
}

BotonCrear.addEventListener("click", CrearCuenta);

