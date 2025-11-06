connect2Server();
console.log("Frontend cargado correctamente");

const nombre = document.getElementById("nombre");
const email = document.getElementById("email");

form.addEventListener("submit", (e) => {
  e.preventDefault()

const input = {
    nombre: nombre.value,
    email: email.value
  };

  console.log("Enviando al backend:", input)

    // Enviamos el evento POST al backend
    postEvent("registrarUsuario", input, (respuestaBack) => {
        console.log("Respuesta del backend:", input);
        respuesta.innerText = "Backend respondió: " + JSON.stringify(input);
      });
    });

