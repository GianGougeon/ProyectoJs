function inicio() {
    // Pintar los productos
    globalThis.DOMitems = document.querySelector('#ropa-categoria');
    // filtro
    const productosChaquetas = productosTotal.filter(producto => producto.categoria === "chaquetas");
    // puente al forEach de los productos
    globalThis.tiendaProductos = productosChaquetas;
    // Inicio
    cargarCarritoDeLocalStorage();
    ordenarASC();
    mostrarProductosColeccion();
    mostrarCarrito();
}