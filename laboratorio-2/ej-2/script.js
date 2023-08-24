document.querySelector("button").addEventListener("click", () => {
  const valor1 = Number(document.querySelector("#valor1").value);
  const valor2 = Number(document.querySelector("#valor2").value);

  document.querySelector("p").innerHTML = `La suma es ${valor1 + valor2}`;
});
