const accesorios=[
{id:1, descripcion:"teclado", precio: 0},
{id:2, descripcion:"teclado", precio: 0},
{id:3, descripcion:"teclado", precio: 0},
{id:4, descripcion:"teclado", precio: 0},
{id:5, descripcion:"teclado", precio: 0},
{id:6, descripcion:"teclado", precio: 0},

{id:7, descripcion:"teclado", precio: 0},
{id:8, descripcion:"teclado", precio: 0},
{id:9, descripcion:"teclado", precio: 0},
{id:10, descripcion:"teclado", precio: 0},
{id:11, descripcion:"teclado", precio: 0},
{id:12, descripcion:"teclado", precio: 0},
{id:13, descripcion:"teclado", precio: 0},
{id:14, descripcion:"teclado", precio: 0},
{id:15, descripcion:"teclado", precio: 0},
{id:16, descripcion:"teclado", precio: 0},
{id:17, descripcion:"teclado", precio: 0},
{id:18, descripcion:"teclado", precio: 0},
{id:19, descripcion:"teclado", precio: 0},
{id:20, descripcion:"teclado", precio: 0},
{id:21, descripcion:"teclado", precio: 0},
{id:22, descripcion:"teclado", precio: 0}]


for(const accesorio of accesorios){
    switch (accesorio.id){
     case 1:
        let contenedor1 = document.createElement("div");
        contenedor1.classList.add("cards");
        contenedor1.innerHTML=`
            <img src="./images/teclados/teclado-gamer-razer-cynosa-lite-mouse-abyssus-lite.jpg" alt="teclado 1"><h3> ID: ${accesorio.id}</h3>
            <p>  Accesorio: ${accesorio.descripcion="Teclado Gamer Razer"}</p>
            <b> $ ${accesorio.precio=3200}</b>
            <button class="button-add" onclick="add('Teclado Gamer Razer', 3200)">Agregar</button>`
            document.body.appendChild(contenedor1);
            break;  
     case 2:
        
        let contenedor2 = document.createElement("div");
        contenedor2.classList.add("cards");
        contenedor2.innerHTML=`
            <img src="./images/teclados/teclado-gamer-razer-huntsman-mini-clicky-morado.jpg" alt="teclado 2">
            <h3> ID: ${accesorio.id}</h3>
            <p>  Accesorio: ${accesorio.descripcion="Teclado Gamer Razer Huntsman"}</p>
            <b> $ ${accesorio.precio=4100}</b>
            <button class="button-add" onclick="add('Teclado Gamer Razer Huntsman', 4100)">Agregar</button>`;
            document.body.appendChild(contenedor2);
            break;
     case 3:
        let contenedor3 = document.createElement("div");
        contenedor3.classList.add("cards");
        contenedor3.innerHTML=`
        <img src="./images/teclados/teclado-gamer-razer-huntsman-mini-mercury.jpg" alt="teclado 3">
            <h3> ID: ${accesorio.id}</h3>
            <p>  Accesorio: ${accesorio.descripcion="Teclado Razer white"}</p>
            <b> $ ${accesorio.precio=3200}</b>
            <button class="button-add" onclick="add('Teclado Razer white', 3200)">Agregar</button>`;
            document.body.appendChild(contenedor3);
            break;
     case 4: 
            let contenedor4 = document.createElement("div");
            contenedor4.classList.add("cards");
        contenedor4.innerHTML=`
        <img src="./images/Mouse/gaming-mouse-g201bs-usb-6400dpi-rgb-philips-spk9201bs.jpg" alt="teclado 4"></img>
            <h3> ID: ${accesorio.id}</h3>
            <p>  Accesorio: ${accesorio.descripcion="Mouse Gaming Philips RGB"}</p>
            <b> $ ${accesorio.precio=4600}</b>
            <button class="button-add" onclick="add('Mouse Gaming Philips RGB', 4600)">Agregar</button>`;
            document.body.appendChild(contenedor4);
            break;
     case 5: 
            let contenedor5 = document.createElement("div");
            contenedor5.classList.add("cards");
        contenedor5.innerHTML=`
            <img src="./images/Mouse/mouse-fnatic-flick-2-pixart-3360-rgb-switch-omron-d2fc-f-7n-1200cpi-ambidiestro-black-.jpg" alt="teclado 5">
            <h3> ID: ${accesorio.id}</h3>
            <p>  Accesorio: ${accesorio.descripcion="Mouse Fnatic Gamer"}</p>
            <b> $ ${accesorio.precio=6800}</b>
            <button class="button-add" onclick="add('Mouse Fnatic Gamer', 6800)">Agregar</button>`;
            document.body.appendChild(contenedor5);
            break;
     case 6: 
            let contenedor6 = document.createElement("div");
            contenedor6.classList.add("cards");
        contenedor6.innerHTML=`
        <img src="./images/auris/auriculares-gamer-alpha-a9000-play-microfono-luz-rgb-cancelacion-sonido.jpg" alt="teclado 6"></img>
            <h3> ID: ${accesorio.id}</h3>
            <p>  Accesorio: ${accesorio.descripcion="Auriculares Alpha play"}</p>
            <b> $ ${accesorio.precio=1900}</b>
            <button class="button-add" onclick="add('Auriculares Alpha play', 1900)">Agregar</button>`;
            document.body.appendChild(contenedor6);
            break;
     case 7: 
            let contenedor7 = document.createElement("div");
            contenedor7.classList.add("cards");
            contenedor7.innerHTML=`
            <img src="./images/auris/auriculares-in-ear-inalambricos-aiwa-ata-106n.jpg" alt="teclado 7"></img>
            <h3> ID: ${accesorio.id}</h3>
            <p>  Accesorio: ${accesorio.descripcion="Auriculares In Ear Aiwa"}</p>
            <b> $ ${accesorio.precio=5100}</b>
            <button class="button-add" onclick="add('Auriculares In Ear Aiwa', 5100)">Agregar</button>`;
            document.body.appendChild(contenedor7);
            break;
                       
        }   
         
        }   
    
    








     
    