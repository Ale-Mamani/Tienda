function login(){
    let ingresar=document.getElementById("login");
    ingresar.innerHTML=`
    <form action="" id="formularioLogin">
    <br>
    <label> usuario</label>
    <input id="user"></input>
    <label> Clave</label>
    <input id="pass"></input>
    <button onclick="validar()">Aceptar</button>
    </form>
    `
const form1 = document.querySelector('#formularioLogin');
form1.addEventListener('submit', (event) => {
    event.preventDefault();
    const mailLog=document.getElementById("user").value;
    const claveLog=document.getElementById("pass").value;
    
let usuarioLog = {
    mailLog: mailLog,
    claveLog: claveLog,
cargarStorageLog(){
    localStorage.setItem("mailLog",mailLog);
    localStorage.setItem("claveLog",claveLog);      
    }
};    
usuarioLog.cargarStorageLog();
let json1=JSON.stringify(usuarioLog);
console.log(json1);
})


} 
  
