import fs from 'fs';


//input que biene del front
let input = {
    email: "GorgeA",
    animal: "gato",
    nombre: "Rocky",
    edad: "2"
}

//Registro
function registrarUsusrio(input) {
    let data = fs.readFileSync('usuarios.json', 'utf-8')
    let usuarios = JSON.parse(data)

    usuarios.push({
        "nombre" : input.nombre,
        "apellido" : input.apellido,    
        "email" : input.email,
        "contraseña" : input.contraseña,
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
        "email" : input.email,
        "animal" : input.animal,
        "nombre" : input.nombre,    
        "edad" : input.edad
    })

    fs.writeFileSync('posts.json', JSON.stringify(posts, null, 2))}

    crearPost(input)