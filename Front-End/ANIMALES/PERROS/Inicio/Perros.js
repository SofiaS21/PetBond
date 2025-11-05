
const boton = document.querySelector('.boton-modo');

boton.addEventListener('click', () => {
  boton.classList.toggle('activo');
  document.body.classList.toggle('dark-mode');
});

let BotonPerfil = document.getElementById("Perfil");


function CrearPerfil() {
window.location.href = '../../../Perfil/Perfil.html';
}

BotonPerfil.addEventListener("click", CrearPerfil);


let BotonPublicar = document.getElementById("Publicar");


function PublicarAnimal() {
window.location.href = '../../ANIMAL no publicado/Animal-anonimo.html';
}

BotonPublicar.addEventListener("click", PublicarAnimal);  



let BotonLogo = document.getElementById("Logo");


function Volver() {
    window.location.href = '../../../Pantalla 1/Inicio.html';
}

BotonLogo.addEventListener("click", Volver);



let BotonInformar = document.getElementById("Info");


function InformarMas() {
    window.location.href = '../Perros publicados/Perro 1/Perro1.html';
}

BotonInformar.addEventListener("click", InformarMas);


let BotonInformarVioleta = document.getElementById("InfoVioleta");


function InformarVioleta() {
    window.location.href = '../Perros publicados/Perro 2/Perro2.html';
}

BotonInformarVioleta.addEventListener("click", InformarVioleta);


let BotonInformarMaxi = document.getElementById("InfoMaxi");


function InformarMaxi() {
    window.location.href = '../Perros publicados/Perro 3/Perro3.html';
}

BotonInformarMaxi.addEventListener("click", InformarMaxi);


let BotonInformarLuna = document.getElementById("InfoLuna");


function InformarLuna() {
    window.location.href = '../Perros publicados/Perro 4/Perro4.html';
}

BotonInformarLuna.addEventListener("click", InformarLuna);


let BotonInformarFlor = document.getElementById("InfoFlor");


function InformarFlor() {
    window.location.href = '../Perros publicados/Perro 5/Perro5.html';
}

BotonInformarFlor.addEventListener("click", InformarFlor);


let BotonInformarMilo = document.getElementById("InfoMilo");


function InformarMilo() {
    window.location.href = '../Perros publicados/Perro 6/Perro6.html';
}

BotonInformarMilo.addEventListener("click", InformarMilo);

const corazones = document.querySelectorAll(".corazones");

corazones.forEach(corazon => {
  corazon.addEventListener("click", () => {
    if (corazon.src.includes("Corazon.png")) {
      corazon.src = "../../../imagenes/Corazon relleno.png";
    } else {
      corazon.src = "../../../imagenes/Corazon.png";
    }
  });
});