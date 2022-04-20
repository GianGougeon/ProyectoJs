// Carrito



// variables
let carrito = [];
const divisa = '$';
const DOMitems = document.querySelector('#ropa-categoria-nuevo');
const DOMcarrito = document.querySelector('#carrito');
const DOMtotal = document.querySelector('#total');
const DOMbotonVaciar = document.querySelector('#boton-vaciar');
const miLocalStorage = window.localStorage;



////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////// Funciones /////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////


//////////////////////////////////////////////////////////////////////////////////////


function mostrarProductos() {
    productosNuevo.forEach((element) => {
        // Estructura
        let miNodo = document.createElement('div');
        miNodo.classList.add('t8a');
        miNodo.innerHTML = `
            <!-- Elemento -->
            
                            <div>
                                <article class="t9a">
                                    <div>
                                        <div class="t10a">
                                            <div class="t11a txt-imag-div img-j">
                                                
                                            </div>
                                        </div>
                                    </div>
                                    <!-- Botones -->
                                    <div class="boton-compra-carrito-javascript">
                                       
                                    </div>
                                    <!-- Nombre/Precio/Marca -->
                                    <div class="t12b-c t12b-c-javascript">
                                        

                                    </div>
                                </article>
                            </div>
            `;

        /////////////////////// Imagen ///////////////////////

        miNodo.querySelector('.img-j').innerHTML = `
            <img class = "t12a"
            src = "${element.img}"
            alt = "${element.imgAlt}">
            sizes = "(min-width: 768px) 288px, calc(50vw - 36px)"
            width = "300"
            height = "433">`;


        ///////////////////////// Titulo/Nombre ////////////////////////
        //////////////////////////// Precio ////////////////////////////
        ///////////////////////// Marca <Nuevo> ////////////////////////

        miNodo.querySelector('.t12b-c-javascript').innerHTML = `
            <!-- Titulo/Nombre -->
            <span class="t12c-c t12c-c-style2">${element.nombre}</span>
            <!-- Precio -->
            <span class="t12c-c t12c-c-style3">${element.precio}${divisa}</span>
            <!-- Logo -->
            <span class="logo-sec-nuevo txt-imag-txt-n"> Nuevo </span>`;


        /////////////////////// Botones //////////////////////
        miNodo.querySelector('.boton-compra-carrito-javascript').innerHTML = `
            <!-- Comprar -->
            <button class="button-tienda">Comprar</button>
            <!-- Añadir al carrito -->
            <button class="button-tienda-2">Añadir al carrito</button>`
        // Agregar Id a los botones
        miNodo.querySelector('.button-tienda-2').setAttribute('NodoMarcador', element.id);
        // Evento agregar al carrito
        miNodo.querySelector('.button-tienda-2').addEventListener('click', agregarProductoAlCarrito);

        //Agrega un nuevo nodo al final
        DOMitems.appendChild(miNodo);



    });
};





// Evento para añadir un producto al carrito

function agregarProductoAlCarrito(evento) {
    // Agrega el Nodo al carrito
    carrito.push(evento.target.getAttribute('NodoMarcador'))

    // Actualiza el LocalStorage
    guardarCarritoEnLocalStorage();
    // Actualiza el carrito 
    mostrarCarrito();



}


// Productos guardados en el carrito

