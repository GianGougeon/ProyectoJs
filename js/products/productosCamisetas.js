// Pintar los productos
const DOMitems = document.querySelector('#ropa-categoria');
// filtro

const productosCamisetas = productosTotal.filter(producto => producto.categoria === "camisetas");

console.log("filtro?", productosCamisetas);

// puente al forEach de los productos
const tiendaProductos = productosCamisetas;

function inicio() {
    // Inicio
    cargarCarritoDeLocalStorage();
    ordenarASC();
    mostrarProductosColeccion();
    mostrarCarrito();

}

