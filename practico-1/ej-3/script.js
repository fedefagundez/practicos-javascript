document.querySelector("button").addEventListener("click", () => {
  const valor1 = document.querySelector("#valor1").value;
  const valor2 = document.querySelector("#valor2").value;
  const valor3 = document.querySelector("#valor3").value;
  const suma = Number(valor1) + Number(valor2) + Number(valor3);
  document.querySelector("p").innerHTML = `La suma es: ${suma}`;
});
