function inicio() {
    setTimeout(function () {
        // Pintar los productos
        globalThis.DOMitems = document.querySelector('#ropa-categoria-nuevo');
        // Recientes
        arrayRecientes = productosTotal.slice(-6);
        if (productosTotal.length < 7) {
            arrayRecientes.shift();
        }
        // puente al forEach de los productos
        globalThis.productosRecientes = arrayRecientes;
        // Inicio
        cargarCarritoDeLocalStorage();
        mostrarProductosNuevo();
        mostrarCarrito()
    }, 2500);
}