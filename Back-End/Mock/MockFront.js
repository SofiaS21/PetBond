connect2Server();
console.log("Frontend cargado correctamente");
 //sign up
const Signup = document.getElementById("Signup");
const SignupNombre = document.getElementById("SignupNombre");
const SignupEmail = document.getElementById("SignupEmail  ");
const SignupBoton = document.getElementById("SignupBoton");


Signup.addEventListener("SignupBoton", (e) => {
  e.preventDefault()

const input = {
    nombre: SignupNombre.value,
    email: SignupEmail.value
  };

  console.log("Enviando al backend:", input)
  
  if (input.value) {
    postEvent("registrarUsuario", {input})
  }
    });

