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

    /*
      let mail = document.querySelector('#inputEmail4').value;
      let clave = document.querySelector('#inputPassword4').value;
      let direccion = document.querySelector('#inputAddress').value;
      let ciudad = document.querySelector('#inputCity').value;
      let pais = document.querySelector('#inputCountry').value;
      console.log(mail, clave, direccion, ciudad, pais);

      function guardarLocal(clave, valor) { localStorage.setItem(clave, valor); }
      guardarLocal("correo", JSON.stringify(mail));
      guardarLocal("clave", JSON.stringify(clave));
      guardarLocal("direccion", JSON.stringify(direccion));
      guardarLocal("ciudad", JSON.stringify(ciudad));
      guardarLocal("pais", JSON.stringify(pais));*/
      });