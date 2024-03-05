let inicio = prompt("Nombre y Apellido");
let primerParcial = prompt("Ingresar nota");
let segundoParcial = prompt("Ingresar Nota");
let recuperatorio = prompt("Ingrese Nota");

console.log(inicio);

let resultado = 1;
function sumar(primerParcial, segundoParcial, recuperatorio) {
  resultado = primerParcial + segundoParcial + recuperatorio;
}

sumar();
console.log("Su nota es" + notaFinal);

function calculoNota() {
  let notaFinal = (primerParcial + segundoParcial + recuperatorio) / 2;
  return notaFinal;
}

if (resultado > 10) {
  console.log("Aprobado");
} else if (resultado < 6) {
  console.log("Vas a recuperatorio");
} else if (resultado < 4) {
  console.log("Desaprobado");
} else {
  console.log("Aprobado");
}
