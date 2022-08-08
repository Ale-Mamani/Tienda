function login(){
    localStorage.removeItem("logueoUsuario");
    class datosUsuario{
        constructor(objeto2){
        this.mail=objeto2.mail;
        this.clave=objeto2.clave;
        }
    }
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
       const guardarLocal = (clave, valor) => { localStorage.setItem(clave, valor) };
       guardarLocal("logueoUsuario", JSON.stringify(loginUsuario));
      });

      const almacenados1=JSON.parse(localStorage.getItem("logueoUsuario"));
      const datos1=[];
      
      for (const objeto1 of almacenados1)
      datos1.push(new datosUsuario(objeto1));

function obtenerDatos1(){
for (const dato1 of datos1){
        return dato1.mail,dato1.clave;
    }
}
    const almacenados2=JSON.parse(localStorage.getItem("datosUsuarios"));
      const datos2=[];
      for (const objeto2 of almacenados2)
    datos2.push(new datosUsuario(objeto2));

function ObtenerDatos2(){
for (const dato2 of datos2){
    return dato2.mail, dato2.clave;
    
}}
    
    if(ObtenerDatos2.mail==obtenerDatos1.mail && obtenerDatos1.clave==ObtenerDatos2.clave){
        let ingresar=document.getElementById("login");
        ingresar.innerHTML=`
        <br>
       <label>Ingreso Correcto, Bienvenido :D</label>
        `  
    }
    else{
        ingresar.innerHTML=`
       <label>Error, Datos incorrectos</label>
        `
    }
    }
    


