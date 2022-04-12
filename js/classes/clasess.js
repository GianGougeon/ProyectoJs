class Carrito{
    constructor(productos){
        this.productos = productos;
    }
    agregarProductos(producto){
        this.productos.push(producto);
    }
}