function mostrarCarrito() {
    // Vacia 
    DOMcarrito.textContent = '';
    // Array sin duplicados
    // Utiliza la propagación para crear un array con los contenidos de un set
    let carritoSinDuplicados = [...new Set(carrito)];

    console.log("carritoSinDuplicados", carritoSinDuplicados);

    // Genera los Nodos a partir de carrito
    carritoSinDuplicados.forEach((item) => {
        console.log("carritoSinDuplicados foreach", carritoSinDuplicados);
        // Obtencion del item que se necesita de la variable base de datos
        const miItem = productosNuevo.filter((itemBaseDatos) => {
            // ¿Coincide las id? Solo puede existir un caso
            return itemBaseDatos.id === parseInt(item);
        });
        // Cuenta el numero de veces que se repite el producto
        const numeroUnidadesItem = carrito.reduce((total, itemId) => {
            // Si son iguales las id se incrementa el contador, sino se mantiene
            return itemId === item ? total += 1 : total;
        }, 0);
        // Crea el nodo del item del carrito
        const miNodo = document.createElement('li');
        miNodo.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center');
        miNodo.innerHTML = `
            <div style="padding: 0 3%;" class="d-flex">
                ${numeroUnidadesItem} x 
            </div>
            <div>
                <img src="${miItem[0].img}" width="auto" height="61px" style="padding: 0 2%">
            </div>
            <div style="padding: 0 4%">
                ${miItem[0].nombre}
            </div> 
            <div>
                ${miItem[0].precio}${divisa}
            </div>`;


        // Boton de borrar
        const miBotonDiv = document.createElement('li');
        miBotonDiv.classList.add('d-flex');
        const miBoton = document.createElement('button');
        miBoton.classList.add('btn', 'btn-carrito-style', 'mx-5');
        // interior del boton
        miBoton.textContent = 'x';
        miBoton.dataset.item = item;
        miBoton.addEventListener('click', borrarItemCarrito);

        // Nodos
        miNodo.appendChild(miBotonDiv);
        miBotonDiv.appendChild(miBoton);
        DOMcarrito.appendChild(miNodo);

    });
    // Precio total
    DOMtotal.textContent = calcularTotal();
    // Actualiza el Numeros, de productos en el carrito
    iconoCarrito();


}





// Evento para borrar un elemento del carrito

function borrarItemCarrito(evento) {
    // Obtiene el producto ID que hay en el boton pulsado
    const id = evento.target.dataset.item;
    // Borra todos los productos
    carrito = carrito.filter((carritoId) => {
        return carritoId !== id;
    });

    // de nuevo a Renderizar
    mostrarCarrito();
    // Actualiza el LocalStorage
    guardarCarritoEnLocalStorage();

}


// Calcula el precio total de los productos repetidos

function calcularTotal() {
    // Recorre el array del carrito 
    return carrito.reduce((total, item) => {
        // De cada elemento su precio
        let miItem = productosNuevo.filter((itemBaseDatos) => {
            return itemBaseDatos.id === parseInt(item);
        });
        // Suma total
        return total + miItem[0].precio;
        //toFixed (2) devuelve valor en centecimos
    }, 0).toFixed(2);
}


// Vacia el carrito y vuelve a pintar

function vaciarCarrito() {
    // Array con productos
    // Limpia los productos guardados
    carrito = [];
    // muestra los cambios
    mostrarCarrito();
    // Borra en LocalStorage
    localStorage.clear();

}
// guardar en LocalStorage
function guardarCarritoEnLocalStorage() {
    miLocalStorage.setItem('carrito', JSON.stringify(carrito));

}
// Cargar de LocalStorage
function cargarCarritoDeLocalStorage() {
    // Chequea si existe un carrito en el localStorage
    
    if (miLocalStorage.getItem('carrito') !== null) {
        // Carga la info
        carrito = JSON.parse(miLocalStorage.getItem('carrito'));
    }
}

// Eventos
DOMbotonVaciar.addEventListener('click', vaciarCarrito);

// Muestra numero de productos en el carrito
function iconoCarrito() {
    // selecciona la etiqueta numero en el html
    const numeroAlerta = document.querySelector('#numero-alerta');
    numeroAlerta.textContent = carrito.length;
    // Oculta el numero si es 0
    carrito.length === 0 ? numeroAlerta.style.visibility = 'hidden' : numeroAlerta.style.visibility = 'visible';


    // if (carrito.length === 0) {
    //     numeroAlerta.style.visibility = 'hidden';
    // } else {
    //     numeroAlerta.style.visibility = '';
    // }
}

function inicio() {
    // Inicio
    cargarCarritoDeLocalStorage();
    mostrarProductos();
    mostrarCarrito();

}