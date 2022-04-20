// Pintar los productos
const DOMitems = document.querySelector('#ropa-categoria');
// filtro

const productosChaquetas = productosTotal.filter(producto => producto.categoria === "chaquetas");

console.log("filtro?", productosChaquetas);

// puente al forEach de los productos
let tiendaProductos = productosChaquetas;

function inicio() {
    // Inicio
    cargarCarritoDeLocalStorage();
    ordenarASC();
    mostrarProductosColeccion();
    mostrarCarrito();

}

