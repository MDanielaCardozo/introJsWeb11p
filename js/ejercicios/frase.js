// Escribe un programa que pida una frase y escriba las vocales que aparecen
// Nota: Tener en cuenta la función length y substring o charAt (developer mozilla)

/* const prueba = "hola"

console.log(prueba);
console.log(prueba.length);
console.log(prueba.substring(0,4));
console.log(prueba.charAt(1)); */

const frase = prompt("Ingrese una frase de hasta 4 caracteres").toLowerCase();

const pantalla = document.getElementById("pantalla");

pantalla.innerHTML = `vocales de la palabra ${frase} <br>`;

console.log(frase.length);

if (frase.length <= 4) {
  if (
    frase.charAt(0) === "a" ||
    frase.charAt(0) === "e" ||
    frase.charAt(0) === "i" ||
    frase.charAt(0) === "o" ||
    frase.charAt(0) === "u" 
  ) {
    pantalla.innerHTML += frase.charAt(0)
  }

  if (
    frase.charAt(1) === "a" ||
    frase.charAt(1) === "e" ||
    frase.charAt(1) === "i" ||
    frase.charAt(1) === "o" ||
    frase.charAt(1) === "u" 
  ) {
    pantalla.innerHTML += frase.charAt(1)
  }

  if (
    frase.charAt(2) === "a" ||
    frase.charAt(2) === "e" ||
    frase.charAt(2) === "i" ||
    frase.charAt(2) === "o" ||
    frase.charAt(2) === "u" 
  ) {
    pantalla.innerHTML += frase.charAt(2)
  }

  if (
    frase.charAt(3) === "a" ||
    frase.charAt(3) === "e" ||
    frase.charAt(3) === "i" ||
    frase.charAt(3) === "o" ||
    frase.charAt(3) === "u" 
  ) {
    pantalla.innerHTML += frase.charAt(3)
  }
  
  if (
    frase.charAt(4) === "a" ||
    frase.charAt(4) === "e" ||
    frase.charAt(4) === "i" ||
    frase.charAt(4) === "o" ||
    frase.charAt(4) === "u" 
  ) {
    pantalla.innerHTML += frase.charAt(4)
  }
} else {
    alert("Ingresaste una palabra mas larga de la solicitada")
}
