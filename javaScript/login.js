function login(){
    let ingresar=document.getElementById("login");
    ingresar.innerHTML=`
    <form action="" id="formularioLogin">
    <br>
    <label> usuario</label>
    <input id="user"></input>
    <label> Clave</label>
    <input id="pass"></input>
    <button type="submit">Aceptar</button>
    </form>
    `
    const form1 = document.querySelector('#formularioLogin');
form1.addEventListener('submit', (event) => {
    event.preventDefault();
    const loginUsuario = [{
        mail: document.querySelector('#user').value,
        clave: document.querySelector('#pass').value,
    }];

    
    guardarLocal("logueoUsuario", JSON.stringify(loginUsuario));

      });
}

const form1 = document.querySelector('#formularioLogin');
form1.addEventListener('submit', (event) => {
    event.preventDefault();
    const loginUsuario = [{
        mail: document.querySelector('#user').value,
        clave: document.querySelector('#pass').value,
    }];

    
    guardarLocal("logueoUsuario", JSON.stringify(loginUsuario));

      });