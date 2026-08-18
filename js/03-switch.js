// Cree un programa al estilo de un cajero automatico con las siguientes opciones:
// 1- consultar el saldo
// 2- ingresar dinero
// 3- extraer dinero

let saldo = 100000;

do{
const opcion = prompt(
  "Ingresa una opcion: 1-consultar el sado - 2-Ingresar dinero - 3-extraer dinero",
);

switch (opcion) {
  case "saldo":
  case "1":
  case 1:
    //aqui agrego todas las lineas de codigo que necesito para la opcion 1 
    alert(`Tu saldo es $ ${saldo}`)
    break;
  case "deposito":
  case "2":
  case 2:
    const deposito = parseFloat(prompt("Ingresa el monto que deseas depositar"));
    saldo = saldo + deposito;
    alert(`Ingresaste $ ${deposito}, tu saldo actual es $ ${saldo}`);
    break
  case "extraer":
  case "3":
  case 3:
         const extraccion = parseFloat(prompt("Ingresa el monto a extraer"));
         //verificar si el usuario puede extraer el monto solicitado
         if (extraccion <= saldo) {
            saldo = saldo - extraccion;
            alert(`Retiraste $${extraccion}, tu saldo actual es $${saldo}`)
         } else {
            alert("Fondos insuficientes")
         }   
         break
  default:
    alert("Ingresaste una opcion erronea")
    break;
} 
} while(confirm("Queres realizar otra operacion"));

//Ejemplo de lo que debemos evitar
/* if (opcion === 1) {
  alert("Consultar saldo");
} else if (opcion === 2) {
  alert("Aqui tenemos que ingresar dinero");
} else if (opcion === 3) {
  alert("Aqui tenemos que extraer dinero");
} else {
  alert("Ingresar una opcion valida");
} */
