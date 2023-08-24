document.querySelector("button").addEventListener("click", () => {
  const valor1 = document.querySelector("#valor1").value;
  const valor2 = document.querySelector("#valor2").value;
  const resto = Number(valor1) % Number(valor2);
  document.querySelector(
    "p"
  ).innerHTML = `El resto de la división es: ${resto}`;
});
