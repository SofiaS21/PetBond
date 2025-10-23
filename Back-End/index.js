import fs from 'fs';
import { subscribePOSTEvent } from 'soquetic';

function registrarUsusrio(input) {
    let data = fs.readFileSync('usuarios.jsos', 'utf-8')
    let usuarios = JSON.parse(data)

    usuarios.push({
        "nombre" : input.nombre,
        "apellido" : input.apellido,
        "email" : input.email,
        "contraseña" : input.contraseña,
    })

    fs.writeFileSync('usuario.json', JSON.stringify(usuarios, null, 2));

}

subscribePOSTEvent('registraarUsuario', registrarUsusrio);