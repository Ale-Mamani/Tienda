let products = [];
let total = 0;

function add(product, price) {
    console.log(product, price);
    products.push(product);
    total = total + price;
    document.getElementById("botonPagar").innerHTML = `Pagar $${total}`
    let carrito = document.createElement("div");
    carrito.innerHTML = `<p id="carritoCompra"> Producto: ${product} <br> Precio: ${price}</p>`
    document.body.appendChild(carrito);
}

function validar(){
    let correo1= localStorage.getItem("correoReg");
    let clave1= localStorage.getItem("claveReg");
    console.log("correo1: "+correo1);
    let correo2= localStorage.getItem("mailLog");
    let clave2= localStorage.getItem("claveLog");
    console.log("correo2: "+correo2);
    if(correo1==correo2 && clave1==clave2 ){
        let valida= document.getElementById("validado");
        valida.innerHTML=`
        <br>
        Datos Correctos!!`
        console.log("logueo Exitoso");
    }
     
    else{
        console.log("datos incorrectos");
        let valida= document.getElementById("validado");
        valida.innerHTML=`
        <br>
        Datos incorrectos!`
    }
    }








