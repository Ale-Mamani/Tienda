const form = document.querySelector('#formularioRegistro');
form.addEventListener('submit', (event) => {
    event.preventDefault();
    const emailReg=document.getElementById("inputEmail4").value;
    const claveReg=document.getElementById("inputPassword4").value;

let usuarioReg ={
    emailReg: emailReg,
    claveReg: claveReg,
    cargarStorageReg(){
        localStorage.setItem("correoReg",emailReg);
        localStorage.setItem("claveReg",claveReg);
    }
};
usuarioReg.cargarStorageReg();
var json=JSON.stringify(usuarioReg);
console.log(json);

let registracion=document.getElementById("registracionValida");
registracion.innerHTML=`
<br></br>
<label>Te Registraste con éxito</label>
<br></br>
<a href="../index.html"><button>Volver al inicio</button></a>
`

})
