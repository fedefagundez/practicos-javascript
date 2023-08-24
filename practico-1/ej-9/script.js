document.querySelector("button").addEventListener("click", () => {
  const valor1 = Number(document.querySelector("#valor1").value);
  const valor2 = Number(document.querySelector("#valor2").value);
  const valor3 = Number(document.querySelector("#valor3").value);
  const calculo = Math.pow(valor1, 2) - (valor2 + valor3);
  document.querySelector(
    "p"
  ).innerHTML = `El cuadrado del valor 1, menos la suma del valor 2 y valor 3 es: ${calculo}`;
});
