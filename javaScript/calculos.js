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










