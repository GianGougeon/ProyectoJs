function inicio() {
    setTimeout(function () {
        // Pintar los productos
        globalThis.DOMitems = document.querySelector('#ropa-categoria');
        // filtro
        const productosPantalones = productosTotal.filter(producto => producto.categoria === "pantalones");
        // puente al forEach de los productos
        globalThis.tiendaProductos = productosPantalones;
        // Inicio
        cargarCarritoDeLocalStorage();
        ordenarASC();
        mostrarProductosColeccion();
        mostrarCarrito();
    }, 2500);
}