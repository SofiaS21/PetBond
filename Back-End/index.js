import fs from 'fs';
import { subscribePOSTEvent, realTimeEvent, startServer } from "soquetic"

//input que biene del front

//Registro
function registrarUsusrio(input) {
    let data = fs.readFileSync('usuarios.json', 'utf-8')
    let usuarios = JSON.parse(data)

    usuarios.push({
        "correo": input.correo,
        "genero": input.genero,
        "fecha": input.fecha,
        "nombre": input.nombre,
        "contraseña": input.contraseña,
    })

    fs.writeFileSync('usuarios.json', JSON.stringify(usuarios, null, 2));

}

//Login
function logIn(input) {
console.log("mensaje recivido", input)

    let data = fs.readFileSync('usuarios.json', 'utf-8')
    let usuarios = JSON.parse(data)

    let usuarioEncontrado = false

    for (let i = 0; i < usuarios.length; i++){
        let Usuario = usuarios[i];
        
        if (Usuario.correo === input.correo && Usuario.contraseña === input.contraseña){
            usuarioEncontrado = Usuario;
            break;
        }
    }

    if (usuarioEncontrado) {
        console.log(usuarioEncontrado, "MATCH", input)
        return({ msg: 'Login exitoso', nombre: usuarioEncontrado.nombre });
    } else {
        return({ msg: 'Email o contraseña incorrectos' });
    }
}

//Crear post
function crearPost(input) {
    let data = fs.readFileSync('posts.json', 'utf-8')
    let posts = JSON.parse(data)

    posts.push({
        "nombre": input.nombre,
        "localizacion": input.localizacion,
        "raza": input.raza,
        "edad": input.edad,     
        "genero": input.genero,
        "tamaño": input.tamaño,      
        "peso": input.peso, 
        "vivir": input.vivir,
        "vacunas": input.vacunas,
        "castrado": input.castrado,
        "biografia": input.biografia,  
        "atributos":  input.atributos,
        "contactos": input.contactos,
        "notas": input.notas 
    })

    fs.writeFileSync('posts.json', JSON.stringify(posts, null, 2))
 return({ msg: 'Post creado'})
}


    //soquqetic
subscribePOSTEvent("registrarUsuario", (input) => {
    console.log("Recibi del frontend:", input);
    registrarUsusrio(input)
})

subscribePOSTEvent("iniciarSesion", logIn)

subscribePOSTEvent("registrarPerro", (input) => {
    console.log("Recibi del frontend:", input);
    crearPost(input)
})

startServer(3000, true)