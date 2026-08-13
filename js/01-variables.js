//esto es un comentario de una linea

/* comentario multilinea */

let precioCompra;

let descuento;

let nombre;

let apellido = "Perez"

/* = operador de asignacion */
nombre = "Alejandro";

console.log("Hola mundo");

console.log(nombre);

nombre = "Mariano"

console.log("Bienvenido " + nombre + " porque lalala " + apellido);

console.log(`Bienvenido ${nombre} ${apellido}`); //template string

//Tipos de variable

let number = 3; //Variable mutable, respeta scope local y global

var name = "Juan"; //Variable mutable, no respeta scope. (no utilizar)

const lastName = "Basso"

console.log(lastName);

//const lastName = "Herrera"

console.log("Hola mundo");
console.info("Mensaje info");
console.warn("Mensaje advertencia");
console.error("Mensaje error");

//alert("Bienvenido")

//const nombreUsuario = prompt("Ingresa tu nombre")

//console.log(nombreUsuario);

//document.writeln(`Bienvenido ${nombreUsuario}`)

//let num1 = Number(prompt("Ingrese un numero"))

//console.log(num1);

let numUno = parseInt(prompt("Ingrese un numero"))

let numDos = parseInt(prompt("Ingrese otro numero"))

let suma;

suma = numUno + numDos;

document.writeln(`El valor de la suma de los numeros ingresados es: ${suma}`)


console.log(2 == "2"); //igualdad debil

console.log(2 === "2"); //igualdad estricta

