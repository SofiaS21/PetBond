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


let BotonPublicar = document.getElementById("Publicar");


function PublicarAnimal() {
window.location.href = '../ANIMALES/ANIMAL no publicado/Animal-anonimo.html';
}

BotonPublicar.addEventListener("click", PublicarAnimal); 


let BotonPerfil = document.getElementById("Perfil");


function CrearPerfil() {
window.location.href = 'Perfil.html';
}

BotonPerfil.addEventListener("click", CrearPerfil);

let BotonInformarMauricia = document.getElementById("InfoMauricia");


function InformarMauricia() {
    window.location.href = '../ANIMALES/GATOS/Gatos publicados/Gato 3/Gato3.html';
}

BotonInformarMauricia.addEventListener("click", InformarMauricia);


let BotonInformarMatteo = document.getElementById("InfoMatteo");


function InformarMatteo() {
    window.location.href = '../ANIMALES/GATOS/Gatos publicados/Gato 5/Gato5.html';
}

BotonInformarMatteo.addEventListener("click", InformarMatteo);

let BotonInformarMilo = document.getElementById("InfoMilo");


function InformarMilo() {
    window.location.href = '../ANIMALES/PERROS/Perros publicados/Perro 6/Perro6.html';
}

BotonInformarMilo.addEventListener("click", InformarMilo);


let BotonInformarLuna = document.getElementById("InfoLuna");


function InformarLuna() {
    window.location.href = '../ANIMALES/PERROS/Perros publicados/Perro 4/Perro4.html';
}

BotonInformarLuna.addEventListener("click", InformarLuna);


const corazones = document.querySelectorAll(".corazones");

corazones.forEach(corazon => {
  corazon.addEventListener("click", () => {
    if (corazon.src.includes("Corazon.png")) {
      corazon.src = "../imagenes/Corazon relleno.png";
    } else {
      corazon.src = "../imagenes/Corazon.png";
    }
  });
});
