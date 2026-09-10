//usuario
//propiedades -> nombre, apellido, password, email, dni, tel, CP
//metodos -> cambiarPassword(nuevoPassword), actualizarEmail(), inscribirCurso(), mostrarDatos()

const mostrarObjeto = () => {
    datosObjeto += '<h3> Recorremos todo el objeto'
    for (const clave in pelicula) {
        if (typeof pelicula[clave] !== 'function') {
            datosObjeto += `<p>${clave}: ${pelicula[clave]}</p>`
        }   
    }
    pantalla.innerHTML += datosObjeto
}

//notacion literal
const pelicula = {
    //propiedades (key/clave: value/valor)
    titulo: "super mario galaxy",
    duracion: "02:30",
    genero: "Aventura",
    actores: ["actor 1", "actor 2", "actor 3", "actor 4"],
    anioEstreno: 2026,
    //metodos
    reproducir: function (pfjsosk) {
        console.log(this);
        const texto = `<p class="lead"> Comenzo la reproduccion de la pelicula ${this.titulo}</p>`
        console.log("reproduciendo");
        return texto
    },
    stop: () => {
        console.log('Dentro de la funcion stop' , this);
        console.log("Se detuvo la peli");
        
    }
    
}

console.log(pelicula);
const pantalla = document.getElementById("pantalla");
pantalla.innerHTML += `<p>${pelicula.anioEstreno}</p>`

pantalla.innerHTML += pelicula.reproducir()

console.log(pelicula.stop);
console.log(this);

pantalla.innerHTML += `<p>Objeto pelicula</p>`;
pantalla.innerHTML += `<p>Titulo: ${pelicula.titulo}</p>`;
pantalla.innerHTML += `<p>Duracion: ${pelicula.duracion}</p>`;
pantalla.innerHTML += `<p>Anio: ${pelicula.anioEstreno}</p>`;

let datosObjeto = `<h3>Datos de la pelicula</h3>
<p> Nombre de la pelicula: ${pelicula.titulo} </p>`

pantalla.innerHTML += datosObjeto

//recorrer al objeto
mostrarObjeto()

pelicula.estado = true;

mostrarObjeto()

