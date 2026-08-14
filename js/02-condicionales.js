//condicionales simples

/* if (condicion) {
    //codigo a ejecutar si se cumple la condicion
} */

    //condicional dobles

   /*  if (condition) {
        //codigo a ejecutar si se cumple la condicion
    } else {
        //codigo a ejecutar si no se cumple la condicion
    } */

        //Operador ternario

        //() ? {} : {}


   //Pedir al usuario que cargue su edad para evaluar si es mayor de 18 anios

/*    const edad = parseInt(prompt("Ingrese su edad"))

   console.log(edad);

   if (edad >= 18) {
     alert("Es obligatorio tu voto")
   } else {
    alert("Sos menor de edad, no puedes votar")
   }

(edad >= 18) ? document.writeln("Tu voto es obligatorio") : document.writeln("No puedes votar") */

//Operadores logicos (&& AND , || OR)

const esUsuarioAdmin = false;

const tieneAcceso = false;

if (esUsuarioAdmin && tieneAcceso) {
    console.log("Acceso total al panel de control");
} else if (esUsuarioAdmin || tieneAcceso) {
    console.log("Tienes acceso parcial al panel");
} else {
    console.log("Acceso denegado");
}
   

