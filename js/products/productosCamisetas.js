function inicio() {
    setTimeout(function () {
        // Pintar los productos
        globalThis.DOMitems = document.querySelector('#ropa-categoria');
        // filtro
        const productosCamisetas = productosTotal.filter(producto => producto.categoria === "camisetas");
        // puente al forEach de los productos
        globalThis.tiendaProductos = productosCamisetas;
        // Inicio
        cargarCarritoDeLocalStorage();
        ordenarASC();
        mostrarProductosColeccion();
        mostrarCarrito();
    }, dLay);
}