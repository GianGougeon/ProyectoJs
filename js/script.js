// Carrito
inicio();


function inicio() {

    bienvenida();
    productosFuncion();
}

function bienvenida() {

    let nombre = "Rocardo";
    //Get Element By Id
    const myTitle = document.getElementById("content-j");
    myTitle.innerHTML = `<span>Bienvenido ${nombre}, al carrito de compras:</span>`;
    // Lista de productos carrito
    const contenedores = document.getElementById("listas");
    contenedores.innerHTML = `<br><p>Productos disponibles:</p>`;
}
function productosFuncion() {
    const categorias = document.getElementById("categorias");
    productos.forEach((element) => {
        categorias.innerHTML += `
        <p>
        
        ${element.nombre}
        
        </p>`;

    });
}