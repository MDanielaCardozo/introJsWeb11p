//saludar()

/* function saludar() {
    const pantalla = document.getElementById('pantalla');
    pantalla.innerHTML += 'Hola mundo 🌎'
} */

/* function  saludarPersona(persona, edad=20) {
    const pantalla = document.getElementById('pantalla');
    pantalla.innerHTML += `<p>Hola ${persona}`
    console.log("Edad " + edad);
}

saludarPersona("Hector", 23) */

/* function saludoConDefault(nombre = "Invitado") {
    console.log("Hola, " + nombre + "!");
}

saludoConDefault("Facundo") */

//Funciones que nos retornan un valor
/* function aplicarDescuento(precio, descuento) {
    const precioFinal = precio - ((precio * descuento)/100)
    console.log(precioFinal);
    return precioFinal
}

aplicarDescuento(500, 10) */

/* const aplicarDescuento = function (precio, descuento) {
    const precioFinal = precio - ((precio * descuento)/100)
    console.log(precioFinal);
    return precioFinal
} */

const aplicarDescuento = (precio, descuento) => precio - ((precio * descuento)/100);

console.log(aplicarDescuento(500, 10));

