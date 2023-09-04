document.querySelector("button").addEventListener("click", calcular);

function calcular() {
  const valor1 = document.querySelector("#valor1").value;
  const valor2 = document.querySelector("#valor2").value;
  let resultado = 0;

  if (valor1 < valor2) {
    resultado = valor2 - valor1;
  } else {
    resultado = valor1 - valor2;
  }

  document.querySelector("p").innerHTML = `Resultado = ${resultado}`;
}
