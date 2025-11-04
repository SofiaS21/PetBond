const boton = document.querySelector('.boton-modo');

boton.addEventListener('click', () => {
  boton.classList.toggle('activo');
  document.body.classList.toggle('dark-mode');
});


let BotonLogo = document.getElementById("Logo");


function Volver() {
    window.location.href = '../Pantalla 1/Inicio.html';
}

BotonLogo.addEventListener("click", Volver);

