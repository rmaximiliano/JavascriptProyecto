let nombreUsuario = prompt("Bienvenido, Cual es su nombre")
console.log("Bienvenido " + nombreUsuario )

const valorDolar = 310;

let montoIngresado = prompt("ingrese el monto a comprar dolares (el precio es " + valorDolar +")")

/*Number cambia el valor de pront que es en string a number*/
let totalDolares = Number(montoIngresado) / valorDolar;

/* perseFloat y toFixed(2) esta seteando 2 decimales */
alert("Usted a comprado " + parseFloat(totalDolares).toFixed(2) + " dolares americanos.");
console.log( "Usted a Comprado " + parseFloat (totalDolares).toFixed(2) + " Dolares.")

alert(nombreUsuario + " Gracias por usar nuestro servicio");
console.log( nombreUsuario +" Gracias por usar nuestro servicio")
