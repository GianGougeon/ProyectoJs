const productos = [
    // Camisetas
    {id:1, categoria: "camisetas", marca: "The North Face", nombre: "SIMPLE DOME TEE - Camiseta estampada", precio: "24,95", agregarAlCarrito: false},
    {id:2, categoria: "camisetas", marca: "The North Face", nombre: "SIMPLE DOME TEE - Camiseta estampada negra", precio: "24,95", agregarAlCarrito: false},
    {id:3, categoria: "camisetas", marca: "YOURTURN", nombre: "UNISEX - Camiseta estampada", precio: "14,99", agregarAlCarrito: false},
	{id:4, categoria: "camisetas", marca: "Ellesse", nombre: "VOODOO - Camiseta estampada blanca", precio: "14,99", agregarAlCarrito: false},
	{id:5, categoria: "camisetas", marca: "Ellesse", nombre: "UNISEX - Camiseta estampada negra", precio: "14,99", agregarAlCarrito: false},
	{id:6, categoria: "camisetas", marca: "YOURTURN", nombre: "UNISEX - Camiseta estampada blanca", precio: "14,99", agregarAlCarrito: false},
	// Chaquetas
	{id:7, categoria: "chaquetas", marca: "The North Face", nombre: "GOSEI PUFFER JACKET - Chaqueta de entretiempo", precio: "119,95", agregarAlCarrito: false}, 
	{id:8, categoria: "chaquetas", marca: "CHASIN", nombre: "Chaqueta de entretiempo", precio: "149,95", agregarAlCarrito: false}, 
	{id:9, categoria: "chaquetas", marca: "Karl Kani", nombre: "RETRO BLOCK PUFFER JACKET UNISEX - Chaqueta de invierno", precio: "119,95", agregarAlCarrito: false}, 
	{id:10, categoria: "chaquetas", marca: "Ellesse", nombre: "LOMBARDY - Chaqueta de entretiempo", precio: "79,95", agregarAlCarrito: false}, 
	{id:11, categoria: "chaquetas", marca: "EA7 Emporio Armani", nombre: "Chaqueta de plumas", precio: "174,95", agregarAlCarrito: false}, 
	{id:12, categoria: "chaquetas", marca: "Brave Soul", nombre: "MIGUEL - Chaqueta de entretiempo", precio: "49,95", agregarAlCarrito: false}, 
	// Pantalones
	{id:13, categoria: "pantalones", marca: "Nike Sportswear", nombre: "CLUB - Pantalones deportivos negro", precio: "44,95", agregarAlCarrito: false}, 
	{id:14, categoria: "pantalones", marca: "Nike Sportswear", nombre: "CLUB - Pantalones deportivos gris", precio: "49,95", agregarAlCarrito: false}, 
	{id:15, categoria: "pantalones", marca: "Only & Sons", nombre: "ONSCAM STAGE CUFF - Pantalones cargo", precio: "34,99", agregarAlCarrito: false}, 
	{id:16, categoria: "pantalones", marca: "Ellesse", nombre: "OSTERIA - Pantalones deportivos", precio: "49,95", agregarAlCarrito: false}, 
	{id:17, categoria: "pantalones", marca: "G-Star", nombre: "ROVIC ZIP TAPERED - Pantalones cargo", precio: "99,95", agregarAlCarrito: false}, 
	{id:18, categoria: "pantalones", marca: "Pier One", nombre: "Pantalones deportivos", precio: "27,99", agregarAlCarrito: false}, 
]
// Clonar
let productosNuevo = productos.map((element) => {

	return {
		id: element.id,
		categoria: element.categoria,
		marca: element.marca,
		nombre: element.nombre,
		precio: element.precio,
	}
});