
console.log("Hola");

function saludar(nombre){    
    // let soyVisible = true
    // console.log(soyVisible);
   return "Hola, " + nombre;
}

console.log(saludar("Pepito"));
console.log(saludar("Pepita"));
console.log(saludar("P"));
console.log(saludar("Pep"));
console.log(saludar("ito"));
console.log(saludar("to"));

//console.log(soyVisible);


let carrito = [];
let productos = ["Cascos", "Guantes", "Linterna","Papitas"]

function agregarProductoCarrito(producto){
    if(productos.includes(producto)){
        carrito.push(producto);
        console.log(`${producto} añadido`);
    } else {
        console.log(`${producto} no está disponible`);
    }
}

agregarProductoCarrito("Linterna");
agregarProductoCarrito("Guantes");
agregarProductoCarrito("Pan");

console.log("Carrito actual: ", carrito);

