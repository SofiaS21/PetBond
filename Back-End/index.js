import fs from 'fs';
import { subscribePOSTEvent, realTimeEvent, startServer } from "soquetic"

//input que biene del front

//Registro
function registrarUsusrio(input) {
    let data = fs.readFileSync('usuarios.json', 'utf-8')
    let usuarios = JSON.parse(data)

    usuarios.push({
        "nombre" : input.nombre, 
        "email" : input.email,
    })

    fs.writeFileSync('usuarios.json', JSON.stringify(usuarios, null, 2));

}

//Login
function logIn(input) {
    let data = fs.readFileSync('usuarios.json', 'utf-8')
    let usuarios = JSON.parse(data)

    let usuarioEncontrado = null

    for (let i = 0; i < usuarios.length; i++){
        let Usuario = usuarios[i];

        
        if (Usuario.email === input.email && Usuario.contraseña === input.contraseña){
            usuarioEncontrado = Usuario;
            break;
        }
    }

    if (usuarioEncontrado) {console.log("Login exitoso;", usuarioEncontrado.nombre)}
    else {console.log("Email o contraseña incorrecta")}
}

//Crear post
function crearPost(input) {
    let data = fs.readFileSync('posts.json', 'utf-8')
    let posts = JSON.parse(data)

    posts.push({
        "id" : posts.length,
        "email" : input.email,
        "animal" : input.animal,
        "nombre" : input.nombre,    
        "edad" : input.edad
    })

    fs.writeFileSync('posts.json', JSON.stringify(posts, null, 2))}


    //soquqetic
subscribePOSTEvent("registrarUsuario", (input) => {
    console.log("Recibi del frontend:", input);
    registrarUsusrio(input)
})


startServer(3000, true)