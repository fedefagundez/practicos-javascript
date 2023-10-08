const numeros = [];

document
  .querySelector("#btnBotonIngresar")
  .addEventListener("click", ingresarNumero);

document
  .querySelector("#btnBotonMostrarMayor")
  .addEventListener("click", mostrarMayor);

function ingresarNumero() {
  const numero = Number(document.querySelector("#txtNumero").value);

  numeros.push(numero);
}

function mostrarMayor() {
  let mayor = numeros[0];

  for (let i = 0; i < numeros.length; i++) {
    if (mayor < numeros[i]) {
      mayor = numeros[i];
    }
  }

  document.querySelector(
    "#pMostrar"
  ).innerHTML = `El mayor número es: ${mayor}`;
}
