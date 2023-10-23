const enviarBoton = document.getElementById('enviar');
const nombre = document.getElementById('nombre');
const apellido = document.getElementById('apellido');
const email = document.getElementById('email');


        enviarBoton.addEventListener('click', function () {
            const nombre = document.getElementById('nombre').value;
            const apellido = document.getElementById('apellido').value;
            const email = document.getElementById('email').value;

            const usuario = {
                Nombre: nombre,
                Apellido:apellido,
                Email: email
            };

            // Convierte el objeto en formato JSON
            const usuarioJSON = JSON.stringify(usuario);

            // Guarda el JSON en la consola
            console.log(usuarioJSON);

          // Limpiar o intento
          nombre.value = '';
          apellido.value = '';
          email.value = '';

        });
