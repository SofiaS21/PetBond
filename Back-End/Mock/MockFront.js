connect2Server();
console.log("Frontend cargado correctamente");
 //sign up
const Signup = document.getElementById("Signup");
const SignupNombre = document.getElementById("SignupNombre");
const SignupEmail = document.getElementById("SignupEmail");
const SignupBoton = document.getElementById("SignupBoton");

Signup.addEventListener("submit", function (e) {
  e.preventDefault();
console.log("Form submited")
const input = {
    nombre: SignupNombre.value,
    email: SignupEmail.value
  };
  
  if (input.nombre && input.email) {
    postEvent("registrarUsuario", {input})
    console.log("Enviando al backend:", input)
  }
    });

