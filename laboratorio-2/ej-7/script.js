document.querySelector("#sumar").addEventListener("click", () => {
  const valor1 = Number(document.querySelector("#valor1").value);
  const valor2 = Number(document.querySelector("#valor2").value);

  document.querySelector("p").innerHTML = `La suma es ${valor1 + valor2}`;
});

document.querySelector("#restar").addEventListener("click", () => {
  const valor1 = Number(document.querySelector("#valor1").value);
  const valor2 = Number(document.querySelector("#valor2").value);

  document.querySelector("p").innerHTML = `La resta es ${valor1 - valor2}`;
});

document.querySelector("#multiplicar").addEventListener("click", () => {
  const valor1 = Number(document.querySelector("#valor1").value);
  const valor2 = Number(document.querySelector("#valor2").value);

  document.querySelector("p").innerHTML = `La multiplicación es ${
    valor1 * valor2
  }`;
});

document.querySelector("#dividir").addEventListener("click", () => {
  const valor1 = Number(document.querySelector("#valor1").value);
  const valor2 = Number(document.querySelector("#valor2").value);

  document.querySelector("p").innerHTML = `La división es ${valor1 / valor2}`;
});

document.querySelector("#modulo").addEventListener("click", () => {
  const valor1 = Number(document.querySelector("#valor1").value);
  const valor2 = Number(document.querySelector("#valor2").value);

  document.querySelector("p").innerHTML = `El resto de la división es ${
    valor1 % valor2
  }`;
});
