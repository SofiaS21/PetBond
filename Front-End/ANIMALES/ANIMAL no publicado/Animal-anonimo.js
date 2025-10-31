
        const input = document.getElementById('SuBiografia');
        const boton = document.getElementById('botonAgregar');
        const resultado = document.getElementById('resultado');

        boton.addEventListener('click', () => {
            const texto = input.value.trim(); // Toma el texto del input

            if (texto !== "") { // Evita agregar texto vacío
                const nuevoParrafo = document.createElement('p');
                nuevoParrafo.textContent = texto;

                // Agrega el nuevo párrafo al contenedor resultado
                resultado.appendChild(nuevoParrafo);

                // Limpia el input después de agregar el texto
                input.value = "";
            } else {
                alert("Por favor escribe algo antes de agregar.");
            }
        });