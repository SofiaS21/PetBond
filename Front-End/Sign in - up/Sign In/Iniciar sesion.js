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


form.addEventListener("Ingresar", (e) => {
    e.preventDefault();
    if (input.value) {
      postEvent("IniciarSesion", { msg: input.value }, (data) => {
        a.innerHTML = data.msg;
      });
      input.value = "";
    }
  });
