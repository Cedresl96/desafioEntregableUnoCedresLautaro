alert("Bienvenido a su simulador de prestamos Eunoia");
let nombre = prompt("Ingresa su nombre");
if (nombre != "") 
  for (let i = 10; i > 0; i--) {
    let numero = 11 - i;
    let quedan = i - 1;
    alert(nombre + " Tiene el numero " + numero);
    alert("Quedan " + quedan + " numeros");
  }
function calculoIntereses(dinero, cantidadCuotas, intereses) {
  cuotaInteres = (dinero / cantidadCuotas) * intereses;
}
let dinero = parseInt(prompt("¿Cuanto dinero desea Pedir?"));
let cantidadCuotas = parseInt(
  prompt("¿En cuatas cuotas dese pagar su prestamo? ")
);
let sueldo = parseInt(prompt("¿Cual es el salario que usted percive?"));
if (cantidadCuotas < 7 && sueldo > dinero / 12) {
  let intereses = 11/10;
  calculoIntereses(dinero, cantidadCuotas, intereses);
  alert(
    "Se le otorgo el prestamo de " +
      dinero +
      " en " +
      cantidadCuotas +
      " cuotas de " +
      cuotaInteres
  );
} else if (cantidadCuotas > 6 && cantidadCuotas < 13 && sueldo > dinero / 12) {
  let intereses = 5/4;
  calculoIntereses(dinero, cantidadCuotas, intereses);
  alert(
    "Se le otorgo el prestamo de " +
      dinero +
      " en " +
      cantidadCuotas +
      " cuotas de " +
      cuotaInteres
  );
} else if (cantidadCuotas > 12 && cantidadCuotas < 25 && sueldo > dinero / 12) {
  let intereses = 4/3;
  calculoIntereses(dinero, cantidadCuotas, intereses);
  alert(
    "Se le otorgo el prestamo de " +
      dinero +
      " en " +
      cantidadCuotas+
      " cuotas de " +
      cuotaInteres
  );
} else {
  alert("No es apto para recibir un prestamo Eunoia");
}
