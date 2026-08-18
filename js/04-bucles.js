// while, do-while, for

/* while (condicion logica) {
    todas las lineas de codigo que quiero repetir varias veces 
    agregamos una linea de codigo que tienda a que la condicion logica no se cumpla 
} */

  /*   do {
        todas las lineas de codigo que quiero repetir varias veces 
    agregamos una linea de codigo que tienda a que la condicion logica no se cumpla
    } while (condition logica); */

    const pantalla = document.getElementById("pantalla")

    let contador = 1;

    while (contador <= 50) {
        pantalla.innerHTML += `<p>Fila ${contador}</p>`
        //contador = contador + 1
        contador++
    }