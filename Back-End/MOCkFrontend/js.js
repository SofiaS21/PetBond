const Boton1 = document.getElementById('Boton1')

Boton1.addEventListener('click', mandarRejistro)

function mandarRejistro(){
   postEvent("mandarRejistro", {
    "nombre" : "Martin",
    "apellido" : "B",
    "email" : "MartinB",
    "contraseña" : "2239"
   },)
}