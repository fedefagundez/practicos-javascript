document.querySelector("button").addEventListener("click", () => {
  const valor1 = Number(document.querySelector("#valor1").value);
  const valor2 = Number(document.querySelector("#valor2").value);

  document.querySelector("#suma").innerHTML = `La suma es: ${valor1 + valor2}`;
  document.querySelector("#producto").innerHTML = `El producto es: ${
    valor1 * valor2
  }`;
});
