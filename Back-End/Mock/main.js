console.log("Frontend cargado correctamente");

const form = document.getElementById("form");
const nombre = document.getElementById("nombre");
const email = document.getElementById("email");
const respuesta = document.getElementById("respuesta");

form.addEventListener("submit", (e) => {
  e.preventDefault()

const input = {
    nombre: nombre.value,
    email: email.value
  };

  console.log("Enviando al backend:", input)

    // Enviamos el evento POST al backend
    postEvent("registrarUsuario", (input) => {
        console.log("Respuesta del backend:", input);
        respuesta.innerText = "Backend respondió: " + JSON.stringify(input);
      });
    });