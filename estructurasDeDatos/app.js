//! Estructuras de datos

//& Arrays

let learners = ["Robinson", "Angie", "Hernan"];
let learners2 = ["Robinson", "Angie", "Hernan"];

console.log(learners[0]);
console.log(learners[1]);
console.log(learners[2]);
console.log(learners[3]);

console.log(learners.length);

//! añadir un elemento 
learners.push("Juanda");
console.log(learners);

//! borrar 
learners.pop();
console.log(learners);

//! Buscar un elemento 
console.log(learners.includes("Juanda"));


let carrito = [];
let productos = ["Cascos", "Guantes"]



//! Objetos

let estudiante = {
    "nombre": "Oscar",
    "telefono": 1233445,
    ciudad: "Bogota",
    estaActivo: true,
    hobbies: ["Programar", "Ver tv"]
}

console.log(estudiante.nombre);
console.log(estudiante["ciudad"]);

estudiante.telefono = 23443422;
estudiante.hobbies.push("Leer");
console.log(estudiante);

console.log(Object.keys(estudiante));
console.log(Object.values(estudiante));
