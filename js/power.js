console.log("Hola Coders");
console.log("Mi nombre es Maximiliano");

let numero = 5;
let frase = "maxi";
let llave = true;

console.log(numero+numero);


/*declaracion*/
let apellido;
/*asignacion*/
apellido = "Rossi";
console.log(apellido);


/*modifico variable y muesto en consola*/
apellido = "rossi22222";
console.log(apellido);


/* Alerta se ejecuta por medio del navegador 
alert(apellido);
*/


/* todo lo que el pront setea es en string 
let nombreIngreso = prompt("Ingrese su nombre");
console.log("Hola " + nombreIngreso);
alert("Hola " + nombreIngreso);
*/

const valorDolar = 300;

let montoIngresado = prompt("ingrese el monto a comprar dolares (el precio es " + valorDolar +")")
/*Number cambia el valor de pront que es en string a number*/
let totalDolares = Number(montoIngresado) / valorDolar;
/* perseFloat y toFixed(2) esta seteando 2 decimales */
alert("Usted a comprado " + parseFloat(totalDolares).toFixed(2) + " dolares americanos.");
console.log( "Usted a Comprado " + parseFloat (totalDolares).toFixed(2) + " Dolares Americanos.")

