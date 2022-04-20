// Pintar los productos
const DOMitems = document.querySelector('#ropa-categoria');
// filtro
const productosPantalones = productosTotal.filter(producto => producto.categoria === "pantalones");

console.log("filtro?", productosPantalones);

// puente al forEach de los productos
const tiendaProductos = productosPantalones;

function inicio() {
    // Inicio
    cargarCarritoDeLocalStorage();
    ordenarASC();
    mostrarProductosColeccion();
    mostrarCarrito();
}

