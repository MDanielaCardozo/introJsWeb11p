// Escribe un programa que pida una frase y escriba las vocales que aparecen
// Nota: Tener en cuenta la función length y substring o charAt (developer mozilla)

const frase = prompt("Ingresa una frase").toLowerCase();

const pantalla = document.getElementById("pantalla");

pantalla.innerHTML = `vocales de la palabra ${frase}: <br>`;

console.log(frase);
console.log(frase.length);
console.log(frase.toUpperCase());

for (let caracter = 0; caracter < frase.length; caracter++) {
  if (
    frase.charAt(caracter) === "a" ||
    frase.charAt(caracter) === "e" ||
    frase.charAt(caracter) === "i" ||
    frase.charAt(caracter) === "o" ||
    frase.charAt(caracter) === "u" 
  ) {
    pantalla.innerHTML += frase.charAt(caracter)
  }
}
