import fs from 'fs';

let input = {
    email: "Chiuelo",
    contraseña: "2010"
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

logIn(input)