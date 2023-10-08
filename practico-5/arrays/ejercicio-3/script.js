const numeros = [];

document
  .querySelector("#btnIngresar")
  .addEventListener("click", ingresarNumero);
document
  .querySelector("#btnCalcularPromedio")
  .addEventListener("click", calcularPromedio);

function ingresarNumero() {
  const numero = document.querySelector("#txtNumero").value;

  numeros.push(Number(numero));
}

function calcularPromedio() {
  let suma = 0;

  for (let i = 0; i < numeros.length; i++) {
    suma += numeros[i];
  }

  document.querySelector("#pMostrar").innerHTML = `El promedio es: ${
    Math.round((suma / numeros.length) * 100) / 100
  }`;
}
