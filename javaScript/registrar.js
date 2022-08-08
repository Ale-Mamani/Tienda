const form = document.querySelector('#formularioRegistro');
form.addEventListener('submit', (event) => {
    event.preventDefault();
    const datosUsuarios = [{
        mail: document.querySelector('#inputEmail4').value,
        clave: document.querySelector('#inputPassword4').value,
        direccion: document.querySelector('#inputAddress').value,
        ciudad: document.querySelector('#inputCity').value,
        pais: document.querySelector('#inputCountry').value
    }];

    const guardarLocal = (clave, valor) => { localStorage.setItem(clave, valor) };
    guardarLocal("datosUsuarios", JSON.stringify(datosUsuarios));
      });

      

