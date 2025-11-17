connect2Server();
console.log("Frontend cargado correctamente");

const nombre = document.getElementById("nombre");
const email = document.getElementById("email");

form.addEventListener("SignUp", (e) => {
  e.preventDefault()

const input = {
    nombre: nombre.value,
    email: email.value
  };

  console.log("Enviando al backend:", input)
    });

